$(document).foundation();
(function(){
  emailjs.init("user_sa0pTGfc3hpt7Sp6Iv7nw");
})();
$("#email_form").on('formvalid.zf.abide', function(e) {
  e.preventDefault();
  emailjs.sendForm('yahoo', 'template_contacto', '#email_form')
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
     Swal.fire({
      title:'Mensaje enviado!',
      message:'Haga clic en el boton OK para continuar',
      timer: 3000,
      type:'success'
     });
  }, function(error) {
     console.log('FAILED...', error);
     Swal.fire({
      title:'Mensaje no enviado!',
      message:'Haga clic en el boton OK para continuar',
      type:'error',
      timer: 3000
     });
  });
});
