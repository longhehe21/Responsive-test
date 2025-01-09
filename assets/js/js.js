const phoneNumberInput = document.getElementById('phone');

phoneNumberInput.addEventListener('input', (event) => {
  // Chỉ cho phép nhập số và dấu "-"
  event.target.value = event.target.value.replace(/[^0-9-]/g, '');
});

function toggleSubCourses(id) {
  const subCourses = document.getElementById(id);
  if (subCourses.style.display === 'none') {
      subCourses.style.display = 'block';
  } else {
      subCourses.style.display = 'none';
  }
}