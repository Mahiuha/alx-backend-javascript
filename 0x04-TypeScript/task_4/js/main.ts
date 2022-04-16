/// <reference path="./subjects/Subject.ts" />

export const cpp = new Subjects.Cpp();
export const java = new Subjects.Java();
export const react = new Subjects.React();
export const cTeacher:Subjects.Teacher = {
    firstName: "Professor",
    lastName: "C. Teacher",
    experienceTeachingC: 10
}
cpp.teacher = cTeacher;
console.log("C++")
console.log("   getRequirements: ", cpp.getRequirements())
console.log("   getAvailableTeacher: ", cpp.getAvailableTeacher())
java.teacher = cTeacher;
console.log("Java")
console.log("   getRequirements: ", cpp.getRequirements())
console.log("   getAvailableTeacher: ", cpp.getAvailableTeacher())
react.teacher = cTeacher;
console.log("React")
console.log("   getRequirements: ", cpp.getRequirements())
console.log("   getAvailableTeacher: ", cpp.getAvailableTeacher())

