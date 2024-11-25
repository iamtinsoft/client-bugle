import apiClient from "../../../services/api-client";

export const Authorize = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  let obj = { email: data.email, password: data.password };
  await apiClient
    .post("/auth", obj)
    .then((res) => {
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};

export const SetGeolocation = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .put("/auth/setGeolocation", data)
    .then((res) => {
      response = res.data;
      isLoading = false;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading };
};
