function showServerInfo() {
    let info = document.getElementById("server-info");
    info.style.display = "block";
    info.style.opacity = "0";
    info.style.transition = "opacity 0.5s ease-in-out";
    
    setTimeout(() => {
        info.style.opacity = "1";
    }, 100);
}
