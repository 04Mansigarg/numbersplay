// Create a constructor function called teacher with at least two relevant properties
// Create one more constructor function called person which should accept name and subject.
// since person is a teacher, we need person to inherit properties of teacher.
// use call, apply, bind seperately inside person constructor function and create a three person object which should contain both the properties of teacher and person.


function Teacher(education,experience){
    this.Education=education;
    this.Experience=experience;
    console.log(this)
   
}

function Person(name,subject){
    this.Name = name;
    this.Subject=subject
    
}

Teacher.call(new Person("Savita Bargujar","Chemistry"),"Delhi University","3 year")
Teacher.apply(new Person("Ranjana Dixit","Chemistry"),["Banaras Hindu University","3 year"])
var bind = Teacher.bind(new Person("Aman Vats","DSA"),"Masai School","2 year")
// console.log(bind)
bind()
