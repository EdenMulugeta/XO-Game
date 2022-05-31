

window.addEventListener("DOMContentLoaded", () => {

  const boxes = document.querySelectorAll(".contain");
  var socket = io();
  class Player {
    constructor(type) {
      this.clicked = [];
      this.type = type;
      this.turn = this.type === "X" ? true : false;
    }
    toogleTurn() {
      this.turn = !this.turn;
    }

    click(box) {
      this.clicked.push(box);
    }
  }
  var playerData = {
    p1: new Player("X"),
    p2: new Player("O")
  }


  socket.on("xogame", (data) => {

    boxes.forEach(box => {
      let box2 = box.className.split(" ")[1]
      if (box2 === data.el && box.childNodes.length === 0) {
        checkBoxes(playerData, box)
      }
    })
  });

  const checkBoxes = (type, box) => {
    if (type.p1.turn === true) {
      type.p1.click(box.className.split(" ")[1]);
      socket.emit("xogame", type.p1);

      const p = document.createElement("p");
      p.textContent = type.p1.type;
      box.style.pointerEvents = "none";
      box.appendChild(p);

      if (
        type.p1.clicked.includes("one") &&
        type.p1.clicked.includes("two") &&
        type.p1.clicked.includes("three")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("one") &&
        type.p1.clicked.includes("four") &&
        type.p1.clicked.includes("seven")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("one") &&
        type.p1.clicked.includes("five") &&
        type.p1.clicked.includes("nine")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("two") &&
        type.p1.clicked.includes("five") &&
        type.p1.clicked.includes("eight")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("three") &&
        type.p1.clicked.includes("five") &&
        type.p1.clicked.includes("seven")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("three") &&
        type.p1.clicked.includes("five") &&
        type.p1.clicked.includes("seven")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("three") &&
        type.p1.clicked.includes("six") &&
        type.p1.clicked.includes("nine")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("four") &&
        type.p1.clicked.includes("five") &&
        type.p1.clicked.includes("six")
      ) {
        alert("player 1 won");
        location.reload();
      } else if (
        type.p1.clicked.includes("seven") &&
        type.p1.clicked.includes("eight") &&
        type.p1.clicked.includes("nine")
      ) {
        alert("player 1 won");
        location.reload();
      }

      type.p1.turn = false;
      type.p2.turn = true;
    } else {
      type.p2.click(box.className.split(" ")[1]);
      const p = document.createElement("p");
      p.textContent = type.p2.type;
      box.style.pointerEvents = "none";
      box.appendChild(p);
      if (
        type.p2.clicked.includes("one") &&
        type.p2.clicked.includes("two") &&
        type.p2.clicked.includes("three")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("one") &&
        type.p2.clicked.includes("four") &&
        type.p2.clicked.includes("seven")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("one") &&
        type.p2.clicked.includes("five") &&
        type.p2.clicked.includes("nine")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("two") &&
        type.p2.clicked.includes("five") &&
        type.p2.clicked.includes("eight")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("three") &&
        type.p2.clicked.includes("five") &&
        type.p2.clicked.includes("seven")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("three") &&
        type.p2.clicked.includes("five") &&
        type.p2.clicked.includes("seven")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("three") &&
        type.p2.clicked.includes("six") &&
        type.p2.clicked.includes("nine")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("four") &&
        type.p2.clicked.includes("five") &&
        type.p2.clicked.includes("six")
      ) {
        alert("player 2 won");
        location.reload();
      } else if (
        type.p2.clicked.includes("seven") &&
        type.p2.clicked.includes("eight") &&
        type.p2.clicked.includes("nine")
      ) {
        alert("player 2 won");
        location.reload();
      }
      type.p2.turn = false;
      type.p1.turn = true;
    }
  }


  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      socket.emit("xogame", { type: playerData, el: box.className.split(" ")[1] });
      checkBoxes(playerData, box)
    });
  });

  /* p2.clicked.foreach((box)=>{
    box.addEventListener("click",function(){
      p2.click(box);
      const p = document.createElement("p");
      p.textContent = p2.type;
      box.style.pointerEvents = "none";
      box.appendChild(p);
      if (one.firstChild && two.firstChild && three.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (one.firstChild && five.firstChild && nine.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (one.firstChild && four.firstChild && seven.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (two.firstChild && five.firstChild && eight.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (three.firstChild && five.firstChild && seven.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (three.firstChild && six.firstChild && nine.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (four.firstChild && five.firstChild && six.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      } else if (seven.firstChild && eight.firstChild && nine.firstChild && firstChild.textContent=="O") {
        alert("player 2 won");
        location.reload();
      }
    },{ once: true })
  })
*/

  /* boxes.forEach((box) => {
    box.addEventListener(
      "click",
      function () {
        const p = document.createElement("p");
        p.textContent = "x";
        box.style.pointerEvents = "none";
        box.appendChild(p);
        if (one.firstChild && two.firstChild && three.firstChild) {
          alert("player 1 won");
          location.reload();
        } else if (one.firstChild && five.firstChild && nine.firstChild) {
          alert("player 1 won");
          location.reload();
        } else if (one.firstChild && four.firstChild && seven.firstChild) {
          alert("player 2 won");
          location.reload();
        } else if (two.firstChild && five.firstChild && eight.firstChild) {
          alert("player 2 won");
          location.reload();
        } else if (three.firstChild && five.firstChild && seven.firstChild) {
          alert("player 1 won");
          location.reload();
        } else if (three.firstChild && six.firstChild && nine.firstChild) {
          alert("player 2 won");
          location.reload();
        } else if (four.firstChild && five.firstChild && six.firstChild) {
          alert("player 1 won");
          location.reload();
        } else if (seven.firstChild && eight.firstChild && nine.firstChild) {
          alert("player 1 won");
          location.reload();
        }
      },{ once: true }
    );
  });*/
});
