// bind la rang buoc



this.firstname = "Minh";
this.lastname = "Thu";


const teacher =
{
   firstname : "Minh",
   lastname : "Thao",
   getfullname() {
          return `${this.firstname} ${this.lastname}`
   }
}

//case 1:  - > minh thao
console.log(teacher.getfullname());
// case 2 -> minhyh thu

// vi this o day se tro toi window
// neu goi ham se tro lai case 1

// const geteachername = teacher.getfullname  // ko goi
const geteachername = teacher.getfullname.bind(teacher) // minh thao
console.log(geteachername());




const student ={
    firstname : "Tat",
    lastname : "Tuan",
 
}
const getstudenmt = teacher.getfullname.bind(student) // minh thao
console.log(getstudenmt());
