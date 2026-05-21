const fileInput = document.getElementById('fileInput');
const previewImg = document.getElementById('previewImg');
const uploadText = document.getElementById('uploadText');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        
        // Как только файл прочитан, преобразуем его в строку данных и показываем
        reader.onload = function(e) {
            previewImg.src = e.target.result;
            previewImg.style.display = 'block';
            uploadText.style.display = 'none'; // Скрываем текст-подсказку
        };
        
        reader.readAsDataURL(file);
    }
    // Сбрасываем инпут, чтобы можно было загружать фото повторно
    this.value = ''; 
});
