document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const errorMessage = document.getElementById('errorMessage');
    const validEmail = "mohammedabdelbaset35@gmail.com"; // قم بتغيير هذا إلى البريد الإلكتروني المطلوب

    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const email = document.getElementById('email').value;

        if (email === validEmail) {
            window.location.href = "admin.html"; // توجيه إلى صفحة الإدارة
        } else {
            errorMessage.style.display = "block"; // عرض رسالة الخطأ
        }
    });
});