import React from "react";

const Contact = () => {
  return (
    <div className="grid grid-cols-2 gap-x-10 px-[250px] bg-[#f4f4f4] py-[100px]">
      <div className="flex w-full items-cente flex-col">
        <div className="flex flex-col gap-y-2">
          <span className="text-xl font-semibold text-[#5e82d4]">
            LIÊN HỆ VỚI CHÚNG TÔI
          </span>
          <span>Nói cho chúng tôi biết vấn đề của bạn.</span>
        </div>
        <div className="grid grid-cols-2 gap-5 mt-10 ">
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Địa điểm của chúng tôi</span>
              <span className="text-[#4d4d4d]">Yên Nghĩa, Hà Đông, Hà Nội</span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Số điện thoại</span>
              <span className="text-[#4d4d4d]">0343335657</span>
              <span className="text-[#4d4d4d]">0368695342</span>
            </div>
          </div>
          <div className="flex flex-col gap-y-5">
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Địa chỉ email</span>
              <span className="text-[#4d4d4d]">
                Caothithao10022003@gmail.com
              </span>
            </div>
            <div className="flex flex-col gap-1">
              <span className="font-semibold">Làm thế nào để được hỗ trợ?</span>
              <span className="text-[#4d4d4d]">
                Hãy cho chúng tôi biết vấn đề của bạn, <br /> chúng tôi sẽ liên
                hệ với bạn!
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-full items-center">
        <span className="text-xl font-semibold text-[#5e82d4]">
          Gửi tin nhắn cho chúng tôi
        </span>
        <div class="form-container mt-5">
          <form class="form">
            <div class="form-group">
              <label for="email">Email</label>
              <input type="text" id="email" name="email" required="" />
            </div>
            <div class="form-group">
              <label for="textarea">Message</label>
              <textarea
                name="textarea"
                id="textarea"
                rows="10"
                cols="50"
                required=""
              >
                {" "}
              </textarea>
            </div>
            {/* <button
                class="form-submit-btn text-white text-lg bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 px-2 py-1 rounded-lg hover:bg-gradient-to-r hover:from-indigo-400 hover:via-purple-400 hover:to-pink-400"
                type="submit"
              >
                Submit
              </button> */}
            <button
              className="px-4 py-1 w-[100px] rounded-xl bg-blue-300 hover:bg-blue-400"
              type="submit"
            >
              <a className="text-lg" href="/contact">
                Submit
              </a>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
