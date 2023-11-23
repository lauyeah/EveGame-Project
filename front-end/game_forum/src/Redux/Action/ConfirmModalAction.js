import * as TYPES from "../Contant/ActionType";

export let actionOpenConfirmModal = () => {
  return { type: TYPES.OPEN_CONFIRM_MODAL };
};

export let actionCloseConfirmModal = () => {
  return { type: TYPES.CLOSE_CONFIRM_MODAL };
};
