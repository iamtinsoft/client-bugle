import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import YupPassword from "yup-password";
import { MdVisibilityOff, MdVisibility } from "react-icons/md";
YupPassword(yup);
import {
  Alert,
  AlertIcon,
  AlertTitle,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Box,
  Heading,
  Text,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Icon,
  Spinner,
  Center,
  Image,
} from "@chakra-ui/react";

import { EmailIcon, LockIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { logo } from "../../assets";
import {
  greenColor,
  lightColor,
  linkColor,
  yellowColor,
} from "../../constants";
import { Authorize } from "./services/authorizationService";
import { AuthLogin } from "../../services/authService";
import { validateInput } from "../../utils/inputValidator";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { GetGeoLocation } from "../../utils/get_location";
//import UserContext from "../../context/userContext";

const schema = yup
  .object({
    email: yup
      .string()
      .required("Email is required")
      .email("Please enter the email address in the correct format"),
    password: yup.string().required("Password is required"),
  })
  .required();

export default function Auth() {
  const navigate = useNavigate();

  const [error, setError] = useState(null);
  const [response, setResponse] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [isPasswordVisible, setPasswordVisible] = useState(false);
  const handleClick = () => setPasswordVisible(!isPasswordVisible);
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ mode: "all", resolver: yupResolver(schema) });
  const onSubmit = async (data: any) => {
    console.log(response);
    setError(null);
    setLoading(true);
    const {
      response: serverResponse,
      error,
      isLoading,
    } = await Authorize(data);
    setError(error);
    setLoading(isLoading);
    setResponse(serverResponse);
    console.log(serverResponse);
    if (!error) {
      AuthLogin(serverResponse ? serverResponse : "", false);
      let { error } = await GetGeoLocation();
      if (!error) {
        navigate("/admin/dashboard");
      }
    }
  };

  return (
    <Box
      as="form"
      p={10}
      shadow={"2xl"}
      borderRadius={12}
      h={"auto"}
      w={{ base: "80%" }}
      onSubmit={handleSubmit(onSubmit)}
    >
      <Center>
        <Image w={"120px"} src={logo} />
      </Center>
      <Center my={4}>
        <Heading color={yellowColor} fontSize={25}>
          Account Login
        </Heading>
      </Center>
      <Center my={4}>
        <Text fontSize={15} color={linkColor} textAlign={"center"}>
          Enter your admin email and password to <br /> login
        </Text>
      </Center>
      <FormControl>
        <FormLabel>Email address</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <EmailIcon color={linkColor} />
          </InputLeftElement>
          <Input
            borderRadius={30}
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.email?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("email")}
            type="email"
            placeholder="Enter your email"
          />
        </InputGroup>
        <FormHelperText color={"red"}>{errors.email?.message}</FormHelperText>
      </FormControl>
      <FormControl mt={2}>
        <FormLabel>Password</FormLabel>
        <InputGroup>
          <InputLeftElement
            ml={2}
            pt={2}
            justifyContent={"center"}
            alignItems={"center"}
            pointerEvents="none"
          >
            <LockIcon color={linkColor} />
          </InputLeftElement>
          <Input
            borderRadius={30}
            size={"lg"}
            borderWidth={1}
            isInvalid={validateInput(errors.email?.message)}
            errorBorderColor="red.600"
            bg={"#fff"}
            _active={{ outline: "none" }}
            outline={"none"}
            _focus={{ borderWidth: 0, outlineColor: "transparent" }}
            borderColor={linkColor}
            {...register("password")}
            type={isPasswordVisible ? "text" : "password"}
            placeholder="Enter your password"
          />
          <InputRightElement pt="2" width="4.5rem" onClick={handleClick}>
            {isPasswordVisible ? (
              <Icon as={MdVisibilityOff} boxSize={6} color="gray.500" />
            ) : (
              <Icon as={MdVisibility} boxSize={6} color="gray.500" />
            )}
          </InputRightElement>
        </InputGroup>
        <FormHelperText color={"red"}>
          {errors.password?.message}
        </FormHelperText>
      </FormControl>
      {error && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Alert
            borderRadius={5}
            bg="red.500"
            opacity={100}
            mt="5"
            status="error"
          >
            <AlertIcon />
            <AlertTitle fontWeight="normal">{error}</AlertTitle>
          </Alert>
        </motion.div>
      )}
      <Button
        isLoading={isSubmitting}
        size={"md"}
        bg={greenColor}
        w={"100%"}
        color={lightColor}
        py={6}
        fontSize={"14px"}
        fontWeight={"medium"}
        mt={10}
        borderRadius={30}
        type="submit"
      >
        {isLoading ? <Spinner /> : "Proceed"}
      </Button>
    </Box>
  );
}
