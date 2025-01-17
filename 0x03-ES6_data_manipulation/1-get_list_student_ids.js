export default function getListStudentIds(slist) {
  if (Array.isArray(slist)) {
    return slist.map((obj) => obj.id);
  }
  return [];
}
