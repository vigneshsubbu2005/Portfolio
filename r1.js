// scripts.js
document.addEventListener("DOMContentLoaded", () => {
  const studentForm = document.getElementById('student-form');
  const studentsTableBody = document.querySelector('#students-table tbody');

  studentForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const name = event.target.name.value;
      const rollNo = event.target.rollNo.value;
      const department = event.target.department.value;

      addStudent(name, rollNo, department);
      studentForm.reset();
  });

  function addStudent(name, rollNo, department) {
      const row = document.createElement('tr');
      
      row.innerHTML = `
          <td>${name}</td>
          <td>${rollNo}</td>
          <td>${department}</td>
          <td class="actions">
              <button class="edit" onclick="editStudent(this)">Edit</button>
              <button class="delete" onclick="deleteStudent(this)">Delete</button>
          </td>
      `;
      studentsTableBody.appendChild(row);
  }
});

function editStudent(button) {
  const row = button.parentElement.parentElement;
  const cells = row.querySelectorAll('td');
  const name = cells[0].textContent;
  const rollNo = cells[1].textContent;
  const department = cells[2].textContent;

  document.getElementById('name').value = name;
  document.getElementById('rollNo').value = rollNo;
  document.getElementById('department').value = department;

  deleteStudent(button);
}

function deleteStudent(button) {
  const row = button.parentElement.parentElement;
  row.remove();
}