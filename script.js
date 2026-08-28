const form = document.getElementById("loginForm");
const result = document.getElementById("result");

form.addEventListener("submit", function(event) {
    event.preventDefault();

    result.textContent =
        "✅ Đây là website mô phỏng. Không có thông tin nào được lưu hoặc gửi đi.";
});