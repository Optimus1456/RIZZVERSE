/* =========================
   RIZZ DATA
========================= */
const rizz = {
  apology: [
    "I might not know exactly where I went wrong, but I know you matter enough for me to make it right.",
    "If I hurt you, I’m owning it. You’re too important to ignore.",
    "I’d rather apologize properly than lose your respect.",
    "I don’t joke with your feelings. If I messed up, I want to fix it.",
    "No excuses. Just accountability.",
    "I’m not perfect, but I’m real enough to say I’m sorry.",
    "I care too much about us to let pride talk for me.",
    "I hear you. I see you. And I’m fixing it.",
    "If growth needs an apology, here it is.",
    "I value you more than being right."
  ],

  smooth: [
    "I don’t force vibes—if it’s there, it’s there.",
    "I’m calm, consistent, and intentional.",
    "I speak softly, but my presence stays loud.",
    "No pressure. Just energy.",
    "I don’t chase, I align.",
    "I move at a pace that feels natural.",
    "I let conversations breathe.",
    "I’m not here to impress—just to connect.",
    "I’m steady, not rushed.",
    "I bring peace, not confusion.",
    "I don’t oversell myself. I show up.",
    "Smooth isn’t words, it’s timing."
  ],

  playful: [
    "You ignoring me is calm… just don’t miss me too loud later 😌",
    "I’ll behave… unless you smile.",
    "I came with peace and jokes.",
    "If fun was a sport, I’d be consistent.",
    "I add flavor, not stress.",
    "I’m trouble, but the fun kind.",
    "Don’t laugh too hard, I charge for that.",
    "I joke a lot, but I’m serious when it matters.",
    "You’re laughing already—mission accomplished.",
    "I bring vibes, not problems.",
    "Careful, I’m addictive in small doses 😏"
  ],

  confident: [
    "Confidence isn’t loud. It’s calm.",
    "I know my worth and move accordingly.",
    "No gimmicks. Just standards.",
    "I stand on respect.",
    "I’m solid.",
    "I don’t compete. I position.",
    "I’m comfortable being myself.",
    "I don’t rush connections.",
    "I move with intention.",
    "I don’t prove—I demonstrate.",
    "I’m built on consistency.",
    "Confidence is knowing when to speak and when to smile."
  ],

  soft: [
    "I like peace and honesty.",
    "You don’t need to be perfect around me.",
    "I let connections grow naturally.",
    "Softness is strength.",
    "I pay attention.",
    "I care in quiet ways.",
    "I listen more than I talk.",
    "I value comfort over chaos.",
    "I like meaningful conversations.",
    "I’m gentle with people I care about.",
    "I don’t rush feelings.",
    "I move with empathy."
  ],

  cold: [
    "I’m quiet, not confused.",
    "Distance teaches respect.",
    "I move differently now.",
    "Silence is clarity.",
    "I don’t explain twice.",
    "I protect my peace.",
    "I stopped entertaining nonsense.",
    "I let actions speak.",
    "I don’t chase closure.",
    "I observe before I react.",
    "I’m selective with energy.",
    "Not cold—just intentional."
  ]
};


/* =========================
   ROTATING QUOTES
========================= */

const quotes = [
  "Confidence is quiet. Rizz is felt.",
  "Say less. Mean more.",
  "Energy speaks before words.",
  "Calm presence > loud effort.",
  "Rizz is respect with confidence."
];

let quoteIndex = 0;
setInterval(() => {
  quoteIndex = (quoteIndex + 1) % quotes.length;
  document.getElementById("quote").innerText = `“${quotes[quoteIndex]}”`;
}, 3000);

/* =========================
   TYPED RIZZ OUTPUT
========================= */

let lastRizz = "";
let rizzIndex = 0;
let typingInterval = null;

function generateRizz() {
  const type = document.getElementById("rizzType").value;
  const options = rizz[type];
  lastRizz = options[Math.floor(Math.random() * options.length)];

  const resultEl = document.getElementById("result");
  resultEl.textContent = "";
  rizzIndex = 0;

  if (typingInterval) clearInterval(typingInterval);

  typingInterval = setInterval(() => {
    if (rizzIndex < lastRizz.length) {
      resultEl.textContent += lastRizz.charAt(rizzIndex);
      rizzIndex++;
    } else {
      clearInterval(typingInterval);
    }
  }, 35);
}

/* =========================
   COPY & SHARE
========================= */

function copyRizz() {
  if (!lastRizz) return alert("Generate rizz first 😌");
  navigator.clipboard.writeText(lastRizz);
  alert("Copied 🔥");
}

function shareWhatsApp() {
  if (!lastRizz) return alert("Generate rizz first 😌");
  window.open(`https://wa.me/?text=${encodeURIComponent(lastRizz)}`, "_blank");
}

function shareSnap() {
  if (!lastRizz) return alert("Generate rizz first 😌");
  alert("Snapchat doesn’t allow direct text sharing.\nCopy and paste it into Snap 👻");
}

function shareInsta() {
  if (!lastRizz) return alert("Generate rizz first 😌");
  alert("Instagram doesn’t allow direct text sharing.\nCopy and paste it into IG 📸");
}

/* =========================
   TYPEWRITER LOGO & FOOTER
========================= */

const logoText = "RIZZVERSE";
const footerText = "Made with ❤️ by David";

let logoIndex = 0;
let footerIndex = 0;

const logoEl = document.getElementById("typeLogo");
const footerEl = document.getElementById("typeFooter");

function typeLogo() {
  logoEl.classList.add("type-cursor");

  if (logoIndex < logoText.length) {
    logoEl.textContent += logoText.charAt(logoIndex);
    logoIndex++;
    setTimeout(typeLogo, 120);
  } else {
    logoEl.classList.remove("type-cursor");
    setTimeout(typeFooter, 800);
  }
}

function typeFooter() {
  footerEl.classList.add("type-cursor");

  if (footerIndex < footerText.length) {
    footerEl.textContent += footerText.charAt(footerIndex);
    footerIndex++;
    setTimeout(typeFooter, 80);
  } else {
    footerEl.classList.remove("type-cursor");
  }
}

window.onload = () => {
  logoEl.textContent = "";
  footerEl.textContent = "";
  typeLogo();
};
