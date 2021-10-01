// actions
import { Action, GameAction } from "../actions/gameActions";
// types
import { GameItems } from "../types/game";
// utils
import sessionStorageService from "utils/sessionStorageService";
// constants
import {
  FUTILE,
  LIZARD,
  PAPER,
  ROCK,
  SCISSORS,
  SPOCK,
  YOU_LOSE,
  YOU_WON,
} from "constants/texts";

const SessionStorage = sessionStorageService.getService();

export interface State {
  currentItem: GameItems;
}

export const initialState: State = {
  currentItem: {
    selectedItem: false,
    userItemName: "",
    houseItemName: "",
    score: Number(SessionStorage.getScore()) || 0,
    resultText: "",
    winner: "",
  },
};

export const gameRules = {
  [SCISSORS]: [PAPER, LIZARD],
  [PAPER]: [ROCK, SPOCK],
  [ROCK]: [LIZARD, SCISSORS],
  [LIZARD]: [SPOCK, PAPER],
  [SPOCK]: [SCISSORS, ROCK],
};

export const setHouseItem = () => {
  const items = [ROCK, PAPER, LIZARD, SPOCK, SCISSORS];
  const houseNumber = Math.floor(Math.random() * 5);
  return items[houseNumber];
};

export const setResultText = (userItemName: string, houseItemName: string) => {
  if (userItemName === houseItemName) {
    return FUTILE;
  } else if (gameRules[userItemName].includes(houseItemName)) {
    return YOU_WON;
  } else {
    return YOU_LOSE;
  }
};

export const changeScore = (resultText: string) => {
  if (resultText === YOU_WON) {
    return +1;
  } else if (resultText === YOU_LOSE) {
    return -1;
  } else {
    return 0;
  }
};

export function reducer(state: State, action: Action) {
  switch (action.type) {
    case GameAction.SELECT_ITEM:
      const houseItemName = setHouseItem();
      const resultText = setResultText(action.payload.name, houseItemName);
      const score = state.currentItem.score + changeScore(resultText);

      SessionStorage.setScore(score);

      return {
        ...state,
        currentItem: {
          selectedItem: true,
          userItemName: action.payload.name,
          winner:
            resultText === YOU_WON
              ? "user"
              : resultText === YOU_LOSE
              ? "house"
              : "none",
          houseItemName,
          resultText,
          score,
        },
      };
    case GameAction.DE_SELECT_ITEM:
      return {
        ...state,
        currentItem: {
          ...state.currentItem,
          selectedItem: false,
        },
      };
    default: {
      return state;
    }
  }
}
