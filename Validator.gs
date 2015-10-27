function Validator(row) {
  //Expected value, operand (eq || cont), value col, status col
  this.validations = [
    [ 200, "eq", "C", "E"],
    [ "CacheUserName", "cont", "D", "F"],
  ];
    
  this.row=row;
  this.descrErro="Erro";
  this.descrOk="OK";
    
  this.doValidation = function() {
    var validationStatus=false;
    var ss = new libSheet().getDataSheet();
    for (i=0; i<this.validations.length; i++) {
      var okValue=this.validations[i][0];
      var operand=this.validations[i][1];
      var cellData=ss.getRange(this.validations[i][2]+this.row).getValue()   
    
      //condição eq: equals
      if (operand==="eq") {
        if (cellData==okValue)
          validationStatus=true;
      } 
      //condição cont: contains
      else if (operand==="cont") {
        if (cellData.indexOf(okValue)>0)
          validationStatus=true;
      }
  
      ss.getRange(this.validations[i][3]+this.row).setValue(validationStatus ? this.descrOk : this.descrErro);
   }
  }

  this.doValidation();
}
