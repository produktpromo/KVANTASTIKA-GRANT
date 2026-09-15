document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('grantForm');
    const processingBlock = document.getElementById('processingBlock');

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        form.querySelector('.submit-btn').style.display = 'none';
        processingBlock.classList.add('show');

        setTimeout(() => {
            const appNumber = Math.floor(Math.random() * 901) + 100; // 100–1000
            const appTime = new Date().toLocaleString('ru-RU');
            window.location.href = `result.html?num=${appNumber}&time=${encodeURIComponent(appTime)}`;
        }, 40000); // 40 секунд
    });
});
