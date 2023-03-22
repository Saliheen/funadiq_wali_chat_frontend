import React from "react";
const d = [1, 2, 3, 4, 5];
const PaginationComponent = () => {
  return (
    <div className="flex flex-row items-center space-x-[5px]">
      {d.map((item, index) => {
        return <Item pageNumber={index + 1} />;
      })}
    </div>
  );
};

const Item = ({ pageNumber }) => {
  return (
    <div
      className="h-[44px] w-[44px] cursor-pointer flex items-center justify-center "
      style={{
        border: "1px dashed #838383",
        "border-radius": " 7px",
      }}
    >
      <h1 className="text-lg font-semibold text-[#838383]">{pageNumber}</h1>
    </div>
  );
};

export default PaginationComponent;
