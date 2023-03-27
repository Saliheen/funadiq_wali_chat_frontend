import React from "react";
import Aside from "./Aside";

export default function Layout(props) {
  return (
    <div className="min-h-screen w-screen bg-white flex flex-row ">
      <div className="w-72 relative self-stretch ">
        <Aside />
      </div>
      <div className="flex-1 bg-white self-stretch relative scrollbar-hide">
        {props.children}
      </div>
    </div>
  );
}
