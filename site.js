// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict';

  let ajax;

  $('.onoff').on('click', function (e) {
    e.preventDefault();

    if (ajax !== undefined) {
      ajax.abort();
    }

    ajax = $.ajax({
      type: 'GET',
      url: $('#host').val() + '/control?cmd=GPIO,' + $(this).parents('tr').data('gpio') + ',' + $(this).val(),
      beforeSend: function () {
        $('#console').html('Loading...');
      },
      success: function (data) {
        let jsonPretty = JSON.stringify(data, null, '\t');
        $('#console').html(jsonPretty);
      },
      error: function (xhr) {
        $('#console').html(xhr.statusText + xhr.responseText);
      },
      complete: function () {
      }
    });
  });
}());
