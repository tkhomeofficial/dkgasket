const phoneNumber = "9958711700";

const fullProductList = {
  "HERO SEGMENT": [
    "HH-001: HERO HONDA / SPLENDOR / CD-100",
    "HH-002: CD-DLX / HF-DLX / PASSION PRO / NXG",
    "HH-003: SPLENDOR BS6 / DLX. BS6",
    "HH-004: CBZ / AMBITION",
    "HH-005: SUPER SPL. / GLAMOUR",
    "HH-006: SUPER SPL. / GLAMOUR N/M BS4",
    "HH-007: SUPER SPL. / GLAMOUR N/M BS6",
    "HH-008: PASSION XPRO",
    "HH-009: PASSION PRO BS6",
    "HH-010: CBZ XTREME",
    "HH-011: XTREME 160 BS6",
    "HH-012: XTREME 200 BS6",
    "HH-013: I-SMART 110",
    "HH-014: I-SMART BS6",
    "HH-015: KARIZMA",
    "HH-016: HUNK",
    "HH-017: MAESTRO",
    "HH-018: MAESTRO EDGE",
    "HH-019: ACHIEVER",
    "HH-020: DUET",
    "HH-021: SILENCER PACKING HERO HONDA",
    "HH-022: SILENCER PACKING HERO HONDA (O.E.)",
    "HH-023: SILENCER PACKING CBZ",
    "HH-024: ROUND / TAPET PACKING",
    "HH-025: CARB. PACKING HERO HONDA PUC",
    "HH-026: POLLUTION PACKING HERO HONDA",
    "HH-027: HEAD PACKING HERO HONDA",
    "HH-028: HEAD PACKING CD-DLX",
    "HH-029: BLOCK PACKING HERO HONDA / CD-DLX",
    "HH-030: CHAMBER PACKING HERO HONDA",
  ],

  "HONDA SEGMENT": [
    "HN-101: ACTIVA / DIO / PLEASURE",
    "HN-102: ACTIVA N/M / 110 / 3G / 4G / 5G / HET / MAESTRO / AVIATOR",
    "HN-103: ACTIVA 110 BS6",
    "HN-104: ACTIVA 125",
    "HN-105: ACTIVA 6G / BS6",
    "HN-106: ACTIVA 125 BS6",
    "HN-107: SHINE / STRUNNER",
    "HN-108: SHINE 100 BS6",
    "HN-109: SP SHINE 125 BS6",
    "HN-110: UNICORN / ACHIEVER / XTREME / HUNK",
    "HN-111: UNICORN 160 / HORNET 160 R",
    "HN-112: CBR 160",
    "HN-113: ETERNO",
    "HN-114: TWISTTER / DREAM YUGA / XPRO",
    "HN-115: TWISTTER N/M / LIVO BS4",
    "HN-116: TWISTTER BS6 / LIVO BS6 / CD-110 BS6",
    "HN-117: DESTINI 125",
  ],

  "BAJAJ SEGMENT": [
    "BJ-201: KB-4S / BOXER",
    "BJ-202: CALIBER / CT-100 / PLATINA",
    "BJ-203: XCD 125 / 135 / PLATINA 125",
    "BJ-204: PLATINA 100 ES",
    "BJ-205: PLATINA 110 ES",
    "BJ-206: DISCOVER-100 C.C.",
    "BJ-207: DISCOVER-110 / DISCOVER-112 / CT-110 / PLATINA 110 BS4 / CT-110 BS6",
    "BJ-208: DISCOVER - 125 / 135",
    "BJ-209: DISCOVER-125 N/M",
    "BJ-210: DISCOVER-150 C.C.",
    "BJ-211: PULSAR 135 / DIS-ST / DIS-M",
    "BJ-212: PULSAR 150",
    "BJ-213: PULSAR 180",
    "BJ-214: PULSAR 200 / 220",
    "BJ-215: PULSAR AS 150",
    "BJ-216: PULSAR NS 125 BS6",
    "BJ-217: PULSAR NS 160 BS6",
    "BJ-218: PULSAR 125 BS6",
    "BJ-219: PULSAR 150 BS6",
    "BJ-220: PULSAR N160 BS6",
    "BJ-221: VIKRANTA (V-12)",
    "BJ-222: VIKRANTA (V-15)",
    "BJ-223: BAJAJ WIND",
    "BJ-224: BAJAJ BYK / CHETAK 4S",
  ],

  "TVS SEGMENT": [
    "TVS-301: SUZUKI MAX 100",
    "TVS-302: SHOGUN / SHOLIN",
    "TVS-303: XL-SUPER 70 C.C.",
    "TVS-304: XL-100",
    "TVS-305: XL-100 BS6",
    "TVS-306: FIERO / F2",
    "TVS-307: APACHI RTR 150 / 160",
    "TVS-308: APACHI RTR 180",
    "TVS-309: APACHI RTR 200",
    "TVS-310: APACHI RTR 4 VALVE",
    "TVS-311: STAR CITY",
    "TVS-312: STAR SPORT 110 C.C.",
    "TVS-313: STAR CITY + / ZIVE / RADEON / SPORT BS6",
    "TVS-314: TVS VICTOR",
    "TVS-315: VICTOR GLX",
    "TVS-316: SCOOTY PEP",
    "TVS-317: SCOOTY PEP +",
    "TVS-318: WEGO / JUPITER",
    "TVS-319: PHONIX",
    "TVS-320: CENTRA",
    "TVS-321: FLAME",
    "TVS-322: NTORQ 125 BS6",
    "TVS-323: JUPITER 125 BS6",
    "TVS-324: RAIDER 125 BS6",
  ],

  "SUZUKI SEGMENT": [
    "SZ-401: HEAT / ZEUS / SLING SHOT",
    "SZ-402: ACCESS / SWISH 125",
    "SZ-403: HYATE",
    "SZ-404: HYATE N/M E.P.",
    "SZ-405: ACCESS N/M / BURGMAN",
    "SZ-406: ZIXXER",
    "SZ-407: LETS",
  ],

  "YAMAHA SEGMENT": [
    "YH-501: RX-100",
    "YH-502: RXG / RX-135",
    "YH-503: YBX / FAZER / GLADIATOR / YBR",
    "YH-504: CRUX / LIBERO",
    "YH-505: FZ / FAZER / SZ / SZR",
    "YH-506: FZ VERSION 3.0 / FZ N/M BS6",
    "YH-507: YAMAHA R-15",
    "YH-508: YAMAHA RAY / ALPHA / FASINO",
    "YH-509: SALUTO 110 C.C.",
    "YH-510: SALUTO 125 C.C.",
    "YH-511: RAY BS6",
  ],

  "MAHINDRA SEGMENT": [
    "MH-601: DURO / FLIGHT / RODEO",
    "MH-602: CENTURO",
    "MH-603: GUESTO",
    "MH-604: MOJO",
  ],

  "LML SEGMENT": [
    "LML-701: ADRENO / ENERGY",
    "LML-702: FREEDOM",
    "LML-703: PRIMA",
    "LML-704: CRD-100",
  ],
};

// Show / Hide Product Modal
function showProductList() {
  const container = document.getElementById("product-list-container");
  let html = "";
  for (const segment in fullProductList) {
    html += `<h3 class="text-2xl font-bold text-dkg-red mt-6 mb-3 border-b pb-1">${segment}</h3><ul class="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-2">`;
    fullProductList[segment].forEach((item) => {
      const [partNo, desc] = item.split(": ");
      html += `<li><span class="font-bold mr-2 text-gray-900">${partNo}:</span><span>${desc}</span></li>`;
    });
    html += "</ul>";
  }
  container.innerHTML = html;
  document.getElementById("product-modal").classList.remove("hidden");
}

function hideProductList() {
  document.getElementById("product-modal").classList.add("hidden");
}

document.getElementById("product-modal").addEventListener("click", (e) => {
  if (e.target.id === "product-modal") hideProductList();
});

// Gallery Modal
const images = document.querySelectorAll(".gallery-img");
const imageModal = document.getElementById("image-modal");
const modalImg = document.getElementById("modal-img");

images.forEach((img) => {
  img.addEventListener("click", () => {
    modalImg.src = img.src;
    imageModal.classList.remove("hidden");
  });
});

function hideImageModal() {
  imageModal.classList.add("hidden");
}

imageModal.addEventListener("click", (e) => {
  if (e.target.id === "image-modal") hideImageModal();
});

// Mobile Menu Toggle (fixed)
const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");
let menuOpen = false;

menuBtn.addEventListener("click", () => {
  menuOpen = !menuOpen;
  mobileMenu.classList.toggle("open");

  if (menuOpen) {
    mobileMenu.classList.remove("hidden");
    menuBtn.innerHTML = '<i class="fa-solid fa-xmark text-2xl"></i>';
  } else {
    menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
    setTimeout(() => mobileMenu.classList.add("hidden"), 400);
  }
});

// Close mobile menu helper — used when a link is clicked so content becomes visible
function closeMobileMenu() {
  if (!menuOpen) return;
  menuOpen = false;
  mobileMenu.classList.remove("open");
  menuBtn.innerHTML = '<i class="fa-solid fa-bars text-2xl"></i>';
  // wait for CSS transition to finish then hide to keep animation
  setTimeout(() => mobileMenu.classList.add("hidden"), 300);
}

// Close mobile menu when any link inside it is clicked (tap on mobile)
if (mobileMenu) {
  mobileMenu.addEventListener("click", (e) => {
    const target = e.target.closest("a");
    if (target) {
      // allow normal anchor action to proceed, then close the menu
      // small timeout to allow hash navigation to jump
      setTimeout(closeMobileMenu, 60);
    }
  });
}