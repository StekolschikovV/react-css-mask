import React, { useState } from "react";

import Demo from "./Demo";
import { useTour } from "@reactour/tour";
import "./styles.css";

function App() {
  const { setIsOpen } = useTour();
  const [isShowingMore, setIsShowingMore] = useState(false);

  return (
    <Demo
      openTour={() => setIsOpen(true)}
      toggleShowMore={() => setIsShowingMore((m) => !m)}
      isShowingMore={isShowingMore}
    />
  );
}

export default App;
