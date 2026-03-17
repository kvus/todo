

# Todo App - MERN Stack

Dự án này là một ứng dụng quản lý nhiệm vụ đơn giản được xây dựng bằng kiến trúc MERN (MongoDB, Express, React, Node.js). Ứng dụng cho phép người dùng tạo, cập nhật, xóa và lọc các nhiệm vụ theo thời gian và trạng thái.

## 🚀 Tính năng chính

* **Quản lý nhiệm vụ**: Thêm mới, cập nhật trạng thái (active/complete) và xóa nhiệm vụ.
* **Bộ lọc thời gian**: Xem nhiệm vụ theo ngày, tuần, tháng hoặc tất cả.
* **Phân trang**: Hỗ trợ phân trang danh sách nhiệm vụ ở phía frontend.
* **Thống kê**: Hiển thị số lượng nhiệm vụ đang thực hiện và đã hoàn thành.
* **Giao diện hiện đại**: Sử dụng React với TailwindCSS và các thành phần UI từ Radix UI.

## 🛠️ Công nghệ sử dụng

### Backend
* **Node.js & Express**: Xây dựng API RESTful.
* **MongoDB & Mongoose**: Lưu trữ và quản lý dữ liệu nhiệm vụ.
* **Dotenv**: Quản lý các biến môi trường.
* **CORS**: Cấu hình chia sẻ tài nguyên giữa các nguồn.

### Frontend
* **React (Vite)**: Thư viện xây dựng giao diện người dùng.
* **TailwindCSS**: Framework CSS để thiết kế giao diện.
* **Axios**: Thực hiện các yêu cầu HTTP đến backend.
* **Sonner**: Hiển thị thông báo trạng thái.
* **React Router**: Quản lý điều hướng trong ứng dụng.

## 📁 Cấu trúc thư mục tiêu biểu

* `backend/src/models/Task.js`: Định nghĩa schema cho nhiệm vụ trong MongoDB.
* `backend/src/controllers/tasksControllers.js`: Xử lý logic nghiệp vụ cho các API.
* `backend/src/routes/tasksRouters.js`: Định nghĩa các endpoint của API.
* `frontend/src/pages/HomePage.jsx`: Trang chính chứa giao diện danh sách và bộ lọc.

## 💻 Hướng dẫn cài đặt

1.  **Cài đặt Dependencies**:
    * Tại thư mục `backend`: Chạy `npm install`.
    * Tại thư mục `frontend`: Chạy `npm install`.

2.  **Cấu hình môi trường**:
    * Tạo file `.env` trong thư mục `backend` và thêm biến `MONGODB_CONNECTIONSTRING` để kết nối cơ sở dữ liệu.

3.  **Khởi chạy ứng dụng**:
    * Backend: `npm run dev` (sử dụng nodemon).
    * Frontend: `npm run dev` (sử dụng vite).
