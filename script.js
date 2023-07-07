const billDivideForm = document.getElementById('bill-divider-form');

billDivideForm.addEventListener('submit', billDividerHandler);

function billDividerHandler(event){
    event.preventDefault();
    const inputs = getInputs();
    showCalculatorOutput(inputs);
}

// get al the inputs for the bill divider
function getInputs() {
  let subtotal = parseFloat(document.getElementById('subtotal').value);
  let tip = parseFloat(document.getElementById('tip').value);
  let noOfPerson = parseFloat(document.getElementById('no-of-person').value);
  return { subtotal, tip, noOfPerson };
}
// calculate the bill divider info

function showCalculatorOutput(input) {
//   billDivideForm.reset();
  let subtotal = parseFloat(input.subtotal);
  let tip = parseFloat(input.tip);
  let noOfPerson = parseFloat(input.noOfPerson);

  let totalAmount = subtotal + tip;
  let billPerPerson = totalAmount / noOfPerson;
  let totalTip = tip;
  let tipPerPerson = totalTip / noOfPerson;

  document.getElementById('total-bill').innerHTML = '₹' + totalAmount.toFixed(2);
  document.getElementById('bill-per-person').innerHTML = '₹' + billPerPerson.toFixed(2);
  document.getElementById('total-tip').innerHTML = '₹' + totalTip.toFixed(2);
  document.getElementById('tip-per-person').innerHTML = '₹' + tipPerPerson.toFixed(2);
}