let imgs = ['./images/dice1.png','./images/dice2.png','./images/dice3.png','./images/dice4.png','./images/dice5.png','./images/dice6.png']
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let txt = document.getElementById('txt')
let p1 = document.getElementById('p1')
let p2 = document.getElementById('p2')


const game = {
    name1: "Player One",
    name2: "Player Two",

    // Enter players names ღილაკიდ ამუშავება (მომხმარებლისგან მოთამაშეთა რაოდენობი და სსახელების მოთხოვნა )

    names: function() {
        let number_of_players = Number(prompt('Enter how many players will play'))
        if (number_of_players === 1) {
            this.name1 = prompt('Enter player name')
            p1.textContent = this.name1
            this.name2 = "Computer"
            p2.textContent = this.name2
        } else if (number_of_players === 2) {
            this.name1 = prompt('Enter player name №1')
            this.name2 = prompt('Enter player name №2')
            p1.textContent = this.name1
            p2.textContent = this.name2
        }
    },

    // play ღილაკის ამუშავება (კამათელ-ის რანდომულობა და მოგების ტექსტის შეცვლა)
    play: function() {
        let random1 = Math.floor(Math.random() * 6)
        let random2 = Math.floor(Math.random() * 6)

        img1.src = imgs[random1]
        img2.src = imgs[random2]

        if (random1 > random2) {
            txt.textContent = this.name1 + " Win!"
        } else if (random1 === random2) {
            txt.textContent = "Tie!"
        } else {
            txt.textContent = this.name2 + " Win!"
        }
    }
}

