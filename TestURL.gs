function TestURL() {  
    
  this.getUrlStatus = function() {
    var response = this._getResponseFromURL();  
    return response;
  }
  
  this._getResponseFromURL = function() {  
    var response = UrlFetchApp.fetch(this.url);
    return response;
  }
  
  this.getUrlFromSS = function() {
    var url = new libSheet().getCfgSheet().getRange(2,1).getValue();
    return url;  
  }
  
  this.url=this.getUrlFromSS();
}
