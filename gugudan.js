let num1 = Math.ceil(Math.random() * 9) + 1;
let num2 = Math.ceil(Math.random() * 9) + 1;
let result = num1 * num2;

const body = document.body;
const word = document.createElement("div");

word.textContent = String(num1) + "곱하기" + String(num2) + "는?";
document.body.append(word);

const form = document.createElement("form");
document.body.append(form);

const input = document.createElement("input");
// input.type = "number";
form.append(input);

const btn = document.createElement("button");
btn.textContent = "입력";
form.append(btn);

const resultBox = document.createElement("div");
document.body.append(resultBox);

form.addEventListener("submit", function(e) {
  e.preventDefault();
  if (result === Number(input.value)) {
    resultBox.textContent = "정답";
    input.value = " ";
    input.focus();
    num1 = Math.ceil(Math.random() * 9) + 1;
    num2 = Math.ceil(Math.random() * 9) + 1;
    result = num1 * num2;
    word.textContent = String(num1) + "곱하기" + String(num2) + "는?";
  } else {
    resultBox.textContent = "땡";
    input.value = " ";
    input.focus();
  }
});

console.log("result", result);
console.log("input", input.value);
