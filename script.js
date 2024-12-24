// Aktifkan menu sidebar
const menuItems = document.querySelectorAll(".sidebar li");
menuItems.forEach((item) => {
  item.addEventListener("click", () => {
    document.querySelector(".sidebar li.active").classList.remove("active");
    item.classList.add("active");
  });
});

// Aksi tombol Join Server
//const joinButtons = document.querySelectorAll(".server button");
//joinButtons.forEach((button) => {
 // button.addEventListener("click", () => {
 //   alert("Joining Server..."); // Tambahkan aksi sebenarnya di sini
//  });
//});

function joinServer() {
      // Arahkan pengguna ke file loading screen
      window.location.href = "ld.html";
    }