import "./styles.css";

const onClickAdd = (event) => {
  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = inputText;
  div.appendChild(p);

  // button(完了)タグ生成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    alert("完了");
  });

  // button(削除)タグ生成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", (deleteEvent) => {
    deleteEvent.preventDefault();
    alert("削除");
    // 押された削除ボタンの親タグ(div)を削除
    const deleteTarget = deleteButton.parentNode;
    console.log(deleteTarget);
    document.getElementById("incomplete-list").removeChild(deleteTarget);
  });

  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // li生成
  const li = document.createElement("li");
  // liタグの子要素に各要素を設定
  li.appendChild(div);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
  event.preventDefault();
};

alert("aaa");
document
  .getElementById("add-button")
  .addEventListener("click", (event) => onClickAdd(event));

// console.log(li.outerHTML);
// console.log(document.getElementById("incomplete-list").outerHTML);
// console.log(document.getElementById("incomplete-list").outerHTML);
