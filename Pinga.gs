function Pinga() { 
  var ss=new libSheet()
  var sheet=ss.getDataSheet();
  var rowAppend=ss.getLastRow(sheet)+1;
  var rangeAppend = sheet.getRange(rowAppend, 1 ,1 , 4)
  
  var response = new TestURL().getUrlStatus();
  
  var values = [
   [ rowAppend-1, new libData().getBrDateTime(), response.getResponseCode(), response.getContentText() ]
 ];
  
  rangeAppend.setValues(values);
  Validator(rowAppend);
}
