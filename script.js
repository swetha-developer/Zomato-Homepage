// Smooth scroll (keep this)
document.querySelectorAll('a[href^="#"]').forEach(link => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href"))
      .scrollIntoView({ behavior: "smooth" });
  });
});

// FOOD CATEGORY (Already correct)
function orderFood(food) {
  alert(`😋 Yay! Your ${food} craving is noted!\nDelicious options coming your way 🍽️🔥`);
}

// OPTIONS POPUPS
function orderOnline() {
  alert("🛵 Order Online!\nYour favourite food is just a click away.\nSit back, relax & enjoy 😍");
}

function dineOut() {
  alert("🍽️ Dine Out!\nExplore amazing restaurants & enjoy great ambience ✨");
}

function proOffers() {
  alert("🎉 Pro & Offers!\nExclusive discounts & special deals waiting for you 💸🔥");
}

function nightLife() {
  alert("🌙 Nightlife & Clubs!\nDiscover the best clubs, music & party vibes 🕺💃");
}

// APP SHARE
function shareApp() {
  const mobile = document.getElementById("mobile").value;

  if (mobile === "") {
    alert("📱 Please enter your mobile number!");
  } else {
    alert(`✅ App link sent successfully!\nCheck your SMS on ${mobile} 📩`);
  }
}

// LOGIN
function loginSuccess() {
  alert("🎉 Login Successful!\nWelcome back! Start exploring & ordering delicious food 😍🍔");
}


