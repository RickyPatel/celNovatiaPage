// of coalescence
// Your web app's Firebase configuration
 var firebaseConfig = {
  apiKey: "AIzaSyBMgKoISM8MJdr88ARHq_KQj9w5lXwoaWk",
  authDomain: "cel-bits-goa-contact-us-form.firebaseapp.com",
  databaseURL: "https://cel-bits-goa-contact-us-form.firebaseio.com",
  projectId: "cel-bits-goa-contact-us-form",
  storageBucket: "cel-bits-goa-contact-us-form.appspot.com",
  messagingSenderId: "550138663766",
  appId: "1:550138663766:web:04d08e8356bc0ad4"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  var messageRef = firebase.database().ref('message');
  
  document.getElementById('contact_form').addEventListener('submit',submitform);
  
  function getIdValue(id)
  {
      return document.getElementById(id).value;
  }
  
  function submitform(e)
  {
      e.preventDefault();
      console.log(123);
  
      var name = getIdValue('name');
      var email = getIdValue('email');
      var message = getIdValue('message');
  
      console.log(name);
      
      saveMessage(name,email,message);
  
      name = "";
      email = "";
      message = "";
  
      document.querySelector('.alert').style.display = 'block';
  
      setTimeout(function(){
          document.querySelector('.alert').style.display = 'none';
      },3000)
  
  }
  
  function saveMessage(name,email,message)
  {
      var newMessageRef = messageRef.push();
      newMessageRef.set({
          name: name,
          email: email,
          message: message
      })
  }





//of novatia
// jQuery(document).ready(function($) {
//   "use strict";

//   //Contact
//   $('form.contactForm').submit(function() {
//     var f = $(this).find('.form-group'),
//       ferror = false,
//       emailExp = /^[^\s()<>@,;:\/]+@\w[\w\.-]+\.[a-z]{2,}$/i;

//     f.children('input').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'email':
//             if (!emailExp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'checked':
//             if (! i.is(':checked')) {
//               ferror = ierror = true;
//             }
//             break;

//           case 'regexp':
//             exp = new RegExp(exp);
//             if (!exp.test(i.val())) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') !== undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     f.children('textarea').each(function() { // run all inputs

//       var i = $(this); // current input
//       var rule = i.attr('data-rule');

//       if (rule !== undefined) {
//         var ierror = false; // error flag for current input
//         var pos = rule.indexOf(':', 0);
//         if (pos >= 0) {
//           var exp = rule.substr(pos + 1, rule.length);
//           rule = rule.substr(0, pos);
//         } else {
//           rule = rule.substr(pos + 1, rule.length);
//         }

//         switch (rule) {
//           case 'required':
//             if (i.val() === '') {
//               ferror = ierror = true;
//             }
//             break;

//           case 'minlen':
//             if (i.val().length < parseInt(exp)) {
//               ferror = ierror = true;
//             }
//             break;
//         }
//         i.next('.validation').html((ierror ? (i.attr('data-msg') != undefined ? i.attr('data-msg') : 'wrong Input') : '')).show('blind');
//       }
//     });
//     if (ferror) return false;
//     else var str = $(this).serialize();
//     var action = $(this).attr('action');
//     if( ! action ) {
//       action = 'contactform/contactform.php';
//     }
//     $.ajax({
//       type: "POST",
//       url: action,
//       data: str,
//       success: function(msg) {
//         // alert(msg);
//         if (msg == 'OK') {
//           $("#sendmessage").addClass("show");
//           $("#errormessage").removeClass("show");
//           $('.contactForm').find("input, textarea").val("");
//         } else {
//           $("#sendmessage").removeClass("show");
//           $("#errormessage").addClass("show");
//           $('#errormessage').html(msg);
//         }

//       }
//     });
//     return false;
//   });

// });