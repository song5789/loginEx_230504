// const btn = document.querySelector("button");

// btn.addEventListener("submit", () => {});

function chkLogin() {
  let idInputBox = document.forms[0].elements.id;
  let pwInputBox = document.forms[0].elements.pw;

  let result = isEmpty(idInputBox, pwInputBox) ? true : false;
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
