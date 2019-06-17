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

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'addList': {
      const listId = shortid.generate()
      const { boardId, title } = action.payload
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
              ...state.boards.byId[boardId],
              lists: [...state.boards.byId[boardId].lists, listId],
            },
          },
        },
      }
    }

    case 'updateListTitle': {
      const { listId, title } = action.payload
      return {
        ...state,
        lists: {
          ...state.lists,
          byId: {
            ...state.lists.byId,
            [listId]: {
              ...state.lists.byId[listId],
              title,
            },
          },
        },
      }
    }

    case 'addCard': {
      const cardId = shortid.generate()
      const { listId, title } = action.payload

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
              ...state.lists.byId[listId],
              cards: [...state.lists.byId[listId].cards, cardId],
            },
          },
        },
      }
    }

    case 'updateCardTitle': {
      const { cardId, title } = action.payload
      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              ...state.cards.byId[cardId],
              title,
            },
          },
        },
      }
    }

    case 'updateCardDescription': {
      const { cardId, description } = action.payload
      return {
        ...state,
        cards: {
          ...state.cards,
          byId: {
            ...state.cards.byId,
            [cardId]: {
              ...state.cards.byId[cardId],
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
