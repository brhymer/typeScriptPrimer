interface UserInterface{
    name: string;
    email: string;
    age: number;
    register();
    payInvoice();
}

class User implements UserInterface{
    // private name: string;
    name: string;
    public email: string;
    // private age: number;
    age: number;

    constructor(name: string, email: string, age: number){
        this.name=name;
        this.email=email;
        this.age=age;
         
        console.log('User Created: '+this.name);
    }

    register(){
        console.log(this.name+' is now registered');
    }
    payInvoice(){
        console.log(this.name+' paid invoice.');
    }
}

let john = new User('John', 'blah@blah.com', 6);

// Can't view because the variable is private
// console.log(john.age);

// This one is public
console.log(john.email);

john.register();


class Member extends User{
    id: number;

    constructor(id: number, name: string, email: string, age: number){
        super(name, email, age);
        this.id = id;
    }
    payInvoice(){
        super.payInvoice();
    }
}

let mike: User = new Member(1, 'Mike', 'mike@mike.com', 67);

mike.payInvoice();

