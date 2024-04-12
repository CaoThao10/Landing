import React from "react";
import { Popover, Steps } from "antd";
const customDot = (dot, { status, index }) => <Popover>{dot}</Popover>;
// const description = "You can hover on the dot.";
const Advise = () => {
  return (
    <div className="z-50 bg-[#f4f4f4] flex flex-col items-center px-[150px]  ">
      <div className="flex flex-col items-center gap-5 my-10">
        <span className="text-3xl font-semibold text-[#5e82d4]">
          Quy trình tư vấn dịch vụ SEO tổng hợp và triển khai
        </span>

        <span className="w-[150px]  border border-[#74e1fa]"></span>
      </div>
      <div className="mt-[50px] flex flex-col justify-center items-center">
        <span className="flex items-center">
          <svg
            width="64"
            height="12"
            viewBox="0 0 64 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.2924 0.293762C57.1997 0.386276 57.1262 0.496165 57.076 0.617138C57.0258 0.738111 57 0.867794 57 0.998762C57 1.12973 57.0258 1.25941 57.076 1.38039C57.1262 1.50136 57.1997 1.61125 57.2924 1.70376L61.1724 5.58376L57.2924 9.46376C57.1055 9.65074 57.0004 9.90433 57.0004 10.1688C57.0004 10.4332 57.1055 10.6868 57.2924 10.8738C57.4794 11.0607 57.733 11.1658 57.9974 11.1658C58.2619 11.1658 58.5155 11.0607 58.7024 10.8738L63.2924 6.28376C63.3851 6.19125 63.4587 6.08136 63.5089 5.96039C63.5591 5.83941 63.5849 5.70973 63.5849 5.57876C63.5849 5.44779 63.5591 5.31811 63.5089 5.19714C63.4587 5.07616 63.3851 4.96628 63.2924 4.87376L58.7024 0.283762C58.3224 -0.0962379 57.6824 -0.0962377 57.2924 0.293762Z"
              fill="#4791FF"
            />
            <line y1="5.5" x2="60" y2="5.5" stroke="#4791FF" />
          </svg>
          Quy trình tư vấn trước kí hợp đồng{" "}
          <svg
            width="63"
            height="12"
            viewBox="0 0 63 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29252 10.872C6.38522 10.7795 6.45877 10.6696 6.50895 10.5486C6.55913 10.4277 6.58496 10.298 6.58496 10.167C6.58496 10.036 6.55913 9.90636 6.50895 9.78539C6.45877 9.66441 6.38522 9.55452 6.29252 9.46201L2.41252 5.58201L6.29252 1.70201C6.4795 1.51503 6.58454 1.26144 6.58454 0.99701C6.58454 0.732584 6.4795 0.478986 6.29252 0.292008C6.10554 0.105031 5.85194 -1.05545e-05 5.58752 -1.05776e-05C5.32309 -1.06007e-05 5.0695 0.105031 4.88252 0.292008L0.292517 4.88201C0.199814 4.97452 0.126266 5.08441 0.0760847 5.20538C0.0259032 5.32636 7.39321e-05 5.45604 7.39206e-05 5.58701C7.39092e-05 5.71798 0.0259031 5.84766 0.0760846 5.96863C0.126266 6.08961 0.199814 6.1995 0.292517 6.29201L4.88252 10.882C5.26252 11.262 5.90252 11.262 6.29252 10.872Z"
              fill="#4791FF"
            />
            <line x1="3" y1="5.5" x2="63" y2="5.5" stroke="#4791FF" />
          </svg>
        </span>
        <div className="mt-10">
          <Steps
            current={6}
            progressDot={customDot}
            items={[
              {
                title: "Lấy đầu bài",
                // description,
              },
              {
                title: "Phân tích dự án",
              },
              {
                title: "Kế hoạch sơ bộ",
              },
              {
                title: "Proposal & present",
              },
              {
                title: "Tư vấn",
              },
              {
                title: "Kế hoạch chi tiết",
              },
              {
                title: "Thống nhất phương án",
                // description,
              },
              {
                title: "Ký hợp đồng",
                // description,
              },
            ]}
          />
        </div>
      </div>
      <div className="mt-[50px] flex flex-col justify-center items-center">
        <span className="flex items-center">
          <svg
            width="64"
            height="12"
            viewBox="0 0 64 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M57.2924 0.293762C57.1997 0.386276 57.1262 0.496165 57.076 0.617138C57.0258 0.738111 57 0.867794 57 0.998762C57 1.12973 57.0258 1.25941 57.076 1.38039C57.1262 1.50136 57.1997 1.61125 57.2924 1.70376L61.1724 5.58376L57.2924 9.46376C57.1055 9.65074 57.0004 9.90433 57.0004 10.1688C57.0004 10.4332 57.1055 10.6868 57.2924 10.8738C57.4794 11.0607 57.733 11.1658 57.9974 11.1658C58.2619 11.1658 58.5155 11.0607 58.7024 10.8738L63.2924 6.28376C63.3851 6.19125 63.4587 6.08136 63.5089 5.96039C63.5591 5.83941 63.5849 5.70973 63.5849 5.57876C63.5849 5.44779 63.5591 5.31811 63.5089 5.19714C63.4587 5.07616 63.3851 4.96628 63.2924 4.87376L58.7024 0.283762C58.3224 -0.0962379 57.6824 -0.0962377 57.2924 0.293762Z"
              fill="#4791FF"
            />
            <line y1="5.5" x2="60" y2="5.5" stroke="#4791FF" />
          </svg>
          Quy trình phát triển sau kí hợp đồng{" "}
          <svg
            width="63"
            height="12"
            viewBox="0 0 63 12"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.29252 10.872C6.38522 10.7795 6.45877 10.6696 6.50895 10.5486C6.55913 10.4277 6.58496 10.298 6.58496 10.167C6.58496 10.036 6.55913 9.90636 6.50895 9.78539C6.45877 9.66441 6.38522 9.55452 6.29252 9.46201L2.41252 5.58201L6.29252 1.70201C6.4795 1.51503 6.58454 1.26144 6.58454 0.99701C6.58454 0.732584 6.4795 0.478986 6.29252 0.292008C6.10554 0.105031 5.85194 -1.05545e-05 5.58752 -1.05776e-05C5.32309 -1.06007e-05 5.0695 0.105031 4.88252 0.292008L0.292517 4.88201C0.199814 4.97452 0.126266 5.08441 0.0760847 5.20538C0.0259032 5.32636 7.39321e-05 5.45604 7.39206e-05 5.58701C7.39092e-05 5.71798 0.0259031 5.84766 0.0760846 5.96863C0.126266 6.08961 0.199814 6.1995 0.292517 6.29201L4.88252 10.882C5.26252 11.262 5.90252 11.262 6.29252 10.872Z"
              fill="#4791FF"
            />
            <line x1="3" y1="5.5" x2="63" y2="5.5" stroke="#4791FF" />
          </svg>
        </span>
        <div className="mt-10">
          <Steps
            current={4}
            progressDot={customDot}
            items={[
              {
                title: "Kick off",
                // description,
              },
              {
                title: "Nghiên cứu từ khóa",
              },
              {
                title: "Onpage",
              },
              {
                title: "Content",
              },
              {
                title: "Tối ưu",
              },
              {
                title: "Nghiệm thu",
              },
              {
                title: "Bảo hành",
                // description,
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Advise;
