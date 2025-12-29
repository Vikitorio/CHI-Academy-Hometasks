// task 1 Функції вищого порядку та замикання
console.log("------------task 1 Функції вищого порядку та замикання-------\n\n");
function addParamsToRequest(params) {
    let count = 0;
    return function (data) {
        return { data:data, ...params, count: count++ };
    }
}

const sendData = addParamsToRequest({ jwt_token: "asdasdasdfgr43ftg324r123" });

const users = [{ user_id: "123" }, { user_id: "255" }, { user_id: "99" }]

for (user of users) {
    const result = sendData(user);
    console.log(result);
}


//task 2 - Контексти і this
console.log("\n\n-----------------task 2 - Контексти і this---------\n\n");
const randomUser = {
    name: "Nikita", age: "55"
}
const obj = {

    getData: function () {

        console.log(`Person name is: ${this.name} and age ${this.age}`)

    }

}

obj.getData.call(randomUser);
const functionWithContext = obj.getData.bind(randomUser);
functionWithContext();

//task 3 - Рекурсія
console.log("\n\n-----------------task 3 - Recursion------\n\n");
const root = {
    name: 'name',
    type: 'folder',
    children: [
        {
            name: 'folder 1',
            type: 'folder',
            children: [

                {
                    name: 'folder 2',
                    type: 'folder',
                    children: [
                        {
                            name: 'file 3',
                            type: 'file',
                            size: 30
                        }
                    ]
                }
            ]
        },
        {
            name: 'file 1',
            type: 'file',
            size: 10
        },
        {
            name: 'file 2',
            type: 'file',
            size: 20
        }
    ]
};


function getFileNamesRecursive(filesTree) {
    const namesArray = [];
    for (const element of filesTree.children) {
        if (element.type === "folder") {
            const res = getFileNamesRecursive(element);
            namesArray.push(...res);
        }
        else {
            namesArray.push(element.name);
        }
    }
    return namesArray;

}

console.log(getFileNamesRecursive(root));


//task4 - Classes
console.log("\n\n-----------------task 4.1 - Classes---------\n\n");

class Human {
    constructor(name, phone) {
        this.name = name;
        this.phone = phone;
    }
    introduction() {
        console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
    }
}

class Teacher extends Human {
    constructor(name, phone, subject) {
        super(name, phone);
        this._subject = subject;
    }
    teach() {
        console.log(`Я викладаю ${this._subject}`);
    }
    get subject() {
        return this._subject;
    }
    set subject(subject) {
        this._subject = subject;
    }
}
class Student extends Human {
    constructor(name, phone, course) {
        super(name, phone);
        this._course = course;
    }
    study() {
        console.log(`Я навчаюся на ${this._course} курсі.`);
    }
    get course() {
        return this._course;
    }
    set course(course) {
        this._course = course;
    }
}
const teacherNew = new Teacher("georg", "3806623213", "Maths");
const studentNew = new Student("Viktor", "095123123", 1)
teacherNew.introduction();
studentNew.introduction();
teacherNew.teach();
studentNew.study();

console.log("\n\n------------task 4.2 - Classes Old Style----\n\n");
function HumanOldStyle(name, phone) {
    this.name = name;
    this.phone = phone;
}
HumanOldStyle.prototype.introduction = function () {
    console.log(`Привіт, мене звати ${this.name}, мій номер ${this.phone}`);
}
function StudentOldStyle(name, phone, course) {
    HumanOldStyle.call(this, name, phone);
    this.course = course;
}
StudentOldStyle.prototype = Object.create(HumanOldStyle.prototype);
StudentOldStyle.prototype.study = function () {
    console.log(`Я навчаюся на ${this.course} курсі.`);
}


function TeacherOldStyle(name, phone, subject) {
    HumanOldStyle.call(this, name, phone);
    this.subject = subject;
}
TeacherOldStyle.prototype = Object.create(HumanOldStyle.prototype);
TeacherOldStyle.prototype.teach = function () {
    console.log(`Я викладаю ${this.subject}`);
}


const studentOld = new StudentOldStyle("Sergei", "3829442222", 1);
studentOld.introduction();
studentOld.study();

const teacherOld = new TeacherOldStyle("Mukola", "38822222", "Math Analysis");
teacherOld.introduction();
teacherOld.teach();