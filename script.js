document.addEventListener("DOMContentLoaded", function() {
    let welcomeText = document.querySelector(".welcome-text");

    // Добавляем класс с анимацией после небольшой задержки
    setTimeout(() => {
        welcomeText.style.opacity = "1";
        welcomeText.style.transform = "translateY(0)";
    }, 500);
});
function showServerInfo() {
    document.getElementById('server-info').classList.remove('hidden');
}
