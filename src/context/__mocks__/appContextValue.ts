import { AppState } from '../appContextValue'

export const appContextDefaultValue: AppState = {
  boards: {
    byId: {
      board01: {
        id: 'board01',
        title: 'Board 01',
        lists: ['list01', 'list02'],
      },
      board02: {
        id: 'board02',
        title: 'Board 02',
        lists: [],
      },
    },
    allIds: ['board01', 'board02'],
  },
  lists: {
    byId: {
      list01: {
        id: 'list01',
        title: 'List 01', // cannot be empty, max length 30 characters
        cards: ['card01', 'card02'],
      },
      list02: {
        id: 'list02',
        title: 'List 02',
        cards: ['card03', 'card04'],
      },
    },
    allIds: ['list01', 'list02'],
  },
  cards: {
    byId: {
      card01: {
        id: 'card01',
        title: 'Card 01',
        description: 'This is card 01',
      },
      card02: {
        id: 'card02',
        title: 'Card 02',
        description: 'This is card 02',
      },
      card03: {
        id: 'card03',
        title: 'Card 03',
        description: 'This is card 03',
      },
      card04: {
        id: 'card04',
        title: 'Card 04',
        description: 'This is card 04',
      },
    },
    allIds: ['card01', 'card02', 'card03', 'card04'],

  },
  ui: {
    modalCard: {
      show: false,
      cardId: '',
    },
  },
}
