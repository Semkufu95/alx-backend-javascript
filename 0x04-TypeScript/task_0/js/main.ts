// An interface named Student that accepts firstname, lastname, age and location

interface Student {
    firstName: string;
    lastName: string;
    age: number;
    location: string;
};

//create two students

const firstStudent: Student {
    firstName: 'Roby',
    lastName: 'Ngas',
    age: 25,
    location: 'Mwanza',
};

const secondStudent: Student {
    firstName: 'Rauhiyyah',
    secondName: 'Habibu',
    age: 20,
    location: 'Pemba',

// create an array named studentsList

studentsList = [firstStudent, secondStudent]

// REnder with Vanilla JavaScript
 const table = document.getElementById('tableStudents') as HTMLTableElement:

// create a new row

studentsList.forEach((student) = {
   const row = table.insertRow();
   const firstNameCell = row.insertCell(0);
   const locationCell = row.insertCell(1);
   firstNameCell.innerHTML = student.firstName;
   locationCel.innerHTML = student.location;
   })