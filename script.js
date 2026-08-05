/* ==========================================================================
   ALLES WAS DU ANPASSEN MUSST STEHT HIER OBEN.
   Ersetze Texte, Bilder-Links und Daten mit euren echten Infos.
   ========================================================================== */

const relationshipStartDate = new Date("2025-12-20"); // Noa & Angelina

const quizQuestions = [
  {
    type: "map",
    question: "An welchem Ort sind wir zusammengekommen? Setz einen Herz-Pin auf die Karte 💗",
    lat: 47.3769,
    lng: 8.5417,
    startZoom: 12,
    toleranceKm: 1.5,
  },
  {
    type: "text",
    question: "Wie heißt mein Kosename für dich? (Angi, Angel...)",
    correctAnswer: "Angel"
  },
  {
    type: "single",
    question: "Was war unser erstes gemeinsames Date?",
    options: ["Option A", "Option B", "Option C", "Option D"],
    correctIndex: 0
  },
  {
    type: "text",
    question: "An welchem Tag und Monat sind wir zusammengekommen?",
    correctAnswer: "20.12"
  }
];

const timelineEvents = [
  {
    date: "2025",
    title: "Wie wir uns kennengelernt haben",
    text: "Beschreibe hier, wo und wie ihr euch das erste Mal getroffen habt.",
    image: ""
  },
  {
    date: "2025",
    title: "Unser erstes Date",
    text: "Erzähl die Geschichte von eurem ersten Date - was ihr gemacht habt, wie ihr euch gefühlt habt.",
    image: ""
  },
  {
    date: "20. Dezember 2025",
    title: "Der Tag, an dem wir zusammengekommen sind",
    text: "Der offizielle Beginn eurer Beziehung. Was hast du gesagt? Wie hat sie reagiert?",
    image: ""
  },
  {
    date: "Heute",
    title: "Und jetzt...",
    text: "Wo steht ihr heute? Was macht eure Beziehung besonders?",
    image: ""
  }
];

const galleryPhotos = [
  { src: "https://via.placeholder.com/500x500/ff6b9d/ffffff?text=Foto+1", caption: "Beschreibung Foto 1" },
  { src: "https://via.placeholder.com/500x500/c44dff/ffffff?text=Foto+2", caption: "Beschreibung Foto 2" },
  { src: "https://via.placeholder.com/500x500/6c5b7b/ffffff?text=Foto+3", caption: "Beschreibung Foto 3" },
  { src: "https://via.placeholder.com/500x500/f6c453/ffffff?text=Foto+4", caption: "Beschreibung Foto 4" }
];

const cvExperience = [
  "Gemeinsam durch stressige Prüfungsphasen navigiert",
  "Streit-Management-Level: Experte (immer Versöhnung nach spätestens 1 Tag)",
  "Über 100 gemeinsame Netflix-Folgen geschaut"
];

const cvSkills = ["Beste Zuhörerin", "Umarmungs-Expertin", "Kann mich immer aufmuntern", "Geduld auf Weltklasse-Niveau"];

const cvAchievements = [
  "Hat mein Herz komplett erobert",
  "Hat mich zum glücklichsten Menschen gemacht",
  "Beste Entscheidung meines Lebens getroffen (Ja zu dir zu sagen)"
];

const loveLetterText = `Meine liebe Angi,

seit dem 20. Dezember hat sich mein Leben komplett verändert.
Du bringst mich jeden Tag zum Lachen, du glaubst an mich, wenn ich es selbst nicht tue,
und mit dir fühlt sich jeder Moment richtig an.

Danke, dass du du bist. Ich liebe dich mehr, als Worte es je ausdrücken könnten.

Für immer dein,
Noa ❤️`;

function createFloatingHearts() {
  const container = document.getElementById("floatingHearts");
  const symbols = ["💗", "💕", "💖", "💘", "✨"];
  setInterval(() => {
    const heart = document.createElement("div");
    heart.className = "heart";
    heart.textContent = symbols[Math.floor(Math.random() * symbols.length)];
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = 6 + Math.random() * 6 + "s";
    heart.style.fontSize = 14 + Math.random() * 20 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 13000);
  }, 700);
}

const userAnswers = {};
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
  quizQuestions.forEach((q, i) => {
    const wrap = document.createElement("div");
    wrap.className = "quiz-question";
    const p = document.createElement("p");
    p.textContent = `${i + 1}. ${q.question}`;
    wrap.appendChild(p);

    if (q.type === "single") {
      const optWrap = document.createElement("div");
      optWrap.className = "quiz-options";
      q.options.forEach((opt, j) => {
        const label = document.createElement("label");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = `q${i}`;
        input.value = j;
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
      input.placeholder = "Deine Antwort...";
      input.addEventListener("input", (e) => (userAnswers[i] = e.target.value));
      wrap.appendChild(input);
    } else if (q.type === "map") {
      const mapDiv = document.createElement("div");
      mapDiv.className = "quiz-map";
      mapDiv.id = `map-${i}`;
      wrap.appendChild(mapDiv);
      const hint = document.createElement("p");
      hint.className = "quiz-map-hint";
      hint.textContent = "Tipp: Zoom mit dem Mausrad, dann auf den Ort klicken, um den Herz-Pin zu setzen.";
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

      const heartIcon = L.divIcon({
        html: '<div class="heart-pin">📍💗</div>',
        className: "",
        iconSize: [30, 30],
        iconAnchor: [15, 30]
      });

      let marker = null;
      map.on("click", (e) => {
        if (marker) map.removeLayer(marker);
        marker = L.marker(e.latlng, { icon: heartIcon }).addTo(map);
        userAnswers[i] = { lat: e.latlng.lat, lng: e.latlng.lng };
      });

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
      const correct = q.correctAnswer.trim().toLowerCase();
      if (given !== correct) allCorrect = false;
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
    errorEl.textContent = "Nicht ganz richtig... versuch es nochmal! 💭";
  }
}

function updateDaysCounter() {
  const now = new Date();
  const diff = Math.floor((now - relationshipStartDate) / (1000 * 60 * 60 * 24));
  document.getElementById("daysCount").textContent = diff >= 0 ? diff : 0;
}

function renderTimeline() {
  const wrap = document.getElementById("timelineWrap");
  timelineEvents.forEach((ev) => {
    const item = document.createElement("div");
    item.className = "timeline-item";
    item.innerHTML = `
      <div class="timeline-date">${ev.date}</div>
      <h3>${ev.title}</h3>
      <p>${ev.text}</p>
      ${ev.image ? `<img src="${ev.image}" alt="${ev.title}">` : ""}
    `;
    wrap.appendChild(item);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add("visible");
      });
    },
    { threshold: 0.2 }
  );
  document.querySelectorAll(".timeline-item").forEach((el) => observer.observe(el));
}

function renderGallery() {
  const grid = document.getElementById("galleryGrid");
  galleryPhotos.forEach((p) => {
    const item = document.createElement("div");
    item.className = "gallery-item";
    item.innerHTML = `<img src="${p.src}" alt="${p.caption}"><div class="gallery-caption">${p.caption}</div>`;
    grid.appendChild(item);
  });
}

function renderCV() {
  document.getElementById("cvExperience").innerHTML = cvExperience.map((e) => `<li>${e}</li>`).join("");
  document.getElementById("cvSkills").innerHTML = cvSkills.map((s) => `<span class="skill-tag">${s}</span>`).join("");
  document.getElementById("cvAchievements").innerHTML = cvAchievements.map((a) => `<li>${a}</li>`).join("");
  document.getElementById("loveLetterText").textContent = loveLetterText;
}

function launchConfetti() {
  const colors = ["#ff6b9d", "#f6c453", "#c44dff", "#6c5b7b", "#ffffff"];
  for (let i = 0; i < 80; i++) {
    const conf = document.createElement("div");
    conf.style.position = "fixed";
    conf.style.width = "8px";
    conf.style.height = "8px";
    conf.style.background = colors[Math.floor(Math.random() * colors.length)];
    conf.style.left = Math.random() * 100 + "vw";
    conf.style.top = "-10px";
    conf.style.borderRadius = "50%";
    conf.style.zIndex = 9999;
    conf.style.pointerEvents = "none";
    document.body.appendChild(conf);
    const duration = 2000 + Math.random() * 2000;
    const rotation = Math.random() * 360;
    conf.animate(
      [
        { transform: `translateY(0) rotate(0deg)`, opacity: 1 },
        { transform: `translateY(100vh) rotate(${rotation}deg)`, opacity: 0 }
      ],
      { duration, easing: "ease-in" }
    );
    setTimeout(() => conf.remove(), duration);
  }
}

function initMainContent() {
  updateDaysCounter();
  renderTimeline();
  renderGallery();
  renderCV();
}

document.addEventListener("DOMContentLoaded", () => {
  createFloatingHearts();
  renderQuiz();
  document.getElementById("checkBtn").addEventListener("click", checkQuiz);
  document.getElementById("confettiBtn")?.addEventListener("click", launchConfetti);
});

document.addEventListener("click", (e) => {
  if (e.target && e.target.id === "confettiBtn") launchConfetti();
});
