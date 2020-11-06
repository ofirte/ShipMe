import axios from "axios";

export const fetchCompanies = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get("/api/curr_user/companies", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    .then((res) => {
      dispatch({ type: "FETCH_COMPANIES", payload: res.data });
    });
};
export const fetchCompanyData = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get(
      `/api/curr_user/companies/${localStorage.getItem("selectedCompany")}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
          companyId: localStorage.getItem("selectedCompany"),
        },
      }
    )
    .then((res) => {
      dispatch({ type: "FETCH_COMPANY_DATA", payload: res.data });
    });
};
export const updateCompanyData = (comapnyData) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .post(
      `/api/curr_user/companies/${localStorage.getItem("selectedCompany")}`,
      {
        company: comapnyData,
        companyId: localStorage.getItem("selectedCompany"),
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    )
    .then((res) => {
      dispatch({ type: "UPDATE_COMPANY_DATA" });
    });
};

export const fetchCompanyUsers = () => (dispatch) => {
  const token = localStorage.getItem("token");
  axios
    .get("/api/company/users", {
      headers: {
        Authorization: `Bearer ${token}`,
        companyId: localStorage.getItem("selectedCompany"),
      },
    })
    .then((res) => {
      dispatch({ type: "FETCH_COMPANY_USERS", payload: res.data });
    });
};
export const addCompany = (newCompany) => (dispatch) => {
  const token = localStorage.getItem("token");
  axios.post(
    "/api/company/addcompany",
    {
      newCompany,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  ).then((res)=>dispatch({type:'ADD_COMPANY',payload:newCompany}))
};
export const getAllCompanies=()=>(dispatch)=>{
  const token = localStorage.getItem("token");
  axios.get('/api/company/all',{
    headers: {
      Authorization: `Bearer ${token}`,
    },
  }).then((res)=>dispatch({type:'FETCH_ALL_COMPANIES',payload:res.data}))
}
