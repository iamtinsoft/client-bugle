import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
YupPassword(yup);
import {
  Button,
  Box,
  Spinner,
  Flex,
  FormControl,
  FormLabel,
  Switch,
} from "@chakra-ui/react";

import { useState } from "react";
import Notiflix from "notiflix";
import { lightColor, yellowColor } from "../../../constants";
import AppInput from "../../../components/common/AppInput";
import { CreateEventApi } from "../services/eventsServices";

const schema = yup
  .object({
    eventName: yup.string().required("Event Name is required"),
    eventDescription: yup.string().notRequired(),
    eventLocation: yup.string().notRequired(),
    isAllDay: yup.boolean().default(false),
    eventStartDate: yup.string().required("Event Start Date is required"),
    eventStartTime: yup.string().notRequired().default("N/A"),
    eventEndDate: yup.string().required("Event End Date is required"),
    eventEndTime: yup.string().notRequired().default("N/A"),
  })
  .required();

export default function NewEvent({ close }: any) {
  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  let [isLoading, setIsLoading] = useState(false);
  console.log(error);
  console.log(response);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit = async (data: any) => {
    setIsLoading(true);
    let { response, error, isLoading } = await CreateEventApi(data);
    setIsLoading(isLoading);
    setError(error);
    if (!error) {
      reset();
      setResponse(response);
      Notiflix.Report.success(
        "Success",
        response ?? "Event Created Successfully",
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
    <Box as={"form"} pt={5} onSubmit={handleSubmit(onSubmit)}>
      <AppInput
        errors={errors}
        register={register}
        property={"eventName"}
        label={"Event Name *"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"eventDescription"}
        label={"Event Description"}
      />
      <AppInput
        errors={errors}
        register={register}
        property={"eventLocation"}
        label={"Event Location"}
      />
      <FormControl my={5} display="flex" alignItems="center">
        <FormLabel htmlFor="email-alerts" mb="0">
          All Day
        </FormLabel>
        <Switch {...register("isAllDay")} id="email-alerts" />
      </FormControl>
      <Flex gap={5}>
        <AppInput
          errors={errors}
          register={register}
          property={"eventStartDate"}
          label={"Event Start Date"}
          type={"date"}
        />
        <AppInput
          errors={errors}
          register={register}
          property={"eventStartTime"}
          label={"Event Start Time"}
          type={"time"}
        />
      </Flex>
      <Flex gap={5}>
        <AppInput
          errors={errors}
          register={register}
          property={"eventEndDate"}
          label={"Event End Date"}
          type={"date"}
        />
        <AppInput
          errors={errors}
          register={register}
          property={"eventEndTime"}
          label={"Event End Time"}
          type={"time"}
        />
      </Flex>

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
