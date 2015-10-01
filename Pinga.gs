function setStatusToSS(response) { 
  var sheet=getSheet(1);
  var range= sheet.getRange("A:A");  
  var rowAppend=range.getLastRow()+1  
  var rangeAppend = sheet.getRange(rowAppend, 1 ,1 , 4)
  
  var response = getUrlStatus();
  
  var values = [
   [ rowAppend-1, getBrDateTime(), response.getResponseCode(), response.getContentText() ]
 ];
  Logger.log(response.getHeaders().toSource());
  rangeAppend.setValues(values);
  Logger.log(rowAppend);
  setValidations(rowAppend);  
}

function getUrlStatus() {
  var url = getUrlFromSS();
  var response = getResponseFromURL(url);  
  return response;
}

function getResponseFromURL(url) {  
  var response = UrlFetchApp.fetch(url);
  return response;
}

function getUrlFromSS() {
  var sheet=getSheet(0);
  var url = sheet.getRange(2,1).getValue();
  Logger.log(url);
  return url;  
}

function setValidations(rowAppend) {
  setValidHtmlCell(rowAppend);
  setValidCodeCell(rowAppend);
}

function setValidHtmlCell(rowAppend) {
  var colHtml=4
  var colStatus=6
  var sheet=getSheet(1);
  var range= sheet.getRange("A:A");  
  var cellHtml = sheet.getRange(rowAppend, colHtml);
  var cellStatus = sheet.getRange(rowAppend, colStatus);
  var html=cellHtml.getValue();
  var status=html.indexOf("CacheUserName")>0
  var statusDescr= "Erro";
  if (status==true) {
    statusDescr= "OK";
  }
  cellStatus.setValue(statusDescr);
}

function setValidCodeCell(rowAppend) {
  var colCode=3
  var colStatus=5
  var sheet=getSheet(1);
  var range= sheet.getRange("A:A");  
  var cellCode = sheet.getRange(rowAppend, colCode);
  var cellStatus = sheet.getRange(rowAppend, colStatus);
  var code=cellCode.getValue();
  var status=(code==200)
  var statusDescr= "Erro";
  if (status==true) {
    statusDescr= "OK";
  }
  cellStatus.setValue(statusDescr);
}

function getSheet(sheetIndex) {
  ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getSheets()[sheetIndex];
  return sheet;
}

function getBrDateTime() {
    var data = new Date();
    var dia = data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    var mes = data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    var ano = data.getFullYear();
    var hora = data.getHours()
    var minutos = data.getMinutes();
    var segundos = data.getSeconds();
    if (segundos.toString().length == 1)
      segundos= "0"+segundos;
    return dia+"/"+mes+"/"+ano+" "+hora+":"+minutos+":"+segundos;
}
