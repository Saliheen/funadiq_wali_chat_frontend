import React, { useState, useEffect } from "react";

const SearchUser = (props) => {
  return (
    <div
      className="w-[200px] relative overflow-hidden"
      style={{
        border: "1px dashed #838383",
        "border-radius": "7px",
      }}
    >
      <input
        placeholder="Search user..."
        className="w-full h-full outline-none border-none active:border-none px-4 py-2"
      />
    </div>
  );
};

export default SearchUser;
