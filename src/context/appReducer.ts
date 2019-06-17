import shortid from 'shortid'
import { AppState } from './appContextValue'

interface ActionAddList {
  type: 'addList'
  payload: {
    title: string
    boardId: string
  }
}

interface ActionAddCard {
  type: 'addCard'
  payload: {
    title: string
    listId: string
  }
}

export type AppAction = ActionAddList | ActionAddCard

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'addList': {
      const listId = shortid.generate()
      const boardId = action.payload.boardId
      return {
        ...state,
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              id: listId,
              title: action.payload.title,
              cards: [],
            },
          },
          allIds: [...state.lists.allIds, listId],
        },
        boards: {
          ...state.boards,
          byId: {
            ...state.boards.byId,
            [boardId]: {
              ...state.boards.byId[boardId],
              lists: [...state.boards.byId[boardId].lists, listId],
            },
          },
        },
      }
    }

    case 'addCard': {
      const cardId = shortid.generate()
      const listId = action.payload.listId

      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              id: cardId,
              title: action.payload.title,
              description: '',
            },
          },
          allIds: [...state.cards.allIds, cardId],
        },
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              ...state.lists.byId[listId],
              cards: [...state.lists.byId[listId].cards, cardId],
            },
          },
        },
      }
    }

    default: {
      //@ts-ignore
      throw new Error(`Unhandled action type: ${action.type}`)
    }
  }
}

export default appReducer
