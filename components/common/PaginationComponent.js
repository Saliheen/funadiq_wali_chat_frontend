import React,{useState,useEffect} from "react";

const PaginationComponent = ({ totalPages, currentPage}) => {
  const [pagesArray,setPagesArray] = useState([])

  useEffect(()=>{
    let arr = new Array(totalPages).fill(null)
 setPagesArray(arr.map((item,index)=>index+1))

  },[totalPages])

  return (
    <div className="flex flex-row items-center space-x-[5px]">
      {pagesArray.map((item, index) => {
        if (pagesArray?.length<10) {
          return <Item pageNumber={index + 1} />;
        }
        else{
          
        }
       
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
