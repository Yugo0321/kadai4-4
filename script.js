console.log("hello");
// ハンバーガーメニューの要素
const hamburgerMenu = document.querySelector(".hamburger");

// ハンバーガーメニューがクリックされた時に表示されるメニュー画面の要素
const navi = document.querySelector(".hamburger_navi");

const overlay = document.querySelector(".overlay");

// ハンバーガーメニュー内の各セクションの要素
// const hamburgerMenuSections = document.querySelectorAll(".hamburger-menu-section");

// ハンバーガーメニューをクリックした時の処理
hamburgerMenu.addEventListener("click", function () {
  // toggleを使用することで、hamburgerクラスとhamburger-navigationIDに
  // activeクラスが存在する場合は削除、存在しない場合を追加する処理を自動で行ってくれる
  hamburgerMenu.classList.toggle("active");
  navi.classList.toggle('active');
  overlay.classList.toggle("active");
});

// // ハンバーガーメニュー内の各セクションをクリックした際、開いていたハンバーガーメニューを閉じる
// hamburgerMenuSections.forEach((hamburgerMenuSection) => {
//   hamburgerMenuSection.addEventListener("click", function () {
//     hamburgerMenu.classList.remove("active");
//     navi.classList.remove("active");
//   });

// ふわっと表示させたい要素を取得
const fadeElements = document.querySelectorAll(".fadein");

// IntersectionObserverを作成
const observer = new IntersectionObserver(function(entries){

  entries.forEach(function(entry){

    // 要素が画面内に入ったら
    if(entry.isIntersecting){

      // showクラスを追加
      entry.target.classList.add("show");

    }

  });

});

// 各要素を監視
fadeElements.forEach(function(element){

  observer.observe(element);

});