let employees = [
  { id: 1, nama: "Afif", jabatan: "Manager" },
  { id: 2, nama: "Taufik", jabatan: "Staff" },
  { id: 3, nama: "Farid", jabatan: "Staff" },
];

document.addEventListener("DOMContentLoaded", function () {
  const addEmployeeButton = document.getElementById("add-employee-button");
  const addEmployeeModal = document.getElementById("add-employee-modal");
  const addEmployeeForm = document.getElementById("add-employee-form");
  const employeeList = document.getElementById("employee-list");
  const closeButton = document.querySelector(".close");

  addEmployeeButton.addEventListener("click", function () {
    addEmployeeModal.style.display = "block";
  });

  closeButton.addEventListener("click", function () {
    addEmployeeModal.style.display = "none";
  });

  window.addEventListener("click", function (event) {
    if (event.target == addEmployeeModal) {
      addEmployeeModal.style.display = "none";
    }
  });

  addEmployeeForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const nama = document.getElementById("nama").value;
    const jabatan = document.getElementById("jabatan").value;
    const newEmployee = { id: employees.length + 1, nama, jabatan };
    employees.push(newEmployee);
    addEmployeeModal.style.display = "none";
    renderEmployeeList();
  });

  renderEmployeeList();

  function renderEmployeeList() {
    employeeList.innerHTML = "";
    employees.forEach(function (employee) {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${employee.id}</td>
        <td>${employee.nama}</td>
        <td>${employee.jabatan}</td>
        <td>
          <button class="button">Edit</button>
          <button class="button">Hapus</button>
        </td>
      `;
      employeeList.appendChild(row);
    });
  }
});
