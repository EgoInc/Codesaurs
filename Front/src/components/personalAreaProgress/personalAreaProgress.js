import "./personalAreaProgress.css";
import { useEffect, useState } from "react";
import { PersonalAreaCourse } from "../personalAreaCourse/personalAreaCourse";
import Paper from '@mui/material/Paper';
import { ViewState } from '@devexpress/dx-react-scheduler';
import personalAreaData from "../../data/personalAreaData.json";
import {
  styled, darken, alpha, lighten,
} from '@mui/material/styles';
import {
  Scheduler,
  Appointments,
  MonthView,
  AppointmentTooltip,
  DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';
import notificationsData from "../personalAreaNotificationsPanel/Notificationpanel.json";

const PREFIX = 'Demo';

const classes = {
  cell: `${PREFIX}-cell`,
  content: `${PREFIX}-content`,
  text: `${PREFIX}-text`,
  sun: `${PREFIX}-sun`,
  cloud: `${PREFIX}-cloud`,
  rain: `${PREFIX}-rain`,
  sunBack: `${PREFIX}-sunBack`,
  cloudBack: `${PREFIX}-cloudBack`,
  rainBack: `${PREFIX}-rainBack`,
  opacity: `${PREFIX}-opacity`,
  appointment: `${PREFIX}-appointment`,
  apptContent: `${PREFIX}-apptContent`,
  flexibleSpace: `${PREFIX}-flexibleSpace`,
  flexContainer: `${PREFIX}-flexContainer`,
  tooltipContent: `${PREFIX}-tooltipContent`,
  tooltipText: `${PREFIX}-tooltipText`,
  title: `${PREFIX}-title`,
  icon: `${PREFIX}-icon`,
  circle: `${PREFIX}-circle`,
  textCenter: `${PREFIX}-textCenter`,
  dateAndTitle: `${PREFIX}-dateAndTitle`,
  titleContainer: `${PREFIX}-titleContainer`,
  container: `${PREFIX}-container`,
};

const currentDate = new Date();

// const schedulerData = [
//   { startDate: '2024-02-14T09:45', endDate: '2024-02-14T11:00', title: 'Meeting' },
//   { startDate: '2024-02-14T12:00', endDate: '2024-02-14T13:30', title: 'Web разработка' },
// ];

const DayScaleCell = (props) => (
  <MonthView.DayScaleCell {...props} style={{ textAlign: 'center', fontWeight: 'bold' }} />
);

const StyledAppointmentsAppointment = styled(Appointments.Appointment)(() => ({
  [`&.${classes.appointment}`]: {
    borderRadius: '10px',
    transition: 'all 0.5s',
    background: '#282c34',
    '&:hover': {
      background: '#282c34',
      opacity: 0.6,
    },
  },
}));

const Appointment = (({ ...restProps }) => (
  <StyledAppointmentsAppointment
    {...restProps}
    className={classes.appointment}
  />
));

export function PersonalAreaProgress(props) {

  const [courses, setCourses] = useState([]);
  const [scheduleData, setScheduleData] = useState([]);

  useEffect(() => {
    setCourses(personalAreaData.courses);
    setScheduleData(personalAreaData.scheduler);
  }, []);

  return (
    <div className={"personal-area-progress__wrapper"}>
      <h1 className={"personal-area-progress__title"}>Прогресс</h1>
      <div className={"personal-area-progress__content"}>
        {courses.map((course, key) =>
          <PersonalAreaCourse key={key} progress={course.progress} duration={course.duration} title={course.name} date={course.start_day} src={course.image}/>
        )}
        {/* <PersonalAreaCourse progress={5} title={"Web разработка"} date={"Начало: 15 мая 2023"} src={"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6561d83088410d6f4a17dfff_6561ee656e6f8b6285a47d48/scale_1200"}/> */}
        {/* <PersonalAreaCourse progress={8} title={"Web разработка"} date={"Начало: 15 мая 2023"} src={"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6561d83088410d6f4a17dfff_6561ee656e6f8b6285a47d48/scale_1200"}/> */}
        {/* <PersonalAreaCourse progress={3} title={"Web разработка"} date={"Начало: 15 мая 2023"} src={"https://avatars.dzeninfra.ru/get-zen_doc/271828/pub_6561d83088410d6f4a17dfff_6561ee656e6f8b6285a47d48/scale_1200"}/> */}
        <Paper>
          <Scheduler
            data={scheduleData}
            locale={"ru"}
            firstDayOfWeek={1}
          >
            <ViewState
              currentDate={currentDate}
            />
            <MonthView
              // timeTableCellComponent={TimeTableCell}
              dayScaleCellComponent={DayScaleCell}
            />
            {/* <DateNavigator/> */}
            <Appointments
              appointmentComponent={Appointment}
            />
            <AppointmentTooltip
              showCloseButton
            />
          </Scheduler>
        </Paper>
      </div>
    </div>
  );
}
