import React, { useState, useEffect, useRef, useMemo } from "react";
import { createRoot } from "react-dom/client";

/* ================================================================== */
/*  ICONOS (SVG propios, sin dependencias externas)                    */
/* ================================================================== */
const I = ({ children, size = 18, ...p }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
       strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" {...p}>{children}</svg>
);
const IconMenu = (p) => <I {...p}><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></I>;
const IconX = (p) => <I {...p}><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></I>;
const IconHome = (p) => <I {...p}><path d="M3 11l9-8 9 8" /><path d="M5 10v10h5v-6h4v6h5V10" /></I>;
const IconBuilding = (p) => <I {...p}><rect x="4" y="3" width="16" height="18" rx="1.5" /><line x1="8" y1="7" x2="8" y2="7.01" /><line x1="12" y1="7" x2="12" y2="7.01" /><line x1="16" y1="7" x2="16" y2="7.01" /><line x1="8" y1="11" x2="8" y2="11.01" /><line x1="12" y1="11" x2="12" y2="11.01" /><line x1="16" y1="11" x2="16" y2="11.01" /><path d="M9 21v-4h6v4" /></I>;
const IconCalc = (p) => <I {...p}><rect x="5" y="3" width="14" height="18" rx="2" /><line x1="8" y1="7" x2="16" y2="7" /><line x1="8" y1="12" x2="8" y2="12.01" /><line x1="12" y1="12" x2="12" y2="12.01" /><line x1="16" y1="12" x2="16" y2="12.01" /><line x1="8" y1="16" x2="8" y2="16.01" /><line x1="12" y1="16" x2="12" y2="16.01" /><line x1="16" y1="16" x2="16" y2="16.01" /></I>;
const IconChart = (p) => <I {...p}><rect x="4" y="12" width="4" height="8" /><rect x="10" y="7" width="4" height="13" /><rect x="16" y="3" width="4" height="17" /></I>;
const IconUser = (p) => <I {...p}><circle cx="12" cy="8" r="4" /><path d="M4 20c0-4.2 3.6-6.5 8-6.5s8 2.3 8 6.5" /></I>;
const IconHeart = (p) => <I {...p}><path d="M12 20.5s-7.2-4.4-9.5-8.7C.7 8.2 3 5 6.4 5c1.9 0 3.5 1.1 4.6 2.6C12.1 6.1 13.7 5 15.6 5 19 5 21.3 8.2 19.5 11.8 17.2 16.1 12 20.5 12 20.5z" /></I>;
const IconPin = (p) => <I {...p}><path d="M12 21s7-6.6 7-11.3A7 7 0 105 9.7C5 14.4 12 21 12 21z" /><circle cx="12" cy="9.5" r="2.4" /></I>;
const IconChevronR = (p) => <I {...p}><polyline points="9 6 15 12 9 18" /></I>;
const IconChevronL = (p) => <I {...p}><polyline points="15 6 9 12 15 18" /></I>;
const IconPlus = (p) => <I {...p}><line x1="12" y1="5" x2="12" y2="19" /><line x1="5" y1="12" x2="19" y2="12" /></I>;
const IconMoon = (p) => <I {...p}><path d="M21 12.8A9 9 0 1111.2 3a7 7 0 009.8 9.8z" /></I>;
const IconSun = (p) => <I {...p}><circle cx="12" cy="12" r="4" /><line x1="12" y1="2" x2="12" y2="4.5" /><line x1="12" y1="19.5" x2="12" y2="22" /><line x1="2" y1="12" x2="4.5" y2="12" /><line x1="19.5" y1="12" x2="22" y2="12" /></I>;
const IconBed = (p) => <I {...p}><path d="M3 18v-6a2 2 0 012-2h14a2 2 0 012 2v6" /><path d="M3 18h18" /><path d="M7 10V7.5A1.5 1.5 0 018.5 6h7A1.5 1.5 0 0117 7.5V10" /></I>;
const IconBath = (p) => <I {...p}><path d="M4 12h16v3.5A4.5 4.5 0 0115.5 20h-7A4.5 4.5 0 014 15.5V12z" /><path d="M6 12V6.5A2.5 2.5 0 018.5 4" /></I>;
const IconCar = (p) => <I {...p}><path d="M3.5 13l1.4-4.7A2 2 0 016.8 6.8h10.4a2 2 0 011.9 1.5L20.5 13" /><rect x="3" y="13" width="18" height="5" rx="1.3" /><circle cx="7.5" cy="18" r="1.4" /><circle cx="16.5" cy="18" r="1.4" /></I>;
const IconRuler = (p) => <I {...p}><path d="M3.5 16.5l13-13 4 4-13 13z" /><line x1="11" y1="9" x2="13" y2="11" /><line x1="8" y1="12" x2="10" y2="14" /></I>;
const IconTrash = (p) => <I {...p}><path d="M4 7h16" /><path d="M9.5 7V4.7A1 1 0 0110.5 3.7h3a1 1 0 011 1V7" /><path d="M6.5 7l1 12.3A2 2 0 009.5 21h5a2 2 0 002-1.7L17.5 7" /></I>;
const IconLandmark = (p) => <I {...p}><path d="M3 21h18" /><path d="M5 21V11" /><path d="M19 21V11" /><path d="M3 11l9-6.5L21 11" /><path d="M9 21v-8" /><path d="M15 21v-8" /></I>;
const IconHammer = (p) => <I {...p}><path d="M13.5 6.5l4 4-8 8-4-4z" /><path d="M11.8 8.2L15 5l4 4-3.2 3.2" /><path d="M6 15l-2.5 2.5a1.4 1.4 0 002 2L8 17" /></I>;
const IconSpark = (p) => <I {...p}><path d="M12 3l1.6 4.9L18 9l-4.4 1.6L12 15l-1.6-4.4L6 9l4.4-1.1z" /></I>;
const IconSearch = (p) => <I {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.6" y2="16.6" /></I>;
const IconBell = (p) => <I {...p}><path d="M18 8.5a6 6 0 10-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5z" /><path d="M13.7 20.5a2 2 0 01-3.4 0" /></I>;
const IconGear = (p) => <I {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 13a7.6 7.6 0 000-2l2-1.5-2-3.4-2.3.9a7.6 7.6 0 00-1.7-1l-.3-2.5h-4l-.3 2.5a7.6 7.6 0 00-1.7 1l-2.3-.9-2 3.4L6.6 11a7.6 7.6 0 000 2l-2 1.5 2 3.4 2.3-.9a7.6 7.6 0 001.7 1l.3 2.5h4l.3-2.5a7.6 7.6 0 001.7-1l2.3.9 2-3.4z" /></I>;
const IconEdit = (p) => <I {...p}><path d="M4 20l4.3-.9L19 8.4a2 2 0 000-2.8l-.6-.6a2 2 0 00-2.8 0L4.9 15.7z" /><line x1="14" y1="5.5" x2="18.5" y2="10" /></I>;
const IconDownload = (p) => <I {...p}><path d="M12 3v13" /><polyline points="7 11 12 16 17 11" /><path d="M4 19h16" /></I>;
const IconUpload = (p) => <I {...p}><path d="M12 20V7" /><polyline points="7 12 12 7 17 12" /><path d="M4 20h16" /></I>;
const IconPhone = (p) => <I {...p}><path d="M6.5 3.5l3 4-2 2c.7 2 2.5 3.8 4.5 4.5l2-2 4 3v3a1.5 1.5 0 01-1.6 1.5A16 16 0 015 5.1 1.5 1.5 0 016.5 3.5z" /></I>;
const IconMessage = (p) => <I {...p}><path d="M21 12a8 8 0 01-11.6 7.1L4 20l1-4.8A8 8 0 1121 12z" /></I>;
const IconLogOut = (p) => <I {...p}><path d="M9 21H5a2 2 0 01-2-2V5a2 2 0 012-2h4" /><polyline points="16 17 21 12 16 7" /><line x1="21" y1="12" x2="9" y2="12" /></I>;
const IconLink = (p) => <I {...p}><path d="M9 15l6-6" /><path d="M13 5l1.5-1.5a3.5 3.5 0 015 5L18 10" /><path d="M11 19l-1.5 1.5a3.5 3.5 0 01-5-5L6 14" /></I>;
const IconCheck = (p) => <I {...p}><polyline points="20 6 9 17 4 12" /></I>;
const IconAlert = (p) => <I {...p}><path d="M12 3l10 18H2z" /><line x1="12" y1="9.5" x2="12" y2="14" /><line x1="12" y1="17" x2="12" y2="17.01" /></I>;

/* Marca profesional de la app (usada en el menú, splash y manifest) */
function Logo({ size = 22, color = "#fff" }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" fill="none">
      <path d="M24 5.5L43 21.5V41a2.2 2.2 0 01-2.2 2.2H29.5V29.7h-11v13.5H7.2A2.2 2.2 0 015 41V21.5L24 5.5Z" fill={color} />
    </svg>
  );
}
const LOGO_DATA_URI_192 = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 192 192'%3E%3Crect width='192' height='192' rx='42' fill='%232F5FFF'/%3E%3Cpath d='M96 24L166 78v72a8 8 0 01-8 8H118V112H74v46H34a8 8 0 01-8-8V78L96 24Z' fill='white'/%3E%3C/svg%3E";

/* ================================================================== */
/*  TEMA / PERSISTENCIA                                                 */
/* ================================================================== */
const ACCENTS = [
  { id: "azul", name: "Azul", value: "#2F5FFF" },
  { id: "verde", name: "Verde", value: "#1E9E6B" },
  { id: "morado", name: "Morado", value: "#7C5CFF" },
  { id: "terracota", name: "Terracota", value: "#D97757" },
  { id: "rosa", name: "Rosa", value: "#E0567C" },
  { id: "grafito", name: "Grafito", value: "#3A3F51" },
];
function hexToRgba(hex, a) {
  const h = hex.replace("#", "");
  const r = parseInt(h.substring(0, 2), 16), g = parseInt(h.substring(2, 4), 16), b = parseInt(h.substring(4, 6), 16);
  return `rgba(${r},${g},${b},${a})`;
}
function buildTheme(dark, accent) {
  const base = dark
    ? { bg: "#0C1120", bgSoft: "#131A2E", card: "#151C31", text: "#F1F4FC", muted: "#8A93AC", border: "#232B44", ink: "#0C1120", danger: "#E0836A", good: "#6FBE93", warn: "#E6BB63" }
    : { bg: "#F2F5FB", bgSoft: "#E7EDF9", card: "#FFFFFF", text: "#101A33", muted: "#7C8698", border: "#E2E7F2", ink: "#0E1730", danger: "#D96C56", good: "#3E9B6B", warn: "#D9A441" };
  return { ...base, accent, accentSoft: hexToRgba(accent, dark ? 0.22 : 0.11), onAccent: "#FFFFFF" };
}
function useStored(key, initial) {
  const [val, setVal] = useState(() => {
    try { const raw = localStorage.getItem(key); return raw !== null ? JSON.parse(raw) : initial; }
    catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(val)); } catch {} }, [key, val]);
  return [val, setVal];
}

/* ================================================================== */
/*  DATOS OFICIALES HSBC (fuente: hsbc.com.mx, consultado sep 2026)     */
/* ================================================================== */
const HSBC_ADQUISICION = {
  nombre: "Full Adquisición",
  tasaEnganche30: 9.65, tasaEnganche30Min: 9.20,
  tasaEnganche0: 10.30, tasaEnganche0Min: 10.00,
  financiamientoMax: 95,
  plazos: [5, 10, 15, 20, 25],
  catBajo: 11.7, catFijo: 11.8,
  reduccionAnual: 0.15,
  ingresoMinimo: 8500,
  actualizado: "1 de junio de 2026",
  vigencia: "30 de noviembre de 2026",
  fuente: "https://www.hsbc.com.mx/hipotecario/productos/hipoteca-full/",
};
const HSBC_CONSTRUYE = {
  nombre: "Full Construye",
  tasaInicial: 9.65,
  financiamientoObraMax: 100,
  topeValorTotal: 75,
  financiamientoTerrenoMax: 50,
  plazos: [5, 10, 15, 20],
  cat: 11.6,
  reduccionAnual: 0.15,
  ingresoMinimo: 8500,
  actualizado: "1 de junio de 2026",
  vigencia: "30 de noviembre de 2026",
  fuente: "https://www.hsbc.com.mx/hipotecario/productos/construye-tu-hogar/",
};
const BANKS = [
  { id: "hsbc", name: "HSBC", color: "#DB0011", desc: "Full Adquisición · Full Construye · Full Hipoteca", active: true },
  { id: "bbva", name: "BBVA", color: "#004481", desc: "Próximamente", active: false },
  { id: "santander", name: "Santander", color: "#EC0000", desc: "Próximamente", active: false },
  { id: "banorte", name: "Banorte", color: "#EB0029", desc: "Próximamente", active: false },
];
const PRODUCTS = [
  { id: "adquisicion", name: "Full Adquisición", icon: IconBuilding, desc: "Compra una vivienda existente" },
  { id: "construye", name: "Full Construye", icon: IconHammer, desc: "Terreno + construcción" },
  { id: "hipoteca", name: "Full Hipoteca", icon: IconLandmark, desc: "Liquidez con garantía hipotecaria" },
];
const FREQ_DAYS = { unico: 0, diario: 1, semanal: 7, mensual: 30, trimestral: 91, semestral: 182, anual: 365 };
const PERIOD_DAYS = { dia: 1, semana: 7, mes: 30, trimestre: 91, semestre: 182, año: 365 };
const PROPERTY_TYPES = ["Casa", "Departamento", "Terreno", "Otro"];
const DEFAULT_CENTER = { lat: 20.5888, lng: -100.3899 }; // Querétaro

/* ================================================================== */
/*  UTILIDADES                                                          */
/* ================================================================== */
function fmtMoney(n) {
  return Math.round(Number(n) || 0).toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 });
}
function Money({ n }) { return <>{fmtMoney(n)}</>; }
function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const r = new FileReader();
    r.onload = () => resolve(r.result);
    r.onerror = reject;
    r.readAsDataURL(file);
  });
}

/* Campo numérico con separador de miles en vivo */
function NumberField({ value, onChange, placeholder, style, className = "mcc-sans w-full px-4 py-3.5 rounded-2xl text-[15px] outline-none" }) {
  const [text, setText] = useState(value ? Number(value).toLocaleString("es-MX") : "");
  useEffect(() => {
    const formatted = value || value === 0 ? Number(value).toLocaleString("es-MX") : "";
    setText((prev) => (Number(prev.replace(/,/g, "")) === Number(value) ? prev : formatted));
  }, [value]);
  const handle = (e) => {
    const raw = e.target.value.replace(/[^0-9]/g, "");
    const num = raw === "" ? 0 : Number(raw);
    setText(raw === "" ? "" : num.toLocaleString("es-MX"));
    onChange(num);
  };
  return <input inputMode="numeric" value={text} onChange={handle} placeholder={placeholder} className={className} style={style} />;
}

/* ================================================================== */
/*  EXPORTAR PDF (jsPDF, corre 100% en el navegador)                    */
/* ================================================================== */
const DISCLAIMER = "Esta información corresponde a una estimación realizada con los datos disponibles al momento de la cotización. Las condiciones bancarias y costos pueden cambiar y deben verificarse con las fuentes correspondientes.";

function newDoc() {
  if (!window.jspdf) { alert("Para exportar a PDF necesitas conexión a internet la primera vez (para cargar la librería). Inténtalo de nuevo con internet activo."); return null; }
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.setFont("helvetica", "bold"); doc.setFontSize(16); doc.setTextColor(20, 26, 51);
  doc.text("Mejor Cotiza Casa", 14, 18);
  doc.setFont("helvetica", "normal"); doc.setFontSize(9); doc.setTextColor(130);
  doc.text(new Date().toLocaleDateString("es-MX", { day: "numeric", month: "long", year: "numeric" }), 14, 24);
  doc.setDrawColor(225); doc.line(14, 28, 196, 28);
  return doc;
}
function kv(doc, y, label, value, opts = {}) {
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(120);
  doc.text(label, 14, y);
  doc.setFont("helvetica", opts.bold ? "bold" : "normal"); doc.setFontSize(opts.size || 11); doc.setTextColor(20, 26, 51);
  doc.text(String(value), 90, y);
  return y + 7;
}
function footerDisclaimer(doc, y) {
  doc.setDrawColor(230); doc.line(14, y, 196, y); y += 6;
  doc.setFont("helvetica", "italic"); doc.setFontSize(8); doc.setTextColor(140);
  const lines = doc.splitTextToSize(DISCLAIMER, 182);
  doc.text(lines, 14, y);
}

function exportPropertyPDF(p) {
  const doc = newDoc();
  if (!doc) return;
  let y = 38;
  if (p.img && p.img.startsWith("data:image")) {
    try { doc.addImage(p.img, "JPEG", 14, y, 80, 55); } catch (e) {}
  }
  doc.setFont("helvetica", "bold"); doc.setFontSize(14); doc.setTextColor(20, 26, 51);
  doc.text(p.name || "Propiedad", 100, y + 8);
  doc.setFont("helvetica", "normal"); doc.setFontSize(10); doc.setTextColor(120);
  doc.text(`${p.zone || ""}${p.zone ? ", " : ""}${p.city || ""}`, 100, y + 15);
  doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(47, 95, 255);
  doc.text(fmtMoney(p.price) + (p.op === "Renta" ? " /mes" : ""), 100, y + 24);
  y += 65;
  y = kv(doc, y, "Tipo", p.type || "-");
  y = kv(doc, y, "Operación", p.op || "-");
  y = kv(doc, y, "Recámaras", p.beds ?? 0);
  y = kv(doc, y, "Baños", p.baths ?? 0);
  y = kv(doc, y, "Medios baños", p.halfBaths ?? 0);
  y = kv(doc, y, "Estacionamientos", p.parking ?? 0);
  y = kv(doc, y, "m² terreno", p.m2Terreno ?? "-");
  y = kv(doc, y, "m² construcción", p.m2Construccion ?? "-");
  y = kv(doc, y, "Pisos", p.floors ?? "-");
  y = kv(doc, y, "Antigüedad", p.age || "-");
  y = kv(doc, y, "Amueblada", p.furnished || "-");
  y += 3;
  if (p.features) {
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(20, 26, 51); doc.text("Características", 14, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(90);
    const lines = doc.splitTextToSize(p.features, 182); doc.text(lines, 14, y); y += lines.length * 5 + 4;
  }
  if (p.pros?.length) {
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(20, 26, 51); doc.text("Pros", 14, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(90);
    p.pros.forEach((pr) => { doc.text("• " + pr, 16, y); y += 5.5; });
    y += 3;
  }
  if (p.cons?.length) {
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(20, 26, 51); doc.text("Contras", 14, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(90);
    p.cons.forEach((c) => { doc.text("• " + c, 16, y); y += 5.5; });
    y += 3;
  }
  if (p.notes) {
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(20, 26, 51); doc.text("Notas", 14, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(90);
    const lines = doc.splitTextToSize(p.notes, 182); doc.text(lines, 14, y); y += lines.length * 5 + 4;
  }
  footerDisclaimer(doc, Math.min(y + 6, 280));
  doc.save(`${(p.name || "propiedad").replace(/\s+/g, "_")}.pdf`);
}

function exportRentaPDF(inputs, summary) {
  const doc = newDoc();
  if (!doc) return;
  let y = 38;
  doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(20, 26, 51);
  doc.text("Cotización de renta", 14, y); y += 10;
  y = kv(doc, y, "Renta mensual", fmtMoney(inputs.renta));
  if (inputs.mant) y = kv(doc, y, "Mantenimiento", fmtMoney(inputs.mantMonto));
  y = kv(doc, y, "Gastos iniciales", fmtMoney(summary.initial));
  y += 3;
  doc.setDrawColor(230); doc.line(14, y, 196, y); y += 8;
  y = kv(doc, y, "Total mensual", fmtMoney(summary.monthlyTotal), { bold: true, size: 13 });
  y = kv(doc, y, `Total estimado (${inputs.periodo})`, fmtMoney(summary.periodTotal), { bold: true, size: 13 });
  y += 6;
  if (inputs.gastos?.length) {
    doc.setFont("helvetica", "bold"); doc.setFontSize(11); doc.setTextColor(20, 26, 51); doc.text("Gastos adicionales", 14, y); y += 6;
    doc.setFont("helvetica", "normal"); doc.setFontSize(9.5); doc.setTextColor(90);
    inputs.gastos.forEach((g) => { doc.text(`• ${g.nombre || "Gasto"}: ${fmtMoney(g.monto)} (${g.freq})`, 16, y); y += 5.5; });
  }
  footerDisclaimer(doc, Math.min(y + 10, 280));
  doc.save("cotizacion_renta.pdf");
}

function exportBankPDF(bank, product, params, result) {
  const doc = newDoc();
  if (!doc) return;
  let y = 38;
  doc.setFont("helvetica", "bold"); doc.setFontSize(13); doc.setTextColor(20, 26, 51);
  doc.text(`${bank} · ${product}`, 14, y); y += 10;
  Object.entries(params).forEach(([label, value]) => { y = kv(doc, y, label, value); });
  y += 3;
  doc.setDrawColor(230); doc.line(14, y, 196, y); y += 8;
  Object.entries(result).forEach(([label, value]) => { y = kv(doc, y, label, value, { bold: true, size: 12 }); });
  footerDisclaimer(doc, Math.min(y + 10, 280));
  doc.save(`cotizacion_${bank}_${product}.pdf`.replace(/\s+/g, "_"));
}

/* ================================================================== */
/*  MAPA (Leaflet + OpenStreetMap, sin API key)                         */
/* ================================================================== */
function LocationPicker({ lat, lng, onChange, t, height = 190, interactive = true }) {
  const mapRef = useRef(null);
  const mapObj = useRef(null);
  const markerObj = useRef(null);

  useEffect(() => {
    if (!window.L || !mapRef.current || mapObj.current) return;
    const startLat = lat ?? DEFAULT_CENTER.lat, startLng = lng ?? DEFAULT_CENTER.lng;
    const map = window.L.map(mapRef.current, {
      zoomControl: interactive, dragging: interactive, scrollWheelZoom: false, doubleClickZoom: interactive, tap: interactive,
    }).setView([startLat, startLng], lat != null ? 15 : 12);
    window.L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", { attribution: "© OpenStreetMap", maxZoom: 19 }).addTo(map);
    const marker = window.L.marker([startLat, startLng], { draggable: interactive }).addTo(map);
    if (interactive && onChange) {
      marker.on("dragend", () => { const pos = marker.getLatLng(); onChange(pos.lat, pos.lng); });
      map.on("click", (e) => { marker.setLatLng(e.latlng); onChange(e.latlng.lat, e.latlng.lng); });
    }
    mapObj.current = map; markerObj.current = marker;
    setTimeout(() => map.invalidateSize(), 250);
    return () => { map.remove(); mapObj.current = null; markerObj.current = null; };
    // eslint-disable-next-line
  }, []);

  useEffect(() => {
    if (mapObj.current && markerObj.current && lat != null && lng != null) {
      markerObj.current.setLatLng([lat, lng]);
      mapObj.current.setView([lat, lng], mapObj.current.getZoom());
    }
  }, [lat, lng]);

  return <div ref={mapRef} style={{ height, borderRadius: 18, overflow: "hidden", border: `1px solid ${t.border}`, background: t.bgSoft }} />;
}

/* ================================================================== */
/*  PRIMITIVOS DE UI                                                    */
/* ================================================================== */
function Pill({ active, children, onClick, t }) {
  return (
    <button onClick={onClick} className="mcc-sans text-[13px] font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap"
      style={{ background: active ? t.accent : "transparent", color: active ? t.onAccent : t.muted, border: `1px solid ${active ? t.accent : t.border}` }}>
      {children}
    </button>
  );
}
function SectionTitle({ children, t, action, onAction }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="mcc-serif text-[18px]" style={{ color: t.text }}>{children}</h2>
      {action && <button onClick={onAction} className="mcc-sans text-[12.5px] font-medium" style={{ color: t.accent }}>{action}</button>}
    </div>
  );
}
function Row({ label, val, t, dark, bold, isText }) {
  return (
    <div className="flex items-center justify-between mb-1.5 gap-3">
      <span className="mcc-sans text-[13.5px]" style={{ color: dark ? "rgba(255,255,255,0.65)" : t.muted }}>{label}</span>
      <span className={`mcc-sans text-[13.5px] text-right ${bold ? "font-semibold" : ""}`} style={{ color: dark ? "#fff" : t.text }}>
        {isText ? val : <Money n={val} />}
      </span>
    </div>
  );
}
function EmptyState({ t, icon: Icon, title, body, actionLabel, onAction }) {
  return (
    <div className="flex flex-col items-center text-center px-8 py-14">
      <div className="w-16 h-16 rounded-full flex items-center justify-center mb-4" style={{ background: t.accentSoft }}>
        <Icon size={26} color={t.accent} />
      </div>
      <div className="mcc-serif text-[17px] mb-1.5" style={{ color: t.text }}>{title}</div>
      <p className="mcc-sans text-[13px] mb-5" style={{ color: t.muted }}>{body}</p>
      {actionLabel && (
        <button onClick={onAction} className="mcc-sans px-5 py-3 rounded-full font-semibold text-[13.5px]" style={{ background: t.accent, color: t.onAccent }}>
          {actionLabel}
        </button>
      )}
    </div>
  );
}
function PropertyCard({ p, t, wide, onOpen, onFav }) {
  return (
    <div className="rounded-[22px] overflow-hidden flex-shrink-0 cursor-pointer" style={{ background: t.card, border: `1px solid ${t.border}`, width: wide ? "100%" : 252 }} onClick={() => onOpen(p.id)}>
      <div className="relative h-40" style={{ background: t.bgSoft }}>
        {p.img ? <img src={p.img} alt={p.name} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><IconBuilding size={26} color={t.muted} /></div>}
        <button onClick={(e) => { e.stopPropagation(); onFav(p.id); }} className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)" }}>
          <IconHeart size={14} color={p.fav ? "#D96C56" : "#101A33"} fill={p.fav ? "#D96C56" : "none"} />
        </button>
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full mcc-sans text-[11px] font-semibold" style={{ background: "rgba(16,26,51,0.85)", color: "#fff" }}>{p.op}</div>
      </div>
      <div className="p-4">
        <div className="mcc-serif text-[16px]" style={{ color: t.text }}>{p.name}</div>
        <div className="flex items-center gap-1 mt-1 mcc-sans text-[12.5px]" style={{ color: t.muted }}><IconPin size={12} /> {p.zone || p.city ? `${p.zone ? p.zone + ", " : ""}${p.city}` : "Sin ubicación"}</div>
        <div className="mcc-sans text-[16px] font-semibold mt-2" style={{ color: t.accent }}>
          <Money n={p.price} />{p.op === "Renta" ? <span className="text-[12px] font-normal" style={{ color: t.muted }}> /mes</span> : null}
        </div>
        <div className="flex items-center gap-3 mt-2 mcc-sans text-[12px]" style={{ color: t.muted }}>
          <span className="flex items-center gap-1"><IconBed size={13} />{p.beds || 0}</span>
          <span className="flex items-center gap-1"><IconBath size={13} />{p.baths || 0}</span>
          <span className="flex items-center gap-1"><IconCar size={13} />{p.parking || 0}</span>
          <span className="flex items-center gap-1"><IconRuler size={13} />{p.m2Construccion || p.m2Terreno || 0}m²</span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MENÚ LATERAL Y BARRA SUPERIOR                                       */
/* ================================================================== */
const NAV_ITEMS = [
  { id: "home", label: "Inicio", icon: IconHome },
  { id: "casas", label: "Mis casas", icon: IconBuilding },
  { id: "cotiza", label: "Cotiza", icon: IconCalc },
  { id: "comparar", label: "Comparar", icon: IconChart },
  { id: "perfil", label: "Perfil y ajustes", icon: IconUser },
];
function SideDrawer({ open, onClose, t, name, dark, setDark, tab, setTab }) {
  return (
    <div className={`fixed inset-0 z-40 transition-opacity ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
      <div onClick={onClose} className="absolute inset-0" style={{ background: "rgba(8,12,24,0.45)" }} />
      <div className="absolute top-0 left-0 bottom-0 w-[78%] max-w-[280px] flex flex-col p-5 transition-transform duration-300"
        style={{ background: t.card, transform: open ? "translateX(0)" : "translateX(-100%)" }}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: t.accent }}><Logo size={18} /></div>
            <span className="mcc-serif text-[15px]" style={{ color: t.text }}>Mejor Cotiza Casa</span>
          </div>
          <button onClick={onClose}><IconX size={18} color={t.muted} /></button>
        </div>
        <div className="flex items-center gap-3 mb-8 rounded-2xl p-3" style={{ background: t.bgSoft }}>
          <div className="w-10 h-10 rounded-full flex items-center justify-center mcc-serif text-[15px]" style={{ background: t.accent, color: t.onAccent }}>{name?.[0]?.toUpperCase() || "?"}</div>
          <div>
            <div className="mcc-sans text-[13.5px] font-semibold" style={{ color: t.text }}>{name}</div>
            <div className="mcc-sans text-[11.5px]" style={{ color: t.muted }}>Cuenta personal</div>
          </div>
        </div>
        <div className="flex flex-col gap-1 flex-1">
          {NAV_ITEMS.map((it) => {
            const active = tab === it.id;
            return (
              <button key={it.id} onClick={() => { setTab(it.id); onClose(); }} className="flex items-center gap-3 px-3 py-3 rounded-xl text-left" style={{ background: active ? t.accentSoft : "transparent" }}>
                <it.icon size={18} color={active ? t.accent : t.muted} />
                <span className="mcc-sans text-[14px] font-medium" style={{ color: active ? t.accent : t.text }}>{it.label}</span>
              </button>
            );
          })}
        </div>
        <button onClick={() => setDark(!dark)} className="flex items-center gap-3 px-3 py-3 rounded-xl" style={{ background: t.bgSoft }}>
          {dark ? <IconMoon size={17} color={t.muted} /> : <IconSun size={17} color={t.muted} />}
          <span className="mcc-sans text-[13px]" style={{ color: t.text }}>Modo {dark ? "oscuro" : "claro"}</span>
        </button>
      </div>
    </div>
  );
}
function TopBar({ t, onMenu, title, onBack }) {
  return (
    <div className="flex items-center justify-between px-5 pt-6 mb-1">
      <button onClick={onBack || onMenu} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: t.card, border: `1px solid ${t.border}` }}>
        {onBack ? <IconChevronL size={18} color={t.text} /> : <IconMenu size={17} color={t.text} />}
      </button>
      {title && <div className="mcc-sans text-[14px] font-semibold" style={{ color: t.text }}>{title}</div>}
      <div className="flex items-center gap-2">
        <button className="w-10 h-10 rounded-full flex items-center justify-center relative" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <IconBell size={16} color={t.text} />
          <span className="absolute top-1.5 right-2 w-1.5 h-1.5 rounded-full" style={{ background: t.danger }} />
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  ONBOARDING                                                          */
/* ================================================================== */
function NameScreen({ t, onNext }) {
  const [name, setName] = useState("");
  return (
    <div className="h-full flex flex-col justify-center px-8" style={{ background: t.bg }}>
      <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ background: t.accent }}><Logo size={30} /></div>
      <h1 className="mcc-serif text-[28px] leading-tight mb-2" style={{ color: t.text }}>¡Hola! 👋</h1>
      <p className="mcc-sans text-[15px] mb-8" style={{ color: t.muted }}>¿Cómo quieres que te llamemos?</p>
      <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre o apodo"
        className="mcc-sans w-full px-5 py-4 rounded-2xl outline-none text-[15px] mb-6"
        style={{ background: t.card, border: `1px solid ${t.border}`, color: t.text }} />
      <button disabled={!name.trim()} onClick={() => onNext(name.trim())}
        className="mcc-sans w-full py-4 rounded-full font-semibold text-[15px] transition-opacity"
        style={{ background: t.accent, color: t.onAccent, opacity: name.trim() ? 1 : 0.35 }}>
        Continuar
      </button>
    </div>
  );
}
const INTRO_SLIDES = [
  { icon: IconBuilding, title: "Guarda casas", body: "Guarda propiedades que encuentres en diferentes sitios y tenlas todas en un mismo lugar." },
  { icon: IconCalc, title: "Cotiza tu renta", body: "Calcula cuánto realmente gastarías en una propiedad, con mantenimiento y gastos incluidos." },
  { icon: IconLandmark, title: "Cotiza tu casa", body: "Explora opciones hipotecarias con tasas oficiales de HSBC y escenarios de construcción." },
  { icon: IconChart, title: "Compara", body: "Compara tus opciones antes de tomar una decisión." },
];
function IntroScreen({ t, onDone }) {
  const [i, setI] = useState(0);
  const Slide = INTRO_SLIDES[i].icon;
  return (
    <div className="h-full flex flex-col px-8 pt-8 pb-10" style={{ background: t.bg }}>
      <div className="flex justify-end"><button onClick={onDone} className="mcc-sans text-[13px]" style={{ color: t.muted }}>Saltar introducción</button></div>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-[26px] flex items-center justify-center mb-8" style={{ background: t.accentSoft }}><Slide size={36} color={t.accent} /></div>
        <h2 className="mcc-serif text-[22px] mb-3" style={{ color: t.text }}>{INTRO_SLIDES[i].title}</h2>
        <p className="mcc-sans text-[14.5px] leading-relaxed max-w-[260px]" style={{ color: t.muted }}>{INTRO_SLIDES[i].body}</p>
      </div>
      <div className="flex items-center justify-center gap-1.5 mb-8">
        {INTRO_SLIDES.map((_, idx) => <div key={idx} className="rounded-full transition-all" style={{ width: idx === i ? 20 : 6, height: 6, background: idx === i ? t.accent : t.border }} />)}
      </div>
      <button onClick={() => (i < INTRO_SLIDES.length - 1 ? setI(i + 1) : onDone())} className="mcc-sans w-full py-4 rounded-full font-semibold text-[15px]" style={{ background: t.accent, color: t.onAccent }}>
        {i < INTRO_SLIDES.length - 1 ? "Siguiente" : "Comenzar"}
      </button>
    </div>
  );
}

/* ================================================================== */
/*  HOME                                                                */
/* ================================================================== */
function ActionCard({ icon: Icon, title, body, t, onClick }) {
  return (
    <button onClick={onClick} className="text-left rounded-[22px] p-5 flex items-start gap-4 w-full" style={{ background: t.card, border: `1px solid ${t.border}` }}>
      <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: t.accentSoft }}><Icon size={19} color={t.accent} /></div>
      <div className="flex-1">
        <div className="mcc-sans text-[15px] font-semibold" style={{ color: t.text }}>{title}</div>
        <div className="mcc-sans text-[12.5px] mt-0.5" style={{ color: t.muted }}>{body}</div>
      </div>
      <IconChevronR size={17} style={{ color: t.muted, marginTop: 4 }} />
    </button>
  );
}
function HomeScreen({ t, name, go, onMenu, properties, toggleFav, openProperty }) {
  const favs = properties.filter((p) => p.fav);
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} />
      <div className="px-5 pt-4">
        <div className="mcc-sans text-[13px]" style={{ color: t.muted }}>Hola, {name} 👋</div>
        <h1 className="mcc-serif text-[25px] mt-1 mb-6" style={{ color: t.text }}>¿Qué estás buscando hoy?</h1>
        <div className="flex flex-col gap-3">
          <ActionCard t={t} icon={IconBuilding} title="Explora casas" body="Encuentra y guarda tus favoritas." onClick={() => go("casas")} />
          <ActionCard t={t} icon={IconCalc} title="Cotiza tu renta" body="Descubre cuánto realmente te costaría." onClick={() => go("cotiza", "renta")} />
          <ActionCard t={t} icon={IconLandmark} title="Cotiza tu casa" body="Calcula compra o construcción con tasas oficiales." onClick={() => go("cotiza", "casa")} />
        </div>
        <div className="mt-8">
          <SectionTitle t={t} action={properties.length ? "Ver todas" : null} onAction={() => go("casas")}>Mis favoritas</SectionTitle>
          {favs.length === 0 ? (
            <EmptyState t={t} icon={IconHeart} title="Aún no tienes favoritas" body="Marca el corazón de una casa guardada para verla aquí." actionLabel="Agregar mi primera casa" onAction={() => go("add")} />
          ) : (
            <div className="flex gap-4 overflow-x-auto mcc-scroll -mx-5 px-5 pb-2">
              {favs.map((p) => <PropertyCard key={p.id} p={p} t={t} onOpen={openProperty} onFav={toggleFav} />)}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MIS CASAS                                                           */
/* ================================================================== */
function CasasScreen({ t, onMenu, properties, toggleFav, openProperty, go }) {
  const [q, setQ] = useState("");
  const [filterType, setFilterType] = useState("Todas");
  const filtered = properties.filter((p) => {
    const matchesQ = !q || `${p.name} ${p.city} ${p.zone}`.toLowerCase().includes(q.toLowerCase());
    const matchesType = filterType === "Todas" || p.type === filterType;
    return matchesQ && matchesType;
  });
  const byCity = useMemo(() => { const m = {}; filtered.forEach((p) => { const c = p.city || "Sin ciudad"; (m[c] = m[c] || []).push(p); }); return m; }, [filtered]);

  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Mis casas" />
      <div className="px-5 pt-4">
        <div className="flex items-center mb-4">
          <div className="flex-1 flex items-center gap-2 rounded-full px-4 py-2.5" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <IconSearch size={15} color={t.muted} />
            <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Buscar por nombre o ubicación" className="mcc-sans text-[13px] outline-none w-full bg-transparent" style={{ color: t.text }} />
          </div>
          <button onClick={() => go("add")} className="w-10 h-10 ml-2 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.accent }}>
            <IconPlus size={18} color={t.onAccent} />
          </button>
        </div>
        <div className="flex gap-2 overflow-x-auto mcc-scroll mb-6 pb-1">
          {["Todas", ...PROPERTY_TYPES].map((f) => <Pill key={f} t={t} active={filterType === f} onClick={() => setFilterType(f)}>{f}</Pill>)}
        </div>
        {properties.length === 0 ? (
          <EmptyState t={t} icon={IconBuilding} title="Aún no tienes casas guardadas" body="Agrega una propiedad que hayas visto en un portal, Facebook o donde sea, y organízala aquí." actionLabel="+ Agregar casa" onAction={() => go("add")} />
        ) : filtered.length === 0 ? (
          <EmptyState t={t} icon={IconSearch} title="Sin resultados" body="Prueba con otra búsqueda o filtro." />
        ) : (
          Object.entries(byCity).map(([city, list]) => (
            <div key={city} className="mb-7">
              <SectionTitle t={t}>{city}</SectionTitle>
              <div className="flex flex-col gap-4">{list.map((p) => <PropertyCard key={p.id} p={p} t={t} wide onOpen={openProperty} onFav={toggleFav} />)}</div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  AGREGAR / EDITAR CASA                                               */
/* ================================================================== */
const EMPTY_PROPERTY = {
  name: "", type: "Casa", op: "Renta", price: 0, city: "", zone: "", colonia: "", address: "",
  link: "", seenDate: new Date().toISOString().slice(0, 10), img: "", photos: [], notes: "",
  beds: 0, baths: 0, halfBaths: 0, parking: 0, m2Terreno: 0, m2Construccion: 0, floors: 1,
  age: "", furnished: "Sin amueblar", features: "", pros: [], cons: [], lat: null, lng: null, fav: false,
};
function ChipInputList({ items, setItems, placeholder, t, colorDot }) {
  const [text, setText] = useState("");
  const add = () => { if (text.trim()) { setItems([...items, text.trim()]); setText(""); } };
  return (
    <div>
      <div className="flex gap-2 mb-2">
        <input value={text} onChange={(e) => setText(e.target.value)} onKeyDown={(e) => e.key === "Enter" && add()} placeholder={placeholder}
          className="mcc-sans flex-1 px-3 py-2.5 rounded-xl text-[13px] outline-none" style={{ background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text }} />
        <button onClick={add} className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: t.accentSoft }}><IconPlus size={15} color={t.accent} /></button>
      </div>
      <div className="flex flex-col gap-1.5">
        {items.map((it, idx) => (
          <div key={idx} className="flex items-center justify-between px-3 py-2 rounded-lg" style={{ background: t.bgSoft }}>
            <span className="mcc-sans text-[12.5px] flex items-center gap-2" style={{ color: t.text }}><span style={{ color: colorDot }}>●</span> {it}</span>
            <button onClick={() => setItems(items.filter((_, i) => i !== idx))}><IconX size={13} color={t.muted} /></button>
          </div>
        ))}
      </div>
    </div>
  );
}
function Field({ label, t, children }) {
  return (
    <div className="mb-4">
      <label className="mcc-sans text-[12.5px] font-medium block mb-1.5" style={{ color: t.muted }}>{label}</label>
      {children}
    </div>
  );
}
function AddPropertyScreen({ t, initial, onSave, onCancel }) {
  const [p, setP] = useState(initial || EMPTY_PROPERTY);
  const set = (patch) => setP((prev) => ({ ...prev, ...patch }));
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };
  const inputCls = "mcc-sans w-full px-4 py-3 rounded-2xl text-[14px] outline-none";

  const handleMainPhoto = async (e) => { const f = e.target.files?.[0]; if (f) set({ img: await fileToDataUrl(f) }); };
  const handleExtraPhotos = async (e) => {
    const files = Array.from(e.target.files || []);
    const urls = await Promise.all(files.map(fileToDataUrl));
    set({ photos: [...(p.photos || []), ...urls] });
  };

  const canSave = p.name.trim() && p.price > 0;

  return (
    <div className="pb-28">
      <TopBar t={t} onBack={onCancel} title={initial ? "Editar casa" : "Agregar casa"} />
      <div className="px-5 pt-4">
        <Field label="Foto principal" t={t}>
          <label className="flex items-center justify-center h-36 rounded-2xl cursor-pointer overflow-hidden" style={{ background: t.bgSoft, border: `1.5px dashed ${t.border}` }}>
            {p.img ? <img src={p.img} className="w-full h-full object-cover" /> : <div className="flex flex-col items-center gap-1" style={{ color: t.muted }}><IconUpload size={20} /><span className="mcc-sans text-[12px]">Subir foto</span></div>}
            <input type="file" accept="image/*" className="hidden" onChange={handleMainPhoto} />
          </label>
        </Field>
        <Field label="Fotos adicionales" t={t}>
          <div className="flex gap-2 flex-wrap">
            {(p.photos || []).map((ph, i) => (
              <div key={i} className="relative w-16 h-16 rounded-xl overflow-hidden">
                <img src={ph} className="w-full h-full object-cover" />
                <button onClick={() => set({ photos: p.photos.filter((_, idx) => idx !== i) })} className="absolute top-0.5 right-0.5 w-4.5 h-4.5 rounded-full flex items-center justify-center" style={{ background: "rgba(0,0,0,0.6)" }}><IconX size={10} color="#fff" /></button>
              </div>
            ))}
            <label className="w-16 h-16 rounded-xl flex items-center justify-center cursor-pointer" style={{ background: t.bgSoft, border: `1.5px dashed ${t.border}` }}>
              <IconPlus size={16} color={t.muted} />
              <input type="file" accept="image/*" multiple className="hidden" onChange={handleExtraPhotos} />
            </label>
          </div>
        </Field>

        <Field label="Nombre de la propiedad" t={t}><input value={p.name} onChange={(e) => set({ name: e.target.value })} placeholder="Ej. Casa Los Encinos" className={inputCls} style={fieldStyle} /></Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Tipo" t={t}>
            <select value={p.type} onChange={(e) => set({ type: e.target.value })} className={inputCls} style={fieldStyle}>
              {PROPERTY_TYPES.map((x) => <option key={x}>{x}</option>)}
            </select>
          </Field>
          <Field label="Operación" t={t}>
            <select value={p.op} onChange={(e) => set({ op: e.target.value })} className={inputCls} style={fieldStyle}>
              {["Renta", "Venta", "Otro"].map((x) => <option key={x}>{x}</option>)}
            </select>
          </Field>
        </div>
        <Field label="Precio" t={t}><NumberField value={p.price} onChange={(v) => set({ price: v })} placeholder="0" style={fieldStyle} className={inputCls} /></Field>

        <div className="grid grid-cols-2 gap-3">
          <Field label="Ciudad" t={t}><input value={p.city} onChange={(e) => set({ city: e.target.value })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Zona" t={t}><input value={p.zone} onChange={(e) => set({ zone: e.target.value })} className={inputCls} style={fieldStyle} /></Field>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Colonia" t={t}><input value={p.colonia} onChange={(e) => set({ colonia: e.target.value })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Dirección (opcional)" t={t}><input value={p.address} onChange={(e) => set({ address: e.target.value })} className={inputCls} style={fieldStyle} /></Field>
        </div>

        <Field label="Ubicación en el mapa" t={t}>
          <LocationPicker t={t} lat={p.lat} lng={p.lng} onChange={(lat, lng) => set({ lat, lng })} />
          <p className="mcc-sans text-[11.5px] mt-1.5" style={{ color: t.muted }}>Toca el mapa o arrastra el marcador para colocar la ubicación.</p>
        </Field>

        <Field label="Link donde se encontró" t={t}><input value={p.link} onChange={(e) => set({ link: e.target.value })} placeholder="https://..." className={inputCls} style={fieldStyle} /></Field>
        <Field label="Fecha en que la viste" t={t}><input type="date" value={p.seenDate} onChange={(e) => set({ seenDate: e.target.value })} className={inputCls} style={fieldStyle} /></Field>

        <div className="h-px my-5" style={{ background: t.border }} />
        <div className="mcc-sans text-[14px] font-semibold mb-3" style={{ color: t.text }}>Características</div>
        <div className="grid grid-cols-2 gap-3">
          <Field label="Recámaras" t={t}><input type="number" min="0" value={p.beds} onChange={(e) => set({ beds: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Baños" t={t}><input type="number" min="0" value={p.baths} onChange={(e) => set({ baths: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Medios baños" t={t}><input type="number" min="0" value={p.halfBaths} onChange={(e) => set({ halfBaths: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Estacionamientos" t={t}><input type="number" min="0" value={p.parking} onChange={(e) => set({ parking: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="m² terreno" t={t}><input type="number" min="0" value={p.m2Terreno} onChange={(e) => set({ m2Terreno: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="m² construcción" t={t}><input type="number" min="0" value={p.m2Construccion} onChange={(e) => set({ m2Construccion: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Pisos" t={t}><input type="number" min="0" value={p.floors} onChange={(e) => set({ floors: Number(e.target.value) })} className={inputCls} style={fieldStyle} /></Field>
          <Field label="Antigüedad" t={t}><input value={p.age} onChange={(e) => set({ age: e.target.value })} placeholder="Ej. 5 años" className={inputCls} style={fieldStyle} /></Field>
        </div>
        <Field label="Amueblada" t={t}>
          <select value={p.furnished} onChange={(e) => set({ furnished: e.target.value })} className={inputCls} style={fieldStyle}>
            {["Sin amueblar", "Semi amueblada", "Amueblada"].map((x) => <option key={x}>{x}</option>)}
          </select>
        </Field>
        <Field label="Características libres" t={t}><textarea value={p.features} onChange={(e) => set({ features: e.target.value })} rows={3} placeholder="Cocina equipada, jardín, roof garden..." className={inputCls} style={fieldStyle} /></Field>

        <div className="h-px my-5" style={{ background: t.border }} />
        <Field label="👍 Pros" t={t}><ChipInputList items={p.pros} setItems={(v) => set({ pros: v })} placeholder="Ej. Muy buena ubicación" t={t} colorDot={t.good} /></Field>
        <Field label="👎 Contras" t={t}><ChipInputList items={p.cons} setItems={(v) => set({ cons: v })} placeholder="Ej. Poco estacionamiento" t={t} colorDot={t.danger} /></Field>
        <Field label="📝 Notas adicionales" t={t}><textarea value={p.notes} onChange={(e) => set({ notes: e.target.value })} rows={3} className={inputCls} style={fieldStyle} /></Field>

        <button disabled={!canSave} onClick={() => onSave(p)} className="mcc-sans w-full py-4 rounded-full font-semibold text-[15px] mt-4" style={{ background: t.accent, color: t.onAccent, opacity: canSave ? 1 : 0.4 }}>
          {initial ? "Guardar cambios" : "Guardar casa"}
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  DETALLE DE PROPIEDAD                                                */
/* ================================================================== */
function PropertyDetailScreen({ t, p, onBack, onEdit, onDelete, onFav }) {
  const [imgIdx, setImgIdx] = useState(0);
  const images = [p.img, ...(p.photos || [])].filter(Boolean);
  if (images.length === 0) images.push("");

  return (
    <div className="pb-28">
      <div className="relative h-64" style={{ background: t.bgSoft }}>
        {images[imgIdx] ? <img src={images[imgIdx]} className="w-full h-full object-cover" /> : <div className="w-full h-full flex items-center justify-center"><IconBuilding size={34} color={t.muted} /></div>}
        <button onClick={onBack} className="absolute top-6 left-5 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.92)" }}><IconChevronL size={18} color="#101A33" /></button>
        <button onClick={() => onFav(p.id)} className="absolute top-6 right-5 w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.92)" }}>
          <IconHeart size={17} color={p.fav ? "#D96C56" : "#101A33"} fill={p.fav ? "#D96C56" : "none"} />
        </button>
        {images.length > 1 && (
          <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-1.5">
            {images.map((_, i) => <button key={i} onClick={() => setImgIdx(i)} className="rounded-full" style={{ width: i === imgIdx ? 16 : 6, height: 6, background: i === imgIdx ? "#fff" : "rgba(255,255,255,0.5)" }} />)}
          </div>
        )}
      </div>
      <div className="px-5 pt-5">
        <div className="flex items-center justify-between">
          <span className="mcc-sans text-[11px] font-semibold px-2.5 py-1 rounded-full" style={{ background: t.accentSoft, color: t.accent }}>{p.op}</span>
          <div className="flex gap-2">
            <button onClick={() => onEdit(p)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: t.card, border: `1px solid ${t.border}` }}><IconEdit size={14} color={t.text} /></button>
            <button onClick={() => onDelete(p.id)} className="w-9 h-9 rounded-full flex items-center justify-center" style={{ background: t.card, border: `1px solid ${t.border}` }}><IconTrash size={14} color={t.danger} /></button>
          </div>
        </div>
        <h1 className="mcc-serif text-[22px] mt-3" style={{ color: t.text }}>{p.name}</h1>
        <div className="flex items-center gap-1 mt-1 mcc-sans text-[13px]" style={{ color: t.muted }}><IconPin size={13} /> {[p.colonia, p.zone, p.city].filter(Boolean).join(", ") || "Sin ubicación registrada"}</div>
        <div className="mcc-serif text-[24px] mt-2" style={{ color: t.accent }}><Money n={p.price} />{p.op === "Renta" && <span className="mcc-sans text-[13px] font-normal" style={{ color: t.muted }}> /mes</span>}</div>

        <div className="flex items-center gap-4 mt-4 py-3 border-y mcc-sans text-[13px]" style={{ borderColor: t.border, color: t.text }}>
          <span className="flex items-center gap-1.5"><IconBed size={15} color={t.muted} />{p.beds || 0} rec</span>
          <span className="flex items-center gap-1.5"><IconBath size={15} color={t.muted} />{p.baths || 0} baños</span>
          <span className="flex items-center gap-1.5"><IconCar size={15} color={t.muted} />{p.parking || 0} autos</span>
          <span className="flex items-center gap-1.5"><IconRuler size={15} color={t.muted} />{p.m2Construccion || p.m2Terreno || 0}m²</span>
        </div>

        {p.features && (
          <div className="mt-5">
            <SectionTitle t={t}>Características</SectionTitle>
            <p className="mcc-sans text-[13.5px] leading-relaxed" style={{ color: t.muted }}>{p.features}</p>
          </div>
        )}

        {(p.lat != null && p.lng != null) && (
          <div className="mt-5">
            <SectionTitle t={t}>Ubicación</SectionTitle>
            <LocationPicker t={t} lat={p.lat} lng={p.lng} interactive={false} />
          </div>
        )}

        {p.pros?.length > 0 && (
          <div className="mt-5">
            <SectionTitle t={t}>👍 Pros</SectionTitle>
            <div className="flex flex-col gap-1.5">{p.pros.map((pr, i) => <div key={i} className="mcc-sans text-[13.5px]" style={{ color: t.text }}>• {pr}</div>)}</div>
          </div>
        )}
        {p.cons?.length > 0 && (
          <div className="mt-4">
            <SectionTitle t={t}>👎 Contras</SectionTitle>
            <div className="flex flex-col gap-1.5">{p.cons.map((c, i) => <div key={i} className="mcc-sans text-[13.5px]" style={{ color: t.text }}>• {c}</div>)}</div>
          </div>
        )}
        {p.notes && (
          <div className="mt-4">
            <SectionTitle t={t}>📝 Notas</SectionTitle>
            <p className="mcc-sans text-[13.5px] leading-relaxed" style={{ color: t.muted }}>{p.notes}</p>
          </div>
        )}
        {p.link && (
          <a href={p.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 mt-5 mcc-sans text-[13.5px] font-medium" style={{ color: t.accent }}>
            <IconLink size={15} /> Ver publicación original
          </a>
        )}

        <button onClick={() => exportPropertyPDF(p)} className="mcc-sans w-full py-4 rounded-full font-semibold text-[14.5px] mt-6 flex items-center justify-center gap-2" style={{ background: t.ink, color: "#fff" }}>
          <IconDownload size={16} /> Exportar PDF de la ficha
        </button>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  COTIZA — RENTA                                                      */
/* ================================================================== */
function RentaCalc({ t }) {
  const [renta, setRenta] = useState(25000);
  const [mant, setMant] = useState(false);
  const [mantMonto, setMantMonto] = useState(2500);
  const [gastos, setGastos] = useState([{ id: 1, nombre: "Depósito", monto: 25000, freq: "unico" }]);
  const [periodo, setPeriodo] = useState("mes");
  const addGasto = () => setGastos((g) => [...g, { id: Date.now(), nombre: "", monto: 0, freq: "unico" }]);
  const updGasto = (id, patch) => setGastos((g) => g.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const delGasto = (id) => setGastos((g) => g.filter((x) => x.id !== id));
  const dailyRenta = renta / 30;
  const dailyMant = mant ? mantMonto / 30 : 0;
  const initial = gastos.filter((g) => g.freq === "unico").reduce((s, g) => s + Number(g.monto || 0), 0);
  const dailyGastos = gastos.filter((g) => g.freq !== "unico").reduce((s, g) => s + (Number(g.monto || 0) / (FREQ_DAYS[g.freq] || 30)), 0);
  const monthlyTotal = renta + (mant ? mantMonto : 0) + dailyGastos * 30;
  const periodTotal = (dailyRenta + dailyMant + dailyGastos) * PERIOD_DAYS[periodo] + (periodo === "mes" ? initial : 0);
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };

  return (
    <div className="px-5 pt-6 pb-28">
      <h1 className="mcc-serif text-[22px] mb-1" style={{ color: t.text }}>Cotiza tu renta</h1>
      <p className="mcc-sans text-[13px] mb-6" style={{ color: t.muted }}>Descubre el costo real de rentar una propiedad.</p>
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Renta mensual</label>
      <NumberField value={renta} onChange={setRenta} style={fieldStyle} className="mcc-sans w-full mt-1.5 mb-5 px-4 py-3.5 rounded-2xl text-[16px] outline-none" />
      <div className="rounded-2xl p-4 mb-5" style={{ background: t.card, border: `1px solid ${t.border}` }}>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="mcc-sans text-[14px] font-medium" style={{ color: t.text }}>Incluir mantenimiento</span>
          <input type="checkbox" checked={mant} onChange={(e) => setMant(e.target.checked)} className="w-5 h-5" style={{ accentColor: t.accent }} />
        </label>
        {mant && <NumberField value={mantMonto} onChange={setMantMonto} style={fieldStyle} className="mcc-sans w-full mt-3 px-4 py-3 rounded-xl text-[14px] outline-none" />}
      </div>
      <div className="flex items-center justify-between mb-3">
        <span className="mcc-sans text-[14px] font-medium" style={{ color: t.text }}>Gastos adicionales</span>
        <button onClick={addGasto} className="mcc-sans text-[12.5px] font-semibold flex items-center gap-1" style={{ color: t.accent }}><IconPlus size={14} /> Agregar</button>
      </div>
      <div className="flex flex-col gap-2 mb-6">
        {gastos.map((g) => (
          <div key={g.id} className="rounded-2xl p-3 flex flex-col gap-2" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <div className="flex gap-2">
              <input value={g.nombre} onChange={(e) => updGasto(g.id, { nombre: e.target.value })} placeholder="Nombre (ej. Depósito)" className="mcc-sans flex-1 px-3 py-2 rounded-lg text-[13px] outline-none" style={fieldStyle} />
              <button onClick={() => delGasto(g.id)}><IconTrash size={16} color={t.danger} /></button>
            </div>
            <div className="flex gap-2">
              <NumberField value={g.monto} onChange={(v) => updGasto(g.id, { monto: v })} placeholder="Monto" style={fieldStyle} className="mcc-sans w-28 px-3 py-2 rounded-lg text-[13px] outline-none" />
              <select value={g.freq} onChange={(e) => updGasto(g.id, { freq: e.target.value })} className="mcc-sans flex-1 px-3 py-2 rounded-lg text-[13px] outline-none" style={fieldStyle}>
                {Object.keys(FREQ_DAYS).map((f) => <option key={f} value={f}>{f}</option>)}
              </select>
            </div>
          </div>
        ))}
      </div>
      <div className="rounded-[26px] p-5" style={{ background: t.ink }}>
        <div className="mcc-sans text-[12.5px] mb-3" style={{ color: "#8FB0FF" }}>Tu costo estimado</div>
        <Row label="Renta" val={renta} t={t} dark />
        {mant && <Row label="Mantenimiento" val={mantMonto} t={t} dark />}
        <Row label="Gastos iniciales" val={initial} t={t} dark />
        <div className="h-px my-3" style={{ background: "rgba(255,255,255,0.15)" }} />
        <Row label="Total mensual" val={monthlyTotal} t={t} dark bold />
        <div className="flex gap-1.5 mt-4 overflow-x-auto mcc-scroll">
          {Object.keys(PERIOD_DAYS).map((p) => (
            <button key={p} onClick={() => setPeriodo(p)} className="mcc-sans text-[11.5px] px-3 py-1.5 rounded-full capitalize whitespace-nowrap" style={{ background: periodo === p ? "#3D6BFF" : "rgba(255,255,255,0.1)", color: "#fff" }}>{p}</button>
          ))}
        </div>
        <div className="mt-3 mcc-serif text-[26px]" style={{ color: "#8FB0FF" }}><Money n={periodTotal} /></div>
        <div className="mcc-sans text-[11.5px]" style={{ color: "rgba(255,255,255,0.5)" }}>estimado por {periodo}</div>
      </div>
      <button onClick={() => exportRentaPDF({ renta, mant, mantMonto, gastos, periodo }, { initial, monthlyTotal, periodTotal })}
        className="mcc-sans w-full py-4 rounded-full font-semibold text-[14.5px] mt-4 flex items-center justify-center gap-2" style={{ background: t.accent, color: t.onAccent }}>
        <IconDownload size={16} /> Exportar cotización PDF
      </button>
    </div>
  );
}

/* ================================================================== */
/*  COTIZA — CASA (motor de hipoteca con reglas oficiales HSBC)         */
/* ================================================================== */
function OfficialBadge({ t, data }) {
  return (
    <div className="rounded-2xl p-3 mb-5 mcc-sans text-[11.5px]" style={{ background: t.accentSoft, color: t.accent }}>
      <div className="flex items-center gap-1.5 font-semibold mb-0.5"><IconSpark size={12} /> Dato oficial HSBC</div>
      Actualizado el {data.actualizado} · vigente al {data.vigencia}.{" "}
      <a href={data.fuente} target="_blank" rel="noreferrer" className="underline">Ver fuente</a>
    </div>
  );
}
function FullAdquisicionCalc({ t, bank }) {
  const d = HSBC_ADQUISICION;
  const [precio, setPrecio] = useState(3500000);
  const [enganchePct, setEnganchePct] = useState(20);
  const [plazo, setPlazo] = useState(20);
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };
  const tasa = enganchePct >= 30 ? d.tasaEnganche30 : d.tasaEnganche0;
  const tasaMin = enganchePct >= 30 ? d.tasaEnganche30Min : d.tasaEnganche0Min;
  const enganche = precio * (enganchePct / 100);
  const monto = precio - enganche;
  const r = tasa / 100 / 12;
  const n = plazo * 12;
  const mensualidad = r > 0 ? (monto * r) / (1 - Math.pow(1 + r, -n)) : monto / n;
  const totalPagado = mensualidad * n;

  const exportar = () => exportBankPDF(bank.name, d.nombre,
    { "Precio de la vivienda": fmtMoney(precio), "Enganche": `${enganchePct}% (${fmtMoney(enganche)})`, "Plazo": `${plazo} años`, "Tasa inicial (oficial HSBC)": `${tasa}%`, "CAT promedio informativo": `${d.catBajo}% – ${d.catFijo}%` },
    { "Monto a financiar": fmtMoney(monto), "Mensualidad estimada": fmtMoney(mensualidad), "Total pagado estimado": fmtMoney(totalPagado) });

  return (
    <div className="px-5 pt-4 pb-28">
      <OfficialBadge t={t} data={d} />
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Precio de la vivienda</label>
      <NumberField value={precio} onChange={setPrecio} style={fieldStyle} className="mcc-sans w-full mt-1.5 mb-4 px-4 py-3.5 rounded-2xl text-[15px] outline-none" />
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Enganche ({enganchePct}%) — financiamiento hasta {d.financiamientoMax}%</label>
      <input type="range" min="5" max="70" value={enganchePct} onChange={(e) => setEnganchePct(Number(e.target.value))} className="w-full mt-2 mb-4" style={{ accentColor: t.accent }} />
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Plazo (años, oficiales HSBC)</label>
      <select value={plazo} onChange={(e) => setPlazo(Number(e.target.value))} className="mcc-sans w-full mt-1.5 mb-4 px-4 py-3.5 rounded-2xl text-[15px] outline-none" style={fieldStyle}>
        {d.plazos.map((y) => <option key={y} value={y}>{y} años</option>)}
      </select>
      <div className="rounded-2xl p-4 mb-5 mcc-sans text-[12.5px]" style={{ background: t.card, border: `1px solid ${t.border}`, color: t.muted }}>
        Tasa inicial aplicable: <b style={{ color: t.text }}>{tasa}%</b> — puede disminuir hasta <b style={{ color: t.good }}>{tasaMin}%</b> reduciendo {d.reduccionAnual} pts cada año con pago puntual.
      </div>
      <div className="rounded-[26px] p-5" style={{ background: t.ink }}>
        <div className="mcc-sans text-[12.5px] mb-3" style={{ color: "#8FB0FF" }}>Estimación de crédito</div>
        <Row label="Enganche" val={enganche} t={t} dark />
        <Row label="Monto a financiar" val={monto} t={t} dark />
        <Row label="Total pagado (estimado)" val={totalPagado} t={t} dark />
        <div className="h-px my-3" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="mcc-sans text-[12px]" style={{ color: "rgba(255,255,255,0.55)" }}>Mensualidad estimada</div>
        <div className="mcc-serif text-[28px]" style={{ color: "#8FB0FF" }}><Money n={mensualidad} /></div>
      </div>
      <button onClick={exportar} className="mcc-sans w-full py-4 rounded-full font-semibold text-[14.5px] mt-4 flex items-center justify-center gap-2" style={{ background: t.accent, color: t.onAccent }}>
        <IconDownload size={16} /> Exportar cotización PDF
      </button>
    </div>
  );
}
function FullConstruyeCalc({ t, bank }) {
  const d = HSBC_CONSTRUYE;
  const [tieneTerreno, setTieneTerreno] = useState(true);
  const [valorTerreno, setValorTerreno] = useState(2000000);
  const [m2, setM2] = useState(250);
  const [costoM2, setCostoM2] = useState(18000);
  const [extras, setExtras] = useState([{ id: 1, nombre: "Arquitecto y permisos", monto: 250000 }, { id: 2, nombre: "Gastos notariales y crédito", monto: 150000 }]);
  const [plazo, setPlazo] = useState(15);
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };

  const construccion = m2 * costoM2;
  const valorTotal = valorTerreno + construccion;
  const cap = valorTotal * (d.topeValorTotal / 100);
  const finConstruccion = Math.min(construccion, cap);
  const finTerreno = tieneTerreno ? 0 : Math.min(valorTerreno * (d.financiamientoTerrenoMax / 100), Math.max(0, cap - finConstruccion));
  const montoFinanciado = finConstruccion + finTerreno;
  const extrasTotal = extras.reduce((s, e) => s + Number(e.monto || 0), 0);
  const aportacion = Math.max(0, valorTotal - montoFinanciado) + extrasTotal;
  const r = d.tasaInicial / 100 / 12, n = plazo * 12;
  const mensualidad = r > 0 ? (montoFinanciado * r) / (1 - Math.pow(1 + r, -n)) : montoFinanciado / n;

  const addExtra = () => setExtras((e) => [...e, { id: Date.now(), nombre: "", monto: 0 }]);
  const updExtra = (id, patch) => setExtras((e) => e.map((x) => (x.id === id ? { ...x, ...patch } : x)));
  const delExtra = (id) => setExtras((e) => e.filter((x) => x.id !== id));

  const exportar = () => exportBankPDF(bank.name, d.nombre,
    { [tieneTerreno ? "Valor del terreno (propio)" : "Costo estimado del terreno"]: fmtMoney(valorTerreno), "m² de construcción": m2, "Costo por m²": fmtMoney(costoM2), "Extras y gastos": fmtMoney(extrasTotal), "Plazo": `${plazo} años`, "Tasa inicial (oficial HSBC)": `${d.tasaInicial}%` },
    { "Costo de construcción": fmtMoney(construccion), "Valor total del proyecto": fmtMoney(valorTotal), "Monto financiado": fmtMoney(montoFinanciado), "Aportación propia (con extras)": fmtMoney(aportacion), "Mensualidad estimada": fmtMoney(mensualidad) });

  return (
    <div className="px-5 pt-4 pb-28">
      <OfficialBadge t={t} data={d} />
      <div className="flex gap-2 mb-5">
        <Pill t={t} active={tieneTerreno} onClick={() => setTieneTerreno(true)}>Tengo terreno</Pill>
        <Pill t={t} active={!tieneTerreno} onClick={() => setTieneTerreno(false)}>No tengo terreno</Pill>
      </div>
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>{tieneTerreno ? "Valor del terreno" : "Costo estimado del terreno"}</label>
      <NumberField value={valorTerreno} onChange={setValorTerreno} style={fieldStyle} className="mcc-sans w-full mt-1.5 mb-4 px-4 py-3.5 rounded-2xl text-[15px] outline-none" />
      <div className="grid grid-cols-2 gap-3 mb-4">
        <div><label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>m² a construir</label>
          <input type="number" value={m2} onChange={(e) => setM2(Number(e.target.value))} className="mcc-sans w-full mt-1.5 px-4 py-3 rounded-2xl text-[15px] outline-none" style={fieldStyle} /></div>
        <div><label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Costo por m² (estimación)</label>
          <NumberField value={costoM2} onChange={setCostoM2} style={fieldStyle} className="mcc-sans w-full mt-1.5 px-4 py-3 rounded-2xl text-[15px] outline-none" /></div>
      </div>
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Plazo (años, oficiales HSBC)</label>
      <select value={plazo} onChange={(e) => setPlazo(Number(e.target.value))} className="mcc-sans w-full mt-1.5 mb-4 px-4 py-3.5 rounded-2xl text-[15px] outline-none" style={fieldStyle}>
        {d.plazos.map((y) => <option key={y} value={y}>{y} años</option>)}
      </select>

      <div className="flex items-center justify-between mb-3">
        <span className="mcc-sans text-[14px] font-medium" style={{ color: t.text }}>Gastos extra (estimaciones tuyas)</span>
        <button onClick={addExtra} className="mcc-sans text-[12.5px] font-semibold flex items-center gap-1" style={{ color: t.accent }}><IconPlus size={14} /> Agregar</button>
      </div>
      <div className="flex flex-col gap-2 mb-5">
        {extras.map((e) => (
          <div key={e.id} className="rounded-2xl p-3 flex gap-2 items-center" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <input value={e.nombre} onChange={(ev) => updExtra(e.id, { nombre: ev.target.value })} placeholder="Ej. Arquitecto" className="mcc-sans flex-1 px-3 py-2 rounded-lg text-[13px] outline-none" style={fieldStyle} />
            <NumberField value={e.monto} onChange={(v) => updExtra(e.id, { monto: v })} style={fieldStyle} className="mcc-sans w-28 px-3 py-2 rounded-lg text-[13px] outline-none" />
            <button onClick={() => delExtra(e.id)}><IconTrash size={16} color={t.danger} /></button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl p-4 mb-5" style={{ background: t.card, border: `1px solid ${t.border}` }}>
        <div className="mcc-sans text-[13px] font-semibold mb-2" style={{ color: t.text }}>¿En qué se va tu presupuesto?</div>
        {[["Terreno", valorTerreno], ["Construcción", construccion], ["Extras", extrasTotal]].map(([label, val]) => (
          <div key={label} className="mb-2">
            <div className="flex justify-between mcc-sans text-[12px] mb-1" style={{ color: t.muted }}><span>{label}</span><span><Money n={val} /></span></div>
            <div className="h-2 rounded-full overflow-hidden" style={{ background: t.bgSoft }}>
              <div className="h-full rounded-full" style={{ width: `${Math.min(100, (val / (valorTotal + extrasTotal || 1)) * 100)}%`, background: t.accent }} />
            </div>
          </div>
        ))}
      </div>

      <div className="rounded-[26px] p-5" style={{ background: t.ink }}>
        <div className="mcc-sans text-[12.5px] mb-3" style={{ color: "#8FB0FF" }}>Estimación de crédito</div>
        <Row label="Valor total del proyecto" val={valorTotal} t={t} dark />
        <Row label="Monto financiado" val={montoFinanciado} t={t} dark />
        <Row label="Aportación propia (con extras)" val={aportacion} t={t} dark />
        <div className="h-px my-3" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="mcc-sans text-[12px]" style={{ color: "rgba(255,255,255,0.55)" }}>Mensualidad estimada (etapa construcción: solo intereses)</div>
        <div className="mcc-serif text-[26px]" style={{ color: "#8FB0FF" }}><Money n={mensualidad} /></div>
      </div>
      <button onClick={exportar} className="mcc-sans w-full py-4 rounded-full font-semibold text-[14.5px] mt-4 flex items-center justify-center gap-2" style={{ background: t.accent, color: t.onAccent }}>
        <IconDownload size={16} /> Exportar cotización PDF
      </button>
    </div>
  );
}
function CasaCalc({ t }) {
  const [bank, setBank] = useState(null);
  const [product, setProduct] = useState(null);
  if (!bank) {
    return (
      <div className="px-5 pt-4 pb-28">
        <p className="mcc-sans text-[13px] mb-5" style={{ color: t.muted }}>Elige un banco para ver sus productos.</p>
        <div className="flex flex-col gap-3">
          {BANKS.map((b) => (
            <button key={b.id} disabled={!b.active} onClick={() => setBank(b)} className="text-left rounded-2xl p-4 flex items-center gap-4" style={{ background: t.card, border: `1px solid ${t.border}`, opacity: b.active ? 1 : 0.45 }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mcc-sans font-bold text-[13px]" style={{ background: b.color }}>{b.name.slice(0, 2)}</div>
              <div className="flex-1"><div className="mcc-sans text-[14.5px] font-semibold" style={{ color: t.text }}>{b.name}</div><div className="mcc-sans text-[12px]" style={{ color: t.muted }}>{b.desc}</div></div>
              {b.active && <IconChevronR size={16} color={t.muted} />}
            </button>
          ))}
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="px-5 pt-4 pb-28">
        <button onClick={() => setBank(null)} className="flex items-center gap-1 mb-4 mcc-sans text-[13px]" style={{ color: t.muted }}><IconChevronL size={16} /> Bancos</button>
        <h1 className="mcc-serif text-[20px] mb-5" style={{ color: t.text }}>Productos {bank.name}</h1>
        <div className="flex flex-col gap-3">
          {PRODUCTS.map((p) => (
            <button key={p.id} onClick={() => setProduct(p)} className="text-left rounded-2xl p-4 flex items-center gap-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: t.accentSoft }}><p.icon size={18} color={t.accent} /></div>
              <div className="flex-1"><div className="mcc-sans text-[14.5px] font-semibold" style={{ color: t.text }}>{p.name}</div><div className="mcc-sans text-[12px]" style={{ color: t.muted }}>{p.desc}</div></div>
              <IconChevronR size={16} color={t.muted} />
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="px-5 pt-4"><button onClick={() => setProduct(null)} className="flex items-center gap-1 mb-2 mcc-sans text-[13px]" style={{ color: t.muted }}><IconChevronL size={16} /> Productos</button>
        <h1 className="mcc-serif text-[19px]" style={{ color: t.text }}>{bank.name} · {product.name}</h1></div>
      {product.id === "adquisicion" && <FullAdquisicionCalc t={t} bank={bank} />}
      {product.id === "construye" && <FullConstruyeCalc t={t} bank={bank} />}
      {product.id === "hipoteca" && (
        <div className="px-5 pt-6"><EmptyState t={t} icon={IconLandmark} title="Próximamente" body="Full Hipoteca (liquidez con garantía hipotecaria) estará disponible en una próxima actualización." /></div>
      )}
    </div>
  );
}
function CotizaScreen({ t, sub, setSub, onMenu }) {
  return (
    <div className="pb-2">
      <TopBar t={t} onMenu={onMenu} title="Cotiza" />
      <div className="px-5 pt-4 flex gap-2">
        <Pill t={t} active={sub === "renta"} onClick={() => setSub("renta")}>Renta</Pill>
        <Pill t={t} active={sub === "casa"} onClick={() => setSub("casa")}>Casa</Pill>
      </div>
      {sub === "renta" ? <RentaCalc t={t} /> : <CasaCalc t={t} />}
    </div>
  );
}

/* ================================================================== */
/*  COMPARAR                                                            */
/* ================================================================== */
function CompararScreen({ t, onMenu, properties, go }) {
  if (properties.length < 2) {
    return (
      <div className="pb-28">
        <TopBar t={t} onMenu={onMenu} title="Comparar" />
        <EmptyState t={t} icon={IconChart} title="Necesitas al menos 2 casas" body="Agrega otra propiedad para poder comparar precio, tamaño y características." actionLabel="+ Agregar casa" onAction={() => go("add")} />
      </div>
    );
  }
  return <CompararInner t={t} onMenu={onMenu} properties={properties} />;
}
function CompararInner({ t, onMenu, properties }) {
  const [a, setA] = useState(properties[0].id);
  const [b, setB] = useState(properties[1].id);
  const pa = properties.find((p) => p.id === a) || properties[0];
  const pb = properties.find((p) => p.id === b) || properties[1];
  const rows = [["Precio", (p) => fmtMoney(p.price)], ["Recámaras", (p) => p.beds || 0], ["Baños", (p) => p.baths || 0], ["Estacionamientos", (p) => p.parking || 0], ["m² construcción", (p) => p.m2Construccion || "-"], ["Zona", (p) => p.zone || "-"]];
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Comparar" />
      <div className="px-5 pt-4">
        <div className="flex gap-3 mb-5">
          <select value={a} onChange={(e) => setA(Number(e.target.value))} className="mcc-sans flex-1 px-3 py-3 rounded-xl text-[13px] outline-none" style={fieldStyle}>
            {properties.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <select value={b} onChange={(e) => setB(Number(e.target.value))} className="mcc-sans flex-1 px-3 py-3 rounded-xl text-[13px] outline-none" style={fieldStyle}>
            {properties.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div className="rounded-[22px] overflow-hidden" style={{ border: `1px solid ${t.border}` }}>
          <div className="grid grid-cols-2">{[pa, pb].map((p, idx) => p.img ? <img key={idx} src={p.img} className="h-28 w-full object-cover" /> : <div key={idx} className="h-28 w-full flex items-center justify-center" style={{ background: t.bgSoft }}><IconBuilding size={20} color={t.muted} /></div>)}</div>
          {rows.map(([label, fn], i) => (
            <div key={label} className="grid grid-cols-2" style={{ background: i % 2 ? t.bgSoft : t.card }}>
              <div className="px-4 py-3 mcc-sans text-[13px] border-r" style={{ color: t.text, borderColor: t.border }}><span className="block text-[10.5px] uppercase tracking-wide mb-0.5" style={{ color: t.muted }}>{label}</span>{fn(pa)}</div>
              <div className="px-4 py-3 mcc-sans text-[13px]" style={{ color: t.text }}><span className="block text-[10.5px] uppercase tracking-wide mb-0.5" style={{ color: t.muted }}>{label}</span>{fn(pb)}</div>
            </div>
          ))}
        </div>
        {pa.op === "Renta" && pb.op === "Renta" && (
          <div className="mt-4 rounded-2xl p-4 mcc-sans text-[13px]" style={{ background: t.accentSoft, color: t.accent }}>Diferencia mensual: <b>{fmtMoney(Math.abs(pa.price - pb.price))}</b></div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PERFIL Y AJUSTES (con subpantallas funcionales)                     */
/* ================================================================== */
function PerfilHome({ t, name, dark, setDark, onMenu, goSub }) {
  const items = [
    { id: "preferencias", label: "Preferencias", icon: IconUser },
    { id: "personalizacion", label: "Personalización", icon: IconSpark },
    { id: "datos", label: "Datos y sincronización", icon: IconDownload },
    { id: "cuenta", label: "Cuenta", icon: IconLogOut },
  ];
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Perfil" />
      <div className="px-5 pt-4">
        <div className="flex items-center gap-4 mb-6 rounded-2xl p-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mcc-serif text-[20px]" style={{ background: t.accent, color: t.onAccent }}>{name?.[0]?.toUpperCase() || "?"}</div>
          <div><div className="mcc-sans text-[15px] font-semibold" style={{ color: t.text }}>{name}</div><div className="mcc-sans text-[12px]" style={{ color: t.muted }}>Cuenta personal</div></div>
        </div>
        <button onClick={() => setDark(!dark)} className="w-full flex items-center justify-between rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <span className="flex items-center gap-3 mcc-sans text-[14px]" style={{ color: t.text }}>{dark ? <IconMoon size={16} /> : <IconSun size={16} />} Apariencia</span>
          <span className="mcc-sans text-[12.5px]" style={{ color: t.muted }}>{dark ? "Oscuro" : "Claro"}</span>
        </button>
        {items.map((it) => (
          <button key={it.id} onClick={() => goSub(it.id)} className="w-full flex items-center justify-between rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <span className="flex items-center gap-3 mcc-sans text-[14px]" style={{ color: t.text }}><it.icon size={16} color={t.muted} /> {it.label}</span>
            <IconChevronR size={16} color={t.muted} />
          </button>
        ))}
      </div>
    </div>
  );
}
function PerfilPreferencias({ t, name, setName, onBack }) {
  const [val, setVal] = useState(name);
  return (
    <div className="pb-28">
      <TopBar t={t} onBack={onBack} title="Preferencias" />
      <div className="px-5 pt-6">
        <Field label="Tu nombre o apodo" t={t}><input value={val} onChange={(e) => setVal(e.target.value)} className="mcc-sans w-full px-4 py-3.5 rounded-2xl text-[15px] outline-none" style={{ background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text }} /></Field>
        <button onClick={() => { setName(val.trim() || name); onBack(); }} className="mcc-sans w-full py-4 rounded-full font-semibold text-[14.5px]" style={{ background: t.accent, color: t.onAccent }}>Guardar</button>
      </div>
    </div>
  );
}
function PerfilPersonalizacion({ t, accent, setAccent, dark, setDark, onBack }) {
  return (
    <div className="pb-28">
      <TopBar t={t} onBack={onBack} title="Personalización" />
      <div className="px-5 pt-6">
        <div className="mcc-sans text-[13px] font-semibold mb-3" style={{ color: t.text }}>Color de la app</div>
        <div className="grid grid-cols-3 gap-3 mb-6">
          {ACCENTS.map((a) => (
            <button key={a.id} onClick={() => setAccent(a.value)} className="rounded-2xl p-3 flex flex-col items-center gap-2" style={{ background: t.card, border: `2px solid ${accent === a.value ? a.value : t.border}` }}>
              <div className="w-8 h-8 rounded-full flex items-center justify-center" style={{ background: a.value }}>{accent === a.value && <IconCheck size={14} color="#fff" />}</div>
              <span className="mcc-sans text-[11.5px]" style={{ color: t.text }}>{a.name}</span>
            </button>
          ))}
        </div>
        <button onClick={() => setDark(!dark)} className="w-full flex items-center justify-between rounded-2xl p-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <span className="flex items-center gap-3 mcc-sans text-[14px]" style={{ color: t.text }}>{dark ? <IconMoon size={16} /> : <IconSun size={16} />} Modo {dark ? "oscuro" : "claro"}</span>
          <div className="w-11 h-6 rounded-full p-0.5 flex" style={{ background: dark ? t.accent : t.border }}><div className="w-5 h-5 rounded-full bg-white transition-all" style={{ marginLeft: dark ? "auto" : 0 }} /></div>
        </button>
      </div>
    </div>
  );
}
function PerfilDatos({ t, properties, name, onBack, onImport, onWipe }) {
  const doExport = () => {
    const blob = new Blob([JSON.stringify({ name, properties, exportedAt: new Date().toISOString() }, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a"); a.href = url; a.download = "mejor-cotiza-casa-backup.json"; a.click(); URL.revokeObjectURL(url);
  };
  const fileRef = useRef(null);
  const handleImport = async (e) => {
    const f = e.target.files?.[0]; if (!f) return;
    try { const text = await f.text(); const data = JSON.parse(text); onImport(data); alert("Datos importados correctamente."); }
    catch { alert("El archivo no es un respaldo válido."); }
  };
  return (
    <div className="pb-28">
      <TopBar t={t} onBack={onBack} title="Datos y sincronización" />
      <div className="px-5 pt-6">
        <p className="mcc-sans text-[13px] mb-5" style={{ color: t.muted }}>Tu información se guarda en este dispositivo. Puedes exportarla como respaldo o pasarla a otro dispositivo importando el archivo.</p>
        <button onClick={doExport} className="w-full flex items-center gap-3 rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}><IconDownload size={16} color={t.accent} /><span className="mcc-sans text-[14px]" style={{ color: t.text }}>Exportar copia de seguridad (.json)</span></button>
        <button onClick={() => fileRef.current?.click()} className="w-full flex items-center gap-3 rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}><IconUpload size={16} color={t.accent} /><span className="mcc-sans text-[14px]" style={{ color: t.text }}>Importar copia de seguridad</span></button>
        <input ref={fileRef} type="file" accept="application/json" className="hidden" onChange={handleImport} />
        <button onClick={onWipe} className="w-full flex items-center gap-3 rounded-2xl p-4" style={{ background: t.card, border: `1px solid ${t.border}` }}><IconTrash size={16} color={t.danger} /><span className="mcc-sans text-[14px]" style={{ color: t.danger }}>Borrar todos mis datos</span></button>
      </div>
    </div>
  );
}
function PerfilCuenta({ t, onBack, onLogout }) {
  return (
    <div className="pb-28">
      <TopBar t={t} onBack={onBack} title="Cuenta" />
      <div className="px-5 pt-6">
        <p className="mcc-sans text-[13px] mb-5" style={{ color: t.muted }}>Esta es una cuenta personal guardada en este dispositivo (sin nube todavía).</p>
        <button onClick={onLogout} className="w-full flex items-center justify-center gap-2 rounded-full py-4 mcc-sans text-[14.5px] font-semibold" style={{ background: t.danger, color: "#fff" }}>
          <IconLogOut size={16} /> Cerrar sesión y borrar datos locales
        </button>
      </div>
    </div>
  );
}
function PerfilScreen(props) {
  const [sub, setSub] = useState(null);
  const back = () => setSub(null);
  if (sub === "preferencias") return <PerfilPreferencias t={props.t} name={props.name} setName={props.setName} onBack={back} />;
  if (sub === "personalizacion") return <PerfilPersonalizacion t={props.t} accent={props.accent} setAccent={props.setAccent} dark={props.dark} setDark={props.setDark} onBack={back} />;
  if (sub === "datos") return <PerfilDatos t={props.t} properties={props.properties} name={props.name} onBack={back} onImport={props.onImport} onWipe={props.onWipe} />;
  if (sub === "cuenta") return <PerfilCuenta t={props.t} onBack={back} onLogout={props.onLogout} />;
  return <PerfilHome t={props.t} name={props.name} dark={props.dark} setDark={props.setDark} onMenu={props.onMenu} goSub={setSub} />;
}

/* ================================================================== */
/*  NAV INFERIOR                                                        */
/* ================================================================== */
const TABS = [
  { id: "home", icon: IconHome },
  { id: "casas", icon: IconSearch },
  { id: "cotiza", icon: IconCalc },
  { id: "comparar", icon: IconChart },
  { id: "perfil", icon: IconGear },
];
function BottomNav({ t, tab, setTab }) {
  return (
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3 px-6 z-10">
      {TABS.map((tb) => {
        const active = tab === tb.id;
        return (
          <button key={tb.id} onClick={() => setTab(tb.id)} className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md" style={{ background: active ? t.accent : t.card, border: `1px solid ${active ? t.accent : t.border}` }}>
            <tb.icon size={18} color={active ? t.onAccent : t.muted} />
          </button>
        );
      })}
    </div>
  );
}

/* ================================================================== */
/*  APP                                                                 */
/* ================================================================== */
export default function App() {
  const [stage, setStage] = useStored("mcc_stage", "name");
  const [name, setName] = useStored("mcc_name", "");
  const [tab, setTab] = useState("home");
  const [cotizaSub, setCotizaSub] = useState("renta");
  const [dark, setDark] = useStored("mcc_dark", false);
  const [accent, setAccent] = useStored("mcc_accent", ACCENTS[0].value);
  const [menuOpen, setMenuOpen] = useState(false);
  const [properties, setProperties] = useStored("mcc_properties", []);
  const [selectedId, setSelectedId] = useState(null);
  const [editingProperty, setEditingProperty] = useState(null);
  const t = buildTheme(dark, accent);

  const go = (tabId, sub) => { setTab(tabId); if (sub) setCotizaSub(sub); };
  const openProperty = (id) => { setSelectedId(id); setTab("detail"); };
  const toggleFav = (id) => setProperties((ps) => ps.map((p) => (p.id === id ? { ...p, fav: !p.fav } : p)));
  const saveProperty = (p) => {
    if (p.id) setProperties((ps) => ps.map((x) => (x.id === p.id ? p : x)));
    else setProperties((ps) => [...ps, { ...p, id: Date.now() }]);
    setEditingProperty(null);
    setTab("casas");
  };
  const deleteProperty = (id) => {
    if (!confirm("¿Eliminar esta propiedad? Esta acción no se puede deshacer.")) return;
    setProperties((ps) => ps.filter((p) => p.id !== id));
    setTab("casas");
  };
  const handleImport = (data) => {
    if (data.name) setName(data.name);
    if (Array.isArray(data.properties)) setProperties(data.properties);
  };
  const handleWipe = () => {
    if (!confirm("Esto borrará todas tus casas y ajustes en este dispositivo. ¿Continuar?")) return;
    setProperties([]); setAccent(ACCENTS[0].value); setDark(false);
  };
  const handleLogout = () => {
    if (!confirm("Se cerrará la sesión y se borrarán los datos guardados en este dispositivo. ¿Continuar?")) return;
    localStorage.clear();
    setProperties([]); setName(""); setAccent(ACCENTS[0].value); setDark(false); setTab("home"); setStage("name");
  };

  const selected = properties.find((p) => p.id === selectedId);

  let body;
  if (tab === "home") body = <HomeScreen t={t} name={name} go={go} onMenu={() => setMenuOpen(true)} properties={properties} toggleFav={toggleFav} openProperty={openProperty} />;
  else if (tab === "casas") body = <CasasScreen t={t} onMenu={() => setMenuOpen(true)} properties={properties} toggleFav={toggleFav} openProperty={openProperty} go={go} />;
  else if (tab === "add") body = <AddPropertyScreen t={t} initial={editingProperty} onSave={saveProperty} onCancel={() => { setEditingProperty(null); setTab(editingProperty ? "detail" : "casas"); }} />;
  else if (tab === "detail" && selected) body = <PropertyDetailScreen t={t} p={selected} onBack={() => setTab("casas")} onEdit={(p) => { setEditingProperty(p); setTab("add"); }} onDelete={deleteProperty} onFav={toggleFav} />;
  else if (tab === "cotiza") body = <CotizaScreen t={t} sub={cotizaSub} setSub={setCotizaSub} onMenu={() => setMenuOpen(true)} />;
  else if (tab === "comparar") body = <CompararScreen t={t} onMenu={() => setMenuOpen(true)} properties={properties} go={go} />;
  else if (tab === "perfil") body = <PerfilScreen t={t} name={name} setName={setName} dark={dark} setDark={setDark} accent={accent} setAccent={setAccent} onMenu={() => setMenuOpen(true)} properties={properties} onImport={handleImport} onWipe={handleWipe} onLogout={handleLogout} />;
  else body = <HomeScreen t={t} name={name} go={go} onMenu={() => setMenuOpen(true)} properties={properties} toggleFav={toggleFav} openProperty={openProperty} />;

  const showBottomNav = ["home", "casas", "cotiza", "comparar", "perfil"].includes(tab);

  return (
    <div className="w-full flex items-center justify-center" style={{ background: dark ? "#05070E" : "#E7EBF5", minHeight: "100vh" }}>
      <div className="relative w-full max-w-[430px] min-h-screen sm:min-h-[800px] sm:my-6 sm:rounded-[36px] overflow-hidden sm:shadow-2xl" style={{ background: t.bg }}>
        {stage === "name" && <NameScreen t={t} onNext={(n) => { setName(n); setStage("intro"); }} />}
        {stage === "intro" && <IntroScreen t={t} onDone={() => setStage("app")} />}
        {stage === "app" && (
          <div className="relative">
            {body}
            {showBottomNav && <BottomNav t={t} tab={tab} setTab={(id) => { setSelectedId(null); setEditingProperty(null); setTab(id); }} />}
            <SideDrawer open={menuOpen} onClose={() => setMenuOpen(false)} t={t} name={name} dark={dark} setDark={setDark} tab={tab} setTab={setTab} />
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
