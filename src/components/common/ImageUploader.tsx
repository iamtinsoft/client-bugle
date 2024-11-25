import { Image, Box, Center, Text } from "@chakra-ui/react";
import { useRef, useState } from "react";

const ImageUploader = ({ onChange }: any) => {
  let filePicker = useRef<HTMLInputElement>(null);
  let [avatar, setAvatar] = useState("https://placehold.co/600x600/EEE/31343C");
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
        <Image
          onClick={() => filePicker.current?.click()}
          cursor={"pointer"}
          objectFit={"cover"}
          w={200}
          h={200}
          src={avatar}
          shadow={"xl"}
        />
      </Center>
      <Center mt={2}>
        <Text>Click the icon to choose an image</Text>
      </Center>
    </Box>
  );
};

export default ImageUploader;
