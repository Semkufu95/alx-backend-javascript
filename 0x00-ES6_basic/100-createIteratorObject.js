export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeeList = [];

  // Safely iterate through the object properties
  for (const department in allEmployees) {
    if (allEmployees.hasOwnProperty(department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  // Return an iterator
  return employeeList[Symbol.iterator]();
}
