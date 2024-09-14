document.getElementById('upload-form').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    if (file) {
      const maxSize = 15 * 1024 * 1024; // 15 MB in bytes
      if (file.size > maxSize) {
        alert('El tamaño del archivo no debe exceder los 15 MB.');
        event.preventDefault(); // Prevent form submission
      }
    }
  });
  