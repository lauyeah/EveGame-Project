import * as TYPES from "../Contant/ActionType";

export let actionOpenUpdateProfileModal = () => {
  return { type: TYPES.OPEN_UPDATE_PROFILE_MODAL };
};

export let actionCloseUpdateProfileModal = () => {
  return { type: TYPES.CLOSE_UPDATE_PROFILE_MODAL };
};
