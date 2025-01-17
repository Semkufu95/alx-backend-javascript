export default function getStudentsByLocation(slist, city) {
  return slist.filter((slist) => slist.location === city);
}
