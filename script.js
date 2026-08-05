/* ==========================================================================
   ALLES WAS DU ANPASSEN MUSST STEHT HIER OBEN.
   ========================================================================== */

const relationshipStartDate = new Date("2025-12-20");

let currentLang = "en";

const translations = {
  en: {
    gateTitle: "💌 Hey Angi, before you can go any further...",
    gateSub: "Answer all questions correctly to unlock our story.",
    gateButton: "Unlock 🔓",
    heroKicker: "For you, my heart",
    heroSubPrefix: "We've been together for",
    heroSubSuffix: "days",
    heroScroll: "↓ Our story ↓",
    storyTitle: "Our journey together",
    storySub: "Every moment that brought us here",
    galleryTitle: "Our favorite moments",
    gallerySub: "A picture says more than a thousand words",
    cvTitle: "Our Relationship CV",
    cvSub: "Application for the position: Best Girlfriend for Life ❤️",
    cvRolePrefix: "Current position: In love since",
    cvEducation: "🎓 Education",
    cvMeeting: "Meeting each other",
    cvFirstDate: "First date",
    cvExperienceTitle: "💼 Experience",
    cvSkillsTitle: "⭐ Skills & Strengths",
    cvAchievementsTitle: "🏆 Achievements",
    letterTitle: "Finally, Angel...",
    letterFireworkBtn: "Go to the Firework Lab 🎆",
    fwTitle: "Firework Lab",
    fwSub: "Pick your favorite symbols and light up the sky",
    fwLaunch: "Launch 🚀",
    fwClear: "Clear",
    footerText: "Made with ❤️ by Noa for Angelina · Since 20.12.2025",
    quizError: "Not quite right... try again! 💭",
    quizMapHint: "Tip: Zoom with the scroll wheel, then click the place to drop the heart pin.",
    quizAnswerPlaceholder: "Your answer..."
  },
  de: {
    gateTitle: "💌 Hey Angi, bevor du weiter darfst...",
    gateSub: "Beantworte alle Fragen richtig, um unsere Geschichte zu öffnen.",
    gateButton: "Aufschliessen 🔓",
    heroKicker: "Für dich, mein Herz",
    heroSubPrefix: "Wir sind schon seit",
    heroSubSuffix: "Tagen zusammen",
    heroScroll: "↓ Unsere Geschichte ↓",
    storyTitle: "Unser Weg zusammen",
    storySub: "Jeder Moment, der uns hierher gebracht hat",
    galleryTitle: "Unsere schönsten Momente",
    gallerySub: "Ein Bild sagt mehr als tausend Worte",
    cvTitle: "Unser Beziehungslebenslauf",
    cvSub: "Bewerbung um die Position: Beste Freundin fürs Leben ❤️",
    cvRolePrefix: "Aktuelle Position: Verliebt seit dem",
    cvEducation: "🎓 Ausbildung",
    cvMeeting: "Kennenlernen",
    cvFirstDate: "Erstes Date",
    cvExperienceTitle: "💼 Berufserfahrung",
    cvSkillsTitle: "⭐ Fähigkeiten & Stärken",
    cvAchievementsTitle: "🏆 Erfolge",
    letterTitle: "Zum Schluss, Angel...",
    letterFireworkBtn: "Zum Feuerwerk-Labor 🎆",
    fwTitle: "Feuerwerk-Labor",
    fwSub: "Wähl deine Lieblingssymbole und erleuchte den Himmel",
    fwLaunch: "Zünden 🚀",
    fwClear: "Löschen",
    footerText: "Gemacht mit ❤️ von Noa für Angelina · Seit dem 20.12.2025",
    quizError: "Nicht ganz richtig... versuch es nochmal! 💭",
    quizMapHint: "Tipp: Zoom mit dem Mausrad, dann auf den Ort klicken, um den Herz-Pin zu setzen.",
    quizAnswerPlaceholder: "Deine Antwort..."
  }
};

/* WICHTIG: Reihenfolge = Anzeige-Reihenfolge im Quiz. Bewusst 4 verschiedene Fragen:
   0 = Karte, 1 = Kosename (Text), 2 = Erstes Date (Multiple Choice), 3 = Datum (Text) */
const quizQuestions = [
  {
    type: "map",
    question: { en: "Where did we officially become a couple? Drop a heart pin on the map 💗", de: "An welchem Ort sind wir zusammengekommen? Setz einen Herz-Pin auf die Karte 💗" },
    lat: 47.42018000286268,
    lng: 9.270979952465375,
    startZoom: 12,
    toleranceKm: 0.4
  },
  {
    type: "text",
    question: { en: "What's my nickname for you?", de: "Wie heißt mein Kosename für dich?" },
    acceptedAnswers: ["angel", "angi"]
  },
  {
    type: "single",
    question: { en: "What was our first date?", de: "Was war unser erstes gemeinsames Date?" },
    options: {
      en: ["Cinema", "Hiking at Seealpsee", "Dinner date", "Walk by the lake"],
      de: ["Kino", "Wandern am Seealpsee", "Essen gehen", "Spaziergang am See"]
    },
    correctIndex: 1
  },
  {
    type: "text",
    question: { en: "What day and month did we get together?", de: "An welchem Tag und Monat sind wir zusammengekommen?" },
    acceptedAnswers: ["20.12", "20 december", "20 dezember", "december 20", "20. dezember"]
  }
];

const timelineEvents = [
  {
    date: { en: "2025", de: "2025" },
    title: { en: "How we met", de: "Wie wir uns kennengelernt haben" },
    text: { en: "Describe here where and how you first met.", de: "Beschreibe hier, wo und wie ihr euch das erste Mal getroffen habt." },
    image: ""
  },
  {
    date: { en: "2025", de: "2025" },
    title: { en: "Our first date", de: "Unser erstes Date" },
    text: { en: "Hiking at Seealpsee — describe the day in more detail, what you experienced and felt.", de: "Wandern am Seealpsee — beschreibe hier den Tag genauer, was ihr erlebt und gefühlt habt." },
    image: ""
  },
  {
    date: { en: "December 20, 2025", de: "20. Dezember 2025" },
    title: { en: "The day we got together", de: "Der Tag, an dem wir zusammengekommen sind" },
    text: { en: "The official start of your relationship. What did you say? How did she react?", de: "Der offizielle Beginn eurer Beziehung. Was hast du gesagt? Wie hat sie reagiert?" },
    image: ""
  },
  {
    date: { en: "Today", de: "Heute" },
    title: { en: "And now...", de: "Und jetzt..." },
    text: { en: "Where do you stand today? What makes your relationship special?", de: "Wo steht ihr heute? Was macht eure Beziehung besonders?" },
    image: ""
  }
];

const galleryPhotos = [
  { src: "https://via.placeholder.com/500x500/ff6b9d/ffffff?text=Photo+1", caption: { en: "Photo 1 description", de: "Beschreibung Foto 1" } },
  { src: "https://via.placeholder.com/500x500/c44dff/ffffff?text=Photo+2", caption: { en: "Photo 2 description", de: "Beschreibung Foto 2" } },
  { src: "https://via.placeholder.com/500x500/6c5b7b/ffffff?text=Photo+3", caption: { en: "Photo 3 description", de: "Beschreibung Foto 3" } },
  { src: "https://via.placeholder.com/500x500/f6c453/ffffff?text=Photo+4", caption: { en: "Photo 4 description", de: "Beschreibung Foto 4" } }
];

const cvExperience = {
  en: [
    "Successfully navigated stressful exam periods together",
    "Argument management level: expert (always reconciled within 1 day)",
    "Watched over 100 Netflix episodes together"
  ],
  de: [
    "Gemeinsam durch stressige Prüfungsphasen navigiert",
    "Streit-Management-Level: Experte (immer Versöhnung nach spätestens 1 Tag)",
    "Über 100 gemeinsame Netflix-Folgen geschaut"
  ]
};
const cvSkills = {
  en: ["Best listener", "Hugging expert", "Always cheers me up", "World-class patience"],
  de: ["Beste Zuhörerin", "Umarmungs-Expertin", "Kann mich immer aufmuntern", "Geduld auf Weltklasse-Niveau"]
};
const cvAchievements = {
  en: ["Completely conquered my heart", "Made me the happiest person alive", "Made the best decision of my life (saying yes to you)"],
  de: ["Hat mein Herz komplett erobert", "Hat mich zum glücklichsten Menschen gemacht", "Beste Entscheidung meines Lebens getroffen (Ja zu dir zu sagen)"]
};

const loveLetterText = {
  en: `My dear Angi,\n\nsince December 20th my life has completely changed.\nYou make me laugh every day, you believe in me when I don't believe in myself,\nand with you every moment feels right.\n\nThank you for being you. I love you more than words could ever say.\n\nForever yours,\nNoa ❤️`,
  de: `Meine liebe Angi,\n\nseit dem 20. Dezember hat sich mein Leben komplett verändert.\nDu bringst mich jeden Tag zum Lachen, du glaubst an mich, wenn ich es selbst nicht tue,\nund mit dir fühlt sich jeder Moment richtig an.\n\nDanke, dass du du bist. Ich liebe dich mehr, als Worte es je ausdrücken könnten.\n\nFür immer dein,\nNoa ❤️`
};

const fireworkEmojis = ["💗", "💕", "💖", "💘", "✨", "🎆", "🎉", "⭐", "🌸", "🔥"];

const userAnswers = {};
let selectedFireworkEmojis = ["💗", "✨", "🎉"];

function t(key) {
  return translations[currentLang][key];
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.getElementById("langToggle").textContent = currentLang === "en" ? "🌐 DE" : "🌐 EN";
}

function getLocalized(obj) {
  return obj[currentLang] || obj.en;
}

function switchLanguage(lang) {
  currentLang = lang;
  applyTranslations();
  renderQuiz();
  if (!document.getElementById("mainContent").classList.contains("hidden")) {
    renderTimeline();
    renderGallery();
    renderCV();
  }
}

function createFloatingHearts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;
  const symbols = ["💗", "💕", "💖", "💘", "✨"];
  const interval = setInterval(() => {
    if (!document.body.contains(container)) { clearInterval(interval); return; }
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "%";
    heart.style.animationDuration = 6 + Math.random() * 6 + "s";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 13000);
  }, 900);
}

const mapInstances = {};

function haversineDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function renderQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";

  quizQuestions.forEach((q, i) => {
    const wrap = document.createElement("div");
    wrap.className = "quiz-question";
    const p = document.createElement("p");
    p.textContent = `${i + 1}. ${getLocalized(q.question)}`;
    wrap.appendChild(p);

    if (q.type === "single") {
      const optWrap = document.createElement("div");
      optWrap.className = "quiz-options";
      getLocalized(q.options).forEach((opt, j) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${i}`;
        input.value = j;
        if (userAnswers[i] === j) input.checked = true;
        input.addEventListener("change", () => (userAnswers[i] = j));
        label.appendChild(input);
        label.appendChild(document.createTextNode(opt));
        optWrap.appendChild(label);
      });
      wrap.appendChild(optWrap);
    } else if (q.type === "text") {
      const input = document.createElement("input");
      input.type = "text";
      input.className = "quiz-text-input";
      input.placeholder = t("quizAnswerPlaceholder");
      input.value = userAnswers[i] || "";
      input.addEventListener("input", (e) => (userAnswers[i] = e.target.value));
      wrap.appendChild(input);
    } else if (q.type === "map") {
      const mapDiv = document.createElement("div");
      mapDiv.className = "quiz-map";
      mapDiv.id = `map-${i}`;
      wrap.appendChild(mapDiv);
      const hint = document.createElement("p");
      hint.className = "quiz-map-hint";
      hint.textContent = t("quizMapHint");
      wrap.appendChild(hint);
    }
    container.appendChild(wrap);
  });

  quizQuestions.forEach((q, i) => {
    if (q.type === "map") {
      const map = L.map(`map-${i}`);
      map.setView([q.lat + (Math.random() - 0.5) * 4, q.lng + (Math.random() - 0.5) * 4], 5);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; OpenStreetMap'
      }).addTo(map);

      /* Herz IST der Pin - kein separates Nadel-Symbol mehr, Spitze des Herzens = Ort */
      const heartIcon = L.divIcon({
        html: '<div class="heart-pin">💗</div>',
        className: "",
        iconSize: [32, 32],
        iconAnchor: [16, 30]
      });

      let marker = null;
      map.on("click", (e) => {
        if (marker) map.removeLayer(marker);
        marker = L.marker(e.latlng, { icon: heartIcon }).addTo(map);
        userAnswers[i] = { lat: e.latlng.lat, lng: e.latlng.lng };
      });

      if (userAnswers[i] && userAnswers[i].lat) {
        marker = L.marker([userAnswers[i].lat, userAnswers[i].lng], { icon: heartIcon }).addTo(map);
      }

      mapInstances[i] = map;
    }
  });
}

function checkQuiz() {
  let allCorrect = true;
  quizQuestions.forEach((q, i) => {
    if (q.type === "single") {
      if (userAnswers[i] !== q.correctIndex) allCorrect = false;
    } else if (q.type === "text") {
      const given = (userAnswers[i] || "").trim().toLowerCase();
      const matches = q.acceptedAnswers.some((ans) => given.includes(ans.toLowerCase()));
      if (!matches) allCorrect = false;
    } else if (q.type === "map") {
      const given = userAnswers[i];
      if (!given) {
        allCorrect = false;
      } else {
        const dist = haversineDistanceKm(given.lat, given.lng, q.lat, q.lng);
        if (dist > q.toleranceKm) allCorrect = false;
      }
    }
  });

  const errorEl = document.getElementById("gateError");
  if (allCorrect) {
    document.getElementById("gate").classList.add("hidden");
    document.getElementById("mainContent").classList.remove("hidden");
    initMainContent();
  } else {
    errorEl.textContent = t("quizError");
  }
}

function updateDaysCounter() {
  const now = new Date();
  const diff = Math.floor((now - relationshipStartDate) / (1000 * 60 * 60 * 24));
  document.getElementById("daysCount").textContent = diff >= 0 ? diff : 0;
}

function renderTimeline() {
  const wrap = document.getElementById("timelineWrap");
  wrap.querySelectorAll(".timeline-item").forEach((el) => el.remove());

  timelineEvents.forEach((ev) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-date">${getLocalized(ev.date)}</div>
      <h3>${getLocalized(ev.title)}</h3>
      <p>${getLocalized(ev.text)}</p>
      ${ev.image ? `<img src="${ev.image}" alt="${getLocalized(ev.title)}">` : ""}
    `;
    wrap.appendChild(item);
  });

  const lineAnim = anime({
    targets: "#timelineLine",
    scaleY: [0, 1],
    easing: "easeInOutSine",
    duration: 1200,
    autoplay: false
  });
  lineAnim.play();

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          anime({
            targets: entry.target,
            opacity: [0, 1],
            translateX: [-40, 0],
            duration: 800,
            easing: "easeOutExpo"
          });
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  grid.innerHTML = "";
  galleryPhotos.forEach((p) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `<img src="${p.src}" alt="${getLocalized(p.caption)}"><div class="gallery-caption">${getLocalized(p.caption)}</div>`;
    grid.appendChild(item);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        anime({
          targets: "#galleryGrid .gallery-item",
          opacity: [0, 1],
          scale: [0.8, 1],
          delay: anime.stagger(100),
          duration: 700,
          easing: "easeOutExpo"
        });
        observer.disconnect();
      }
    },
    { threshold: 0.1 }
  );
  observer.observe(grid);
}

function renderCV() {
  document.getElementById("cvExperience").innerHTML = getLocalized(cvExperience).map((e) => `<li>${e}</li>`).join("");
  document.getElementById("cvSkills").innerHTML = getLocalized(cvSkills).map((s) => `<span class="skill-tag">${s}</span>`).join("");
  document.getElementById("cvAchievements").innerHTML = getLocalized(cvAchievements).map((a) => `<li>${a}</li>`).join("");
  document.getElementById("loveLetterText").textContent = getLocalized(loveLetterText);

  const observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        anime({
          targets: "#cvSkills .skill-tag",
          opacity: [0, 1],
          translateY: [15, 0],
          delay: anime.stagger(80),
          duration: 500,
          easing: "easeOutQuad"
        });
        observer.disconnect();
      }
    },
    { threshold: 0.2 }
  );
  observer.observe(document.getElementById("cvSkills"));
}

function renderFireworkPicker() {
  const picker = document.getElementById("fireworkPicker");
  picker.innerHTML = "";
  fireworkEmojis.forEach((emoji) => {
    const btn = document.createElement("div");
    btn.className = "emoji-option" + (selectedFireworkEmojis.includes(emoji) ? " selected" : "");
    btn.textContent = emoji;
    btn.addEventListener("click", () => {
      if (selectedFireworkEmojis.includes(emoji)) {
        selectedFireworkEmojis = selectedFireworkEmojis.filter((e) => e !== emoji);
      } else {
        selectedFireworkEmojis.push(emoji);
      }
      renderFireworkPicker();
    });
    picker.appendChild(btn);
  });
}

function launchFireworks() {
  const stage = document.getElementById("fireworkStage");
  const emojis = selectedFireworkEmojis.length ? selectedFireworkEmojis : ["💗"];

  for (let burst = 0; burst < 5; burst++) {
    setTimeout(() => {
      const originX = 15 + Math.random() * 70;
      const originY = 30 + Math.random() * 40;
      for (let i = 0; i < 18; i++) {
        const particle = document.createElement("div");
        particle.className = "firework-particle";
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = originX + "%";
        particle.style.top = originY + "%";
        stage.appendChild(particle);

        const angle = (Math.PI * 2 * i) / 18 + Math.random() * 0.3;
        const distance = 60 + Math.random() * 100;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;

        anime({
          targets: particle,
          translateX: dx,
          translateY: dy,
          scale: [0.3, 1.2, 0.6],
          opacity: [1, 1, 0],
          duration: 1400 + Math.random() * 400,
          easing: "easeOutExpo",
          complete: () => particle.remove()
        });
      }
    }, burst * 350);
  }
}

function clearFireworkStage() {
  document.getElementById("fireworkStage").innerHTML = "";
}

function initMainContent() {
  updateDaysCounter();
  renderTimeline();
  renderGallery();
  renderCV();

  anime({
    targets: ".hero-content",
    opacity: [0, 1],
    translateY: [30, 0],
    duration: 1000,
    easing: "easeOutExpo"
  });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  createFloatingHearts("gateHearts");
  createFloatingHearts("heroHearts");
  renderQuiz();
  renderFireworkPicker();

  document.getElementById("checkBtn").addEventListener("click", checkQuiz);
  document.getElementById("langToggle").addEventListener("click", () => {
    switchLanguage(currentLang === "en" ? "de" : "en");
  });
  document.getElementById("launchBtn").addEventListener("click", launchFireworks);
  document.getElementById("clearBtn").addEventListener("click", clearFireworkStage);
});
