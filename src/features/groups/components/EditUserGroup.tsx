import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  //Text,
  Spinner,
  //Center,
  Flex,
  //Progress,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/common/AppInput";
//import apiClient from "../../../services/api-client";
import { UpdateGroupApi } from "../services/userServices";
//import AvatarEditor from "../../../components/common/AvatarEditor";
//import CustomEditAppSelect from "../../../components/common/CustomEditAppSelect";

const schema = yup
  .object({
    id: yup.number().required("Id is required"),
    groupName: yup.string().required("Group Name is required"),
    groupDesc: yup.string().required("Group Desc is required"),
  })
  .required();

export default function EditUserGroup({ close, data }: any) {
  //let url = data.avatarUrl;
  console.log(data);
  // let [codes, setCodes] = useState<any>([]);
  // let [avatar, setAvatar] = useState<any>("");
  // let [progress, setProgress] = useState(0);
  // let [displayProgress, setDisplayProgress] = useState<any>("none");
  // let [avatarError, setAvatarError] = useState<any>("hidden");
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  console.log(error, response);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    defaultValues: {
      id: data.id,
      groupName: data.groupName,
      groupDesc: data.groupDesc,
    },
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    console.log(data);
    // console.log(error);
    // console.log(response);
    let { response, error, isLoading } = await UpdateGroupApi(data);
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
  };

  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        errors={errors}
        register={register}
        property={"groupName"}
        label={"Group Name"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"groupDesc"}
        label={"Group Desc"}
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
