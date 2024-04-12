import React from "react";

const Criteria = () => {
  return (
    <div className="flex flex-col items-center gap-y-10 mt-[100px]">
      <div className="w-full flex flex-col gap-5 items-center text-center">
        <span className="text-3xl font-semibold text-[#5e82d4]">
          Những tiêu chí cần thiết mang lại hiệu quả khi thiết kế website
        </span>
        <span>
          Với tất cả công ty cung cấp dịch vụ thiết kế web uy tín đều có một vài
          điểm chung cơ bản trong tiêu chí thiết kế website như <br /> cấu trúc
          chuẩn SEO, tích hợp cổng thanh toán, hệ thống chatbox AI, thiết kế
          giao diện bắt mắt và hệ thống quản trị.
        </span>
      </div>
      <div className=" border border-t-white border-b-white  absolute border-l-zinc-400 border-r-zinc-400 w-[500px] h-[500px] rounded-full mt-[150px]">
        <div className="1 relative top-[10%] right-[-12%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M19.6 21L13.3 14.7C12.8 15.1 12.225 15.4167 11.575 15.65C10.925 15.8833 10.2333 16 9.5 16C7.68333 16 6.146 15.3707 4.888 14.112C3.63 12.8533 3.00067 11.316 3 9.5C2.99933 7.684 3.62867 6.14667 4.888 4.888C6.14733 3.62933 7.68467 3 9.5 3C11.3153 3 12.853 3.62933 14.113 4.888C15.373 6.14667 16.002 7.684 16 9.5C16 10.2333 15.8833 10.925 15.65 11.575C15.4167 12.225 15.1 12.8 14.7 13.3L21 19.6L19.6 21ZM9.5 14C10.75 14 11.8127 13.5627 12.688 12.688C13.5633 11.8133 14.0007 10.7507 14 9.5C13.9993 8.24933 13.562 7.187 12.688 6.313C11.814 5.439 10.7513 5.00133 9.5 5C8.24867 4.99867 7.18633 5.43633 6.313 6.313C5.43967 7.18967 5.002 8.252 5 9.5C4.998 10.748 5.43567 11.8107 6.313 12.688C7.19033 13.5653 8.25267 14.0027 9.5 14Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="2 relative top-[25%] right-[2%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.25 3.542C8.04795 3.67851 6.90786 4.14778 5.958 4.897L6.78 5.72C6.91248 5.86217 6.9846 6.05022 6.98117 6.24452C6.97775 6.43882 6.89903 6.62421 6.76162 6.76162C6.62421 6.89903 6.43882 6.97775 6.24452 6.98117C6.05022 6.9846 5.86217 6.91248 5.72 6.78L4.894 5.955C4.19247 6.83585 3.73577 7.8862 3.57 9H5.25C5.44891 9 5.63968 9.07902 5.78033 9.21967C5.92098 9.36032 6 9.55109 6 9.75C6 9.94891 5.92098 10.1397 5.78033 10.2803C5.63968 10.421 5.44891 10.5 5.25 10.5H3.525C3.68069 12.1049 4.4142 13.5986 5.589 14.703C5.73069 14.8399 5.81285 15.027 5.81771 15.2239C5.82258 15.4209 5.74976 15.6118 5.615 15.7555C5.48024 15.8992 5.29435 15.9841 5.09751 15.9919C4.90066 15.9996 4.70866 15.9296 4.563 15.797C3.023 14.354 2 12.226 2 9.943C2 5.551 5.587 2 10 2C14.413 2 18 5.55 18 9.943C17.998 11.0391 17.7731 12.1233 17.3388 13.1297C16.9046 14.1361 16.2701 15.0436 15.474 15.797C15.3283 15.9296 15.1363 15.9996 14.9395 15.9919C14.7426 15.9841 14.5568 15.8992 14.422 15.7555C14.2872 15.6118 14.2144 15.4209 14.2193 15.2239C14.2242 15.027 14.3063 14.8399 14.448 14.703C15.6148 13.5968 16.3362 12.1017 16.476 10.5H14.75C14.5511 10.5 14.3603 10.421 14.2197 10.2803C14.079 10.1397 14 9.94891 14 9.75C14 9.55109 14.079 9.36032 14.2197 9.21967C14.3603 9.07902 14.5511 9 14.75 9H16.43C16.006 6.134 13.677 3.875 10.75 3.542V4.75C10.75 4.94891 10.671 5.13968 10.5303 5.28033C10.3897 5.42098 10.1989 5.5 10 5.5C9.80109 5.5 9.61032 5.42098 9.46967 5.28033C9.32902 5.13968 9.25 4.94891 9.25 4.75V3.542ZM13.449 5.807C13.5399 5.73483 13.653 5.69651 13.769 5.69862C13.8851 5.70073 13.9967 5.74313 14.0849 5.81855C14.1731 5.89397 14.2323 5.99772 14.2524 6.11202C14.2725 6.22631 14.2522 6.34403 14.195 6.445L14.085 6.641C13.6829 7.3511 13.2782 8.05978 12.871 8.767C12.5455 9.33293 12.2154 9.89628 11.881 10.457C11.7557 10.6679 11.6277 10.8773 11.497 11.085C11.397 11.242 11.299 11.391 11.227 11.475C10.9687 11.7776 10.6007 11.9652 10.2041 11.9965C9.80745 12.0278 9.41461 11.9003 9.112 11.642C8.80939 11.3837 8.62179 11.0157 8.59047 10.6191C8.55915 10.2224 8.68668 9.82961 8.945 9.527C9.017 9.443 9.148 9.322 9.288 9.199C9.438 9.066 9.631 8.903 9.848 8.72C10.284 8.356 10.83 7.91 11.363 7.48C11.9975 6.96669 12.6342 6.45602 13.273 5.948L13.449 5.807Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="3 relative top-[40%] mt-10 right-[1%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.3 8.2L9.4 9.1L10.3 10L9.1 11.2L13.4 15.5C14 16.1 14.9 16.1 15.5 15.5C16.1 14.9 16.1 14 15.5 13.4L10.3 8.2ZM14.2 15C13.8 15 13.4 14.7 13.4 14.2C13.4 13.8 13.7 13.4 14.2 13.4C14.7 13.4 15 13.7 15 14.2C15 14.7 14.7 15 14.2 15ZM3.6 8L4.5 7.4L6 5.7L6.9 6.6L7.8 5.7L7.7 5.6C7.9 5.1 8 4.6 8 4C8 1.8 6.2 0 4 0C3.4 0 2.9 0.1 2.4 0.3L5.3 3.2L3.2 5.3L0.3 2.4C0.1 2.9 0 3.4 0 4C0 6.1 1.6 7.7 3.6 8Z"
                fill="black"
              />
              <path
                d="M7.9998 10.8L8.8998 10L7.9998 9.10001L13.6998 3.40001L14.8998 3.00001L15.9998 0.800006L15.2998 0.100006L12.9998 1.10001L12.4998 2.30001L6.8998 8.00001L5.9998 7.10001L5.1998 8.00001C5.1998 8.00001 5.9998 8.60001 5.0998 9.50001C4.5998 10 3.7998 9.40001 2.2998 10.9L0.199805 13C0.199805 13 -0.400195 14 0.799805 15.2C1.9998 16.4 2.9998 15.8 2.9998 15.8L5.0998 13.7C6.4998 12.3 5.9998 11.4 6.3998 11C7.2998 10.1 7.9998 10.8 7.9998 10.8ZM4.8998 10.4L5.5998 11.1L1.7998 14.9L1.0998 14.2L4.8998 10.4Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="4 relative top-[48%] mt-10 right-[-14%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="20"
              viewBox="0 0 16 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M5 5C5 4.20435 5.31607 3.44129 5.87868 2.87868C6.44129 2.31607 7.20435 2 8 2C8.79565 2 9.55871 2.31607 10.1213 2.87868C10.6839 3.44129 11 4.20435 11 5V7H5V5ZM3 7V5C3 3.67392 3.52678 2.40215 4.46447 1.46447C5.40215 0.526784 6.67392 0 8 0C9.32608 0 10.5979 0.526784 11.5355 1.46447C12.4732 2.40215 13 3.67392 13 5V7H15C15.2652 7 15.5196 7.10536 15.7071 7.29289C15.8946 7.48043 16 7.73478 16 8V17C16 17.7956 15.6839 18.5587 15.1213 19.1213C14.5587 19.6839 13.7956 20 13 20H3C2.20435 20 1.44129 19.6839 0.87868 19.1213C0.316071 18.5587 0 17.7956 0 17V8C0 7.73478 0.105357 7.48043 0.292893 7.29289C0.48043 7.10536 0.734784 7 1 7H3ZM9 13.5C9 13.1022 9.15804 12.7206 9.43934 12.4393C9.72064 12.158 10.1022 12 10.5 12H10.51C10.9078 12 11.2894 12.158 11.5707 12.4393C11.852 12.7206 12.01 13.1022 12.01 13.5V13.51C12.01 13.9078 11.852 14.2894 11.5707 14.5707C11.2894 14.852 10.9078 15.01 10.51 15.01H10.5C10.1022 15.01 9.72064 14.852 9.43934 14.5707C9.15804 14.2894 9 13.9078 9 13.51V13.5Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="5 relative top-[-34%] left-[81%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 21V19C6 17.9391 6.42143 16.9217 7.17157 16.1716C7.92172 15.4214 8.93913 15 10 15H12.5M19.001 21C18.4706 21 17.9619 20.7893 17.5868 20.4142C17.2117 20.0391 17.001 19.5304 17.001 19C17.001 18.4696 17.2117 17.9609 17.5868 17.5858C17.9619 17.2107 18.4706 17 19.001 17M19.001 21C19.5314 21 20.0401 20.7893 20.4152 20.4142C20.7903 20.0391 21.001 19.5304 21.001 19C21.001 18.4696 20.7903 17.9609 20.4152 17.5858C20.0401 17.2107 19.5314 17 19.001 17M19.001 21V22.5M19.001 17V15.5M22.032 17.25L20.733 18M17.27 20L15.97 20.75M15.97 17.25L17.27 18M20.733 20L22.033 20.75M8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11C13.0609 11 14.0783 10.5786 14.8284 9.82843C15.5786 9.07828 16 8.06087 16 7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7Z"
                stroke="black"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="6 relative top-[-19%] left-[94%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="20"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_93_13)">
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M11.2502 5.5C11.7996 5.49999 12.3365 5.33539 12.7915 5.02744C13.2465 4.71948 13.5988 4.28229 13.8031 3.77222C14.0073 3.26215 14.0541 2.7026 13.9373 2.16571C13.8206 1.62882 13.5457 1.13921 13.1481 0.760001C12.7505 0.380792 12.2484 0.129373 11.7066 0.038161C11.1648 -0.053051 10.6081 0.0201257 10.1083 0.248256C9.60844 0.476387 9.1884 0.849012 8.90232 1.31809C8.61623 1.78716 8.47721 2.33118 8.50318 2.88L4.50318 4.88C4.10104 4.54755 3.61262 4.33636 3.09496 4.2711C2.57729 4.20584 2.05174 4.28919 1.57967 4.51142C1.1076 4.73366 0.70849 5.08561 0.428951 5.52617C0.149412 5.96674 0.000976563 6.47774 0.000976562 6.9995C0.000976562 7.52127 0.149412 8.03227 0.428951 8.47283C0.70849 8.9134 1.1076 9.26534 1.57967 9.48758C2.05174 9.70982 2.57729 9.79317 3.09496 9.7279C3.61262 9.66264 4.10104 9.45145 4.50318 9.119L8.50318 11.119C8.47286 11.7593 8.66716 12.39 9.0525 12.9023C9.43783 13.4145 9.99 13.776 10.6136 13.9244C11.2372 14.0728 11.893 13.9986 12.4677 13.7148C13.0425 13.431 13.5 12.9554 13.7613 12.37C14.0226 11.7847 14.0712 11.1265 13.8987 10.5092C13.7262 9.8918 13.3435 9.35409 12.8167 8.98893C12.2899 8.62378 11.6521 8.45412 11.0135 8.50927C10.3749 8.56443 9.77558 8.84093 9.31918 9.291L5.47518 7.37C5.5082 7.12444 5.5082 6.87556 5.47518 6.63L9.32018 4.708C9.81718 5.198 10.4992 5.5 11.2512 5.5H11.2502Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_93_13">
                  <rect width="14" height="14" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className="7 relative top-[-4%] mt-10 left-[94%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 48 48"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M37.856 20V28M27.464 38L30.928 36L34.392 34M20.536 38L17.071 36L13.607 34M10.144 20V28M13.607 14L17.072 12L20.536 10M27.464 10L30.928 12L34.392 14"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M24 44C25.0609 44 26.0783 43.5786 26.8284 42.8284C27.5786 42.0783 28 41.0609 28 40C28 38.9391 27.5786 37.9217 26.8284 37.1716C26.0783 36.4214 25.0609 36 24 36C22.9391 36 21.9217 36.4214 21.1716 37.1716C20.4214 37.9217 20 38.9391 20 40C20 41.0609 20.4214 42.0783 21.1716 42.8284C21.9217 43.5786 22.9391 44 24 44ZM24 12C25.0609 12 26.0783 11.5786 26.8284 10.8284C27.5786 10.0783 28 9.06087 28 8C28 6.93913 27.5786 5.92172 26.8284 5.17157C26.0783 4.42143 25.0609 4 24 4C22.9391 4 21.9217 4.42143 21.1716 5.17157C20.4214 5.92172 20 6.93913 20 8C20 9.06087 20.4214 10.0783 21.1716 10.8284C21.9217 11.5786 22.9391 12 24 12ZM24 28C25.0609 28 26.0783 27.5786 26.8284 26.8284C27.5786 26.0783 28 25.0609 28 24C28 22.9391 27.5786 21.9217 26.8284 21.1716C26.0783 20.4214 25.0609 20 24 20C22.9391 20 21.9217 20.4214 21.1716 21.1716C20.4214 21.9217 20 22.9391 20 24C20 25.0609 20.4214 26.0783 21.1716 26.8284C21.9217 27.5786 22.9391 28 24 28ZM38 20C39.0609 20 40.0783 19.5786 40.8284 18.8284C41.5786 18.0783 42 17.0609 42 16C42 14.9391 41.5786 13.9217 40.8284 13.1716C40.0783 12.4214 39.0609 12 38 12C36.9391 12 35.9217 12.4214 35.1716 13.1716C34.4214 13.9217 34 14.9391 34 16C34 17.0609 34.4214 18.0783 35.1716 18.8284C35.9217 19.5786 36.9391 20 38 20ZM38 36C39.0609 36 40.0783 35.5786 40.8284 34.8284C41.5786 34.0783 42 33.0609 42 32C42 30.9391 41.5786 29.9217 40.8284 29.1716C40.0783 28.4214 39.0609 28 38 28C36.9391 28 35.9217 28.4214 35.1716 29.1716C34.4214 29.9217 34 30.9391 34 32C34 33.0609 34.4214 34.0783 35.1716 34.8284C35.9217 35.5786 36.9391 36 38 36ZM10 20C11.0609 20 12.0783 19.5786 12.8284 18.8284C13.5786 18.0783 14 17.0609 14 16C14 14.9391 13.5786 13.9217 12.8284 13.1716C12.0783 12.4214 11.0609 12 10 12C8.93913 12 7.92172 12.4214 7.17157 13.1716C6.42143 13.9217 6 14.9391 6 16C6 17.0609 6.42143 18.0783 7.17157 18.8284C7.92172 19.5786 8.93913 20 10 20ZM10 36C11.0609 36 12.0783 35.5786 12.8284 34.8284C13.5786 34.0783 14 33.0609 14 32C14 30.9391 13.5786 29.9217 12.8284 29.1716C12.0783 28.4214 11.0609 28 10 28C8.93913 28 7.92172 28.4214 7.17157 29.1716C6.42143 29.9217 6 30.9391 6 32C6 33.0609 6.42143 34.0783 7.17157 34.8284C7.92172 35.5786 8.93913 36 10 36Z"
                stroke="black"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </div>
        </div>
        <div className="8 relative top-[3%] mt-10 left-[79%]">
          <div className="bg-blue-400  w-[35px]  h-[35px] flex items-center justify-center rounded-full">
            <svg
              width="24"
              height="24"
              viewBox="0 0 640 512"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M64 96C64 60.7 92.7 32 128 32H512C547.3 32 576 60.7 576 96V352H512V96H128V352H64V96ZM0 403.2C0 392.6 8.6 384 19.2 384H620.8C631.4 384 640 392.6 640 403.2C640 445.6 605.6 480 563.2 480H76.8C34.4 480 0 445.6 0 403.2ZM281 209L250 240L281 271C290.4 280.4 290.4 295.6 281 304.9C271.6 314.2 256.4 314.3 247.1 304.9L199.1 256.9C189.7 247.5 189.7 232.3 199.1 223L247.1 175C256.5 165.6 271.7 165.6 281 175C290.3 184.4 290.4 199.6 281 208.9V209ZM393 175L441 223C450.4 232.4 450.4 247.6 441 256.9L393 304.9C383.6 314.3 368.4 314.3 359.1 304.9C349.8 295.5 349.7 280.3 359.1 271L390.1 240L359.1 209C349.7 199.6 349.7 184.4 359.1 175.1C368.5 165.8 383.7 165.7 393 175.1V175Z"
                fill="black"
              />
            </svg>
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            1
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            2
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            3
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            4
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            5
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            6
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            7
          </div>
        </div>
        <div className="relative top-[-69%] mt-10 left-[25%]">
          <div className="bg-blue-400  w-[250px]  h-[250px] flex items-center justify-center ">
            8
          </div>
        </div>
      </div>
    </div>
  );
};

export default Criteria;
