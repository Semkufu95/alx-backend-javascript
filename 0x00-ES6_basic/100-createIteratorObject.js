export default function createIteratorObject(report) {
  const allEmployees = report.allEmployees;
  const employeeList = [];

  // Flatten all employees into a single list
  for (const department in allEmployees) {
    employeeList.push(...allEmployees[department]);
  }

  // Return an iterator
  return employeeList[Symbol.iterator]();
}
