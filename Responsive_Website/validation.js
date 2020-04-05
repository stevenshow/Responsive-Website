
function initValidation(formName){
     
        
       //Add submit handler for the named form.  Param should be passed with "#" preappended
        // window.addEventListener('load', function() {
        
          var form = document.querySelector(formName);
          
          form.addEventListener('submit', function(event) {
          //  console.log("test");   
            
          if (validateForm() === false) {
            event.stopPropagation();
            event.preventDefault();
            console.log('bad form');
            }
            else {
              form.classList.add('was-validated');  //you can use this to cascade any error styles
            }
            });
            
      // }, false);
      
}
function validateForm()
{
    let name = checkRequired("#first-name", "First Name is Required");
    let lastName = checkRequired("#last-name", "Last Name is Required");
    let stateMind = checkRadio("state-of-mind", "you must select at least one!");
    let checkBox = checkCheckbox("invalidCheck", "Come on, really??")
    let email = checkRegex("#email", /([A-z\d_\.])+@([A-z\d_\.])+\.([A-z\d_\.])+/);
    let phone = checkRegex("#phone", /(\d{10})|(\(\d{3}\)\d{3}-\d{4})|(\d{3}-\d{3}-\d{4})/);
    return name && lastName && stateMind && checkBox && email && phone;
    
 }


 function checkRegex(fieldName, regex){
  var selectElement = document.querySelector(fieldName);
  var selectedValue = selectElement.value;
  return (RegExp(regex).test(selectedValue));
}

 function checkRadio(fieldName, message)
 {
    var form = document.forms[0];
    var selectElement = form.elements.namedItem(fieldName);
    var selectedValue = selectElement.value;
    return selectedValue !== null && selectedValue !== "";
 }
 function checkCheckbox(fieldName, message)
 {
  var form = document.forms[0];
  var selectElement = form.elements.namedItem(fieldName);
  var selectedValue = selectElement.checked;
  return selectedValue === true;
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
  return el.value.length > 0;
}
function formValidated(){
    var form = window.document.querySelector(".needs-validation");
    //sets form as validated so error styles should show at this point
   form.classList.add('was-validated');
}