import { useState } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin, { DateClickArg } from "@fullcalendar/interaction";
import listPlugin from "@fullcalendar/list";
// import { List, ListItem, ListItemText, useTheme } from "@mui/material";
// import { formatDate } from "@fullcalendar/core";
// import { tokens } from "../../global/themes/Calendarthemes";
import { Typography } from "../../global/styles/TypographyStyled";
// import DayTime from "../components/DayTime";
import { Div } from "../../global/styles/DivStyle";
import { useNavigate } from "react-router-dom";

// const typeExmpl = {
//   CivilDate: 'undefined',
//   JewishDate: 'undefined',
//   Day: 'undefined',
//   ParshasHashavuaOrYomTov: 'undefined',
//   Alos16: 'undefined',
//   Alos72Minutes: 'undefined',
//   misheyakir: 'undefined',
//   sunrise: 'undefined',
//   sofZmanShmaMGA: 'undefined',
//   sofZmanShmaGRA: 'undefined',
//   sofZmanTfilaMGA: 'undefined',
//   sofZmanTfilaGRA: 'undefined',
//   chatzos: 'undefined',
//   minchaGedolaGRA: 'undefined',
//   plag: 'undefined',
//   candleLighting18Minutes: 'undefined',
//   sunset: 'undefined',
//   tzaisGeonim: 'undefined',
//   tzais72: 'undefined',
//   tzais16: 'undefined',
//   _id: 'undefined'
// }
type CurrentEvent = {
  id: string;
  title: string;
  start: string;
  end: string;
  allDay: boolean;
}[]

const Calendary = () => {
  const navigate = useNavigate();
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [currentEvents, setCurrentEvents] = useState([]);
  const [, setCurrentEvents] = useState<CurrentEvent[]>([]);
  // const [toDayTime, setToDayTime] = useState<boolean>(false)
  // Replace 'YourEventType' with the actual type of your events.

  // const handleDateClick = (selected: { view: { calendar: any; }; dateStr: any; startStr: any; endStr: any; allDay: any; }) => {
  //     const title = prompt("Please enter a new title for your event");
  //     const calendarApi = selected.view.calendar;
  //     calendarApi.unselect();

  //     if (title) {
  //         calendarApi.addEvent({
  //             id: `${selected.dateStr}-${title}`,
  //             title,
  //             start: selected.startStr,
  //             end: selected.endStr,
  //             allDay: selected.allDay,
  //         });
  //     }
  // };

  const handleDateClick = (
    arg: DateClickArg
  ) => {
    // Redirect to another component with the selected date as a parameter
    console.log('arg:', arg)
    const selectedDateStr = arg.dateStr;
    navigate(`/Halachatimes/${selectedDateStr}`)
    console.log('selectedDateStr:', selectedDateStr);
    // setToDayTime(!toDayTime)


  };

  const handleEventClick = (selected: { event: { title: any; remove: () => void; }; }) => {
    if (window.confirm(`Are you sure you want to delete the event '${selected.event.title}'`)) {
      selected.event.remove();
    }
  };

  return (
    < >
      {/* CALENDAR SIDEBAR */}
      {/* <div  style={{borderRadius: "4px", backgroundColor: colors.primary[400] }}>
                <Typography component="h5">Events</Typography>
                <List>
                    {currentEvents.map((event) => (
                        <ListItem
                            key={event.id}
                            sx={{ backgroundColor: colors.greenAccent[500], margin: "10px 0", borderRadius: "10px" }}
                        >
                            <ListItemText
                                primary={event.title}
                                secondary={<Typography component="h5">{formatDate(event.start, { year: "numeric", month: "short", day: "numeric" })}</Typography>}
                            />
                        </ListItem>
                    ))}
                </List>
            </div> */}
      {/* CALENDAR */}
      {/* {toDayTime ?
        <Div><DayTime /> </Div>
        : */}
<Div sx={{
  display: 'flex',
  flexDirection: 'column',
  width: '100vw',
  textAlign: 'center'
}}>
  <Div sx={{
    margin: '30px', width: '100vw',
  }}>
    <Typography component="h1">day time</Typography>
  </Div>
  <FullCalendar
    height="75vh"
    plugins={[
      dayGridPlugin,
      timeGridPlugin,
      interactionPlugin,
      listPlugin,
    ]}
    headerToolbar={{
      left: "prev,next today",
      center: "title",
      right: "dayGridMonth,timeGridWeek,timeGridDay,listMonth",
    }}
    initialView="dayGridMonth"
    editable={true}
    selectable={true}
    dayMaxEvents={true}
    dateClick={handleDateClick} // Handle date click
    eventClick={handleEventClick}
    eventsSet={(events: any) => setCurrentEvents(events)}
    initialEvents={[
      {
        id: "12315",
        title: "All-day event",
        date: "2022-09-14",
      },
      {
        id: "5123",
        title: "Timed event",
        date: new Date(),
      },
    ]}
  />
</Div>

      {/* } */}
    </>
  );
};

export default Calendary;
