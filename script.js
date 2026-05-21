const fileInput = document.getElementById('fileInput');
const previewImg = document.getElementById('previewImg');
const pdfPreview = document.getElementById('pdfPreview');
const uploadText = document.getElementById('uploadText');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        // Создаем ссылку на загруженный файл в памяти
        const fileUrl = URL.createObjectURL(file);
        const isPdf = file.type === 'application/pdf';

        if (isPdf) {
            pdfPreview.src = fileUrl;
            pdfPreview.style.display = 'block';
            previewImg.style.display = 'none';
        } else {
            previewImg.src = fileUrl;
            previewImg.style.display = 'block';
            pdfPreview.style.display = 'none';
        }
        
        // Скрываем текст-подсказку
        uploadText.style.display = 'none';
    }
    // Сбрасываем значение инпута для возможности повторной загрузки
    this.value = ''; 
});
