$(function () {
  $('#top').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, slow, 'swing');
    return false;
  });
});

$(function () {
  $('#conbination').on('click', function () {
    var targetTop = $('#conbination').offset().top - 1000;
    $('html,body').animate({
      scrollTop: targetTop
    }, 500);
    return false;
  });
});

$(function () {
  $('#menu').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function () {
  $('#insta').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function () {
  $('#YouTube').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});

$(function () {
  $('#location').on('click', function () {
    $('html,body').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});
