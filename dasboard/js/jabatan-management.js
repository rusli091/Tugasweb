// Fungsi untuk menambahkan kartu jabatan baru
function addJabatanCard(imageDataUrl, title, description) {
  const jabatanGrid = document.querySelector(".jabatan-grid");
  const newCard = document.createElement("div");
  newCard.className = "jabatan-card";
  newCard.innerHTML = `
        <img src="${imageDataUrl}" alt="${title}" class="jabatan-photo">
        <div class="jabatan-info">
            <h3 class="jabatan-title">${title}</h3>
            <p class="jabatan-description">${description}</p>
        </div>
        <button class="delete-btn">Hapus</button>
    `;

  jabatanGrid.appendChild(newCard);

  // Menambahkan event listener untuk tombol hapus
  const deleteBtn = newCard.querySelector(".delete-btn");
  deleteBtn.addEventListener("click", () => {
    jabatanGrid.removeChild(newCard);
  });
}

// Fungsi untuk menangani submit form
function handleFormSubmit(event) {
  event.preventDefault();
  const imageFile = document.getElementById("jabatan-image").files[0];
  const title = document.getElementById("jabatan-title").value;
  const description = document.getElementById("jabatan-description").value;

  if (imageFile && title && description) {
    const reader = new FileReader();
    reader.onload = function (e) {
      // Memastikan hanya satu kartu yang ditambahkan setelah gambar berhasil di-load
      addJabatanCard(e.target.result, title, description);
      event.target.reset(); // Reset form setelah submit
    };
    reader.readAsDataURL(imageFile);
  } else {
    alert("Mohon lengkapi semua field");
  }
}

// Fungsi untuk menambahkan form ke dalam HTML
function addJabatanForm() {
  const mainSection = document.querySelector(".main");

  // Pastikan form tidak di-insert lebih dari sekali
  if (document.getElementById("add-jabatan-form")) return;

  const form = document.createElement("form");
  form.id = "add-jabatan-form";
  form.innerHTML = `
        <h2>Tambah Jabatan Baru</h2>
        <input type="file" id="jabatan-image" accept="image/*" required>
        <input type="text" id="jabatan-title" placeholder="Nama Jabatan" required>
        <textarea id="jabatan-description" placeholder="Deskripsi Jabatan" required></textarea>
        <button type="submit">Tambah Jabatan</button>
    `;

  mainSection.insertBefore(form, mainSection.firstChild);
  form.addEventListener("submit", handleFormSubmit);
}

document.addEventListener("DOMContentLoaded", () => {
  addJabatanForm();
});
