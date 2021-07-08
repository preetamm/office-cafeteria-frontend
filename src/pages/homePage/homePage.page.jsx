import React from "react";
import ComponentSelector from "../../components/utils/ComponentSelector.component";
import HomePageMobile from "./homepageMobile.page";
import HomePageDesktop from "./homePageDesktop.page";

const HomePage = () => {
  return (
    <div className="home-page relative  h-92screen ">
      <ComponentSelector
        mobileView={<HomePageMobile></HomePageMobile>}
        browserView={<HomePageDesktop></HomePageDesktop>}
      ></ComponentSelector>
    </div>
  );
};

/* <div className="notifier-bar fixed  bg-white py-2 w- h-4 flex items-center bottom-0  w-100screen ">
        <div className="amount-group w-2/4">
          <h3 className="text-xs">Subtotal</h3>
          <h2 className="text-base font-semibold">$9.5</h2>
        </div>
        <div className="button text-white px-5 w-2/4">
          <Button
            label="ADD TO BAG"
            className="bg-primary px-2 py-2 rounded-lg text-danger text-base"
          ></Button>
        </div>
      </div>
      */
export default HomePage;
