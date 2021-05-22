// ドロワーメニュー実装

jQuery('.drawer-icon').on('click', function(){

  jQuery('.drawer-icon').toggleClass('is-active');
  jQuery('.drawer-content').toggleClass('is-active');
  jQuery('.drawer-bg').toggleClass('is-active');

});

jQuery('.drawer-bg').on('click', function() {
  jQuery('.drawer-icon').removeClass('is-active'); 
  jQuery('.drawer-content').removeClass('is-active');
  jQuery('.drawer-bg').removeClass('is-active');
});




// スムーススクロール


jQuery('a[href^="#"]').click(function() {
  
  // headerの高さ取得
  let header = jQuery('.header').innerHeight();
  
  // 移動速度を指定（ミリ秒）
  let speed = 500;

  // hrefで指定されたidを取得
  let id = jQuery(this).attr("href"); //ex. id = "#news"

  // idの値が#のみだったらターゲットをhtmlタグにしてトップへ戻るようにする
  let target = jQuery("#" == id ? "html" : id);

  // 条件式 ? 真の場合の文 : 偽の場合の文 

  // ページのトップを基準にターゲットの位置を取得
  let position = jQuery(target).offset().top - header;

  // ターゲットの位置までspeedの速度で移動
  jQuery("html, body").animate(
    {
      scrollTop: position
   },
    speed
  );


  return false;
}); 


// WOW
new WOW().init();

// google-form
let $form = $('#js-form');
$form.submit(function(e) { 
  $.ajax({ 
   url: $form.attr('action'), 
   data: $form.serialize(), 
   type: "POST", 
   dataType: "xml", 
   statusCode: { 
      0: function() { 
        //送信に成功したときの処理 
        $($form).slideUp();
        $('#js-success').slideDown();
      }, 
      200: function() { 
        $($form).slideUp();
        $('#js-error').slideDown();
      }
    } 
  });
  return false; 
  
}); 

// submitボタン
let $submit = $('#js-submit');

$('#js-form input, #js-form textarea').on('change', function() {
  if(
    $('#js-form input[type="text"]').val() !== "" &&
    $('#js-form input[type="email"]').val() !== "" &&
    $('#js-form input[name="entry.942107817"]').prop('checked') === true
  ) {
    //全て入力された時
    $submit.prop('disabled', false)
    $submit.addClass('-active')
  } else {
    //されていない時
    $submit.prop('disabled', true)
    $submit.removeClass('-active')
  }
});

