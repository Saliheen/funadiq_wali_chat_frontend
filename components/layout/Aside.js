import { useRouter } from "next/router";
import React, { useState } from "react";


const linksList = [
  {
    title: "Dashboard",
    active_icon: "dashboardactive.png",
    none_active_icon: "dashboardnonactive.png",
    path: "/",
    relatedPaths: ["/"],
  },
  {
    title: "Messages",
    active_icon: "messagesactive.png",
    none_active_icon: "messagesnonactive.png",
    path: "/messages",
    relatedPaths: [
      "/messages",
      "/selectusers",
      "/uploadfile",
      "/uploadimage",
      "/contacts",
    ],
  },
  {
    title: "Compaigns",
    active_icon: "compaignactive.png.png",
    none_active_icon: "compaignnonactive.png.png",
    path: "/compaigns",
    relatedPaths: [ "/compaigns"],
  },
  {
    title: "Settings",
    active_icon: "settingsactive.png",
    none_active_icon: "settings.png",
    path: "/settings",
    relatedPaths: [ "/settings"],
  },
];

export default function Aside() {
  const router = useRouter();
  return (
    <div className="w-full min-h-screen h-full self-stretch bg-[#F6F5F8]  fixed top-0">
      <div className="pl-[40px] pt-[60px] mb-[80px]">
        <img src="./logo.png" alt="" className="w-[180px] h-[36px]" />
      </div>
      <div>
        {linksList.map((item, index) => (
          <ListItem
            data={item}
            isSelected={item.relatedPaths.includes(router.asPath)}
            key={index + ""}
            callBack={() => router.push(item.path)}
          />
        ))}
      </div>
    </div>
  );
}

const ListItem = (props) => {
  const { data, isSelected, callBack } = props;
  return (
    <div
      className={`w-full relative h-[60px] flex flex-row items-center justify-start mb-[10px] cursor-pointer ${
        isSelected && "bg-[#EDEEF7] transform duration-500"
      }`}
      onClick={callBack}
    >
      <div
        className={`h-[60px] w-[4px] rounded-tr-[4px] rounded-br-[5px] transform duration-200 ${
          isSelected ? "bg-[#626FC1]" : "bg-white "
        } `}
      ></div>
      <img
        src={isSelected ? data.active_icon : data.none_active_icon}
        alt=""
        className="ml-[35px] mr-[20px]"
      />
      <h1
        className={`text-base font-reem-kufi font-medium ${
          isSelected ? "text-[#626FC1]" : "text-[#838383]"
        }`}
      >
        {data.title}
      </h1>
    </div>
  );
};
