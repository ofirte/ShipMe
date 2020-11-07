import axios from "axios";
import { fetchUserToList } from "./userActions";
import{fetchCompanyUsers} from './companyActions'
export const signUp = (user, history) => (dispatch) => {
  user.userType = 1;
  axios
    .post("/api/signup", user)
    .then((res) => {
      history.push("/");
    })
    .catch((err) =>
      window.alert(`${err.response.data.keyValue.email} already exists`)
    );
};
export const createUser = (user) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .post("/api/signUp", user, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      axios
        .post(
          "/api/company/adduser",
          {
            userId: res.data,
            companyId: localStorage.getItem("selectedCompany"),
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => dispatch(fetchUserToList(res.data.userId))).then(()=>dispatch(fetchCompanyUsers()));
    })
    .catch((err) => console.log(err));
};
export const fetchUser = (user) => (dispatch) => {
  axios
    .post("/api/login", user)
    .then((res) => {
      localStorage.setItem("token", res.data.token);
      dispatch({ type: "LOGIN", payload: res.data.user });
      dispatch({ type: "FETCH_COMPANIES", payload: res.data.companies });
    })
    .catch((error) => window.alert("Worng username or password!"));
};
export const ProfileFetch = () => (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    dispatch({ type: "LOGOUT" });
    return;
  }
  return axios
    .get("/api/curr_user", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      dispatch({ type: "LOGIN", payload: data });
    })
    .catch(() => {
      dispatch({ type: "LOGOUT" });
    });
};
export const logout = (user, history) => (dispatch) => {
  const token = localStorage.getItem("token");
  return axios
    .post("/api/logout", user, {
      headers: { Authorization: `Bearer ${token}` },
    })
    .then((res) => {
      dispatch({ type: "LOGOUT" });
      history.push("/");
    });
};
export const updateProfile = (newUser, userId) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      "api/curr_user",
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
    .then(dispatch({ type: "UPDATE_PROFILE" }));
};
