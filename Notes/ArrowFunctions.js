const sayHello = (name) => {
    console.log(`Hello ${name}`);
}

const sayHelloAgain = name => console.log(`Hello again ${name}`)

const returnObjFixed = () => ({ firstName: 'John', lastName: 'Wick' });

// class Deck {
//     constructor() {
//         const suits = ['Diamond', 'Heart', 'Spade', 'Club'];
//         const faces = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
//         const deck = [];
//         suits.forEach(function(suit) {
//           faces.forEach(function(face) {
//             deck.push(this.createCard(suit, face));
//           });
//         });
//         this.deck = deck;
//       }
//   }

sayHello("crud")
sayHelloAgain("crud")
console.log(returnObjFixed().firstName);

let myDeck = new Deck();
