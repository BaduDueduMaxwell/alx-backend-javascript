export default function createIteratorObject(report) {
  const Array = [];
  for (const item of Object.values(report.allEmployees)) {
    Array.push(...item);
  }

  return Array;
}
