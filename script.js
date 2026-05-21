const fileInput = document.getElementById('fileInput');
const preview1 = document.getElementById('preview1');
const preview2 = document.getElementById('preview2');
const text1 = document.getElementById('text1');
const text2 = document.getElementById('text2');
let clickCount = 0;

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            if (clickCount % 2 === 0) {
                preview1.src = e.target.result;
                preview1.style.display = 'block';
                text1.style.display = 'none'; // Скрываем текст "нажмите для загрузки"
            } else {
                preview2.src = e.target.result;
                preview2.style.display = 'block';
                text2.style.display = 'none'; // Скрываем текст "нажмите для загрузки"
            }
            clickCount++;
        }
        reader.readAsDataURL(file);
    }
    // Сброс значения, чтобы можно было загрузить одно и то же фото дважды
    this.value = ''; 
});
