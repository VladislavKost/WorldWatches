import "./SetNewWatchForm.css";

let id = 0;

export const SetNewWatchForm = ({
  setWatchesList,
}: {
  setWatchesList: (
    data: { id: number; city: string; timeZone: string }[]
  ) => void;
}) => {
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const cityInput = form.querySelector("#city") as HTMLInputElement;
    const timeZoneInput = form.querySelector("#time-zone") as HTMLInputElement;

    const watchesData = {
      id: id++,
      city: cityInput.value,
      timeZone: timeZoneInput.value,
    };
    setWatchesList((prevList) => [...prevList, watchesData]);
  };

  return (
    <div>
      <form className="form-group" onSubmit={handleSubmit}>
        <div className="form-group-title">
          <label htmlFor="city">Название</label>
          <input type="text" id="city" required />
        </div>
        <div className="form-group-title">
          <label htmlFor="time-zone">Временная зона</label>
          <input type="number" id="time-zone" required />
        </div>
        <button>Добавить</button>
      </form>
    </div>
  );
};
