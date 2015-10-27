function libSheet () {
  
  this.sheets = SpreadsheetApp.getActiveSpreadsheet(); 
  
  this.insertDataSheet = function() {
    this.sheets.insertSheet(new libData().getBrMonthYear(), {template: this.getDataModelSheet()});
  }
  
  this.getLastRow = function(sheet) {
    return sheet.getRange("A:A").getLastRow();  
  }
  
  this.getDataModelSheet = function() {
    return this.getSheetByName("ModelSheet");
  }
  
  this.getCfgSheet = function() {
    return this.getSheetByName("URL");
  }
  
  this.getSheetByName = function(name) {
    return this.sheets.getSheetByName(name);
  }
 
  this.getDataSheet = function() {    
    monthSheet=this.getSheetByName(new libData().getBrMonthYear());
    if (monthSheet===null) {
      this.insertDataSheet();
      return this.getDataSheet();
    } else {
      return monthSheet;
    } 
  }

}
