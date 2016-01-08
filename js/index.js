function activate(div, btn, css) {
  $(btn).addClass(css);
  $(div).fadeIn(1000).css('display', 'block');
}

function remove(div, btn, css) {
  $(btn).removeClass(css);
  $(div).css('display', 'none');
}

var buttons = {
  portfolio: function() {
    $('#background-but').on('click', function() {
      activate('#background', '#background-but', 'btn-active');
      remove('#web', '#web-but', 'btn-active')
      remove('#games', '#games-but', 'btn-active')
    });

    $('#web-but').on('click', function() {
      activate('#web', '#web-but', 'btn-active');
      remove('#background', '#background-but', 'btn-active')
      remove('#games', '#games-but', 'btn-active')
    });

    $('#games-but').on('click', function() {
      activate('#games', '#games-but', 'btn-active');
      remove('#background', '#background-but', 'btn-active')
      remove('#web', '#web-but', 'btn-active')
    });
  },
  web: function() {
    $('#clock-btn').on('click', function() {
      activate('#clock', '#clock-btn', 'web-active');
      remove('#quotes', '#quotes-btn', 'web-active');
      remove('#aec', '#aec-btn', 'web-active');
      remove('#flag', '#flag-btn', 'web-active');
    });

    $('#quotes-btn').on('click', function() {
      activate('#quotes', '#quotes-btn', 'web-active');
      remove('#clock', '#clock-btn', 'web-active');
      remove('#aec', '#aec-btn', 'web-active');
      remove('#flag', '#flag-btn', 'web-active');
    });

    $('#aec-btn').on('click', function() {
      activate('#aec', '#aec-btn', 'web-active');
      remove('#clock', '#clock-btn', 'web-active');
      remove('#quotes', '#quotes-btn', 'web-active');
      remove('#flag', '#flag-btn', 'web-active');
    });

    $('#flag-btn').on('click', function() {
      activate('#flag', '#flag-btn', 'web-active');
      remove('#clock', '#clock-btn', 'web-active');
      remove('#aec', '#aec-btn', 'web-active');
      remove('#quotes', '#quotes-btn', 'web-active');
    });
  }
}

$(document).ready(function() {
  // Portfolio top buttons
  buttons.portfolio();

  //Porfolio web buttons
  buttons.web();
})