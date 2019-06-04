$(document).foundation();
(function(){
  emailjs.init("user_sa0pTGfc3hpt7Sp6Iv7nw");
})();
$("#send").click(function(event){
  event.preventDefault();
  emailjs.sendForm('yahoo', 'template_contacto', '#email_form')
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

});

