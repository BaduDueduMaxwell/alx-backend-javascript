export default function taskBlock(trueOrFalse) {
  const task = false;
  const task2 = true;

  /* eslint-disable no-unused-vars */
  if (trueOrFalse) {
    const task = true; // This is now ignored by eslint
    const task2 = false;
  }
  /* eslint-disable no-unused-vars */

  return [task, task2];
}
