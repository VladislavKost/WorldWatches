import { useEffect, useRef, useState } from "react";

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
  const clockRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(getTimeZoneDate());
    }, 1000);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (clockRef.current) {
      const clock = clockRef.current as HTMLElement;
      const secondHand = clock.querySelector(".second-hand") as HTMLElement;
      const minuteHand = clock.querySelector(".minute-hand") as HTMLElement;
      const hourHand = clock.querySelector(".hour-hand") as HTMLElement;

      // Обновление положения стрелок
      const updateClock = () => {
        const seconds = currentTime.getSeconds();
        const minutes = currentTime.getMinutes();
        const hours = currentTime.getHours();

        const secondsDegrees = (seconds / 60) * 360;
        const minutesDegrees = (minutes / 60) * 360;
        const hoursDegrees = (hours / 12) * 360;

        secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
        minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
        hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
      };

      updateClock();
    }
  }, [currentTime]);
  return (
    <div className="clock" ref={clockRef}>
      <div className="second-hand"></div>
      <div className="minute-hand"></div>
      <div className="hour-hand"></div>
    </div>
  );
};
