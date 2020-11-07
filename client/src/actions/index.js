import axios from "axios";

export const uploadImg = (img, from, url, userId, noUpdateDb) => (dispatch) => {
  const token = localStorage.getItem("token");
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Client-ID ${process.env.REACT_APP_IMGUR_CLIENT}`
  );
  var formdata = new FormData();
  formdata.append("image", img);
  var requestOptions = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };
  fetch("https://api.imgur.com/3/image", requestOptions)
    .then((response) => response.text())
    .then((result) => {
      const u = url ? url : "";
      if (noUpdateDb) {
        dispatch({
          type: "UPDATE_IMAGE_LOCAL",
          payload: JSON.parse(result).data.link,
        });
        return "";
      }
      axios
        .post(
          `/api/imgur/setphoto${u}`,
          {
            link: JSON.parse(result).data.link,
            companyId: localStorage.getItem("selectedCompany"),
            userId,
            from: from,
          },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        )
        .then(() => {
          if (from === "company") {
            dispatch({
              type: "COMPANY_IMG_CHANGE",
              payload: JSON.parse(result).data.link,
            });
          } else if (!userId) {
            dispatch({
              type: "PROFILE_IMG_CHANGE",
              payload: JSON.parse(result).data.link,
            });
          } else {
            dispatch({
              type: "USER_IMG_CHANGE",
              payload: JSON.parse(result).data.link,
            });
          }
        });
    })
    .catch((error) => console.log("error", error));
};
