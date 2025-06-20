// Trip Cost Calculator
function calculateTrip() {
    const destinationPrice = parseFloat(document.getElementById('destination').value);
    const duration = parseFloat(document.getElementById('duration').value);
    const travelers = parseFloat(document.getElementById('travelers').value);

    const totalCost = destinationPrice * duration * travelers;
    document.getElementById('cost').textContent = `$${totalCost.toFixed(2)}`;
    document.getElementById('tripResult').classList.remove('hidden');
}