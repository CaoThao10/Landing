import React from "react";

const Banner = () => {
  return (
    <div className=" mt-[100px]">
      <div className="grid grid-cols-2 items-center justify-center px-[150px] bg-[#dee5ff] mx-[100px] rounded-3xl">
        <div className="flex flex-col gap-3 pl-[200px]">
          <span className="text-4xl font-semibold text-[#6161b1]">
            Sea Soft Service
          </span>
          <span className="text-2xl text-[#6161b1]">
            Bảng giá thiết kế website trọn gói
          </span>
          <span className="text-[#6161b1]">Không phát sinh chi phí ngầm.</span>
        </div>
        <div>
          <img src="/10.png" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Banner;
