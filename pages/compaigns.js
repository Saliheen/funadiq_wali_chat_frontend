import React, { useState, useEffect } from "react";
import SearchCompaign from "../components/compaigns/SearchCompaign";
import PageCountInput from "../components/contacts/PageCountInput";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import Loader from "../components/common/Loader";
import getHeader from "../utils/getHeader";
import API from "../utils/API";
import useSWR from "swr";

export default function compaigns() {
  const header = getHeader();

  const [selected, setSeelected] = useState(1);
  const [comapignsList, setCompaignsList] = useState([]);
  const [loading,setLoading] = useState(false)


  const {data,mutate,isLoading} = useSWR("https://funadiq-wali-chat-backend-me3cjxa1p-farooq-funadiqcom-s-team.vercel.app/compaign/get_compaigns_list", (apiURL) =>
  fetch(apiURL).then((res) => res.json())
);

 const searchCompaign = (text) => {

   if(!text || text?.length == 0){
    setCompaignsList(data?.data)
   }
   else if (Array.isArray(data?.data)){
       let filteredData = data.data.filter((item)=>{
        return item.name.toLowerCase().search(text.toLowerCase())!==-1
       })
       setCompaignsList(filteredData)
   }
 }

  const startCompaign = async (status, id) => {
    setLoading(true)
    try {
      const paylaod = { status, id };
      const { data } = await API.post(
        "compaign/start_compaign",
        paylaod,
        header
      );
      mutate()
      setLoading(false)
    } catch (error) {
      console.log(error);
      setLoading(false)
    }
  };

  useEffect(() => {
  setCompaignsList(data?.data)
  }, [data]);

  return (
    <>
      <div className="max-h-screen h-full relative flex flex-col   p-[40px] overflow-y-auto">
        <div className="flex-1 self-stretch border-[2px] border-[#838383] border-dashed  rounded-lg relative">
          {/* Heading start */}
          <div className="flex flex-row justify-between items-center px-[40px] pt-[40px] ">
            <h1 className="text-[#626FC1]  text-2xl font-medium">Compaigns</h1>
            <div className="flex gap-[10px]">
              <SearchCompaign
                callBack={(text) => {
                searchCompaign(text)
                }}
              />
              {/* <PageCountInput
                count={perPageCount}
                callBack={(c) => setPerPageCount(c)}
              /> */}
            </div>
          </div>
          {/* Heading end */}
          {/* Table start */}
          <div className="px-[40px] my-[30px]">
            <div>
              <Table key={"abc"} className="table-fixed">
                <Thead>
                  <Tr>
                    <Th className="table_th">S.No</Th>
                    <Th className="table_th">Name</Th>
                    <Th className="table_th">Status</Th>
                    <Th className="table_th">Contacts</Th>
                    <Th className="table_th">Start</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {Array.isArray(comapignsList) &&
                    comapignsList.map((item, index) => {
                      return (
                        <Tr key={index + ""}>
                          <Td className="border-b  border-dashed border-[#838383] font-reem-kufi text-base text-[#838383] py-4 font-normal ">
                            {index + 1}
                          </Td>
                          <Td className="border-b  border-dashed border-[#838383] font-reem-kufi text-base text-[#838383] font-normal">
                            {item?.name}
                          </Td>
                          <Td
                            className={`border-b  border-dashed border-[#838383] font-reem-kufi text-base ${
                              item?.status == "COMPLETED"
                                ? "text-green-500"
                                : item?.status == "PENDING"
                                ? "text-yellow-500"
                                : "text-[#838383]"
                            } font-normal`}
                          >
                            {item?.status}
                          </Td>
                          <Td className="border-b  border-dashed border-[#838383] font-reem-kufi text-base text-[#838383] font-normal">
                            {item?.totalContacts}
                          </Td>
                          <Td className="border-b  border-dashed border-[#838383] font-reem-kufi text-base text-[#838383] font-normal">
                            {item?.status == "COMPLETED" ? (
                              <CheckIcon />
                            ) : (
                              <RadioButton
                                status={item?.status == "STARTED"}
                                callBack={() => {
                                  setSeelected(selected == index ? -1 : index);
                                  startCompaign(
                                    item?.status == "STARTED"
                                      ? "PENDING"
                                      : "STARTED",
                                    item?._id
                                  );
                                }}
                              />
                            )}
                          </Td>
                        </Tr>
                      );
                    })}
                </Tbody>
              </Table>
            </div>
          </div>
          {/* Table end */}
        </div>
      </div>
      {(loading || isLoading) && <Loader />}
    </>
  );
}

const RadioButton = ({ status, callBack }) => {
  // bg-[#67A6D7]103, 166, 215, 1)
  return (
    <div
      className={`w-[60px] h-[23px] rounded-full  relative cursor-pointer
   transform transition-all duration-300 shadow-sm bg-[#EDEEF7] ${
     status ? "opacity-100" : "opacity-50"
   }`}
      onClick={() => callBack()}
    >
      <div
        className={`h-[23px] w-[23px] transform transition-all duration-300 rounded-full bg-[#40B98B] shadow-sm ${
          status ? "translate-x-[38px]" : "translate-x-0"
        } `}
      ></div>
    </div>
  );
};

const CheckIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.5}
      stroke="currentColor"
      className="w-8 h-8 text-green-400"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M9 12.75 11.25 15 15 9.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0z"
      />
    </svg>
  );
};
