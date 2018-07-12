//wypełnia formularz strony http://demoqa.com/registration/
//używany w sources>snippets w chrome dev tools

function makeId(len) {
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for (var i = 0; i < len; i++) {
    text = text + possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}
var name = makeId(6);

$('#name_3_firstname').first().val('name');
document.querySelector('#name_3_lastname').value="DDDDDD";
$('#pie_register > li:nth-child(2) > div > div > input:nth-child(2)').click();
$('#pie_register > li:nth-child(3) > div > div.radio_wrap > input').prop('checked', true);
$('#mm_date_8').first().val(3);
$('#dd_date_8').first().val(3);
$('#yy_date_8').first().val(1950);
$('#phone_9').first().val(1111111111);
$('#username').first().val(name);
$('#email_1').first().val(name+'@mmm.com');
$('#password_2').first().val('Password12345');
$('#confirm_password_password_2').first().val('Password12345');
$('#pie_register > li:nth-child(14) > div > input[type="submit"]').click()
