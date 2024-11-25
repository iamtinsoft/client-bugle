import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  Text,
  Spinner,
  Center,
  Flex,
  Progress,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { ServerUrl, lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/common/AppInput";
import apiClient from "../../../services/api-client";
import { UpdateUserApi } from "../services/userServices";
import AvatarEditor from "../../../components/common/AvatarEditor";
import CustomEditAppSelect from "../../../components/common/CustomEditAppSelect";

const schema = yup
  .object({
    userId: yup.number().required("User Id is required"),
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    serviceNumber: yup.string().required("Service Number is required"),
    armedForce: yup.string().required("Armed Force is required"),
    rank: yup.string().required("Rank is required"),
    userName: yup.string().required("Username is required"),
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
  })
  .required();

export default function EditUser({ close, data }: any) {
  let url = data.avatarUrl;
  console.log(data);
  // let [codes, setCodes] = useState<any>([]);
  let [avatar, setAvatar] = useState<any>("");
  let [progress, setProgress] = useState(0);
  let [displayProgress, setDisplayProgress] = useState<any>("none");
  let [avatarError, setAvatarError] = useState<any>("hidden");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    setValue,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      userId: data.userId,
      firstName: data.firstName,
      lastName: data.lastName,
      userName: data.userName,
      email: data.email,
      serviceNumber: data.serviceNumber,
      armedForce: data.armedForce,
      // rank: data.userRank,
    },
    resolver: yupResolver(schema),
  });
  const UploadFile = async (selectedFile: any) => {
    setDisplayProgress("block");
    let response = null;
    let doctype = null;
    let path = null;
    let error = null;
    let progress = 0;
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
          setProgress(Math.floor(progress));
        },
      })
      .then((res) => {
        //setDisplayProgress("none");
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
  const onSubmit = async (data: any) => {
    console.log(data);
    console.log(error);
    console.log(response);
    if (avatar && avatar.name.length > 0) {
      setIsLoading(true);
      let { path, error: uploadError } = await UploadFile(avatar);
      console.log(path);
      data.avatarUrl = path;
      if (!uploadError) {
        let { response, error, isLoading } = await UpdateUserApi(data);
        setIsLoading(isLoading);
        setError(error);
        if (!error) {
          reset();
          setResponse(response);
          Notiflix.Report.success(
            "Success",
            "Form has been successfully submitted!",
            "OK,got  it!",
            () => {
              window.location.reload();
            }
          );
        } else {
          setIsLoading(false);
          setError(error);
          Notiflix.Report.failure(
            "Error",
            error ?? "An Error has Occured",
            "OK"
          );
        }
      } else {
        Notiflix.Notify.failure(uploadError);
      }
    } else {
      data.avatarUrl = url;
      let { response, error, isLoading } = await UpdateUserApi(data);
      setIsLoading(isLoading);
      setError(error);
      if (!error) {
        reset();
        setResponse(response);
        Notiflix.Report.success(
          "Success",
          "Form has been successfully submitted!",
          "OK,got  it!",
          () => {
            window.location.reload();
          }
        );
      } else {
        setIsLoading(false);
        setError(error);
        Notiflix.Report.failure("Error", error ?? "An Error has Occured", "OK");
      }
    }
  };

  const handleAvatarChange = (file: any) => {
    setAvatarError("hidden");
    setAvatar(file);
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <Box p={3} mx={{ base: 3 }}>
        <AvatarEditor
          passedAvatar={ServerUrl + data.avatarUrl}
          onChange={(file: any) => handleAvatarChange(file)}
        />

        <Center visibility={avatarError} mt={0}>
          <Text fontSize={13} color={"red.500"}>
            Avatar cannot be empty
          </Text>
        </Center>
        <Box display={displayProgress}>
          <Progress value={progress} size="xs" colorScheme="blue" />
          <Center>
            <Text fontSize={13} color={"blue.400"}>
              {progress}%
            </Text>
          </Center>
        </Box>
      </Box>

      <AppInput
        errors={errors}
        register={register}
        property={"firstName"}
        label={"First Name"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"lastName"}
        label={"Last Name"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"userName"}
        label={"Username"}
        readOnly={true}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"email"}
        label={"Email"}
        readOnly={true}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"serviceNumber"}
        label={"Service Number"}
        readOnly={true}
      />
      <CustomEditAppSelect
        errors={errors}
        register={register}
        setValue={setValue}
        prop1={"armedForce"}
        prop2={"rank"}
        label1={"Armed Force"}
        label2={"Rank"}
        value1={data.armedForce}
        value2={data.userRank}
      />

      <Flex gap={5}>
        <Button
          mx={0}
          onClick={close}
          size={"md"}
          w={"100%"}
          py={6}
          fontSize={"16px"}
          fontWeight={"medium"}
          colorScheme="red"
          mt={3}
          type="button"
        >
          Discard
        </Button>
        <Button
          mx={0}
          isLoading={isSubmitting}
          size={"md"}
          bg={yellowColor}
          w={"100%"}
          py={6}
          fontSize={"16px"}
          fontWeight={"medium"}
          color={lightColor}
          mt={3}
          type="submit"
        >
          {isLoading ? <Spinner /> : "Submit"}
        </Button>
      </Flex>
    </Box>
  );
}
