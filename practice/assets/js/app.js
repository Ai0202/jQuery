// jQueryの書き方
// Q1
// $('セレクタ').関数()

// ボタンがクリックされたら
$('#q1-btn').on('click', function() {
  // ボタンを大きくする
  // $(this).addClass('large-btn');
  $(this).toggleClass('large-btn');
  $(this).text('クリックされました');
  $(this).css('backgroundColor', 'red')
})


// 導入のしかた