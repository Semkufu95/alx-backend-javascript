export default function updateStudentGradeByCity(slist, city, newGrades) {
  return slist
    .filter((slist) => slist.location === city)
    .map((slist) => {
      const studentGrade = newGrades.find((grade) => grade.studentId === slist.id);
      return {
        ...slist,
        grade: studentGrade ? studentGrade.grade : 'N/A',
      };
    });
}
