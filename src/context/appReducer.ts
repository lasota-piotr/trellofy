import shortid from 'shortid'
import { AppState } from './appContextValue'

interface ActionAddList {
  type: 'addList'
  payload: {
    title: string
    boardId: string
  }
}

interface ActionUpdateListTitle {
  type: 'updateListTitle'
  payload: {
    title: string
    listId: string
  }
}

interface ActionAddCard {
  type: 'addCard'
  payload: {
    title: string
    listId: string
  }
}

interface ActionUpdateCardTitle {
  type: 'updateCardTitle'
  payload: {
    title: string
    cardId: string
  }
}

interface ActionUpdateCardDescription {
  type: 'updateCardDescription'
  payload: {
    description: string
    cardId: string
  }
}

interface ActionChangeShowModal {
  type: 'changeShowModal'
  payload: {
    show: boolean
    cardId: string
  }
}

export type AppAction =
  | ActionAddList
  | ActionUpdateListTitle
  | ActionAddCard
  | ActionUpdateCardTitle
  | ActionUpdateCardDescription
  | ActionChangeShowModal

// eslint-disable-next-line max-lines-per-function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'addList': {
      const listId = shortid.generate()
      const { boardId, title } = action.payload
      const board = state.boards.byId[boardId]
      if (!board) {
        throw new Error(`Cannot find board ${boardId}`)
      }
      return {
        ...state,
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              id: listId,
              title,
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
              ...board,
              lists: [...board.lists, listId],
            },
          },
        },
      }
    }

    case 'updateListTitle': {
      const { listId, title } = action.payload
      const list = state.lists.byId[listId]
      if (!list) {
        throw new Error(`Cannot find list ${listId}`)
      }
      return {
        ...state,
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              ...list,
              title,
            },
          },
        },
      }
    }

    case 'addCard': {
      const cardId = shortid.generate()
      const { listId, title } = action.payload

      const list = state.lists.byId[listId]
      if (!list) {
        throw new Error(`Cannot find list ${listId}`)
      }

      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              id: cardId,
              title,
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
              ...list,
              cards: [...list.cards, cardId],
            },
          },
        },
      }
    }

    case 'updateCardTitle': {
      const { cardId, title } = action.payload
      const card = state.cards.byId[cardId]
      if (!card) {
        throw new Error(`Cannot find list ${cardId}`)
      }
      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              ...card,
              title,
            },
          },
        },
      }
    }

    case 'updateCardDescription': {
      const { cardId, description } = action.payload
      const card = state.cards.byId[cardId]
      if (!card) {
        throw new Error(`Cannot find list ${cardId}`)
      }

      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              ...card,
              description,
            },
          },
        },
      }
    }

    case 'changeShowModal': {
      const { cardId, show } = action.payload
      return {
        ...state,
        ui: {
          ...state.ui,
          modalCard: {
            show,
            cardId,
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
