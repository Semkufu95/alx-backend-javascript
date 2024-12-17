export default function createIteratorObject(report) {
  const { allEmployees } = report;
  const employeeList = [];

  // Safely iterate through the object properties
  for (const department in allEmployees) {
    if (Object.prototype.hasOwnProperty.call(allEmployees, department)) {
      employeeList.push(...allEmployees[department]);
    }
  }

  // Return an iterator
  return employeeList[Symbol.iterator]();
}
