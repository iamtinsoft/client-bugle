// import FullCalendar from "@fullcalendar/react";
// import dayGridPlugin from "@fullcalendar/daygrid";
import { Calendar, momentLocalizer } from "react-big-calendar";
import moment from "moment";
const localizer = momentLocalizer(moment);
import "react-big-calendar/lib/css/react-big-calendar.css";
import { Box } from "@chakra-ui/react";
const CalenderComponent = ({ data }: any) => {
  let populatedData = [];
  for (let index = 0; index < data.length; index++) {
    const element = data[index];
    console.log(`${element.eventStartDate}T${element.eventStartTime}`);
    let newData = {
      title: element.eventName,
      start: new Date(Date.parse(element.eventStartDate)),
      end: new Date(Date.parse(element.eventEndDate)),
      color: "#0B99FE",
      textColor: "white",
      allDay: element.isAllDay,
    };
    populatedData.push(newData);
  }
  console.log(data);
  return (
    <Box h={500}>
      <Calendar
        localizer={localizer}
        events={populatedData}
        startAccessor="start"
        endAccessor="end"
      />
    </Box>
    // <FullCalendar
    //   headerToolbar={{
    //     start: "today prev next",
    //     // center: "HelloThere",
    //     end: "dayGridMonth dayGridWeek dayGridDay",
    //   }}
    //   plugins={[dayGridPlugin]}
    //   events={populatedData}
    //   // events={[
    //   //   {
    //   //     title: "event 1",
    //   //     date: "2023-10-23",
    //   //     // start: "09:00 AM",
    //   //     // stop: "10:00 AM",
    //   //     color: "cornflowerblue",
    //   //     textColor: "white",
    //   //     allDay: true,
    //   //   },
    //   //   {
    //   //     title: "event 2",
    //   //     start: "2023-10-02T12:30:00",
    //   //     end: "2023-10-02T02:30:00",
    //   //     color: "red",
    //   //   },
    //   //   {
    //   //     title: "event3",
    //   //     start: "2023-10-03T12:30:00",
    //   //     end: "2023-10-03T02:30:00",
    //   //     // backgroundColor: "green",
    //   //     // color: "cornflowerblue",
    //   //     //textColor: "white",
    //   //   },
    //   // ]}
    //   // views={["dayGridMonth"]||undefined}
    //   initialView="dayGridMonth"
    // />
  );
};

export default CalenderComponent;
