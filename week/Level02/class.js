// const dog ={
//     leg:4,
//     sound:"meow",
//     nameanimal:"doggie"
// }
// const cat ={
//     leg:4,
//     sound:"meow",
//     nameanimal:"doggie"
// }
// function animalsound(spec){
//     console.log("leg of dog is ",spec['leg']+"   "+ "name of dog is "+  spec['nameanimal'])
// }
// animalsound(dog)

//this is now good practise

class Animal {
    constructor(name, legCount) {
      this.name = name
      this.legCount = legCount
    }
    describe() {
      return `${this.name} has ${this.legCount} legs`
    }
  }
  
  let dog=new Animal("doggie",4)
  let cat=new Animal("car",4)

  console.log(cat.describe())
  