// import React from "react";
import jsPDF from "jspdf";
import { Image, Text, Flex } from "@chakra-ui/react";
import autoTable from "jspdf-autotable";
import { pdf } from "../../assets";

const ExportPdf = ({ columns, json }: any) => {
  const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
  };
  //   const colstyle = {
  //     width: "30%",
  //   };
  //   const tableStyle = {
  //     width: "100%",
  //   };
  const Print = () => {
    const pdf = new jsPDF("p", "pt", "a4");
    // const columns = [
    //   "Id",
    //   "Start",
    //   "Duration",
    //   "Name",
    //   "Project",
    //   "Task",
    //   "Comment",
    // ];
    var rows = [];

    for (let i = 0; i < json.length; i++) {
      var temp = [
        i + 1,
        json[i].firstName + " " + json[i].lastName,
        json[i].serviceNumber,
        json[i].status == 0 ? "Active" : "Inactive",
        json[i].created.split("T")[0],
        //json[i].comment,
      ];
      rows.push(temp);
    }
    (pdf as any).autoTable(columns, rows, {
      startY: 55,
      theme: "grid",
      styles,
      headStyles: {
        textColor: [0, 0, 0],
        fontStyle: "normal",
        // lineWidth: 1,
        // lineColor: [0, 0, 0],
        fillColor: [254, 252, 191],
      },
      //   alternateRowStyles: {
      //     // fillColor: [212, 212, 212],
      //     // textColor: [0, 0, 0],
      //     lineWidth: 1,
      //     lineColor: [0, 0, 0],
      //   },
      //   rowStyles: {
      //     lineWidth: 1,
      //     lineColor: [0, 0, 0],
      //   },
      tableLineColor: [0, 0, 0],
    });
    autoTable(pdf, {});
    pdf.save("users");
  };
  return (
    <Flex gap={2} onClick={() => Print()}>
      <Image w={"25px"} objectFit={"cover"} src={pdf} />
      <Text fontWeight={600} fontSize={"sm"}>
        PDF Format
      </Text>
    </Flex>
  );
};

export default ExportPdf;
