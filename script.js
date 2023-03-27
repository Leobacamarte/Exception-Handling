function calculateSum() {
    const value1 = document.getElementById('value1').value;
    const value2 = document.getElementById('value2').value;
    const result = Number(value1) + Number(value2);
  
    if (value1 === '' || value2 === '') {
      throw new Error('Preencha os campos para realizar a soma');
    } else if (Number.isNaN(result)) {
      throw new Error('Informe dois números para realizar a soma');
    }
  
    return result;
  }
  
  function displayResult(result) {
    document.getElementById('result').innerHTML = `Resultado: ${result}`;
  }
  
  const displayError = (error) => {
    document.getElementById('result').innerHTML = error.message;
  };
  
  function sum() {
    const input1 = document.querySelector('#value1');
    const input2 = document.querySelector('#value2');
  
    try {
      const result = calculateSum();
      displayResult(result);
    } catch (error) {
      displayError(error);
    } finally {
      input1.value = '';
      input2.value = '';
    }
  }
  
  window.onload = () => {
    const button = document.getElementById('button');
    button.addEventListener('click', sum);
  };
  