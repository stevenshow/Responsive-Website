
function initValidation(formName){
     
        
       //Add submit handler for the named form.  Param should be passed with "#" preappended
        window.addEventListener('load', function() {
        
          var form = document.querySelector(formName);
          
          form.addEventListener('submit', function(event) {
              
            validateForm();
            
            if (form.checkValidity() === false) {
              event.preventDefault();
              event.stopPropagation();
            }
            form.classList.add('was-validated');  //you can use this to cascade any error styles
            
            });
            
      }, false);
      
}
function validateForm()
{
    checkRequired("#first-name", "First Name is Required");
    checkRequired("#last-name", "Last Name is Required");
    checkRadio("state-of-mind", "you must select at least one!");
    checkCheckbox("invalidCheck", "Come on, really??")
 }
 function checkRadio(fieldName, message)
 {
      //implement this function
 }
 function checkCheckbox(fieldName, message)
 {
      //implement this function
 }
function checkRequired(fieldName, message)
{
  var el = document.querySelector(fieldName);
  if (el.value.length > 0) {
    
      el.setCustomValidity('');  //sets to no error message and field is valid
  } else {
     
      el.setCustomValidity(message);   //sets error message and field gets 'invalid' stat
  }
  //if you added styles to your form which utilize the :valid pseudo selector they will now take on those styles (red border etc)
  formValidated();
  return el.value.length > 0?true:false;
}
function formValidated(){
    var form = window.document.querySelector(".needs-validation");
    //sets form as validated so error styles should show at this point
   form.classList.add('was-validated');
}