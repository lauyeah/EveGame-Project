import { changePwd, createUser, updateUser } from "../../Api/UserApi";

export let actionCreateUserAPI = (user) => {
  return (dispatch) => {
    return createUser(user).then((res) => {});
  };
};

export let actionUpdateUserAPI = (user) => {
  return (dispatch) => {
    return updateUser(user).then((res) => {});
  };
};

export let actionChangePwdAPI = (form) => {
  return (dispatch) => {
    return changePwd(form).then((res) => {});
  };
};
