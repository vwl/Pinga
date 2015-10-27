function libData(data) {
  if (data===undefined)
    data= new Date();
  this.data=data;
  
  this.getDay = function() {
    var dia = this.data.getDate();
    if (dia.toString().length == 1)
      dia = "0"+dia;
    return dia;  
  }
  
  this.getMonth = function() {
    var mes = this.data.getMonth()+1;
    if (mes.toString().length == 1)
      mes = "0"+mes;
    return mes;
  }
  
  this.getSecond = function() {
    var segundos = this.data.getSeconds();
    if (segundos.toString().length == 1)
      segundos= "0"+segundos;
    return segundos;
  }
  
  this.getBrMonthYear = function() {
    var mes = this.getMonth(this.data)
    var ano = data.getFullYear();
    return mes+"/"+ano;
  }
  
  this.getBrDateTime = function() {
    return this.getDay()+"/"+this.getMonth(data)+"/"+this.data.getFullYear()+" "+this.data.getHours()+":"+this.data.getMinutes()+":"+this.getSecond();
  }
}
