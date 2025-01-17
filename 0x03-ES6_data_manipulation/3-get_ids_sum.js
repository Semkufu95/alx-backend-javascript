export default function getStudentIdsSum(slist) {
  return slist.reduce((sum, slist) => sum + slist.id, 0);
}
