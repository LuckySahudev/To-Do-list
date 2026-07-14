const container = document.querySelector(".container");
const winner = document.querySelector(".winner");
const restart = document.querySelector("#restart");

let arr = [["0","0","0"],["0","0","0"],["0","0","0"]];
let copy = "X";
let count = 0;

// create grid
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        let item = document.createElement("div");
        item.classList.add("preTextcolor", "item");
        item.setAttribute("id", `${i}${j}`);
        container.append(item);
    }
}

// reusable styling function
function applyStyle(indices) {
    const items = document.querySelectorAll(".item");
    indices.forEach(i => {
        items[i].classList.add("Textcolor");
        items[i].classList.remove("preTextcolor");
    });
}

// highlight winner
function winnerPopUp(k, f) {
    if (f == 1) return applyStyle([0, 4, 8]); // main diagonal
    if (f == 2) return applyStyle([2, 4, 6]); // anti-diagonal
    if (f == 3) return applyStyle([k, k + 1, k + 2]); // row
    if (f == 4) return applyStyle([k, k + 3, k + 6]); // column
}

// check winner
function checkWinner() {

    // main diagonal
    if (arr[0][0] === copy && arr[1][1] === copy && arr[2][2] === copy) {
        winner.innerHTML = `Winner is ${copy}`;
        winnerPopUp(0, 1);
        count = 10;
        return;
    }

    // anti diagonal
    if (arr[2][0] === copy && arr[1][1] === copy && arr[0][2] === copy) {
        winner.innerHTML = `Winner is ${copy}`;
        winnerPopUp(0, 2);
        count = 10;
        return;
    }

    // rows
    for (let i = 0; i < 3; i++) {
        if (arr[i][0] === copy && arr[i][1] === copy && arr[i][2] === copy) {
            winner.innerHTML = `Winner is ${copy}`;
            winnerPopUp(i * 3, 3); // ✅ FIXED
            count = 10;
            return;
        }
    }

    // columns
    for (let i = 0; i < 3; i++) {
        if (arr[0][i] === copy && arr[1][i] === copy && arr[2][i] === copy) {
            winner.innerHTML = `Winner is ${copy}`;
            winnerPopUp(i, 4);
            count = 10;
            return;
        }
    }
}

// click handling (FIXED: container instead of document)
container.addEventListener("click", (e) => {
    if (!e.target.classList.contains("item")) return;
    if (e.target.innerText !== "" || count > 9) return;

    count++;

    const index = Number(e.target.id);
    const i = Math.floor(index / 10) - 1;
    const j = index % 10 - 1;

    arr[i][j] = copy;
    e.target.innerText = copy;

    if (count >= 5) checkWinner();

    // draw condition ✅
    if (count === 9 && winner.innerHTML === "") {
        winner.innerHTML = "Match Draw";
    }

    // switch player
    copy = copy === "X" ? "O" : "X";
});

// restart game (FIXED)
restart.addEventListener("click", () => {
    const items = document.querySelectorAll(".item");

    for (let el of items) {
        el.classList.add("preTextcolor");
        el.classList.remove("Textcolor");
        el.innerHTML = "";
    }

    copy = "X";
    count = 0;
    arr = [["0","0","0"],["0","0","0"],["0","0","0"]];
    winner.innerHTML = "";
});

