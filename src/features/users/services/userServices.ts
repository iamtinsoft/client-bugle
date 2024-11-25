import apiClient from "../../../services/api-client";

export const CreateUserApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .post("/users", data)
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

export const UpdateUserApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;

  await apiClient
    .put(`/users/profile/${data.userId}`, data)
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

export const UpdateUserStatusApi = async (data: any) => {
  let response = null;
  let error = null;
  let isLoading = true;
  await apiClient
    .put(`/auth/account/${data.userId}/${data.status}`)
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

// export const DeleteBusinessByIdApi = async (id: string) => {
//   let response = null;
//   let error = null;
//   let isLoading = true;
//   await apiClient
//     .delete(`/business/${id}`)
//     .then((res) => {
//       response = res.data;
//       isLoading = false;
//     })
//     .catch((err) => {
//       error = err.response.data;
//       console.log(err);
//       isLoading = false;
//     });
//   return { response, error, isLoading };
// };
