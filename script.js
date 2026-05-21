const fileInput = document.getElementById('fileInput');
const preview = document.getElementById('preview');
const placeholderText = document.getElementById('placeholder-text');

fileInput.addEventListener('change', function() {
    const file = this.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function(e) {
            preview.src = e.target.result;
            preview.style.display = 'block';
            placeholderText.style.display = 'none';
        }
        reader.readAsDataURL(file);
    }
});

