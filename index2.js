window.addEventListener("DOMContentLoaded", () => {
  const boxes = document.querySelectorAll(".contain");
  //console.log(boxes);

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

  const p1 = new Player("X");
  const p2 = new Player("O");

  boxes.forEach((box) => {
    box.addEventListener("click", function () {
      if (p1.turn === true) {
        p1.click(box.className.split(" ")[1]);
        console.log(p1);
        socket.emit("xogame", p1);

        const p = document.createElement("p");
        p.textContent = p1.type;
        box.style.pointerEvents = "none";
        box.appendChild(p);
        // p1.clicked.map((cell)=> {
        if (
          p1.clicked.includes("one") &&
          p1.clicked.includes("two") &&
          p1.clicked.includes("three")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("one") &&
          p1.clicked.includes("four") &&
          p1.clicked.includes("seven")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("one") &&
          p1.clicked.includes("five") &&
          p1.clicked.includes("nine")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("two") &&
          p1.clicked.includes("five") &&
          p1.clicked.includes("eight")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("three") &&
          p1.clicked.includes("five") &&
          p1.clicked.includes("seven")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("three") &&
          p1.clicked.includes("five") &&
          p1.clicked.includes("seven")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("three") &&
          p1.clicked.includes("six") &&
          p1.clicked.includes("nine")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("four") &&
          p1.clicked.includes("five") &&
          p1.clicked.includes("six")
        ) {
          alert("player 1 won");
          location.reload();
        } else if (
          p1.clicked.includes("seven") &&
          p1.clicked.includes("eight") &&
          p1.clicked.includes("nine")
        ) {
          alert("player 1 won");
          location.reload();
        }

        p1.turn = false;
        p2.turn = true;
      } else {
        p2.click(box.className.split(" ")[1]);
        const p = document.createElement("p");
        p.textContent = p2.type;
        box.style.pointerEvents = "none";
        box.appendChild(p);
        // p2.clicked.map((cell)=>{

        if (
          p2.clicked.includes("one") &&
          p2.clicked.includes("two") &&
          p2.clicked.includes("three")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("one") &&
          p2.clicked.includes("four") &&
          p2.clicked.includes("seven")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("one") &&
          p2.clicked.includes("five") &&
          p2.clicked.includes("nine")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("two") &&
          p2.clicked.includes("five") &&
          p2.clicked.includes("eight")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("three") &&
          p2.clicked.includes("five") &&
          p2.clicked.includes("seven")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("three") &&
          p2.clicked.includes("five") &&
          p2.clicked.includes("seven")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("three") &&
          p2.clicked.includes("six") &&
          p2.clicked.includes("nine")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("four") &&
          p2.clicked.includes("five") &&
          p2.clicked.includes("six")
        ) {
          alert("player 2 won");
          location.reload();
        } else if (
          p2.clicked.includes("seven") &&
          p2.clicked.includes("eight") &&
          p2.clicked.includes("nine")
        ) {
          alert("player 2 won");
          location.reload();
        }

        p2.turn = false;
        p1.turn = true;
      }
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
