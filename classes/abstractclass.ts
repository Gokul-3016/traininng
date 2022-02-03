abstract class Person {
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employe extends Person { 
    name: string;
    empCode: number;
    
    constructor(name: string, code: number) { 
        super(); // must call super()
        
        this.empCode = code;
        this.name = name;
    }
}

let emp1: Person = new Employe("James", 100);
emp1.display(); 