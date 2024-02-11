"use strict";

//ハンバーガーメニュー
let hbgFlg = false;
const hbgbtn = document.querySelector("#hbg-btn");
function btnClick() {
  const hbgbtnDiv = document.querySelector(".btn-line");
  const hbgMenu = document.querySelector(".hbg-menu-body");
  const body = document.body;

  if (hbgFlg == false) {
    hbgMenu.classList.add("hbg-menu-body-clicked");
    hbgbtnDiv.classList.add("btn-line-clicked");
    body.classList.add("no-scroll");
    hbgFlg = true;
  } else {
    hbgMenu.classList.remove("hbg-menu-body-clicked");
    hbgbtnDiv.classList.remove("btn-line-clicked");
    body.classList.remove("no-scroll");
    hbgFlg = false;
  }
}
const hbgbtnAction = hbgbtn.addEventListener("click", btnClick);
const abtn = document.querySelectorAll(".hbg-act");
const abtbtnaction1 = abtn[0].addEventListener("click", btnClick);
const abtbtnaction2 = abtn[1].addEventListener("click", btnClick);
const abtbtnaction3 = abtn[2].addEventListener("click", btnClick);
const abtbtnaction4 = abtn[3].addEventListener("click", btnClick);
const abtbtnaction5 = abtn[4].addEventListener("click", btnClick);


$(document).on("scroll", function () {
  if ($(window).scrollTop() > 720) {
    $(".btn-line").addClass("changecolor");
  } else {
    $(".btn-line").removeClass("changecolor");
  }
});

$(document).on("scroll", function () {
  if ($(window).scrollTop() > 720) {
    $("#pc-list >li").addClass("changetextcolor");
  } else {
    $("#pc-list >li").removeClass("changetextcolor");
  }
});



  // eachTextAnimeにappeartextというクラス名を付ける定義
function EachTextAnimeControl() {
  $('.eachTextAnime').each(function () {
    var elemPos = $(this).offset().top - 50;
    var scroll = $(window).scrollTop();
    var windowHeight = $(window).height();
     // "appeartext" クラスがまだ存在していないことを確認
     if (scroll >= elemPos - windowHeight && !$(this).hasClass("appeartext")) {
      $(this).addClass("appeartext");
    } else {
      // 任意で、要素がビューポート外に出た場合にクラスを削除することも考慮できます
      // $(this).removeClass("appeartext");
    }
  });
}


// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function () {
  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});
// ここまで画面をスクロールをしたら動かしたい場合の記述

// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
  //spanタグを追加する
  var element = $(".eachTextAnime");
  element.each(function () {
    var text = $(this).text();
    var textbox = "";
    text.split('').forEach(function (t, i) {
      if (t !== " ") {
        if (i < 10) {
          textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
        } else {
          var n = i / 10;
          textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
        }

      } else {
        textbox += t;
      }
    });
    $(this).html(textbox);
  });

  EachTextAnimeControl();/* アニメーション用の関数を呼ぶ*/
});
// ここまで画面が読み込まれたらすぐに動かしたい場合の記述


var ロゴの要素 = document.getElementById("logo");
    var 置き換え画像のURL = "img/tiraneiv.png";
    var 置き換え位置 = 720; // 画像を置き換えるスクロール位置（ピクセル）

    // スクロールイベントを追加
    window.addEventListener("scroll", function() {
        // 現在のスクロール位置を取得
        var 現在のスクロール位置 = window.scrollY || document.documentElement.scrollTop;

        // スクロール位置が指定位置を超えたら画像を置き換え
        if (現在のスクロール位置 >= 置き換え位置) {
            ロゴの要素.setAttribute("src", 置き換え画像のURL);
        } else {
            // スクロール位置が指定位置未満の場合は元の画像に戻す
            ロゴの要素.setAttribute("src", "img/keyviewlogo.png");
        }
    });