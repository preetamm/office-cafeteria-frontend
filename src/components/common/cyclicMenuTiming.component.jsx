
import React  from "react";

const CyclicMenuTiming = () => {
  return (
    <React.Fragment>
      <div className="cycle-menu-time  mobileL:text-center  max-w-500 text-left text-sm font-medium bg-white mobileS:mx-2 laptop:min-w-400 mx-6 py-2 px-3 rounded-lg">
        <div className="breakfast-time bg-white  ">
          Breakfast Menu available at
        </div>
        <div className="luch/dinner-time ">Lunch/Dinner Menu available at</div>
      </div>
    </React.Fragment>
  );
};

export default CyclicMenuTiming;
