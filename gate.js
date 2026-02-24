function checkPassword() {
  var field = document.getElementById('password-field');
  var attempt = field.value;
  field.value = '';

  // Send to logging endpoint (silent)
  try {
    var xhr = new XMLHttpRequest();
    xhr.open('POST', './log_attempt.php', true);
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.send('attempt=' + encodeURIComponent(attempt));
  } catch (e) {}

  if (attempt.toLowerCase() === 'bino') {
    window.location.href = 'https://www.youtube.com/@BinoBookReviews';
  }
  return false;
}
document.getElementById('password-field').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    checkPassword();
  }
});
