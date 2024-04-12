import React from "react";

const Banner = () => {
  return (
    <div className="h-[650px] w-full mt-[70px]">
      <div className="h-[650px] w-full absolute">
        <img className="h-[650px] w-full opacity-30" src="/4.png" alt="" />
      </div>
      <div className="relative z-10 top-[50px] mx-[150px] ">
        <div className=" h-[480px] bg  rounded-xl"></div>
      </div>
      <div className="relative h-[300px] z-10 top-[-380px] mx-[150px] ">
        <div className=" grid grid-cols-2 items-center  gap-x-20">
          <div className="pl-[50px] flex flex-col gap-y-5 ">
            <span className="text-2xl text-[#4b26ab]">
              <strong>Chào mừng đến với Sea Soft Service!</strong> <br />
            </span>
            <span className="text-xl text-[#4b26ab]">
              Chúng tôi là chuyên gia trong việc cung cấp mã nguồn và dịch vụ
              code thuê cho trang web của bạn. Với kinh nghiệm và sự linh hoạt,
              chúng tôi sẽ giúp bạn tạo ra các giải pháp tùy chỉnh độc đáo để
              nâng cao hiệu suất kinh doanh của bạn.
              <br />
              Hãy để chúng tôi giúp bạn chạm tới thành công!
            </span>
          </div>

          <div>
            <img src="/5.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
