

    
function concatenarP() {

str1 = document.getElementById("input1").value;
str2 = document.getElementById("input2").value;
var res = "";

if (str1==="" || str2==="" ) {
    $("#error").html("Falta un Campo por completar");
      $("#successm").html("");
      $('#myModal').modal("show");
}
else{

res = str1 + " " + str2;
$("#error").html("");
$("#successm").html("La Palabra Concatenada es: "+res);

}   


};

function matrizG() {

  n = document.getElementById("inputn").value;
  var res = "";
  
  if (n==="") {
      $("#error").html("Falta un Campo por completar");
        $("#successm").html("");
        $('#myModal').modal("show");
  }
  else{
    var colum=[];
    //fila = new Array(p1)
        var result = "<table border=1>";
        for(var i=0; i<n; i++) {
            colum [i] = [];
            result += "<tr>";
            for(var j=0; j<n; j++){
              if (i===j) {

              do {
                  num = Math.floor(Math.random()* 10 + 1);
              } while (num%3!==0);
                
                  colum[i][j] = num;
              }
              else{
                colum[i][j] = Math.floor(Math.random()* 10 + 1);
              }
            
                result += "<td>"+colum[i][j]+"</td>";
            }
            result += "</tr>";
        }
        result += "</table>";
  $("#error").html("");
  $("#successm").html(result);
  
  }   
  
  
  };






