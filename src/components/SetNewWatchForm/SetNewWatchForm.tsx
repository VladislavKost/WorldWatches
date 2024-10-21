import { useState } from "react";
import "./SetNewWatchForm.css";

let id = 0;

export const SetNewWatchForm = ({
  watchesList,
  setWatchesList,
}: {
  watchesList: { id: number; city: string; timeZone: string }[];
  setWatchesList: (
    data: { id: number; city: string; timeZone: string }[]
  ) => void;
}) => {
  const [city, setCity] = useState("");
  const [timeZone, setTimeZone] = useState("");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const watchesData = {
      id: id++,
      city,
      timeZone,
    };
    const newList = [...watchesList, watchesData];
    setWatchesList(newList);
    setCity("");
    setTimeZone("");
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group-title">
          <label htmlFor="city">Название</label>
          <input
            type="text"
            id="city"
            required
            onChange={(e) => setCity(e.target.value)}
          />
        </div>
        <div className="form-group-title">
          <label htmlFor="time-zone">Временная зона</label>
          <input
            type="number"
            id="time-zone"
            required
            onChange={(e) => setTimeZone(e.target.value)}
          />
        </div>
        <button>Добавить</button>
      </form>
    </div>
  );
};
