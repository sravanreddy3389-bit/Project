class Person{
    constructor(title, author, year){
        this.title= title
        this.author= author
        this.year= year
    }

    info(){
        console.log("The Author of the book '"+this.title+"' is " + this.author + " which was released in the year " + this.year +".")
    }
}

const b1= new Person("And there were None", "Agatha Christie", 1939)
b1.info()