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
  
  // Ejercicio 2: Calcular el factorial de un número
  function calcularFactorial() {
    var input = document.getElementById("factorialInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/factorial", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("factorialResultado").innerHTML = "Factorial: " + response.factorial;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 3: Verificar si un número es primo
  function verificarPrimo() {
    var input = document.getElementById("primoInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/primo", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("primoResultado").innerHTML = "Es primo: " + response.esPrimo;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 4: Encontrar el número mayor en un arreglo
  function encontrarMayor() {
    var input = document.getElementById("numerosInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/mayor", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("mayorResultado").innerHTML = "Número mayor: " + response.mayor;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 5: Calcular la suma de los números en un arreglo
  function calcularSuma() {
    var input = document.getElementById("numerosSumaInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/suma", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("sumaResultado").innerHTML = "Suma: " + response.suma;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 6: Invertir el orden de los elementos en un arreglo
  function invertirArreglo() {
    var input = document.getElementById("arregloInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/invertir", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("arregloResultado").innerHTML = "Arreglo invertido: " + response.arreglo;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 7: Calcular el promedio de un arreglo de números
  function calcularPromedio() {
    var input = document.getElementById("numerosPromedioInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/promedio", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("promedioResultado").innerHTML = "Promedio: " + response.promedio;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  }
  
  // Ejercicio 8: Contar la cantidad de vocales en una cadena de texto
  function contarVocales() {
    var input = document.getElementById("textoInput").value;
    
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "https://ejerciciogitapi-1.jamesvalencia1.repl.co/vocales", true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function() {
      if (xhr.readyState === 4 && xhr.status === 200) {
        var response = JSON.parse(xhr.responseText);
        document.getElementById("vocalesResultado").innerHTML = "Cantidad de vocales: " + response.cantidad;
      }
    };
    var requestBody = JSON.stringify({ "input": input });
    xhr.send(requestBody);
  } 