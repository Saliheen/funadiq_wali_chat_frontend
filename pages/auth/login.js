import React, { useState } from "react";
import Loader from "../../components/common/Loader";
import API from "../../utils/API";
import getHeader from "../../utils/getHeader";
import swal from "sweetalert";
import {setCookie} from 'cookies-next'
import { useRouter } from "next/router";

export default function login() {

  const router = useRouter()

  const [paylaod, setPayload] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);

  const loginUser = async () => {
    const header = getHeader();
    setLoading(true);
    setErrors({
      email: paylaod.email?.length < 2 ? "Email is required" : "",
      password: paylaod.password.length < 2 ? "Password is required" : "",
    });

    if (paylaod.email.length < 2 || paylaod.password.length < 2) {
      setLoading(false);
      return;
    }

    try {
      const { data } = await API.post("auth/login", paylaod, header);
      setLoading(false);
      if (data?.msgErr) {
        swal(data?.msgErr)
      }
      else{
        setCookie('FUNADIQWALICHATCLONE',data?.data)
        router.push("/")
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return (
    <>
      <div className="md:h-1/2 flex flex-col bg-white shadow-lg rounded-lg md:px-4 md:py-5 px-3 py-3 relative items-center">
        <h1 className=" font-reem-kufi text-[#626FC1] text-2xl ">Login</h1>
        <input
          className="w-[360px] h-[45px] shadow-sm rounded-lg  border border-gray-300 focus:border focus:border-blue-300  outline-none mt-[25px] px-2"
          placeholder="Enter email"
          value={paylaod.email}
          onChange={(e) =>
            setPayload((prev) => {
              return { ...prev, email: e.target.value };
            })
          }
        />
        <div className="  self-stretch">
          <h1 className="text-start text-red-400 text-md font-reem-kufi font-light">
            {errors?.email}
          </h1>
        </div>
        <input
          className="w-[360px] h-[45px] shadow-sm rounded-lg  border border-gray-300 focus:border focus:border-blue-300  outline-none mt-[15px] px-2"
          placeholder="Enter password"
          onChange={(e) =>
            setPayload((prev) => {
              return { ...prev, password: e.target.value };
            })
          }
        />
        <div className="  self-stretch">
          <h1 className="text-start text-red-400 text-md font-reem-kufi font-light">
            {errors?.password}
          </h1>
        </div>
        <div
          className="cursor-pointer h-[45px] bg-[#626FC1] mt-[25px] w-[360px] rounded-lg flex items-center justify-center"
          onClick={() => loginUser()}
        >
          <h1 className="text-white font-reem-kufi text-lg">Login</h1>
        </div>
      </div>
      {loading && <Loader />}
    </>
  );
}
