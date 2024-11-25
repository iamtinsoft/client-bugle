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
  Avatar,
  Heading,
  VStack,
} from "@chakra-ui/react";

import { useState } from "react";
//import Notiflix from "notiflix";
import { ServerUrl, lightColor, yellowColor } from "../../../constants";
import { IoIosCloseCircle } from "react-icons/io";
//import AppInput from "../../../components/common/AppInput";
//import AvatarUploader from "../../../components/common/AvatarUploader";
//import apiClient from "../../../services/api-client";
//import CustomAppSelect from "../../../components/common/CustomAppSelect";
//import { CreateUserApi } from "../services/userServices";
// import AppTextArea from "../../../../../../project-ppdc/client/src/components/forms/AppTextArea";
import CustomSearch from "../../../components/common/CustomSearch";
import useUsers from "../../../hooks/useUsers";
import { User } from "../../../types/user-type";
import EmptyRecord from "../../../components/common/EmptyRecord";
import { GetCurrentUser } from "../../../services/authService";
import {
  CreateConversationApi,
  CreateMessageApi,
} from "../services/messageService";
import Notiflix from "notiflix";
import AppInput from "../../../components/common/AppInput";

const schema = yup
  .object({
    //senderId: yup.number().required("senderId is required"),
    //receiverId: yup.number().required("receiverId is required"),
    userId: yup.number().notRequired(),
    message: yup.string().notRequired(),
  })
  .required();

export default function NewMessage({ close }: any) {
  let [searchVisibility, setSearchVisibility] = useState<any>("collapse");
  const [error, setError] = useState(null);
  const [senderId] = useState<any>(GetCurrentUser()?.userId);
  const [receiverId, setReceiverId] = useState<any>(null);
  const [userId] = useState(GetCurrentUser()?.userId);
  let [isLoading, setIsLoading] = useState(false);
  console.log(error);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });
  let { data: AllUsers } = useUsers();
  let [searchResults, setSearchResults] = useState<any>([]);
  const onSubmit = async (data: any) => {
    console.log(data);
    if (senderId !== null && receiverId !== null) {
      let conversationObject = {
        senderId,
        receiverId,
      };
      let { response, error, isLoading } = await CreateConversationApi(
        conversationObject
      );
      setIsLoading(isLoading);
      setError(error);
      if (!error) {
        let { conversationId }: any = response;
        let dataObject = {
          message: data.message,
          userId,
          conversationId,
        };
        let { error: messageError } = await CreateMessageApi(dataObject);
        if (!messageError) {
          Notiflix.Report.success(
            "Success",
            "Message sent successfully!",
            "OK,got  it!",
            () => {
              window.location.reload();
            }
          );
        } else {
          Notiflix.Report.failure(
            "Error",
            messageError ?? "An Error has Occured",
            "OK"
          );
        }
      } else {
        setIsLoading(false);
        setError(error);
        Notiflix.Report.failure("Error", error ?? "An Error has Occured", "OK");
      }
    } else {
      Notiflix.Report.failure("Error", "Recipient not Selected", "OK");
    }
  };
  const handleSearch = (searchText: any) => {
    if (searchText.length > 2) {
      setSearchVisibility("visible");
      let lowerCaseSearchText = searchText.toLocaleLowerCase();
      setSearchResults(() =>
        AllUsers.filter(
          (user: User) =>
            user.firstName
              .toLocaleLowerCase()
              .startsWith(lowerCaseSearchText) &&
            user.firstName.toLocaleLowerCase().startsWith(lowerCaseSearchText)
        )
      );
    } else {
      setSearchResults(null);
      setSearchVisibility("collapsed");
    }
    //setQuery(e);
  };
  const handleResultClick = (user: User) => {
    setSearchVisibility("collapse");
    setReceiverId(user.userId ?? 0);
  };
  return (
    <Box as={"form"} onSubmit={handleSubmit(onSubmit)}>
      <CustomSearch onSearch={handleSearch} />

      <Box
        visibility={searchVisibility}
        mt={2}
        p={3}
        minHeight={"50px"}
        zIndex={1000}
        bg={"white"}
        w={"335px"}
        boxShadow={"2xl"}
        position={"absolute"}
      >
        <Flex mb={2} justifyContent={"flex-end"}>
          <Button size={"xs"} onClick={() => setSearchVisibility("collapse")}>
            <IoIosCloseCircle />
          </Button>
        </Flex>
        {searchResults && searchResults.length > 0 ? (
          searchResults.map((d: User, i: number) => (
            <Box
              mb={2}
              cursor={"pointer"}
              onClick={() => handleResultClick(d)}
              key={i}
            >
              <Flex justifyContent={"space-between"}>
                <Flex gap={3}>
                  <Avatar
                    size={"sm"}
                    name={d.firstName + " " + d.lastName}
                    src={ServerUrl + d.avatarUrl}
                  />
                  <VStack
                    spacing={1}
                    justifyContent={"center"}
                    alignItems={"flex-start"}
                  >
                    <Heading fontWeight={600} fontSize={15}>
                      {d.firstName + " " + d.lastName}
                    </Heading>
                  </VStack>
                </Flex>
              </Flex>
            </Box>
          ))
        ) : (
          <EmptyRecord />
        )}
      </Box>
      <br />
      <AppInput
        errors={errors}
        register={register}
        property={"message"}
        label={"Message"}
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
