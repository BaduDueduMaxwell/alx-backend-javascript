export default function getStudentIdsSum(studentIds) {
  const initialId = 0;
  const studentIdsSum = studentIds.reduce(
    (accumulator, student) => accumulator + student.id,
    initialId,
  );
  return studentIdsSum;
}
