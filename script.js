const fileInput = document.getElementById('fileInput');
const preview1 = document.getElementById('preview1');
const preview2 = document.getElementById('preview2');
const pdfPreview1 = document.getElementById('pdfPreview1');
const pdfPreview2 = document.getElementById('pdfPreview2');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
let clickCount = 0;

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        // Создаем временную прямую ссылку на файл в памяти браузера
        const fileUrl = URL.createObjectURL(file);
        const isPdf = file.type === 'application/pdf';

        if (clickCount % 2 === 0) {
            // Загрузка в ПЕРВУЮ карточку
            if (isPdf) {
                pdfPreview1.src = fileUrl;
                pdfPreview1.style.display = 'block';
                preview1.style.display = 'none';
            } else {
                preview1.src = fileUrl;
                preview1.style.display = 'block';
                pdfPreview1.style.display = 'none';
            }
            text1.style.display = 'none';
        } else {
            // Загрузка во ВТОРУЮ карточку
            if (isPdf) {
                pdfPreview2.src = fileUrl;
                pdfPreview2.style.display = 'block';
                preview2.style.display = 'none';
            } else {
                preview2.src = fileUrl;
                preview2.style.display = 'block';
                pdfPreview2.style.display = 'none';
            }
            text2.style.display = 'none';
        }
        clickCount++;
    }
    // Очищаем значение, чтобы можно было загружать файлы повторно
    this.value = ''; 
});
                    
