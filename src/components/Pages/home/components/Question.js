import React from "react";
import { Collapse } from "antd";

const items = [
  {
    key: "1",
    label: <p className="text-lg font-semibold">Thiết kế website để làm gì?</p>,

    children: (
      <p>
        Website giống như một cửa hàng có thể giúp bạn giới thiệu sản phẩm, dịch
        vụ và buôn bán dễ dàng ở bất cứ nơi đâu.
      </p>
    ),
  },
  {
    key: "2",
    label: <p className="text-lg font-semibold">Website chuẩn SEO là gì?</p>,

    children: (
      <p>
        Website chuẩn SEO là website khi thiết kế được tối ưu cho các bộ máy tìm
        kiếm như Google. Website chuẩn SEO sẽ giúp dễ dàng xuất hiện và tăng thứ
        hạng trên Google hơn.
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p className="text-lg font-semibold">
        Chế độ bảo hành miễn phí trọn đời là như thế nào?
      </p>
    ),

    children: (
      <p>
        Khi thiết kế website tại Halink Web quý khách sẽ được bảo hành miễn phí
        trọn đời nếu dùng hosting của Halink Web và bảo hành 1 năm nếu dùng
        hosting khác. Trong quá trình sử dụng nếu phát hiện website bị lỗi hoặc
        cần hỗ trợ vui lòng liên hệ bộ phận CSKH để được hỗ trợ miễn phí mãi
        mãi.
      </p>
    ),
  },
  {
    key: "4",
    label: (
      <p className="text-lg font-semibold">
        Cần bao lâu để thiết kế website hoàn thiện và bàn giao?
      </p>
    ),

    children: (
      <p>
        Tuỳ theo yêu cầu và chức năng của website mà có thời gian hoàn thiện
        khác nhau. Trung bình thì website theo mẫu hoặc web yêu cầu thông thường
        thì hoàn thiện trong khoảng từ 2-5 ngày, ngoài ra Sea Soft Service còn
        có dịch vụ hỗ trợ hoàn thiện web trong 24h.
      </p>
    ),
  },
];
const items1 = [
  {
    key: "1",
    label: (
      <p className="text-lg font-semibold">Cần những gì để thiết kế website?</p>
    ),

    children: (
      <p>
        Để thiết kế website bạn cần có tên miền, hosting và hình ảnh, nội dung
        đưa lên web.Hiện tại khi thiết kế web tại Halink Web bạn sẽ được tặng
        tên miền và hosting miễn phí 1 năm.
      </p>
    ),
  },
  {
    key: "2",
    label: (
      <p className="text-lg font-semibold">
        Sau khi làm website tôi cần làm gì để bán được hàng?
      </p>
    ),

    children: (
      <p>
        Khi đã có website bạn cần phải tiến hành quảng bá để có nhiều người biết
        đến ví dụ như triển khai SEO website, chạy quảng cáo Google/Facebook,
        đăng tin rao vặt, chia sẻ lên các mạng xã hội, gửi mail, in lên danh
        thiếp…
      </p>
    ),
  },
  {
    key: "3",
    label: (
      <p className="text-lg font-semibold">
        Website có dùng được mãi mãi không?
      </p>
    ),

    children: (
      <p>
        Website sau khi thiết kế sẽ dùng được trong 1 năm, các năm sau quý khách
        chỉ cần đóng phí gia hạn tên miền và hosting để duy trì website.
      </p>
    ),
  },
  {
    key: "4",
    // label: "Quản trị website có khó không?",
    label: (
      <p className="text-lg font-semibold">Quản trị website có khó không?</p>
    ),
    children: (
      <p>
        Quản trị website vô cùng đơn giản, chức năng hiển thị bằng Tiếng Việt và
        rất dễ dàng để cập nhật sản phẩm, thông tin trên website. Quý khách sẽ
        tự quản trị nội dung website của mình sau khi được bàn giao,Halink Web
        sẽ hỗ trợ hướng dẫn nếu quý khách gặp khó khăn. Ngoài ra nếu quý khách
        không có thời gian thì có thể tham khảo dịch vụ quản trị website của
        chúng tôi.
      </p>
    ),
  },
];
const Question = () => {
  const onChange = (key) => {
    console.log(key);
  };
  return (
    <div className="z-50 bg-[#f4f4f4] flex flex-col items-center px-[150px]  py-10">
      <div className="flex flex-col items-center gap-5 my-10">
        <span className="text-3xl font-semibold text-[#5e82d4]">
          Câu hỏi thường gặp
        </span>
        <span className="w-[150px]  border border-[#74e1fa]"></span>
      </div>
      <div className="grid grid-cols-2 gap-x-10">
        <div className="w-[600px]">
          <Collapse
            items={items}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>
        <div className="w-[600px]">
          <Collapse
            items={items1}
            defaultActiveKey={["1"]}
            onChange={onChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Question;
