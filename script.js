document.getElementById('server-btn').addEventListener('click', function() {
    let info = document.getElementById('server-info');
    info.style.display = 'block';
    info.style.opacity = '0';
    info.style.transition = 'opacity 1s';
    setTimeout(() => info.style.opacity = '1', 10);
});
