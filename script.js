function sumar(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi.jamesvalencia1.repl.co/sumar", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if(xhr.readyState === 4 && xhr.status === 200){
        var response = JSON.parse(xhr.responseText);
        document.getElementById("resultado").innerHTML = "Resultado: " + response.resultado;
      }
    };
    var requestBody = JSON.stringify({ "num1": num1, "num2": num2 });
    xhr.send(requestBody);
  }