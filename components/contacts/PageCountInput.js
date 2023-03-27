import React from 'react'

const PageCountInput = ({count,callBack}) => {
  return (
    <div
      className="w-[150px] relative overflow-hidden"
      style={{
        border: "1px dashed #838383",
        "border-radius": "7px",
      }}
    >
      <input
        placeholder="Per Page"
        className="w-full h-full outline-none border-none active:border-none px-4 py-2"
        type={'number'}
        value = {count}
        onChange = {e => callBack(e.target.value)}
        min = {5}
        max = {100}
      />
    </div>
  );
};

export default PageCountInput
