function alertSubmit() {
    alert('Your details has been uploaded successfully.');
  }
  
  const form = document.querySelector('form');
  form.addEventListener('submit', alertSubmit);