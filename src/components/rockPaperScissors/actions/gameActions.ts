export enum GameAction {
  SELECT_ITEM = "@@game/SELECT_ITEM",
  DE_SELECT_ITEM = "@@game/DE_SELECT_ITEM",
  GET_LEADER_BOARD_LIST_REQUEST = "@@game/GET_LEADER_BOARD_LIST_REQUEST",
  GET_LEADER_BOARD_LIST_SUCCESS = "@@game/GET_LEADER_BOARD_LIST_SUCCESS",
  GET_LEADER_BOARD_LIST_ERROR = "@@game/GET_LEADER_BOARD_LIST_ERROR",
}

export type Action =
  | {
  type: GameAction.SELECT_ITEM;
  payload: { name: string };
}
  | { type: GameAction.DE_SELECT_ITEM }
  | { type: GameAction.GET_LEADER_BOARD_LIST_REQUEST }
  | {
  type: GameAction.GET_LEADER_BOARD_LIST_SUCCESS;
  payload: any[];
}
  | {
  type: GameAction.GET_LEADER_BOARD_LIST_ERROR;
  payload: any;
};

export function selectItem(payload: { name: string }): Action {
  return {type: GameAction.SELECT_ITEM, payload};
}

export function deSelectItem(): Action {
  return {type: GameAction.DE_SELECT_ITEM};
}

export function fetchLeaderBoardListRequest(): Action {
  return {type: GameAction.GET_LEADER_BOARD_LIST_REQUEST};
}

export function fetchLeaderBoardListSuccess(payload: any): Action {
  return {type: GameAction.GET_LEADER_BOARD_LIST_SUCCESS, payload};
}

export function fetchLeaderBoardListError(payload: any): Action {
  return {type: GameAction.GET_LEADER_BOARD_LIST_ERROR, payload};
}
