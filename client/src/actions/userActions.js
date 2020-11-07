import axios from "axios";
import { fetchCompanyUsers } from "./companyActions";
export const fetchUserToList = (userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get("/api/users/user/info", {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: userId,
      },
    })
    .then((res) => {
      dispatch({ type: "FETCH_USERS_LIST", payload: res.data });
    });
};
export const onUserEdit = (userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get("/api/users/user/edit", {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: userId,
      },
    })
    .then((res) => {
      dispatch({ type: "FETCH_USERS_INFO", payload: res.data });
    });
};
export const onUserUpdate = (newUser, userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      `/api/users/user/edit`,
      {
        userUpdate: newUser,
        userId: userId,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then(dispatch({ type: "UPDATE_USER_ON_LIST", payload: newUser }));
};
export const onUserDelete = (userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .delete(`/api/users/user/edit`, {
      headers: {
        Authorization: `Bearer ${token}`,
        userId: userId,
        companyId: localStorage.getItem("selectedCompany"),
      },
    })
    .then(dispatch({ type: "DELETE_USER_FROM_LIST", payload: userId }))
    .then(() => dispatch(fetchCompanyUsers()));
};
