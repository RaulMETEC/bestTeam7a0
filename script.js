// ==============================
// Squad Rotator + Infinite Reroll
// ==============================

// Squads fixos iniciais
const firstSquad = "https://7a0.com.br/squads/BRA-1970-4b0e863a.json";
const secondSquad = "https://7a0.com.br/squads/URS-1958-0dae207f.json";
const thirdSquad = "https://7a0.com.br/squads/FRA-1982-aaa57b72.json";

// Pool aleatória
const squads = [
  "https://7a0.com.br/squads/BRA-2018-d299a231.json",
  "https://7a0.com.br/squads/BRA-1994-c682ea9c.json",
  "https://7a0.com.br/squads/BRA-1966-712b5a5b.json",
  "https://7a0.com.br/squads/ARG-2010-5cd69e52.json",
  "https://7a0.com.br/squads/FRA-2022-d1c881bc.json",
  "https://7a0.com.br/squads/BRA-1958-ceff109b.json",
  "https://7a0.com.br/squads/BRA-2006-afaaacfc.json",
  "https://7a0.com.br/squads/ESP-2010-b92bcad8.json",
  "https://7a0.com.br/squads/ARG-1994-305865d2.json",
  "https://7a0.com.br/squads/BRA-1982-000a5ba5.json",
  "https://7a0.com.br/squads/BRA-2026-c0a35709.json",
  "https://7a0.com.br/squads/NED-1990-10593365.json",
  "https://7a0.com.br/squads/NED-1994-9414488e.json",
  "https://7a0.com.br/squads/GER-1990-e2d2e829.json",
  "https://7a0.com.br/squads/GER-1966-b10682f2.json",
  "https://7a0.com.br/squads/ITA-1998-e83ce438.json",

];

let requestCount = 0;
let squadCounts = {};
let lastCountry = null;

const oldFetch = window.fetch;

const getCountry = (url) => {
  const match = url.match(/\/squads\/([A-Z]{3})/);
  return match ? match[1] : null;
};

window.fetch = async (...args) => {
  let url = args[0];

  if (typeof url === "string" && url.includes("/squads/")) {
    requestCount++;
    let forced;

    if (requestCount === 1) {
      forced = firstSquad;
    } else if (requestCount === 2) {
      forced = secondSquad;
    } else if (requestCount === 3) {
      forced = thirdSquad;
    } else {
      const available = squads.filter(s => {
        return (squadCounts[s] || 0) < 999 &&
               getCountry(s) !== lastCountry;
      });

      forced = available[Math.floor(Math.random() * available.length)];
      squadCounts[forced] = (squadCounts[forced] || 0) + 1;
    }

    lastCountry = getCountry(forced);

    console.log("FORCED:", forced);
    args[0] = forced;
  }

  return oldFetch(...args);
};

// ==============================
// Botão infinito
// ==============================

const btn = document.createElement("button");
btn.innerText = "♾ Infinite Reroll";
btn.style.position = "fixed";
btn.style.top = "20px";
btn.style.right = "20px";
btn.style.zIndex = "999999";
btn.style.padding = "12px 20px";
btn.style.background = "#111";
btn.style.color = "#fff";
btn.style.border = "2px solid white";
btn.style.borderRadius = "8px";
btn.style.cursor = "pointer";

btn.onclick = () => {
  const rerollBtn = document.querySelector(".reroll-btn");

  if (rerollBtn) {
    rerollBtn.click(); // chama nv() internamente
    console.log("Rerolled.");
  } else {
    console.log("Botão original não encontrado.");
  }
};

document.body.appendChild(btn);

console.log("Infinite reroll ready.");
