import React from "react";

const Footer1 = () => {
  return (
    <div className="h-[200px] bg-[#f4f4f4] ">
      <div className="h-[200px] absolute  w-full rounded-t-full  overflow-hidden">
        <img
          className=" h-full w-full object-cover opacity-80"
          src="/9.jpg"
          alt=""
        />
      </div>
      <div className="relative grid grid-cols-3 items-center gap-5">
        <div className="flex flex-col pl-[200px]">
          <span className=" pt-[80px] text-2xl font-bold text-[#4891ff]">
            SeaSoftService
          </span>
          <span className=" text-lg  text-[#131313]">
            Chuyên gia cung cấp mã nguồn
          </span>
        </div>
      </div>
    </div>
  );
};

export default Footer1;
