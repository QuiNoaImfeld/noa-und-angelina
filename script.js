/* ==========================================================================
   ALLES WAS DU ANPASSEN MUSST STEHT HIER OBEN.
   ========================================================================== */

const relationshipStartDate = new Date("2025-12-20T21:00:00");

let currentLang = "en";

const translations = {
  en: {
    gateTitle: "Before you go any further",
    gateSub: "Answer these to unlock our story ❤",
    gateButton: "Unlock",
    heroKicker: "For you, my heart",
    dayLabel: "days",
    hourLabel: "hours",
    minuteLabel: "minutes",
    secondLabel: "seconds",
    heroSubPrefix: "together, and counting 💕",
    heroScroll: "Press the heart to continue",
    storyTitle: "Our journey together",
    storySub: "Scroll down to relive every milestone",
    timelineScrollHint: "scroll ↓",
    galleryTitle: "Our favorite moments",
    gallerySub: "Swipe to see more",
    ourSongTitle: "Our Song",
    ourSongSub: "The soundtrack of us",
    cvTitle: "Our Relationship CV",
    cvSub: "Joint application for the position: Best Couple Ever ❤️",
    cvRolePrefix: "Officially a team since the day we knew",
    cvEducation: "🎓 Education",
    cvFriendsYears: "Years of being just friends first",
    cvMeeting: "Meeting each other",
    cvFirstDate: "First date",
    cvExperienceTitle: "💼 Experience",
    cvSkillsTitle: "⭐ Skills & Strengths",
    cvAchievementsTitle: "🏆 Achievements",
    letterTitle: "Love Letter",
    letterFireworkBtn: "Go to the Firework Lab 🎆",
    fwTitle: "Firework Lab",
    fwSub: "Pick your favorite symbols, add a message, and light up the sky",
    fwLaunch: "Launch",
    fwClear: "Clear",
    fwMessagePlaceholder: "Type a message (optional)...",
    footerText: "Made with ❤️ by Noa for Angelina · Since 20.12.2025",
    quizError: "Not quite right, try again.",
    quizMapHint: "Zoom with the scroll wheel, then click the place to drop the pin.",
    quizAnswerPlaceholder: "Your answer..."
  },
  de: {
    gateTitle: "Bevor du weiter darfst",
    gateSub: "Beantworte diese Fragen, um unsere Geschichte zu öffnen ❤",
    gateButton: "Aufschliessen",
    heroKicker: "Für dich, mein Herz",
    dayLabel: "Tage",
    hourLabel: "Stunden",
    minuteLabel: "Minuten",
    secondLabel: "Sekunden",
    heroSubPrefix: "zusammen, und es geht weiter 💕",
    heroScroll: "Drück das Herz, um weiterzugehen",
    storyTitle: "Unser Weg zusammen",
    storySub: "Scroll runter, um jeden Meilenstein zu erleben",
    timelineScrollHint: "scrollen ↓",
    galleryTitle: "Unsere schönsten Momente",
    gallerySub: "Wische für mehr",
    ourSongTitle: "Unser Song",
    ourSongSub: "Der Soundtrack von uns",
    cvTitle: "Unser Beziehungslebenslauf",
    cvSub: "Gemeinsame Bewerbung um die Position: Bestes Paar überhaupt ❤️",
    cvRolePrefix: "Offiziell ein Team seit dem Tag, an dem wir es wussten",
    cvEducation: "🎓 Ausbildung",
    cvFriendsYears: "Jahrelang erstmal nur Freunde gewesen",
    cvMeeting: "Kennenlernen",
    cvFirstDate: "Erstes Date",
    cvExperienceTitle: "💼 Berufserfahrung",
    cvSkillsTitle: "⭐ Fähigkeiten & Stärken",
    cvAchievementsTitle: "🏆 Erfolge",
    letterTitle: "Liebesbrief",
    letterFireworkBtn: "Zum Feuerwerk-Labor 🎆",
    fwTitle: "Feuerwerk-Labor",
    fwSub: "Wähl deine Lieblingssymbole, schreib eine Nachricht und erleuchte den Himmel",
    fwLaunch: "Zünden",
    fwClear: "Löschen",
    fwMessagePlaceholder: "Schreib eine Nachricht (optional)...",
    footerText: "Gemacht mit ❤️ von Noa für Angelina · Seit dem 20.12.2025",
    quizError: "Nicht ganz richtig, versuch es nochmal.",
    quizMapHint: "Zoom mit dem Mausrad, dann auf den Ort klicken, um den Pin zu setzen.",
    quizAnswerPlaceholder: "Deine Antwort..."
  }
};

const quizQuestions = [
  {
    type: "map",
    question: { en: "Where did we officially become a couple?", de: "An welchem Ort sind wir zusammengekommen?" },
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
    text: { en: "We met at the St. Gallen Party — describe here how that day unfolded.", de: "Wir haben uns an der St. Gallen Party kennengelernt — beschreibe hier, wie dieser Tag ablief." },
    image: ""
  },
  {
    date: { en: "2025", de: "2025" },
    title: { en: "Our first date", de: "Unser erstes Date" },
    text: { en: "Hiking to Seealpsee — describe the day in more detail, what you experienced and felt.", de: "Wandern zum Seealpsee — beschreibe hier den Tag genauer, was ihr erlebt und gefühlt habt." },
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
  { src: "https://via.placeholder.com/600x600/ff6b9d/ffffff?text=Photo+1", caption: { en: "Photo 1 description", de: "Beschreibung Foto 1" } },
  { src: "https://via.placeholder.com/600x600/c44dff/ffffff?text=Photo+2", caption: { en: "Photo 2 description", de: "Beschreibung Foto 2" } },
  { src: "https://via.placeholder.com/600x600/6c5b7b/ffffff?text=Photo+3", caption: { en: "Photo 3 description", de: "Beschreibung Foto 3" } },
  { src: "https://via.placeholder.com/600x600/f6c453/ffffff?text=Photo+4", caption: { en: "Photo 4 description", de: "Beschreibung Foto 4" } }
];

const cvMeetingDetail = { en: "St. Gallen Party", de: "St. Gallen Party" };
const cvFirstDateDetail = { en: "Hiking to Seealpsee", de: "Wandern zum Seealpsee" };

const cvExperience = {
  en: [
    "Successfully navigated stressful exam periods together",
    "Went through extremely tough things together — proof we can handle anything",
    "Argument management level: expert (always reconciled within 1 day)",
    "Watched over 100 Netflix episodes together",
    "Countless shared joints and good vibes together 🌿"
  ],
  de: [
    "Gemeinsam durch stressige Prüfungsphasen navigiert",
    "Gemeinsam extrem schwere Dinge durchgemacht — Beweis, dass wir alles schaffen",
    "Streit-Management-Level: Experte (immer Versöhnung nach spätestens 1 Tag)",
    "Über 100 gemeinsame Netflix-Folgen geschaut",
    "Zahlreiche gemeinsame Joints und gute Vibes 🌿"
  ]
};
const cvSkills = {
  en: ["Best fucking partners ❤️", "Best listeners for each other", "Hugging experts", "Always cheer each other up", "World-class patience with one another"],
  de: ["Die besten verdammten Partner ❤️", "Beste Zuhörer füreinander", "Umarmungs-Experten", "Bringen uns gegenseitig immer zum Lachen", "Geduld auf Weltklasse-Niveau miteinander"]
};
const cvAchievements = {
  en: ["Met each other's parents", "Completely conquered each other's hearts", "Made each other the happiest people alive", "Made the best decision of our lives (choosing each other)"],
  de: ["Eltern kennengelernt", "Haben uns gegenseitig das Herz komplett erobert", "Haben uns gegenseitig zu den glücklichsten Menschen gemacht", "Beste Entscheidung unseres Lebens getroffen (uns füreinander zu entscheiden)"]
};

const loveLetterText = {
  en: `My dear Angi,\n\nsince December 20th my life has completely changed.\nYou make me laugh every day, you believe in me when I don't believe in myself,\nand with you every moment feels right.\n\nThank you for being you. I love you more than words could ever say.\n\nForever yours,`,
  de: `Meine liebe Angi,\n\nseit dem 20. Dezember hat sich mein Leben komplett verändert.\nDu bringst mich jeden Tag zum Lachen, du glaubst an mich, wenn ich es selbst nicht tue,\nund mit dir fühlt sich jeder Moment richtig an.\n\nDanke, dass du du bist. Ich liebe dich mehr, als Worte es je ausdrücken könnten.\n\nFür immer dein,`
};

const fireworkEmojis = ["💗", "💕", "💖", "💘", "✨", "🎆", "🎉", "⭐", "🌸", "🔥"];

const userAnswers = {};
let selectedFireworkEmojis = ["💗", "✨", "🎉"];
let carouselIndex = 0;

function t(key) { return translations[currentLang][key]; }
function getLocalized(obj) { return obj[currentLang] || obj.en; }

function animatePromise(params) {
  return new Promise((resolve) => {
    anime(Object.assign({}, params, { complete: resolve }));
  });
}
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

function applyTranslations() {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[currentLang][key]) el.textContent = translations[currentLang][key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[currentLang][key]) el.placeholder = translations[currentLang][key];
  });
  document.getElementById("langToggle").textContent = currentLang === "en" ? "🌐 DE" : "🌐 EN";
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
    heart.style.animationDuration = 5 + Math.random() * 4 + "s";
    heart.style.fontSize = 14 + Math.random() * 18 + "px";
    container.appendChild(heart);
    setTimeout(() => heart.remove(), 9500);
  }, 350);
}

const mapInstances = {};

function haversineDistanceKm(lat1, lng1, lat2, lng2) {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) ** 2 + Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) * Math.sin(dLng / 2) ** 2;
  return R * 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
}

function renderQuiz() {
  const container = document.getElementById("quizContainer");
  container.innerHTML = "";
  quizQuestions.forEach((q, i) => {
    const wrap = document.createElement("div");
    wrap.className = "quiz-question";
    const p = document.createElement("p");
    p.textContent = getLocalized(q.question);
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
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: '&copy; OpenStreetMap' }).addTo(map);
      const heartIcon = L.divIcon({ html: '<div class="heart-pin">💗</div>', className: "", iconSize: [32, 32], iconAnchor: [16, 30] });
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
      if (!given) { allCorrect = false; }
      else {
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

function updateTimeCounter() {
  const now = new Date();
  let diffMs = now - relationshipStartDate;
  if (diffMs < 0) diffMs = 0;
  const days = Math.floor(diffMs / (1000 * 60 * 60 * 24));
  const hours = Math.floor((diffMs % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((diffMs % (1000 * 60)) / 1000);
  document.getElementById("daysCount").textContent = days;
  document.getElementById("hoursCount").textContent = hours;
  document.getElementById("minutesCount").textContent = minutes;
  document.getElementById("secondsCount").textContent = seconds;
}

function initHeroCta() {
  const heartBtn = document.getElementById("heartBtn");
  const heartIcon = heartBtn.querySelector(".heart-btn-icon");
  const monster = document.getElementById("runner");
  const pupilLeft = document.getElementById("pupilLeft");
  const pupilRight = document.getElementById("pupilRight");
  const legLeft = document.getElementById("legLeft");
  const legRight = document.getElementById("legRight");
  const armRight = document.getElementById("armRight");
  const armLeft = document.getElementById("armLeft");
  let isAnimating = false;

  function lookAt(x, y) {
    pupilLeft.style.transform = `translate(${x}px, ${y}px)`;
    pupilRight.style.transform = `translate(${x}px, ${y}px)`;
  }

  async function attemptPush(force) {
    await animatePromise({ targets: monster, translateY: [0, -3, 0], duration: 160, easing: "easeOutQuad" });
    await animatePromise({ targets: armRight, rotate: [0, -force], duration: 240, easing: "easeOutQuad" });
    animatePromise({ targets: heartIcon, scale: [1, 1 + force / 350, 1], duration: 280, easing: "easeOutQuad" });
    await wait(120);
    await animatePromise({ targets: armRight, rotate: 0, duration: 260, easing: "easeInQuad" });
    await animatePromise({ targets: monster, translateX: "-=4", duration: 130, easing: "easeOutQuad" });
    await animatePromise({ targets: monster, translateX: "+=4", duration: 180, easing: "easeOutQuad" });
  }

  heartBtn.addEventListener("click", async () => {
    if (isAnimating) return;
    isAnimating = true;

    monster.style.opacity = "0";
    monster.style.transform = "translateX(0) translateY(0)";
    lookAt(0, 0);

    const heartRect = heartBtn.getBoundingClientRect();
    const monsterRect = monster.getBoundingClientRect();
    const arriveOffset = 36;
    const fullDistance = (heartRect.left + heartRect.width / 2) - (monsterRect.left + monsterRect.width / 2) - arriveOffset;

    monster.style.opacity = "1";
    await animatePromise({ targets: monster, translateX: [0, 26], duration: 550, easing: "easeOutQuad" });

    lookAt(2, 0.5);
    await wait(450);

    lookAt(-1.5, -1);
    await wait(500);
    lookAt(0, 0);

    await animatePromise({
      targets: monster,
      translateX: fullDistance * 0.32,
      translateY: [0, -22, 0],
      scale: [0.85, 1.08, 1],
      duration: 600,
      easing: "easeOutQuad"
    });

    const steps = 4;
    const startX = fullDistance * 0.32;
    const remaining = fullDistance - startX;
    for (let i = 0; i < steps; i++) {
      const stepTarget = startX + (remaining * (i + 1)) / steps;
      const swingA = i % 2 === 0 ? -28 : 16;
      const swingB = i % 2 === 0 ? 16 : -28;
      animatePromise({ targets: legLeft, rotate: swingA, duration: 260, easing: "easeInOutSine" });
      animatePromise({ targets: legRight, rotate: swingB, duration: 260, easing: "easeInOutSine" });
      await animatePromise({
        targets: monster,
        translateX: stepTarget,
        translateY: [0, -8, 0],
        duration: 300,
        easing: "easeInOutSine"
      });
    }
    await animatePromise({ targets: [legLeft, legRight], rotate: 0, duration: 220, easing: "easeOutQuad" });

    await wait(150);
    await attemptPush(30);
    await wait(280);
    await attemptPush(42);
    await wait(320);

    await animatePromise({ targets: monster, translateY: [0, -4, 0], duration: 150, easing: "easeOutQuad" });
    await animatePromise({ targets: armRight, rotate: [0, -75], duration: 280, easing: "easeOutQuad" });
    heartIcon.classList.add("filling");
    await animatePromise({ targets: heartIcon, scale: [1, 1.4, 1], duration: 550, easing: "easeOutElastic(1, .6)" });
    heartIcon.classList.remove("filling");
    heartIcon.classList.add("filled");

    animatePromise({ targets: armLeft, rotate: [0, 80, 60, 80], duration: 750, easing: "easeOutQuad" });
    await animatePromise({
      targets: monster,
      translateY: [0, -26, 0, -18, 0],
      rotate: [0, -10, 10, 0],
      duration: 750,
      easing: "easeOutQuad"
    });
    animatePromise({ targets: [legLeft, legRight, armRight, armLeft], rotate: 0, duration: 200 });

    await animatePromise({ targets: monster, opacity: 0, duration: 350, easing: "easeInQuad" });

    document.getElementById("story").scrollIntoView({ behavior: "smooth" });
    setTimeout(() => { isAnimating = false; }, 800);
  });
}

function renderTimeline() {
  const scrollWrap = document.getElementById("timelineScroll");
  scrollWrap.innerHTML = "";

  timelineEvents.forEach((ev, idx) => {
    const slide = document.createElement("div");
    slide.className = "timeline-slide";
    slide.innerHTML = `
      <div class="timeline-slide-inner">
        <div class="timeline-slide-dot"></div>
        <div class="timeline-slide-number">${idx + 1} / ${timelineEvents.length}</div>
        <div class="timeline-slide-date">${getLocalized(ev.date)}</div>
        <h3>${getLocalized(ev.title)}</h3>
        <p>${getLocalized(ev.text)}</p>
        ${ev.image ? `<img src="${ev.image}" alt="${getLocalized(ev.title)}">` : ""}
        ${idx === 0 ? `<div class="timeline-scroll-hint">${t("timelineScrollHint")}</div>` : ""}
      </div>
    `;
    scrollWrap.appendChild(slide);
  });

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const inner = entry.target.querySelector(".timeline-slide-inner");
        if (entry.isIntersecting && entry.intersectionRatio > 0.6) {
          anime({ targets: inner, opacity: [0, 1], translateY: [40, 0], scale: [0.96, 1], duration: 700, easing: "easeOutExpo" });
        }
      });
    },
    { root: scrollWrap, threshold: 0.6 }
  );
  scrollWrap.querySelectorAll(".timeline-slide").forEach((el) => observer.observe(el));

  const track = document.getElementById("journeyTrack");
  const trackFill = document.getElementById("journeyTrackFill");
  const trackDot = document.getElementById("journeyTrackDot");

  function updateTrack() {
    const maxScroll = scrollWrap.scrollHeight - scrollWrap.clientHeight;
    const pct = maxScroll > 0 ? Math.min(100, (scrollWrap.scrollTop / maxScroll) * 100) : 0;
    trackFill.style.height = pct + "%";
    trackDot.style.top = pct + "%";
  }
  scrollWrap.addEventListener("scroll", updateTrack);
  updateTrack();

  const sectionObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) track.classList.add("visible");
        else track.classList.remove("visible");
      });
    },
    { threshold: 0.15 }
  );
  sectionObserver.observe(document.getElementById("story"));
}

function renderGallery() {
  const trackEl = document.getElementById("galleryTrack");
  const dotsEl = document.getElementById("carouselDots");
  trackEl.innerHTML = "";
  dotsEl.innerHTML = "";

  galleryPhotos.forEach((p) => {
    const slide = document.createElement("div");
    slide.className = "gallery-slide";
    slide.innerHTML = `<img src="${p.src}" alt="${getLocalized(p.caption)}" draggable="false"><div class="gallery-slide-caption">${getLocalized(p.caption)}</div>`;
    trackEl.appendChild(slide);

    const dot = document.createElement("div");
    dot.className = "carousel-dot";
    dotsEl.appendChild(dot);
  });

  carouselIndex = 0;
  updateCarousel();
}

function updateCarousel() {
  const trackEl = document.getElementById("galleryTrack");
  const total = galleryPhotos.length;
  carouselIndex = ((carouselIndex % total) + total) % total;
  trackEl.style.transform = `translateX(-${carouselIndex * 100}%)`;
  document.querySelectorAll(".carousel-dot").forEach((d, i) => d.classList.toggle("active", i === carouselIndex));
}

function initCarouselEvents() {
  const carousel = document.getElementById("galleryCarousel");
  document.getElementById("carouselPrev").addEventListener("click", () => { carouselIndex--; updateCarousel(); });
  document.getElementById("carouselNext").addEventListener("click", () => { carouselIndex++; updateCarousel(); });
  document.getElementById("carouselDots").addEventListener("click", (e) => {
    if (e.target.classList.contains("carousel-dot")) {
      carouselIndex = Array.from(document.querySelectorAll(".carousel-dot")).indexOf(e.target);
      updateCarousel();
    }
  });

  let startX = 0;
  let isDragging = false;
  carousel.addEventListener("touchstart", (e) => { startX = e.touches[0].clientX; isDragging = true; }, { passive: true });
  carousel.addEventListener("touchend", (e) => {
    if (!isDragging) return;
    const deltaX = e.changedTouches[0].clientX - startX;
    if (deltaX > 50) { carouselIndex--; updateCarousel(); }
    else if (deltaX < -50) { carouselIndex++; updateCarousel(); }
    isDragging = false;
  });
}

function renderCV() {
  document.getElementById("cvMeetingDetail").textContent = getLocalized(cvMeetingDetail);
  document.getElementById("cvFirstDateDetail").textContent = getLocalized(cvFirstDateDetail);
  document.getElementById("cvExperience").innerHTML = getLocalized(cvExperience).map((e) => `<li>${e}</li>`).join("");
  document.getElementById("cvSkills").innerHTML = getLocalized(cvSkills).map((s) => `<span class="skill-tag">${s}</span>`).join("");
  document.getElementById("cvAchievements").innerHTML = getLocalized(cvAchievements).map((a) => `<li>${a}</li>`).join("");
  document.getElementById("loveLetterText").textContent = getLocalized(loveLetterText);
  initCvOrbit();
}

/* -------- CV ORBIT: Karten wandern beim Scrollen von unten-links durch die
   Mitte (an der rotierenden Achse vorbei) nach oben-rechts -------- */
let cvOrbitBound = false;
function initCvOrbit() {
  const cards = document.querySelectorAll(".cv-orbit-card");
  if (!cards.length) return;

  function update() {
    const viewportCenter = window.innerHeight / 2;
    const range = window.innerHeight * 0.85;
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      const cardCenter = rect.top + rect.height / 2;
      let progress = (cardCenter - viewportCenter) / range;
      progress = Math.max(-1, Math.min(1, progress));

      const x = -progress * 170;
      const y = progress * 170;
      const opacity = Math.max(0, 1 - Math.pow(Math.abs(progress), 1.25));
      const scale = 0.72 + 0.28 * (1 - Math.abs(progress));
      const rotate = progress * 14;

      card.style.transform = `translate(${x}px, ${y}px) scale(${scale}) rotate(${rotate}deg)`;
      card.style.opacity = opacity;
      card.style.zIndex = Math.round((1 - Math.abs(progress)) * 10);
    });
  }

  update();
  if (!cvOrbitBound) {
    let ticking = false;
    window.addEventListener("scroll", () => {
      if (!ticking) {
        window.requestAnimationFrame(() => { update(); ticking = false; });
        ticking = true;
      }
    }, { passive: true });
    window.addEventListener("resize", update);
    cvOrbitBound = true;
  }
}

function renderFireworkPicker() {
  const picker = document.getElementById("fireworkPicker");
  picker.innerHTML = "";
  fireworkEmojis.forEach((emoji) => {
    const btn = document.createElement("div");
    btn.className = "emoji-option" + (selectedFireworkEmojis.includes(emoji) ? " selected" : "");
    btn.textContent = emoji;
    btn.addEventListener("click", () => {
      if (selectedFireworkEmojis.includes(emoji)) selectedFireworkEmojis = selectedFireworkEmojis.filter((e) => e !== emoji);
      else selectedFireworkEmojis.push(emoji);
      renderFireworkPicker();
    });
    picker.appendChild(btn);
  });
}

function launchRandomBursts(stage, emojis, count) {
  for (let burst = 0; burst < count; burst++) {
    setTimeout(() => {
      const originX = 15 + Math.random() * 70;
      const originY = 20 + Math.random() * 35;
      for (let i = 0; i < 16; i++) {
        const particle = document.createElement("div");
        particle.className = "firework-particle";
        particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        particle.style.left = originX + "%";
        particle.style.top = originY + "%";
        stage.appendChild(particle);
        const angle = (Math.PI * 2 * i) / 16 + Math.random() * 0.3;
        const distance = 50 + Math.random() * 90;
        const dx = Math.cos(angle) * distance;
        const dy = Math.sin(angle) * distance;
        anime({ targets: particle, translateX: dx, translateY: dy, scale: [0.3, 1.2, 0.6], opacity: [1, 1, 0], duration: 1300 + Math.random() * 400, easing: "easeOutExpo", complete: () => particle.remove() });
      }
    }, burst * 320);
  }
}

function spellMessageWithEmojis(message, emojis, stage, delayBeforeStart) {
  const w = stage.clientWidth;
  const h = stage.clientHeight;
  const canvas = document.createElement("canvas");
  canvas.width = w;
  canvas.height = h;
  const ctx = canvas.getContext("2d");
  const fontSize = Math.max(20, Math.min(70, (w / message.length) * 1.5));
  ctx.font = `bold ${fontSize}px Poppins, sans-serif`;
  ctx.textAlign = "center";
  ctx.textBaseline = "middle";
  ctx.fillStyle = "#fff";
  ctx.fillText(message.toUpperCase(), w / 2, h / 2);

  const imageData = ctx.getImageData(0, 0, w, h).data;
  const gap = 5;
  const points = [];
  for (let y = 0; y < h; y += gap) {
    for (let x = 0; x < w; x += gap) {
      const idx = (y * w + x) * 4;
      if (imageData[idx + 3] > 128) points.push({ x, y });
    }
  }
  for (let i = points.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [points[i], points[j]] = [points[j], points[i]];
  }
  const chosen = points.slice(0, 260);

  setTimeout(() => {
    chosen.forEach((pt, i) => {
      const particle = document.createElement("div");
      particle.className = "firework-particle";
      particle.textContent = emojis[Math.floor(Math.random() * emojis.length)];
      particle.style.left = pt.x + "px";
      particle.style.top = (h + 30) + "px";
      particle.style.opacity = "0";
      stage.appendChild(particle);
      anime({
        targets: particle, left: pt.x, top: pt.y, opacity: [0, 1], scale: [0.2, 1], delay: i * 3, duration: 700, easing: "easeOutExpo",
        complete: () => { anime({ targets: particle, opacity: 0, duration: 1400, delay: 2000, easing: "easeInQuad", complete: () => particle.remove() }); }
      });
    });
  }, delayBeforeStart);
}

function launchFireworks() {
  const stage = document.getElementById("fireworkStage");
  const emojis = selectedFireworkEmojis.length ? selectedFireworkEmojis : ["💗"];
  const message = document.getElementById("fireworkMessage").value.trim();
  if (message) { launchRandomBursts(stage, emojis, 2); spellMessageWithEmojis(message, emojis, stage, 700); }
  else { launchRandomBursts(stage, emojis, 5); }
}

function clearFireworkStage() { document.getElementById("fireworkStage").innerHTML = ""; }

function initMainContent() {
  updateTimeCounter();
  setInterval(updateTimeCounter, 1000);
  renderTimeline();
  renderGallery();
  renderCV();
  initHeroCta();
  anime({ targets: ".hero-content", opacity: [0, 1], translateY: [30, 0], duration: 1000, easing: "easeOutExpo" });
}

document.addEventListener("DOMContentLoaded", () => {
  applyTranslations();
  createFloatingHearts("gateHearts");
  createFloatingHearts("heroHearts");
  renderQuiz();
  renderFireworkPicker();
  initCarouselEvents();

  document.getElementById("checkBtn").addEventListener("click", checkQuiz);
  document.getElementById("langToggle").addEventListener("click", () => switchLanguage(currentLang === "en" ? "de" : "en"));
  document.getElementById("launchBtn").addEventListener("click", launchFireworks);
  document.getElementById("clearBtn").addEventListener("click", clearFireworkStage);
});
