//NAVBAR KISMI 
// Navbar elementini seç
const navbar = document.querySelector('.nav-scroll');

// Sayfa kaydırıldığında arka plan rengini değiştir
window.addEventListener('scroll', function() {
  if (window.scrollY > 0) {
    navbar.classList.remove('transparent'); // Scroll edildiğinde mavi yap
  } else {
    navbar.classList.add('transparent'); // En üstteyken şeffaf yap
  }
});

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});



// CLASSES bölümünde bulunan butonlar ve özellikler
const buttons = document.querySelectorAll('.class-btn');

buttons.forEach(button => {
  button.addEventListener('click', () => {
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
  });
});

// Butonlar için referans alıyoruz
let btn = document.querySelector(".container-btn");
// Özelliklerin bulunduğu konteyneri seçiyoruz
let features = document.querySelector("#features-container");

// Butonlara tıklama olayı ekliyoruz
btn.addEventListener("click", (e) => {
  // Özellikler konteynerine animasyon efekti eklemek için sınıfı kaldırıyoruz
  features.classList.remove("features-container");
  // CSS geçişlerini tetiklemek için offsetWidth kullanıyoruz
  void features.offsetWidth;
  // Yeniden özellikler konteynerine sınıf ekliyoruz
  features.classList.add("features-container");

  // Hangi butona tıklandığını kontrol ediyoruz ve ilgili fonksiyonu çağırıyoruz
  switch (e.target.id) {
    case "yoga":
      yoga(); // Yoga butonuna tıklanırsa yoga fonksiyonu çağrılır
      break;
    case "group":
      group(); // Grup butonuna tıklanırsa grup fonksiyonu çağrılır
      break;
    case "solo":
      solo(); // Solo butonuna tıklanırsa solo fonksiyonu çağrılır
      break;
    case "stretch":
      stretch(); // Stretch butonuna tıklanırsa stretch fonksiyonu çağrılır
      break;
    default:
      return; // Eğer tanımsız bir butona tıklanırsa işlem yapılmaz
  }
});

// Yoga özelliklerini güncelleyen fonksiyon
function yoga() {
  // Başlık ve açıklamaları güncelliyoruz
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Yoga?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum repellendus architecto ducimus explicabo reiciendis alias quasi culpa libero amet similique nisi!`;
  
  // Zaman bilgilerini güncelliyoruz
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Yoga Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Resmi güncelliyoruz
  document.querySelector("#features-container img").src = "img/yoga.jpg";
}

// Grup özelliklerini güncelleyen fonksiyon
function group() {
  // Başlık ve açıklamaları güncelliyoruz
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Group?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Zaman bilgilerini güncelliyoruz
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Group Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Resmi güncelliyoruz
  document.querySelector("#features-container img").src = "img/group.webp";
}

// Solo özelliklerini güncelleyen fonksiyon
function solo() {
  // Başlık ve açıklamaları güncelliyoruz
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Solo?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Zaman bilgilerini güncelliyoruz
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Solo Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Resmi güncelliyoruz
  document.querySelector("#features-container img").src = "img/solo.jpg";
}

// Stretch özelliklerini güncelleyen fonksiyon
function stretch() {
  // Başlık ve açıklamaları güncelliyoruz
  document.querySelectorAll("#features-container h6")[0].innerHTML =
    "Why Are Your Stretch?";
  document.querySelectorAll(
    "#features-container p"
  )[0].innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. In, nihil recusandae. Atque, illum corporis odio pariatur ad harum non, molestias maiores molestiae sapiente perferendis veniam earum fugit ipsum`;
  
  // Zaman bilgilerini güncelliyoruz
  document.querySelectorAll("#features-container h6")[1].innerHTML =
    "When comes Stretch Your Time.";
  document.querySelectorAll(
    "#features-container p"
  )[1].innerHTML = `Saturday-Sunday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[2].innerHTML = `Monday-Tuesday: 8:00am - 10:00pm`;
  document.querySelectorAll(
    "#features-container p"
  )[3].innerHTML = `Wednesday-Friday: 8:00am - 10:00pm`;
  
  // Resmi güncelliyoruz
  document.querySelector("#features-container img").src = "img/stret.webp";
}


//BMI HESAPLAMA 
document.getElementById('height').addEventListener('input', calculateBMI);
document.getElementById('weight').addEventListener('input', calculateBMI);

function calculateBMI() {
  // Kullanıcının girdiği boy ve kilo değerlerini al
  const height = parseFloat(document.getElementById('height').value) / 100; // cm'yi metreye çevir
  const weight = parseFloat(document.getElementById('weight').value);

  if (height > 0 && weight > 0) {
    // BMI hesaplama formülü: kilo / boy^2
    const bmi = weight / (height * height);
    updateBMIMeter(bmi);
  }
}

function updateBMIMeter(bmi) {
  // BMI değerine göre üçgenin hareketini kontrol et
  const triangle = document.querySelector('.triangle');
  const imgContainer = document.querySelector('.img-container');
  
  // BMI değerini sınırlamak için (görseldeki değerlerin uygun aralığına göre)
  const minBMI = 10;
  const maxBMI = 40;
  
  // Üçgenin hareket alanı, imgContainer yüksekliğine göre ayarlanır
  const containerWidth = imgContainer.clientWidth;
  
  // BMI değerine göre üçgenin sol tarafa kaydırılma oranı (min - max aralığında olacak şekilde)
  let bmiPosition = ((bmi - minBMI) / (maxBMI - minBMI)) * containerWidth;
  
  // Eğer değerler sınırın dışındaysa, üçgen sınırda kalır
  if (bmiPosition < 0) bmiPosition = 0;
  if (bmiPosition > containerWidth) bmiPosition = containerWidth;

  // Üçgenin sol pozisyonunu ayarla
  triangle.style.left = `${bmiPosition}px`;
}

// OUR BEST TRAINERS KISMI
document.querySelectorAll('.trainer-card').forEach(card => {
  card.addEventListener('click', () => {
    const layer = card.querySelector('.trainer-layer');
    // Bilgi katmanını aç/kapat
    if (layer.style.display === 'none' || layer.style.display === '') {
      layer.style.display = 'block'; // Bilgiyi göster
    } else {
      layer.style.display = 'none'; // Bilgiyi gizle
    }
  });
});


