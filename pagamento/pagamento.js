document.getElementById('paymentMethod').addEventListener('change', function() {
    var paymentMethod = this.value;
    if (paymentMethod === 'credit-card') {
        document.getElementById('cardDetails').style.display = 'block';
        document.getElementById('pixDetails').style.display = 'none';
    } else if (paymentMethod === 'pix') {
        document.getElementById('cardDetails').style.display = 'none';
        document.getElementById('pixDetails').style.display = 'block';
    }
});

function generatePixQRCode() {
    // Aqui você deve gerar um QR Code Pix real. Este é um exemplo estático.
    var qrCodeHTML = '<img src="https://via.placeholder.com/150?text=QR+Code+Pix" alt="QR Code Pix">';
    document.getElementById('pixQRCode').innerHTML = qrCodeHTML;
}

document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault();
    var amount = document.getElementById('amount').value;
    var paymentMethod = document.getElementById('paymentMethod').value;

    alert('Pagamento de R$ ' + amount + ' efetuado via ' + paymentMethod + '.');

    // Aqui você deve adicionar a lógica para processar o pagamento real.
});