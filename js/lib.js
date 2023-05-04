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
// 암호화
let en = encodeURIComponent("홍길동");

// 복호화
let de = decodeURIComponent(en);
