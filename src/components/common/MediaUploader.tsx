import { Box, Button, Center, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const MediaUploader = ({ onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  //let [avatar, setAvatar] = useState("");
  let [name, setName] = useState("");
  const ImageConverter = (evt: any) => {
    let file = evt.target.files[0];
    setName(file.name);
    // setAvatar(URL.createObjectURL(file));
    onChange(file);
  };
  return (
    <Box>
      <input
        accept="video/mp4,video/x-m4v,video/*"
        onChange={(e) => ImageConverter(e)}
        style={{ display: "none" }}
        ref={filePicker}
        type="file"
      />
      <Center>
        <Button onClick={() => filePicker.current?.click()} cursor={"pointer"}>
          Choose File
        </Button>
      </Center>
      <Center mt={2}>
        <Text>{name}</Text>
      </Center>
    </Box>
  );
};

export default MediaUploader;
