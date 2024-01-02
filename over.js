function qr() {
    var url = document.getElementById('urlinput').value;
    var qrcodediv = document.getElementById('qrcode');
    qrcodediv.innerHTML = "";
    var qrcode = new QRCode(qrcodediv, {
        text: url,
        width: 128,
        height: 128, 
    });
}
