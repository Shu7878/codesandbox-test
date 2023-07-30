import "./styles.css";

const onClickAdd = (event) => {
  event.preventDefault();

  // テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// 削除処理をするボタンを作成
const createDeleteButton = (parentId, buttonInnerText) => {
  // buttonタグ生成
  const deleteButton = buttonTag(buttonInnerText);

  deleteButton.addEventListener("click", (event) => {
    event.preventDefault();
    // 押された削除ボタンの親タグを削除
    document.getElementById(parentId).removeChild(deleteButton.parentNode);
  });
  return deleteButton;
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  const li = liTag("list-row");
  const p = pTag(text);
  const completeButton = buttonTag("完了");
  const deleteButton = createDeleteButton("incomplete-list", "削除");

  completeButton.addEventListener("click", (completeEvent) => {
    completeEvent.preventDefault();
    // 押された完了ボタンの親タグ(li)を削除
    document
      .getElementById("incomplete-list")
      .removeChild(completeButton.parentNode);

    const addTarget = completeButton.parentNode;
    const text = addTarget.firstElementChild.innerText;

    const li = liTag("list-row");
    const p = pTag(text);
    const backButton = createDeleteButton("complete-list", "戻す");
    backButton.addEventListener("click", (event) => {
      event.preventDefault();
      // 再帰関数となるため、実務では注意が必要
      createIncompleteList(text);
    });

    li.appendChild(p);
    li.appendChild(backButton);
    document.getElementById("complete-list").appendChild(li);
  });

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  li.appendChild(completeButton);
  li.appendChild(deleteButton);

  // 未完了のリストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

const pTag = (text) => {
  const p = document.createElement("p");
  p.innerText = text;
  return p;
};

const liTag = (className) => {
  const li = document.createElement("li");
  li.className = className;
  return li;
};

const buttonTag = (buttonInnerText) => {
  const button = document.createElement("button");
  button.innerText = buttonInnerText;
  return button;
};

document
  .getElementById("add-button")
  .addEventListener("click", (event) => onClickAdd(event));

// // div生成
// const div = document.createElement("div");
// div.className = "list-row";

// const completeButton = document.createElement("button");
// completeButton.innerText = "完了";
// completeButton.addEventListener("click", (completeEvent) => {
//   completeEvent.preventDefault();

//   // 押された完了ボタンの親タグ(li)を削除
//   deleteFromIncompleteList(completeButton.parentNode);
// });

// const deleteButton = document.createElement("button");
// deleteButton.innerText = "削除";
// deleteButton.addEventListener("click", (deleteEvent) => {
//   deleteEvent.preventDefault();

//   // 押された削除ボタンの親タグ(li)を削除
//   deleteFromIncompleteList(deleteButton.parentNode);
// });

// const liAfterBack = liTag("list-row");
// const pAfterBack = pTag(text);
// const completeButtonAfterBack = createDeleteButton(
//   "incomplete-list",
//   "完了"
// );
// completeButtonAfterBack.addEventListener("click", (event) => {
//   event.preventDefault();
//   const liAfterBackAfter = liTag("list-row");
//   const pAfterBackAfter = pTag(text);
//   liAfterBackAfter.appendChild(pAfterBackAfter);
//   liAfterBackAfter.appendChild(backButton);
//   document.getElementById("complete-list").appendChild(liAfterBackAfter);
// });

// liAfterBack.appendChild(pAfterBack);
// liAfterBack.appendChild(completeButtonAfterBack);
// liAfterBack.appendChild(deleteButtonAfterBack);
// document.getElementById("incomplete-list").appendChild(liAfterBack);
