import { useEffect, useState } from "react";

import "./WatchesItem.css";

export const WatchesItem = ({
  data,
}: {
  data: { id: number; city: string; timeZone: string };
}) => {
  const getTimeZoneDate = () => {
    const timezoneOffset = new Date().getTimezoneOffset();
    return new Date(
      new Date().getTime() +
        Number(data.timeZone) * 60 * 60 * 1000 +
        timezoneOffset * 60 * 1000
    );
  };
  const [currentTime, setCurrentTime] = useState(getTimeZoneDate());
  const [seconds, setSeconds] = useState(currentTime.getSeconds());
  const [minutes, setMinutes] = useState(currentTime.getMinutes());
  const [hours, setHours] = useState(currentTime.getHours());
  const [secondsDegree, setSecondsDegree] = useState(
    `rotate(${(seconds / 60) * 360}deg)`
  );
  const [minutesDegree, setMinutesDegree] = useState(
    `rotate(${(minutes / 60) * 360}deg)`
  );
  const [hoursDegree, setHoursDegree] = useState(
    `rotate(${(hours / 60) * 360}deg)`
  );

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeZoneDate());
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    setSeconds(currentTime.getSeconds());
    setSecondsDegree(`rotate(${(seconds / 60) * 360}deg)`);
    setMinutes(currentTime.getMinutes());
    setMinutesDegree(`rotate(${(minutes / 60) * 360}deg)`);
    setHours(currentTime.getHours());
    setHoursDegree(`rotate(${(hours / 60) * 360}deg)`);
  }, [currentTime]);

  return (
    <div className="clock">
      <div className="second-hand" style={{ transform: secondsDegree }}></div>
      <div className="minute-hand" style={{ transform: minutesDegree }}></div>
      <div className="hour-hand" style={{ transform: hoursDegree }}></div>
    </div>
  );
};
