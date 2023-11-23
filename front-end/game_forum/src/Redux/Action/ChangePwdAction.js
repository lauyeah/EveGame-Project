import * as TYPES from "../Contant/ActionType";

export let actionOpenChangePwdModal = () => {
  return { type: TYPES.OPEN_CHANGE_PWD_MODAL };
};

export let actionCloseChangePwdModal = () => {
  return { type: TYPES.CLOSE_CHANGE_PWD_MODAL };
};
