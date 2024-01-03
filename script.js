onReady();

var total = 0;

function onReady() {
  console.log('Javascript is working!');
}

function submitEmployee() {
  const firstInput = document.getElementById('firstNameInput').value;
  const lastInput = document.getElementById('lastNameInput').value;
  const idInput = document.getElementById('idInput').value;
  const titleInput = document.getElementById('titleInput').value;
  const salaryInput = document.getElementById('annualSalaryInput').value;
  const employeeDiv = document.getElementById('tableBody');
  const totalMonthlyCostDiv = document.getElementById('totalMonthlyCost');
  const monthlyError = document.getElementById('footer');

  // Create delete button for each row
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    const row = this.parentNode.parentNode;
    const salary = parseInt(row.children[4].textContent);
    total -= salary;
    totalMonthlyCostDiv.textContent = `$${(total / 12).toFixed(2)}`;

    if (total / 12 <= 20000) {
      monthlyError.classList.remove('over-budget');
    }

    row.parentNode.removeChild(row);
  };

  // Update total salary before adding the new employee's salary
  total += parseInt(salaryInput);

  totalMonthlyCostDiv.textContent = `$${(total / 12).toFixed(2)}`;

  if (total / 12 > 20000) {
    monthlyError.classList.add('over-budget');
  }

  const newRow = document.createElement('tr');
  newRow.innerHTML = `<td>${firstInput}</td><td>${lastInput}</td><td>${idInput}</td><td>${titleInput}</td><td>${salaryInput}</td><td></td>`;
  newRow.lastElementChild.appendChild(deleteButton);
  employeeDiv.appendChild(newRow);
}
