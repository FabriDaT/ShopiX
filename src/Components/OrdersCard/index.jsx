import React from "react";
import { dateTime } from "../../utils";

const OrdersCard = (props) => {
  const { totalPrice, totalProducts } = props;

  return (
    <div className="flex justify-between items-center mb-4 border border-black rounded-lg p-4 w-80">
      <div className="flex justify-between w-full">
        <p className="flex flex-col">
          <span className="font-light"> {dateTime()} </span>
          <span className="font-light"> {totalProducts} articles </span>
        </p>
        <p className="flex items-center gap-2">

            <span className="font-medium 2xl:"> ${totalPrice} </span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m8.25 4.5 7.5 7.5-7.5 7.5"
          />
        </svg>
        </p>
      
      </div>
    </div>
  );
};

export default OrdersCard;
