import React from "react";
import { render } from "react-dom";
import { TourProvider } from "@reactour/tour";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import App from "./App";
import steps from "./steps";

function MainApp() {
  const disableBody = (target) => disableBodyScroll(target);
  const enableBody = (target) => enableBodyScroll(target);
  return (
    <TourProvider
      steps={steps}
      afterOpen={disableBody}
      beforeClose={enableBody}
      showBadge={false}
      close={"disabled"}
>
      <App />
    </TourProvider>
  );
}

render(<MainApp />, document.getElementById("root"));
