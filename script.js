$( "#submitBtn" ).click(function() {
  var inputVal = $("#bin-input-field").val();
  var inpFieldLen = inputVal.length;
  var result = 0;
  tempArr = inputVal.split("");
  for(k=0;k<tempArr.length;k++){
    if(tempArr[k] !== '0' && tempArr[k] !== '1'){
      $("#dec-output-field").val(" ");
      return alert("Please Enter a Binary Number");
    }
  }
  for(i=inputVal.length-1;i>=0;i--){
    result += inputVal.charAt(i) * Math.pow(2, inputVal.length-1-i);
  }
  $("#dec-output-field").val(result);
});