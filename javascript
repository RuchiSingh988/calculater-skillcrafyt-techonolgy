 // Update the display with button clicks
    function appendValue(value) {
      const display = document.getElementById('display');
      display.value += value;
    }

    // Clear the display
    function clearDisplay() {
      document.getElementById('display').value = '';
    }

    // Perform the calculation
    function calculate() {
      const display = document.getElementById('display');
      try {
        display.value = eval(display.value.replace('*', '*').replace('÷', '/'));
      } catch (e) {
        display.value = 'Error';
      }
    }
 
