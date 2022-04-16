/// <reference path="Subject.ts" />
namespace Subjects {
    export interface Teacher {
      experienceTeachingJava?: number;
    }
    export class Java extends Subject {
      getRequirements() {
        return 'Here is the list of requirements for Java';
      }
      getAvailableTeacher() {
        return this.teacher.experienceTeachingC !== null
          ? `Available Teacher: ${this.teacher.firstName}`
          : 'No available teacher';
      }
    }
  }
 
