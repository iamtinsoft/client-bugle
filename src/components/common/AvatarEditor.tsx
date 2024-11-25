import { Avatar, Box, Center, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const AvatarEditor = ({ passedAvatar, onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  let [avatar, setAvatar] = useState(passedAvatar);
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
      <Center mt={2}>
        <Text textAlign={"center"}>Click the avatar to change the image</Text>
      </Center>
    </Box>
  );
};

export default AvatarEditor;
