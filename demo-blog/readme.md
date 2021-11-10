# Xây Dựng Blog bằng HuGo và TailWind
Blog được viết dựa trên https://github.com/dirkolbrich/hugo-theme-tailwindcss-starter
# Bắt Đầu Với Việc Tạo Dự Án Hugo (demo-blog)
## Điều kiện tiên quyết!
Đầu tiên chạy lệnh 
```bash
hugo site demo-blog
```
Để tạo ra một hugo project.
Cài đặt `postcss-cli` and `autoprefixer` trên toàn bộ môi trường, vì PostCSS của Hugo Pipe yêu cầu điều đó.

```bash
npm install -g postcss-cli
npm install -g autoprefixer
```

Tiếp theo sẽ cài đặt cái gói cần thiết npm

```bash
npm install
```
Chỉnh sửa file `config.toml` để thể hiện nội dung mới.

## Bắt đầu phát triển Blog
Các mục chính:
- Thể hiện các nội dung như bài viết hay form gửi phản hồi ở được viết ở trong file `contect`.
- Để hiện thị giao diện, tôi viết chúng trong file `layouts`.
- Để hiện hiện các trang như blog và contact thì trong layouts sẽ có qui định cách hiện thị chúng thông qua `single.html`.
- Các thành phần chính của website được thể hiện trong `partials`, có thể tạo ra cái html mới để dễ dàng sự dụng lại.
- Các file `image` và `js` sẽ được chứa trong `partials`, khi muốn thêm tôi sẽ thêm chúng vào đây.
- 
 
Sao khi đã code Blog theo ý muốn tôi dùng lệnh này để nó chạy trên localhost:1313

```bash
hugo server -s exampleSite --themesDir=../.. --disableFastRender
```

# Tạo dự án VueJs (blog-app)
## Cấu Trúc Dự Án

```bash
├── functions // Netlify serverless functions
├── src/
  ├── components // Vue components
  ├── pages  // Wrapper components to construct the &quot;pages&quot; of the app
  ├── store
    ├── modules/
      ├── auth/ // Vuex store for everything related to user auth
      ├── app/  // Vuex Store for generic app metadata
  ├── helpers   // Helper modules
  ├── models    // Wrapper functions for FuanaDB processes
  ├── router.js // Vue Router settings
  ├── main.js   // App entry point and also where initialisation scripts get called
└── package.json
```

Được dựa trên https://chiubaca.com/build-a-serverless-crud-app-using-vue-js-netlify-and-faunadb-5dno/
## Bắt đầu!
Để bắt đầu dự án ta dung lệnh

```bash
vue create blog-app
```

Tiếp theo ta sẽ cài tailwind để có thể sự dụng tailwind css.
Sử dụng npm

```bash
npm install
```
Sau đó cài đặt ta cài đặt tailwind với npm

```bash
npm install -D tailwindcss@latest postcss@latest autoprefixer@latest
```
Tạo một file `tailwind.config.js` và `postcss.config.js` bằng lệnh

```bash
npx install tailwindcss -p
```
Tiếp theo tạo index.css trong ./src/assets
Trong index.css ta viết đoạn này để dùng được tailwind
```bash
@tailwind base;
@tailwind components;
@tailwind utilities;
```
## Bắt đầu phát triển dự án
- Trong file `components` tạo 2 file `Login.vue` và `Profile.vue` để đăng nhập và hiện thị thông tin người dùng.
- Tạo `authorise-tokens.js` để tạo ra đoạn mã token khi người dùng đăng kí và xác thực thì người dùng đăng nhập
- Trong `store/modules` tệp `auth.js` để xử lí việc đăng kí và đăng nhập cho người dùng.
- Tạo `index.js` sẽ xuất cái modules ra
- File `identity-signup.js` trong `./functions` để thêm người dùng từ Netlify vào FaunaDB.

Ở thư mục gốc dùng lệnh
```bash
npm run test-demo
```
để chạy dự án.