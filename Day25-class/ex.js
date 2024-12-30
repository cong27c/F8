


// function Character(name, hp, atk, defense, speed, counterRate) {
//     this.name = name;
//     this.hp = hp;
//     this.atk = atk;
//     this.defense = defense;
//     this.speed = speed;
//     this.counterRate = counterRate;
//     this.isAttack = (target) => {
//         let trueDame = Math.max(this.atk - target.defense , 0)
//         target.hp -= trueDame
//         console.log(`${this.name} tấn công ${target.name}, gây ra ${trueDame} sát thương.${target.name} còn lại ${target.hp} máu`)

//         if(target.isAlive() && Math.random() < target.counterRate) {
//             let counterDame = Math.max(target.atk - this.defense, 0)
//         this.hp -= counterDame
//         console.log(`${target.name} phản công lại ${this.name}, gây ra ${counterDame} sát thương.${this.name} còn lại ${this.hp} máu`)
//         }
//     };
//     this.isAlive = () => {
//         return this.hp > 0
//     };
// }




// function players(attacker, defender) {
//     attacker.isAttack(defender)
//     if(defender.isAlive()) defender.isAttack(attacker)
// }


// function Battle(char1, char2) {
//     let round = 1
//     while(char1.isAlive() && char2.isAlive()) {
//         console.log(`Round : ${round}`);

//         if(char1.speed > char2.speed) {
//             players(char1,char2)
//         } else if(char2.speed > char1.speed){
//             players(char2,char1)
//         } else {
//             if(Math.random() < 0.5) {
//             players(char1,char2)
//             } else {
//             players(char2,char1)
//             }
//         }
//         round++
//     }
//     const winner = char1.isAlive() ? char1 : char1
//     console.log(`${winner.name} wins!`);
//     return winner
// }




// const tom = new Character("Tom", 1000, 50, 5, 30, 0.5); // tốc độ 30
// const jerry = new Character("Jerry", 500, 100, 20, 30, 0.6); // tốc độ 10

// Battle(tom,jerry)




// Prototype chain

// function Character(name) {
//     this.name = name;
// }

// Character.prototype.sayHi = function() {
//     console.log(`Hi toi la ${this.name}`);
// }

// const tom = new Character("Tom")

// tom.sayHi()
// console.log(Character.prototype.constructor);
// console.log(tom.__proto__);


const person = {
    firstName: 'John',
    greet: function(greeting) {
        console.log(`${greeting}, my name is ${this.firstName}`);
    }
};

const greet1 = person.greet.bind(person)

greet1('hi')

const app = {
    log(data) {
      console.log(data);
    },
    batch(list) {
      for (let item of list) {
        this.log(item);
      }
    }
  };
  const batch = app.batch.bind(app);
  batch([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
    { id: 3, name: 'Item 3' },
  ]);


  