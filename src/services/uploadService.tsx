import { useState } from "react";
import apiClient from "./api-client";

export const UploadFile = async (selectedFile: any) => {
  let [progress, setProgress] = useState(0);
  let response = null;
  let doctype = null;
  let path = null;
  let error = null;
  let isLoading = false;
  const obj = new FormData();
  obj.append("myFile", selectedFile);
  await apiClient
    .post("/upload/single", obj, {
      onUploadProgress: (ProgressEvent) => {
        progress =
          (ProgressEvent.loaded /
            (ProgressEvent.total ? ProgressEvent.total : 0)) *
          100;
        setProgress(progress);
      },
    })
    .then((res) => {
      path = res.data.path;
      doctype = res.data.mimetype;
      response = "Uploaded Successfully";
      isLoading = false;
      progress = progress;
    })
    .catch((err) => {
      error = err.response.data;
      console.log(err);
      isLoading = false;
    });
  return { response, error, isLoading, progress, path, doctype };
};
