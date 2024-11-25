import { Flex, Image, Text } from "@chakra-ui/react";
import * as XLSX from "xlsx";
import { excel } from "../../assets";
const ExportExcel = ({ data }: any) => {
  let filtered: any = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(element);
    if (element["password"]) {
    } else if (element["avatarUrl"]) {
    } else if (element["status"]) {
    } else {
      filtered.push(element);
    }
  }
  const DownloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(data);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
    //let buffer = XLSX.write(workbook, { bookType: "xlsx", type: "buffer" });
    //XLSX.write(workbook, { bookType: "xlsx", type: "binary" });
    XLSX.writeFile(workbook, "Users.xlsx");
  };
  return (
    <Flex gap={2} onClick={() => DownloadExcel()}>
      <Image w={"25px"} objectFit={"cover"} src={excel} />
      <Text fontWeight={600} fontSize={"sm"}>
        Excel Format
      </Text>
    </Flex>
  );
};

export default ExportExcel;
