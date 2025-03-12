// Write your solution in this file!
const employee = {
  name: 'Sam',
  streetAddress: '11 Broadway',
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
  const newObj = {...employee};
  newObj[key] = value;
  return newObj;
}

function destructivelyUpdateEmployeeWithKeyAndValue (employee, key, value) {
  employee[key] = value
  return employee  
}
destructivelyUpdateEmployeeWithKeyAndValue(employee, streetAddress, '12 Broadway')

function deleteFromEmployeeByKey (employee, key) {
  const newObject = {...employee};
  delete newObject[key];
  return newObject
}
deleteFromEmployeeByKey(employee, "name")

function destructivelyDeleteFromEmployeeByKey (employee, key) {
  delete employee[key]
  return employee
}
destructivelyDeleteFromEmployeeByKey(employee, "name")
