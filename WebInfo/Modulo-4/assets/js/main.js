// Este script actualmente no maneja la validación de carga de archivos,
//pero puede agregar funcionalidad según sea necesario.
document.getElementById('upload-form').addEventListener('submit', function(event) {
    const fileInput = document.getElementById('file');
    const file = fileInput.files[0];
    
    if (file) {
      const maxSize = 30 * 1024 * 1024; // 30 MB in bytes
      if (file.size > maxSize) {
        alert('The file size should not exceed 30 MB.');
        event.preventDefault(); // Prevent form submission
      }
    }
  });
  