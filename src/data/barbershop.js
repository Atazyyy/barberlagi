export const WA_NUMBER = "6281234567890";

export const SERVICES = [
  { id: "s1", name: "Potong Rambut Dewasa", duration: 45, price: 45000, desc: "Klasik atau fade, sesuai bentuk kepalamu." },
  { id: "s2", name: "Potong + Cukur Jenggot", duration: 60, price: 65000, desc: "Paket lengkap keluar paling tajam." },
  { id: "s3", name: "Cukur Jenggot", duration: 30, price: 35000, desc: "Rapikan bentuk jenggot + hot towel." },
  { id: "s4", name: "Potong Anak (≤12 thn)", duration: 30, price: 35000, desc: "Kapster sabar, anak nggak bakal nangis." },
  { id: "s5", name: "Hair Tattoo", duration: 75, price: 90000, desc: "Desain garis presisi dengan mesin detail." },
  { id: "s6", name: "Keramas + Styling Pomade", duration: 40, price: 55000, desc: "Cuci, pijat kepala, styling sesuai acara." },
];

export const BARBERS = [
  { id: "b1", name: "Dedi Pratama", alias: "Fade King", initials: "DP" },
  { id: "b2", name: "Raka Wijaya", alias: "Classic Cut", initials: "RW" },
  { id: "b3", name: "Bagas Saputra", alias: "Design Specialist", initials: "BS" },
  { id: "any", name: "Siapa Saja", alias: "Kapster yang tersedia", initials: "?" },
];

export const TIMES = (() => {
  const out = [];
  for (let h = 10; h <= 20; h++) {
    out.push(`${String(h).padStart(2, "0")}:00`);
    out.push(`${String(h).padStart(2, "0")}:30`);
  }
  return out;
})();

export function next7Days() {
  return Array.from({ length: 7 }, (_, i) => {
    const d = new Date();
    d.setDate(d.getDate() + i);
    return {
      ts: d.setHours(0, 0, 0, 0),
      dayLabel: d.toLocaleDateString("id-ID", { weekday: "short" }),
      dateLabel: d.toLocaleDateString("id-ID", { day: "numeric", month: "short" }),
      iso: d.toISOString().slice(0, 10),
    };
  });
}

// slot "penuh" deterministik biar demo terasa nyata tapi konsisten
export function slotBooked(iso, time, barberId) {
  const s = iso + time + barberId;
  let h = 0;
  for (let i = 0; i < s.length; i++) h = (h * 31 + s.charCodeAt(i)) >>> 0;
  return h % 9 < 2;
}

export const rupiah = (n) => "Rp" + n.toLocaleString("id-ID");

export function bookingCode() {
  return "BLG-" + Math.random().toString(36).slice(2, 6).toUpperCase();
}
