// const btn = document.querySelector("button");

// btn.addEventListener("submit", () => {});

function chkLogin() {
  let idInputBox = document.forms[0].elements.id;
  let pwInputBox = document.forms[0].elements.pw;

  let result;
  if (isEmpty(idInputBox, pwInputBox)) {
    result = true;
    document.forms[0].action =
      "https://song5789.github.io/loginEx_230504/index.html?nick=홍길동";
  } else {
    result = false;
  }

  return result;
}

function isEmpty(id, pw) {
  if (id.value == "") {
    alert("아이디를 입력하세요.");
    return false;
  } else if (pw.value == "") {
    alert("비밀번호를 입력하세요.");
    return false;
  }
  return true;
}
