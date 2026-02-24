function checkPassword() {
  var field = document.getElementById('password-field');
  var errorMsg = document.getElementById('error-msg');
  if (field.value.toLowerCase() === 'bino') {
    window.location.href = 'https://www.youtube.com/@BinoBookReviews';
  } else {
    errorMsg.style.display = 'block';
    field.value = '';
    field.focus();
  }
  return false;
}
document.getElementById('password-field').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkPassword();
  }
});
