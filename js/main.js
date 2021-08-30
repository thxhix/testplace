$('input').on('change paste keyup', function () {
  var $this = $(this);

  var input_value = $this.val();
  var input_id = $this.attr('id');

  if (input_value.length === 0) {
    $('label[for=' + input_id + ']').removeClass('form-input-label__success').addClass('form-input-label__wrong');
    $('label[for=' + input_id + ']').children().css('opacity', '0');
    $('label[for=' + input_id + ']').parent().css('border-bottom', '1px solid red');
  } else {
    $('label[for=' + input_id + ']').addClass('form-input-label__success').removeClass('form-input-label__wrong');
    $('label[for=' + input_id + ']').children().css('opacity', '1');
    $('label[for=' + input_id + ']').parent().css('border-bottom', '1px solid #22a34c');
  }
});