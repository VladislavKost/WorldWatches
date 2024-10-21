import ClearIcon from "@mui/icons-material/Clear";
import { WatchesItem } from "../WatchesItem";

import "./Watches.css";

export const Watches = ({
  data,
  watchesList,
  setWatchesList,
}: {
  data: { id: number; city: string; timeZone: string };
  watchesList: { id: number; city: string; timeZone: string }[];
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
    const newList = watchesList.filter((watch) => watch.id !== id);
    setWatchesList(newList);
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
