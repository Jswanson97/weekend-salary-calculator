onReady();

var total = 0;

function onReady() {
  console.log('Javascript is working!');
}
//this references the submitEmployee button created in script.js
function submitEmployee(){
  console.log('sunmitEmployee button clicked');
  const firstInput = document.getElementById('firstNameInput').value;
  const lastInput = document.getElementById('lastNameInput').value;
  const idInput = document.getElementById('idInput').value;
  const titleInput = document.getElementById('titleInput').value;
  const salaryInput = document.getElementById('annualSalaryInput').value;
  const employeeDiv = document.getElementById('tableBody');
  const totalMonthlyCostDiv = document.getElementById('totalMonthlyCost');
  const monthlyError = document.getElementById('footer');
  employeeDiv.innerHTML += `<tr><th>${firstInput}</th><th>${lastInput}</th><th>${idInput}</th><th>${titleInput}</th><th>${salaryInput}</th></tr>`
//was throwing as a string, so used parsInt
  total += parseInt(salaryInput);
  //\$ is an escape $ so that it shows an $ in total monthly cost
    totalMonthlyCostDiv.innerHTML = `\$${total/12.0}`;
    if (total / 12 > 20000) {
        //class list is a list off all classes and the .add just adds this to it
        monthlyError.classList.add('over-budget');
    
}

}
