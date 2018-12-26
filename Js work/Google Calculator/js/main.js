
  // fun to set element focus
  function setEmements() {
    document.getElementById("display").focus();
   }
   
  // clear the display
  function clearDisplay(){
    document.getElementById("display").value = '';
    document.getElementById("errMsg").innerText = '';
  }

  // fun to evaluate exp 
  function answer() {
    var Exp = document.getElementById("display");
    var Exp1 = Exp.value;
    var result = eval(Exp1);
    alert("Answare : "+ result);
    Exp.value = result;
  }

  // fun to validate operator
  function opValidate(){
   var val=document.getElementById("display").value;  
   var regex= /^[0-9]+$/; 
   
   if(val[val.length-2].match(regex) || val[val.length-1].match(regex) && val[0].match(regex)){
     return true;
   }
   else{
     return false;
   }
  }
  
  // fun to validate input
  function validate() {
    var val = document.getElementById("display").value;
    var regex = /^[\s|0-9|+|*|/|^|.|-]+$/;  // for alpha  // /^[a-zA-Z]*$/; 
    
    if(!val.search(regex) && opValidate()){
      return true;
    }
    else{
      alert('You Have Entered Invalid Input..!');
      return false;
    }
  }
   
  // main function
  function getCalculate() {
    if(validate()){
     document.getElementById("errMsg").innerText = '';  
     answer();
    }
    else{
     document.getElementById("errMsg").innerText = "Sorry Invalid Input Found..!";
    }
    setEmements();
  }
 
  function addOperator(operator){
   document.getElementById("display").value +=" "+ operator + " ";  
  }

  function addValue(num){
   document.getElementById("display").value += num; 
  }
   
  function addDot(dot) {
   document.getElementById("display").value += '.'; 
  }

  // fun Calls 
  setEmements();
  
  function getStatus(){
    return (document.getElementById('display').getAttribute("disabled"));
  }

  document.addEventListener('click',function(e){
   if(!getStatus()){
    if(e.target.name == 'btnOp'){
     addOperator(e.target.value);
     setEmements();
    }
    else if(e.target.name == 'btnNum'){
     addValue(e.target.value);
     setEmements();
    }
    else if(e.target.name == 'btndot'){
     addDot(e.target.value);
     setEmements();
    }
    else if(e.target.name == 'btnqual' || e.target.name == 'btnAns'){
     answer();
     setEmements();
    }
    else if(e.target.name == 'btnClr'){
     clearDisplay();
     setEmements();
    }
    else if(e.target.name == 'btnEn'){
     document.getElementById('display').setAttribute("disabled","disabled");
    }
   }
   else if(e.target.name == 'btnEn'){
     if(getStatus()){
      document.getElementById('display').removeAttribute("disabled","disabled");
      alert("Calculator is On..!");  
     }
   }
   else{
     alert("Calculator is Off..!");
   }
  })

  // fun call on pressing Enter Button
  document.getElementById("display").addEventListener("keyup", function (e) {
   if(e.keyCode === 13) {  //checks whether the pressed key is "Enter"
    getCalculate();
   }
   if(e.keyCode === 27) {  //checks whether the pressed key is "Esc"
    clearDisplay();
   }
   if(e.keyCode === 54 || e.keyCode === 106 || e.keyCode === 107 || e.keyCode === 109 || e.keyCode === 110 || e.keyCode === 111)
    validate();
  });