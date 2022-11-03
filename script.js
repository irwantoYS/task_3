//membuat teks ke halaman html
const judul = document.getElementById("judul");
judul.innerText = "penggunaan Java Script";

//membuat elemen html p
const newP = document.createElement("p");
const newPText = document.createTextNode("Paragraf 3");
newP.appendChild(newPText);

//memasukkan elemen p kedalam id= 'container'
const divP = document.getElementById("container");
divP.appendChild(newP);

// menginisialisasikan batas penambahan
let i = 4;

// fungsi ketika tombol + di klik maka paragraf akan bertambah
function tambahP() {
  if (i > 6) {
    alert("sorry, you have a limit to adding paragraphs");
  } else {
    const newPs = document.createElement("p");
    const newPTexts = document.createTextNode("Paragraf " + i);
    newPs.appendChild(newPTexts);

    //memasukkan elemen p kedalam id= 'container'
    const divPs = document.getElementById("container");
    divPs.appendChild(newPs);
  }
  i++;
}
//menggunakan addeventlistener untuk eventhanler nya
const button = document.getElementById("tombol");
button.addEventListener("click", tambahP);

//menggunakan addeventlistener untuk merubah warna kolom judul
judul.addEventListener("click", function () {
  judul.style.backgroundColor = "lightblue";
});
