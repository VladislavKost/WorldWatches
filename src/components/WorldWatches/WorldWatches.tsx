import { useState } from "react";

import { SetNewWatchForm } from "../SetNewWatchForm";
import { Watches } from "../Watches";

import "./WorldWatches.css";

export const WorldWatches = () => {
  const [watchesList, setWatchesList] = useState<
    { id: number; city: string; timeZone: string }[]
  >([]);

  return (
    <div>
      <SetNewWatchForm
        watchesList={watchesList}
        setWatchesList={setWatchesList}
      />
      <div className="watches-container">
        {watchesList.map((watch) => (
          <Watches
            key={watch.id}
            data={watch}
            watchesList={watchesList}
            setWatchesList={setWatchesList}
          />
        ))}
      </div>
    </div>
  );
};
