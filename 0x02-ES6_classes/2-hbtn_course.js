export default class HolbertonCourse {
  constructor(name, length, students) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._name = name;
    this._length = length;
    this._students = students;
  }

  set name(name) {
    if (typeof name !== 'string') throw TypeError('name must be a String');
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set length(length) {
    if (typeof length !== 'number') throw TypeError('length must be a Number');
    this._length = length;
  }

  get length() {
    return this._length;
  }

  set students(students) {
    if (!Array.isArray(students)) throw TypeError('students must be an Array');
    for (const el of students) {
      if (typeof el !== 'string') { throw TypeError('students must contain strings'); }
    }
    this._students = students;
  }

  get students() {
    return this._students;
  }
}
