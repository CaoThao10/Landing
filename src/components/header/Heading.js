import React from "react";
import { Link } from "react-router-dom";

const Heading = () => {
  return (
    <div className="heading w-fit justify-center px-[100px] h-[70px] border-b bg-white">
      <div className="flex gap-x-10 h-full items-center text-2xl text-[#74e1fa] font-semibold">
        <h3>SeaSoftService</h3>
      </div>
      <div className="flex gap-x-10 h-full items-center text-xl text-[#86d9ec] font-semibold">
        <Link to="/">Trang chủ</Link>
        {/* <Link to="/">Giới thiệu</Link> */}
        <Link to="/price">Bảng giá</Link>
        <Link to="/contact">Liên hệ</Link>
        <div className="flex items-center gap-x-1">
          <img
            className="h-[30px] w-[30px] object-cover rounded-full"
            src="/flag.png"
            alt=""
          />
          <span className="border h-[25px] border-[#bcbcbc]"></span>
          <img
            className="h-[30px] w-[30px] object-cover rounded-full"
            src="/flag1.svg"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Heading;
