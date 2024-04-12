import React from "react";

const Banner = () => {
  return (
    <div className="mt-[100px] flex  flex-col mx-[150px] mb-10">
      <div className="flex items-center rounded-2xl h-[500px] bg-[#dafff7] w-full">
        <div>
          <img src="/15.png" alt="" />
        </div>
        <div className="flex flex-col ">
          <span className="text-4xl font-semibold py-5 text-[#4b50c6]">
            Hãy liên hệ với chúng tôi bất cứ lúc nào!
          </span>
          <span className="py-2 text-xl">
            Cần giúp đỡ hoặc có bất kỳ câu hỏi?
          </span>
          <span className="text-xl"> Liên lạc với chúng tôi ngay!</span>
        </div>
      </div>
      <div className="grid grid-cols-2 mt-10">
        <div className="flex flex-col items-center">
          <span className="text-2xl text-[#4b50c6]">Văn phòng tại Hà Nội</span>
          <div className="flex flex-col gap-3 mt-5">
            <span className="flex gap-2">
              <svg
                width="14"
                height="20"
                viewBox="0 0 14 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M7 9.5C6.33696 9.5 5.70107 9.23661 5.23223 8.76777C4.76339 8.29893 4.5 7.66304 4.5 7C4.5 6.33696 4.76339 5.70107 5.23223 5.23223C5.70107 4.76339 6.33696 4.5 7 4.5C7.66304 4.5 8.29893 4.76339 8.76777 5.23223C9.23661 5.70107 9.5 6.33696 9.5 7C9.5 7.3283 9.43534 7.65339 9.3097 7.95671C9.18406 8.26002 8.99991 8.53562 8.76777 8.76777C8.53562 8.99991 8.26002 9.18406 7.95671 9.3097C7.65339 9.43534 7.3283 9.5 7 9.5ZM7 0C5.14348 0 3.36301 0.737498 2.05025 2.05025C0.737498 3.36301 0 5.14348 0 7C0 12.25 7 20 7 20C7 20 14 12.25 14 7C14 5.14348 13.2625 3.36301 11.9497 2.05025C10.637 0.737498 8.85652 0 7 0Z"
                  fill="black"
                />
              </svg>
              Yên Nghĩa - Hà Đông - Hà Nội
            </span>
            <span className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 12C21.9995 9.348 20.9457 6.80477 19.0705 4.92952C17.1952 3.05427 14.652 2.00053 12 2V4C13.5821 4.00036 15.1286 4.46964 16.4441 5.34854C17.7596 6.22744 18.7851 7.47653 19.391 8.938C19.7931 9.90877 20.0001 10.9492 20 12H22ZM2 10V5C2 4.73478 2.10536 4.48043 2.29289 4.29289C2.48043 4.10536 2.73478 4 3 4H8C8.26522 4 8.51957 4.10536 8.70711 4.29289C8.89464 4.48043 9 4.73478 9 5V9C9 9.26522 8.89464 9.51957 8.70711 9.70711C8.51957 9.89464 8.26522 10 8 10H6C6 12.1217 6.84285 14.1566 8.34315 15.6569C9.84344 17.1571 11.8783 18 14 18V16C14 15.7348 14.1054 15.4804 14.2929 15.2929C14.4804 15.1054 14.7348 15 15 15H19C19.2652 15 19.5196 15.1054 19.7071 15.2929C19.8946 15.4804 20 15.7348 20 16V21C20 21.2652 19.8946 21.5196 19.7071 21.7071C19.5196 21.8946 19.2652 22 19 22H14C7.373 22 2 16.627 2 10Z"
                  fill="black"
                />
                <path
                  d="M17.543 9.704C17.8449 10.4318 18.0002 11.2121 18 12H16.2C16.2001 11.4484 16.0916 10.9022 15.8806 10.3926C15.6695 9.88295 15.3602 9.41989 14.9701 9.02986C14.5801 8.63983 14.1171 8.33046 13.6074 8.11944C13.0978 7.90841 12.5516 7.79987 12 7.8V6C13.1867 6.00006 14.3466 6.352 15.3333 7.0113C16.3199 7.6706 17.0889 8.60767 17.543 9.704Z"
                  fill="black"
                />
              </svg>
              034 333 5657
            </span>
            <span className="flex gap-2">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20 4H4C2.9 4 2.01 4.9 2.01 6L2 18C2 19.1 2.9 20 4 20H20C21.1 20 22 19.1 22 18V6C22 4.9 21.1 4 20 4ZM20 8L12 13L4 8V6L12 11L20 6V8Z"
                  fill="black"
                />
              </svg>
              contact@gmail.com
            </span>
          </div>
        </div>
        <div>
          <span className="text-2xl text-[#4b50c6]">
            Gửi tin nhắn cho chúng tôi
          </span>
          <form action="" className="flex flex-col gap-5 mt-5">
            <input
              className="w-[500px] border rounded-sm py-1 px-2 outline-none"
              type="text"
              placeholder=" Tên của bạn"
            />
            <input
              className="w-[500px] border rounded-sm py-1 px-2 outline-none"
              type="text"
              placeholder="Email của bạn"
            />
            <input
              className="w-[500px] border rounded-sm py-1 px-2 outline-none"
              type="text"
              placeholder="Chủ đề"
            />
            <textarea
              className="w-[500px] border rounded-sm py-1 px-2 outline-none"
              name=""
              id=""
              cols="30"
              rows="10"
              placeholder="Nội dung"
            ></textarea>
            <div>
              <button className="bg-blue-400 hover:bg-blue-300 px-3 py-1 rounded-lg text-white">
                Gửi ngay
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Banner;
