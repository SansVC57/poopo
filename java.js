document.getElementById('statementForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah pengiriman form

    // Ambil nilai dari input
    const name = document.getElementById('name').value;
    const consequence = document.getElementById('consequence').value;

    // Tampilkan pesan terkirim
    document.getElementById('sentMessage').classList.remove('hidden');
    
    // Tampilkan instruksi untuk kirim screenshot
    document.querySelector('.instructions').classList.remove('hidden');

    // Reset form setelah pengiriman
    this.reset();
});
