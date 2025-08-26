function selectPackage(packageName, price) {
  document.getElementById('payment').classList.remove('hidden');
  window.selectedPackage = packageName;
  window.selectedPrice = price;
  alert('You selected ' + packageName + ' for ₹' + price + '. Please proceed with payment.');
}

function copyUPI() {
  var upi = document.getElementById('upi-id').innerText;
  navigator.clipboard.writeText(upi).then(() => {
    alert('UPI ID copied: ' + upi);
  });
}

function generateInvoice() {
  const playerId = document.getElementById('playerId').value;
  if(!playerId) { alert('Please enter Player ID'); return; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  const invoiceNum = Math.floor(Math.random()*1000000);
  const date = new Date().toLocaleString();
  doc.setFontSize(16);
  doc.text('TOP UP STORE FOR BATTLEGROUND', 20, 20);
  doc.setFontSize(12);
  doc.text('Invoice Number: ' + invoiceNum, 20, 30);
  doc.text('Date: ' + date, 20, 40);
  doc.text('Player ID: ' + playerId, 20, 50);
  doc.text('Package: ' + window.selectedPackage, 20, 60);
  doc.text('Amount Paid: ₹' + window.selectedPrice, 20, 70);
  doc.text('UPI ID: shariff.12@superyes', 20, 80);
  doc.save('invoice_' + invoiceNum + '.pdf');
}
