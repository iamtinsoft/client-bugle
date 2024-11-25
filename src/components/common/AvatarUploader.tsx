import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const AvatarUploader = ({ onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  let [avatar, setAvatar] = useState("");

  const ImageConverter = (evt: any) => {
    let file = evt.target.files[0];
    setAvatar(URL.createObjectURL(file));
    onChange(file);
  };

  return (
    <Box>
      <input
        onChange={(e) => ImageConverter(e)}
        style={{ display: "none" }}
        ref={filePicker}
        type="file"
      />
      <Center>
        <Avatar
          onClick={() => filePicker.current?.click()}
          cursor={"pointer"}
          size={"xl"}
          src={avatar}
          css={{
            border: "2px solid white",
          }}
        />
      </Center>
      <Box mt={2}>
        <Text textAlign={"center"} fontSize={12}>
          Allowed file types: png, jpg, jpeg
        </Text>
        <Text textAlign={"center"} fontSize={14}>
          Click the avatar to choose an image
        </Text>
      </Box>
    </Box>
  );
};

export default AvatarUploader;
