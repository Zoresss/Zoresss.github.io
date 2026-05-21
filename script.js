// Регистрация Service Worker (нужно для работы приложения)
if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('sw.js')
        .then(() => console.log('Service Worker Registered'))
        .catch(err => console.log('Service Worker Failed', err));
}

// Загрузка изображений
const fileInput = document.getElementById('fileInput');
const preview1 = document.getElementById('preview1');
const preview2 = document.getElementById('preview2');
let clickCount = 0;

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (clickCount % 2 === 0) {
                preview1.src = e.target.result;
                preview1.style.display = 'block';
            } else {
                preview2.src = e.target.result;
                preview2.style.display = 'block';
            }
            clickCount++;
        }
        reader.readAsDataURL(file);
    }
});

// Логика кнопки "Установить как приложение" (Для Android/Chrome)
let deferredPrompt;
const installBanner = document.getElementById('installBanner');
const installBtn = document.getElementById('installBtn');

window.addEventListener('beforeinstallprompt', (e) => {
    e.preventDefault();
    deferredPrompt = e;
    // Показываем наш баннер сверху
    installBanner.style.display = 'flex';
});

installBtn.addEventListener('click', async () => {
    if (deferredPrompt) {
        deferredPrompt.prompt();
        const { outcome } = await deferredPrompt.userChoice;
        if (outcome === 'accepted') {
            installBanner.style.display = 'none';
        }
        deferredPrompt = null;
    }
});
