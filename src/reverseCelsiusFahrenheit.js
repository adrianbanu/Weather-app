function myFunction(hideID) {
  if (hideID === 'temp') {
    document.getElementById('temp').style.display = 'none';
    document.getElementById('tempF').style.display = 'block';
    document.getElementById('feel-like').style.display = 'none';
    document.getElementById('feel-like-fahrenheit').style.display = 'block';
  } else {
    document.getElementById('tempF').style.display = 'none';
    document.getElementById('temp').style.display = 'block';
    document.getElementById('feel-like-fahrenheit').style.display = 'none';
    document.getElementById('feel-like').style.display = 'block';
  }
}

export default myFunction;
