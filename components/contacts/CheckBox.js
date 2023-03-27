import React from "react";

const CheckBox = ({ isSelected, callBack }) => {
  return (
    <div
      className={`h-[18px] w-[18px] border-[1px] border-black rounded-md cursor-pointer flex items-center justify-center ${
        isSelected && "bg-[#67A6D7]"
      }`}
      onClick={() => callBack()}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-5 h-5 text-white"
    
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="m4.5 12.75 6 6 9-13.5"
        />
      </svg>
    </div>
  );
};

export default CheckBox;
