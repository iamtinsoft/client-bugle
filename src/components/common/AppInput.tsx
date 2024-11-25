import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from "@chakra-ui/react";

import { validateInput } from "../../utils/inputValidator";
import { greyColor } from "../../constants";

const AppInput = ({
  errors,
  register,
  property,
  label,
  readOnly,
  type = "text",
}: any) => {
  return (
    <FormControl mb={6}>
      <FormLabel>{label}</FormLabel>
      <Input
        size={"md"}
        borderWidth={0}
        bg={greyColor}
        isInvalid={validateInput(errors[property]?.message)}
        errorBorderColor="red.600"
        _active={{ outline: "none" }}
        outline={"none"}
        _focus={{ borderWidth: 0, outlineColor: "transparent" }}
        borderColor={"#000"}
        {...register(property)}
        placeholder={label}
        type={type}
        readOnly={readOnly}
      ></Input>

      <FormHelperText fontSize={12} color={"red"}>
        {errors[property]?.message}
      </FormHelperText>
    </FormControl>
  );
};

export default AppInput;
