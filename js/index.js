function activate(div, btn, css) {
  $(btn).addClass(css);
  $(div).css('display', 'block');
}

function remove(div, btn, css) {
  $(btn).removeClass(css);
  $(div).css('display', 'none');
}

$(document).ready(function() {
  // Portfolio top buttons
  $('#background-but').on('click', function() {
    activate('#background', '#background-but', 'btn-active');
    remove('#web', '#web-but', 'btn-active')
    remove('#games', '#games-but', 'btn-active')
  });

  $('#web-but').on('click', function() {
    $('#background-but').removeClass('btn-active');
    $('#background').css('display', 'none');

    $('#web-but').addClass('btn-active');
    $('#web').css('display', 'block');

    $('#games-but').removeClass('btn-active');
    $('#games').css('display', 'none');
  });

  $('#games-but').on('click', function() {
    $('#background-but').removeClass('btn-active');
    $('#background').css('display', 'none');

    $('#web-but').removeClass('btn-active');
    $('#web').css('display', 'none');

    $('#games-but').addClass('btn-active');
    $('#games').css('display', 'block');
  });

  //Porfolio web buttons
  $('#clock-btn').on('click', function() {
    $('#clock-btn').addClass('web-active');
    $('#clock').css('display', 'block');

    $('#quotes-btn').removeClass('web-active');
    $('#quotes').css('display', 'none');

    $('#aec-btn').removeClass('web-active');
    $('#aec').css('display', 'none');

    $('#flag-btn').removeClass('web-active');
    $('#flag').css('display', 'none');
  });

  $('#quotes-btn').on('click', function() {
    $('#clock-btn').removeClass('web-active');
    $('#clock').css('display', 'none');

    $('#quotes-btn').addClass('web-active');
    $('#quotes').css('display', 'block');

    $('#aec-btn').removeClass('web-active');
    $('#aec').css('display', 'none');

    $('#flag-btn').removeClass('web-active');
    $('#flag').css('display', 'none');
  });

  $('#aec-btn').on('click', function() {
    $('#clock-btn').removeClass('web-active');
    $('#clock').css('display', 'none');

    $('#quotes-btn').removeClass('web-active');
    $('#quotes').css('display', 'none');

    $('#aec-btn').addClass('web-active');
    $('#aec').css('display', 'block');

    $('#flag-btn').removeClass('web-active');
    $('#flag').css('display', 'none');
  });

  $('#flag-btn').on('click', function() {
    $('#clock-btn').removeClass('web-active');
    $('#clock').css('display', 'none');

    $('#quotes-btn').removeClass('web-active');
    $('#quotes').css('display', 'none');

    $('#aec-btn').removeClass('web-active');
    $('#aec').css('display', 'none');

    $('#flag-btn').addClass('web-active');
    $('#flag').css('display', 'block');
  });
})