// O'yin bosish va keyslarga oid funksiya
function startGame() {
  alert("O'yin boshlanmoqda...");
  // Bu yerda o'yin kodini qo'shish mumkin
}

function openKey(ucAmount) {
  let probability = getKeyProbability(ucAmount);
  alert(`Siz ${ucAmount} UC ochdingiz! Ehtimoliy sovg'a: ${probability}`);
}

function getKeyProbability(ucAmount) {
  switch (ucAmount) {
    case 325:
      return "40% sovg'a 325 UC";
    case 720:
      return "30% sovg'a 720 UC";
    case 1920:
      return "20% sovg'a 1920 UC";
    case 3250:
      return "10% sovg'a 3250 UC";
    default:
      return "Xato";
  }
}

// UC yuborish
document.getElementById("uc-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let ucAmount = document.getElementById("ucAmount").value;
  let pubgId = document.getElementById("pubgId").value;
  alert(`UC: ${ucAmount}, PUBG ID: ${pubgId} yuborildi`);
});

// Ro'yxatdan o'tish
document.getElementById("register-form").addEventListener("submit", function(event) {
  event.preventDefault();
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  alert(`Foydalanuvchi nomi: ${username}, Parol: ${password} ro'yxatga olindi`);
});
