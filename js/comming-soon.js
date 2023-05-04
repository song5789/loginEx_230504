let centerText = document.querySelector("#center-text-container");
let loginbtn = document.querySelector("#login-area");
let userId = "hong";
let userPw = "1234";
let userNick = "홍길동";

window.onload = function () {
  centerText.style.opacity = "1";
  centerText.style.transform = "translate(-50%, -50%)";
  loginbtn.style.opacity = "1";
  loginbtn.style.top = "55%";
};

function chkQuery() {
  let id = getParam("id");
  let pw = getParam("pw");
  let nick = getParam("nick");

  console.log("id: " + id);
  console.log("pw: " + pw);
  if (id == userId && pw == userPw && nick == userNick) {
    alert("환영합니다!" + nick + " 님!");
    return true;
  } else {
    history.go(-1);
    alert("정보가 틀렸습니다. 다시 로그인 하세요.");
    return false;
  }
}

function getParam(param) {
  let query = location.search.substring(1);
  let arrQuery = query.split("&");
  for (let i = 0; i < arrQuery.length; i++) {
    let arrVal = arrQuery[i].split("=");
    if (arrVal[0] == param) {
      return arrVal[1];
    }
  }
}

function calcDay() {
  let currentTime = new Date().getTime();
  let dDay = new Date();
  dDay.setFullYear(2023, 4, 5);

  return (dDay.getTime() - currentTime) / 1000 / 60 / 60 / 24;
}

function showLeftTime() {
  let span = document.querySelector("#dayleft");
  let leftDay = calcDay();

  span.innerText = `HoliDay's ${leftDay} day left`;
}

setInterval(showLeftTime(), 1000);

if (location.search ?? null) {
  chkQuery();
}
