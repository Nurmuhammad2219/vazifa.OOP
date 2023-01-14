class Human {
    constructor(obj) {
        this.name = obj.name
        this.age = obj.age
    }
    getInfo() {
        return `Your name is ${this.name}. Your age is ${this.age}`
    }
}


class Woman extends Human {
    constructor(el) {
        super(el)
        this.gender = "female"
    }
}
const Maria = new Woman({
    name: "Maria",
    age: 18
})








// new Human({
//     name: "Xojakbar",
//     age: 25
// })
// new Human({
//     name: "Abduvali",
//     age: 20
// })

