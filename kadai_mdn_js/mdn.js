// date関数の呼び出し
const today = new Date();

// 表示
console.log(
  today.getFullYear() +
    "年" +
    (today.getMonth() + 1) +
    "月" +
    today.getDate() +
    "日"
);
