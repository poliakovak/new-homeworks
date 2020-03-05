class User {
    constructor(name,surname){
        this.name = name;
        this.surname = surname;
    }
    getFullName(){
        console.log(`${this.name} ${this.surname}`);
    }
}

class Student extends User{
    constructor(name,surname,year){
        super(name,surname);
        this.year = year;
    }
    getCousrse(){
        let currentYear = new Date().getFullYear();
        let result = currentYear - this.year;
        if(result < 1 || result > 5){
            console.log("Looks like it`s not a student");
        }
        else{
            console.log(result);
        }
    }
}





