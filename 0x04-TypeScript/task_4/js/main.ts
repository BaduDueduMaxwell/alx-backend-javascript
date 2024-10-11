export const cTeacher = {
  firstName: 'John',
  lastName: 'Doe',
  experienceTeachingC: 10,
  experienceTeachingJava: 10, 
  experienceTeachingReact: 10
};

export const cpp = new Subjects.Cpp();
console.log('C++');
cpp.teacher = cTeacher;
console.log(cpp.getRequirement());
console.log(cpp.getAvailableTeacher());

export const java = new Subjects.Java();
console.log("Java");
java.teacher = cTeacher;
console.log(java.getRequirements());
console.log(java.getAvailableTeacher());

export const react = new Subjects.React();
console.log("React");
react.teacher = cTeacher;
console.log(react.getRequirements());
console.log(react.getAvailableTeacher());
