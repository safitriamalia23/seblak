document.addEventListener('DOMContentLoaded', function() {
    // Mengambil elemen form dan tombol submit
    const form = document.querySelector('form');
    const submitButton = form.querySelector('button[type="submit"]');

    // Menangani pengiriman form
    form.addEventListener('submit', function(event) {
        event.preventDefault();  // Mencegah halaman reload saat form disubmit
        
        // Ambil nilai dari form
        const name = form.querySelector('#name').value;
        const phone = form.querySelector('#phone').value;
        const address = form.querySelector('#address').value;
        const seblak = form.querySelector('#seblak').value;

        // Validasi form, pastikan semua field terisi
        if (name === "" || phone === "" || address === "" || seblak === "") {
            alert("Semua kolom harus diisi!");
            return;
        }

    
        // Reset form setelah pengiriman
        form.reset();
    });

    // Efek untuk tombol submit (misalnya: perubahan warna saat tombol dihover)
    submitButton.addEventListener('mouseover', function() {
        submitButton.style.backgroundColor = '#e64a19'; // Mengubah warna tombol saat hover
    });

    submitButton.addEventListener('mouseout', function() {
        submitButton.style.backgroundColor = '#ff5722'; // Mengembalikan warna tombol saat hover selesai
    });
});