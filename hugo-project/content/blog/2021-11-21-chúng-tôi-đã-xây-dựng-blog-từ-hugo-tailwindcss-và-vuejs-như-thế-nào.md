---
title: Chúng tôi đã xây dựng Blog từ Hugo, TailwindCSS và VueJS như thế nào?
author: Quốc An
date: 2021-11-21T08:15:01.985Z
image: https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80
description: Hugo + TailwindCSS + VueJS
---
## **BẮT ĐẦU VỚI HUGO**

### Tìm Hiểu HuGo

**Hugo là** một nền tảng giúp bạn xây dựng một trang **web** tĩnh tích hợp sẵn với github được viết bằng ngôn ngữ Golang (con ruột của Google) và sử dụng markdown (file.md) để viết bài.

Vì sự tiện ích của nó nên cũng khá nhiều bài viết nói về việc sử dụng nó như thế nào, nhưng việc chọn lọc và nắm đúng những thông tin mình cần không phải là điều dễ dàng.

Sau không ít thời gian tôi cũng tìm được một bài viết khá hay nói về viết bắt đầu với hugo ở github. Cụ thể là đây: https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter.

Nó rất hữu ích vì đã giúp tôi có thêm khá nhiều kiến thức cũng như hiểu rõ hơn về cách hoạt động của nó.

### **Xây Dựng Blog**

Đây là cấu trúc của chúng tôi sau khi đã hoàn thành.

![](/image/anh11.png)

Khi xây dựng 1 trang blog bạn cần chú trọng nhiều đến giao diện của nó, tất cả chúng sẽ nằm trong`layouts`, bạn có thể code và sáng tạo tùy thích với nó, vì vậy chúng tôi đã xây dựng chúng trên ý tưởng riêng.

Tiếp đến là sự dụng TailwindCSS để chỉnh sửa giao diện. TailwindCSS rất hữu ích và responsive cũng rất tốt, việc học nó cũng không mất quá nhiều thời gian, chỉ cần lên trang chủ của Tailwind là sẽ có vô vàng kiến thức.

Về phần bài viết, bạn có thể thêm bài 1 cách dễ dàng ở trong thư mục `contents`, bằng Markdown, bạn có thẻ tùy ý ghi nội dụng cũng như các thuộc tính khác như tiêu đề, tác giả.

Nhìn chung Hugo và Tailwind khá dễ dàng tiếp cận và rất hữu ích với nội dung vô cùng phong phú, do vậy nếu bạn muốn thực hiện một web static như kiểu Blog chẳng hạn thì nó là một lựa chọn vô cùng hợp lí.

## **BẮT ĐẦU VỚI VUEJS**

### **Tìm hiểu về VueJs**

Vue.js, gọi tắt là Vue, là một framework linh động dùng để xây dựng giao diện người dùng. Khác với các framework nguyên khối, Vue được thiết kế từ đầu theo hướng cho phép và khuyến khích việc phát triển ứng dụng theo các bước. 

Có rất nhiều kiến thức liên quan đến Vuejs do vậy việc nắm bắt hết thông tin về nó trong thời gian ngắn là điều rất khó, chúng tôi có đọc tài liệu cũng như xem các video về khái lược Vuejs để nắm bắt cũng như hình dung một cách khái quát về Vuejs và cách hoạt động của nó. Khi đó chúng tôi còn biết thêm được VueJs khộng đi một mình mà còn theo đó là Vuex và VueRouter. Sau khi nắm bắt cơ bản về nó chúng tôi bắt đầu xây dựng ra một ứng dụng VueJs.

### **Xây dựng ứng dụng từ VueJs**

Chúng tôi có tham khảo một repo khá hay về Vuejs đó là https://chiubaca.com/build-a-serverless-crud-app-using-vue-js-netlify-and-faunadb-5dno/

Sau khi tìm hiểu chúng tôi bắt đầu phát triển thử ứng dụng đăng nhập từ VueJs. Những bước ban đầu thật sự không đơn giản vì kiến thức mới là rất nhiều, sau khi đã thành công thì chúng tôi bắt đầu đưa nó vào Hugo.

### **Đưa VueJs vào HuGo**

Chúng tôi đã xây dựng được một ứng dụng VueJs và tạo ra được folder`dist`. Nó chứa các tệp mà VueJs đã xây dựng là cái tệp`js`và `css`.

Tiếp theo để sử dụng được một ứng dụng VueJs trong hugo chúng tôi đã cài đặt các tệp js và css trong thư mục `dist`của dự án VueJs vào layouts của hugo thông qua Script và link. Để đảm bảo chúng nhận được các file này chúng tôi đã bỏ nó vào trong thư mục static của Hugo.

### **Triển khai với Netlify**

Sau khi Blog đã hoàn chỉnh chúng tôi deploy lên một máy chủ netlify đã được setup sẵn bằng một tệp cấu hình`netlify.toml` ở thư mục gốc.

## **TỔNG KẾT**

Hugo kết hợp với TailwindCSS là một cách đơn giản nhưng hiệu quả để xây dựng một web static ,điểm yếu của nó lại là tính linh động khi không thể có các tương tác với người dùng nhưng VueJs lại có thể. Do đó việc kết hợp chúng với nhau sẽ là một cách tối ưu để tạo ra một trang web rất chuyên nghiệp vừa nhanh vừa thân thiện với người sử dựng.