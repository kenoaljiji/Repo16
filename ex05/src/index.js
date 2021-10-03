class Microsoft {
  constructor(name) {
    this.name = name;
  }

  //getter

  get name() {
    return this._name;
  }

  //setter

  set name(newName) {
    this._name = newName;
  }

  occupation() {
    return this.name + " is a philanthropist!";
  }
}

class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this._age = age;
  }
  studentAge() {
    return this.name + " is " + this._age;
  }
}

let henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());
let elliot = new Facebook("Mark Elliot Zuckerberg ", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

module.exports = {
  Microsoft,
  Facebook,
};
