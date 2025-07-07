 function press(val) {
      document.getElementById("display").value += val;
    }

    function calculate() {
      try {
        document.getElementById("display").value = eval(document.getElementById("display").value);
      } catch {
        document.getElementById("display").value = "Error";
      }
    }

    function clearDisplay() {
      document.getElementById("display").value = "";
    }