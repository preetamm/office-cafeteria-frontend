import React from "react";
import { MobileView, BrowserView } from "react-device-detect";

const ComponentSelector = ({mobileView, browserView}) => {
  return (
    <React.Fragment>
      <MobileView>{mobileView}</MobileView>
      <BrowserView>{browserView}</BrowserView>
    </React.Fragment>
  );
};

export default ComponentSelector;
