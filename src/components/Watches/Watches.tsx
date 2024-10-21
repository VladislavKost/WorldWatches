import ClearIcon from "@mui/icons-material/Clear";
import { WatchesItem } from "../WatchesItem";

import "./Watches.css";

export const Watches = ({
  data,
  setWatchesList,
}: {
  data: { id: number; city: string; timeZone: string };
  setWatchesList: {
    (
      data: {
        id: number;
        city: string;
        timeZone: string;
      }[]
    ): void;
  };
}) => {
  const handleRemoveWatchClick = (id: number) => {
    setWatchesList((prevList) =>
      prevWatchesList.filter((watch) => watch.id !== id)
    );
  };

  return (
    <div className="watch-container">
      <ClearIcon
        className="watch-remove"
        onClick={() => {
          handleRemoveWatchClick(data.id);
        }}
      />
      <WatchesItem data={data} />
      <h3 className="city-name">{data.city}</h3>
    </div>
  );
};
