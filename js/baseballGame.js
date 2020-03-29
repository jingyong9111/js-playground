// * ================================================== *
//
// 1. 임의의 숫자 4자리를 만든다.
// ex) 1234 (겹치지 않게)
//
// 2. 답을 입력한다.
//
// 3. 답을 체크한다.
//
//  3-1 답이면 1번으로 돌아간다.(다음 문제를 만든다.)
//  3-2 답이 아니면 스트라이크, 볼로 알려준다.(기회 10회)
//   ex) 답 : 1234 , 입력 값 : 2134   === 2스트라이크 2볼
//       입렵 값의 숫자와 위치가 정확인 일치하면 1스트라이크
//       숫자는 존재하나 위치가 다르면 1볼
//       모든 숫자가 일치하면 홈런
//
// * ================================================== *

const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let arr = [];
let fail = 0;
// 이건 왜 콘솔로 안나오는 거야..
let numJoin = arr.join("");

// 이것도 왜 콘솔에서 undefine 인거야..
// let string = String(arr[0]) + String(arr[1]) + String(arr[2]) + String(arr[3]);
// const chang = Number(string);

for (let i = 0; i < 4; i += 1) {
  // splice(위치,개수) 배열을 반환한다.
  let select = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
  arr.push(select);
}

const bgResult = document.createElement("h1");
body.append(bgResult);

const bgForm = document.createElement("form");
body.append(bgForm);

const bgInput = document.createElement("input");
bgInput.type = "number";
bgInput.maxLength = 4;
bgForm.append(bgInput);

const bgBtn = document.createElement("button");
bgBtn.textContent = "버튼";
bgForm.append(bgBtn);

bgForm.addEventListener("submit", function(e) {
  // submit 기능에 엔터를 치면 자동 새로고침이 되는데 그걸 방지하기위해 아래 코드를 작성해준다.
  e.preventDefault();
  const bgAnswer = bgInput.value;
  if (bgAnswer === arr.join("")) {
    bgResult.textContent = "홈런";
    bgInput.value = "";
    bgInput.focus();
    // num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    // arr = [];
    for (let i = 0; i < 4; i += 1) {
      // splice(위치,개수) 배열을 반환한다.
      let select = num.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
      arr.push(select);
    }
  } else {
    let inputAnswer = bgAnswer.split("");
    let strike = 0;
    let ball = 0;
    bgInput.value = "";
    bgInput.focus();
    fail += 1;
    console.log(fail);

    if (fail === 10) {
      bgResult.textContent = "실패 -- 답은" + arr.join(" ");
    } else {
      for (let i = 0; i < 3; i += 1) {
        if (arr[i] === Number(inputAnswer[i])) {
          strike += 1;
          bgInput.value = "";
          bgInput.focus();
        } else if (arr.indexOf(Number(inputAnswer[i])) > -1) {
          ball += 1;
        }
      }
      bgResult.textContent = strike + "스트라이크" + ball + " 볼 입니다";
    }
  }
});

console.log(arr);
