interface Teacher {
  readonly firstName: string;
  readonly lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  [x: string]: any;
}

// solution for task 2
interface Directors extends Teacher {
  numberOfReports: number;
}

interface printTeacherFunction {
  (firstName: string, lastName: string): string;
}

// solution for task 3
interface IStudentClassProps {
  firstName: string;
  lastName: string;
}

interface IStudent {
  displayName: string;
  workOnHomework: () => string;
}

class StudentClass implements IStudent {
  displayName: string;

  constructor(props: IStudentClassProps) {
    this.displayName = props.firstName;
  }

  workOnHomework() {
    return 'Currently working';
  }
}

const printTeacher: printTeacherFunction = (
  firstName: string,
  lastName: string
) => `${firstName.substring(0, 1)}. ${lastName}`;

// Examples:
const B = document.querySelector('body');
// task 1:
const SECTION_T1 = document.createElement('SECTION');
const H2_T1 = document.createElement('H2');
H2_T1.innerText = 'Task 1';
SECTION_T1.appendChild(H2_T1);
const teacher3: Teacher = {
  firstName: 'John',
  fullTimeEmployee: false,
  lastName: 'Doe',
  location: 'London',
  contract: false,
};
console.log('Task 1:', teacher3);
const P_T1 = document.createElement('P');
P_T1.innerHTML = JSON.stringify(teacher3, null, 2);
SECTION_T1.appendChild(P_T1);
B.appendChild(SECTION_T1);

// task 2:
const SECTION_T2 = document.createElement('SECTION');
const H2_T2 = document.createElement('H2');
H2_T2.innerText = 'Task 2';
SECTION_T2.appendChild(H2_T2);
const director1: Directors = {
  firstName: 'John',
  lastName: 'Doe',
  location: 'London',
  fullTimeEmployee: true,
  numberOfReports: 17,
};
console.log('Task 2', director1);
const P_T2 = document.createElement('P');
P_T2.innerHTML = JSON.stringify(director1, null, 2);
SECTION_T2.appendChild(P_T2);
B.appendChild(SECTION_T2);

// task 3:
const SECTION_T3 = document.createElement('SECTION');
const H2_T3 = document.createElement('H2');
H2_T3.innerText = 'Task 3';
SECTION_T3.appendChild(H2_T3);
const P_T3 = document.createElement('P');
P_T3.innerHTML = 'Click to call printTeacher: ';
SECTION_T3.appendChild(P_T3);
const BUTTON_T3 = document.createElement('BUTTON');
BUTTON_T3.innerText = 'Print Teacher';
BUTTON_T3.onclick = () => {
  const printTeacherStr = printTeacher(teacher3.firstName, teacher3.lastName);
  console.log('Task 3: printTeacher: ', printTeacherStr);
  const P = document.createElement('P');
  P.innerText = printTeacherStr;
  SECTION_T3.appendChild(P);
};
SECTION_T3.appendChild(BUTTON_T3);
B.appendChild(SECTION_T3);

// task 4:
const SECTION_T4 = document.createElement('SECTION');
const H2_T4 = document.createElement('H2');
H2_T4.innerText = 'Task 4';
SECTION_T4.appendChild(H2_T3);
const student = new StudentClass({ firstName: 'Bart', lastName: 'Simpson' });
console.log('Task 4: ', student);
const P_T4 = document.createElement('P');
P_T4.style.lineHeight = "1.2";
P_T4.style.fontSize = "1em";
P_T4.innerHTML = `
  <code style="background: lightgrey;">
    const student = new StudentClass({ firstName: 'Bart', lastName: 'Simpson' });
    <br>
    console.log(student);
  </code>
  <br>
    --> ${JSON.stringify(student, null, 2)} 
  <br>
  <code style="background: lightgrey;">console.log(student.workOnHomework());</code>
  <br>
    --> ${student.workOnHomework()}
  `;
SECTION_T4.appendChild(P_T4);
B.appendChild(SECTION_T4);
