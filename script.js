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
