  // fun to set element focus
  function setemements() {
    document.getElementById("txtNo").focus();
   }
   
  // fun to cal mul 
  function calMul(tblNo, no) {
     return (tblNo * no);
  }
 
  // fun to prepare final content
  function prepareContent() {
    var tableNo, ans, row, cellText;
   
    tableNo = document.getElementById("txtNo").value; // user  given input table no
    document.getElementById("lblMsg").innerText += 'Multiplication Table No '+ tableNo;
     
    for(no=1;no<=10;no++)
    {
       ans= tableNo +' * '+ no +' = '+ calMul(tableNo,no) ;
 
       row = document.createElement("p");   
       cellText = document.createTextNode(ans);
       row.appendChild(cellText);
 
       document.getElementById("secResult").appendChild(row); 
    }
  }
   
   // fun to validate input
   function validate() {
      var val = document.getElementById("txtNo").value;
      var regex=/^[1-9]+$/;
 
      if(val.match(regex)){
         return true;
      }
      else{
         return false;
      }
   }
 
   // main function
   function getTable() {
     if(validate()){
         document.getElementById("errMsg").innerText = '';
         document.getElementById("secResult").innerHTML = '';
         document.getElementById("lblMsg").innerText = ''; 
         prepareContent();
     }
     else{
       document.getElementById("lblMsg").innerText = ''; 
       document.getElementById("errMsg").innerText = "Sorry Invalid Input Found..!";
       document.getElementById("secResult").innerHTML = '';
     }
     setemements();
   }
 
   // fun call 
   setemements();
   document.getElementById("btnCalcMultTbl").addEventListener('click',getTable);
 
   // fun call on pressing Enter Button
   document.getElementById("txtNo").addEventListener("keydown", function (e) {
     if (e.keyCode === 13) {  //checks whether the pressed key is "Enter"
       getTable();
     }
   });