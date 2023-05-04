let centerText = document.querySelector("#center-text-container");
let userId = "hong";
let userPw = "1234";

window.onload = function () {
  centerText.style.opacity = "1";
  centerText.style.transform = "translate(-50%, -50%)";
  if (chkQuery()) {
    alert("환영합니다!");
  } else {
    history.back();
    alert("입력된 정보가 맞지 않습니다. 다시 로그인 하세요.");
  }
};

function chkQuery() {
  let id = getParam("id");
  let pw = getParam("pw");

  console.log("id: " + id);
  console.log("pw: " + pw);
  if (id == userId && pw == userPw) {
    return true;
  } else {
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
