import React, { useState, useMemo } from "react";
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
const IconSliders = (p) => <I {...p}><line x1="4" y1="6" x2="20" y2="6" /><circle cx="9" cy="6" r="2" fill="currentColor" /><line x1="4" y1="12" x2="20" y2="12" /><circle cx="15" cy="12" r="2" fill="currentColor" /><line x1="4" y1="18" x2="20" y2="18" /><circle cx="9" cy="18" r="2" fill="currentColor" /></I>;
const IconBell = (p) => <I {...p}><path d="M18 8.5a6 6 0 10-12 0c0 6.5-2.5 8.5-2.5 8.5h17S18 15 18 8.5z" /><path d="M13.7 20.5a2 2 0 01-3.4 0" /></I>;
const IconMap = (p) => <I {...p}><path d="M9 3l6 2.2L21 3v15l-6 2.2L9 18 3 20V5z" /><line x1="9" y1="3" x2="9" y2="18" /><line x1="15" y1="5.2" x2="15" y2="20.2" /></I>;
const IconGear = (p) => <I {...p}><circle cx="12" cy="12" r="3" /><path d="M19.4 13a7.6 7.6 0 000-2l2-1.5-2-3.4-2.3.9a7.6 7.6 0 00-1.7-1l-.3-2.5h-4l-.3 2.5a7.6 7.6 0 00-1.7 1l-2.3-.9-2 3.4L6.6 11a7.6 7.6 0 000 2l-2 1.5 2 3.4 2.3-.9a7.6 7.6 0 001.7 1l.3 2.5h4l.3-2.5a7.6 7.6 0 001.7-1l2.3.9 2-3.4z" /></I>;

/* ================================================================== */
/*  TOKENS DE DISEÑO — tema azul                                       */
/* ================================================================== */
const LIGHT = {
  bg: "#F2F5FB", bgSoft: "#E7EDF9", card: "#FFFFFF", text: "#101A33",
  muted: "#7C8698", border: "#E2E7F2", accent: "#2F5FFF", accentSoft: "#E7EDFF",
  onAccent: "#FFFFFF", ink: "#0E1730", danger: "#D96C56", good: "#3E9B6B", warn: "#D9A441",
};
const DARK = {
  bg: "#0C1120", bgSoft: "#131A2E", card: "#151C31", text: "#F1F4FC",
  muted: "#8A93AC", border: "#232B44", accent: "#5B82FF", accentSoft: "#1C2440",
  onAccent: "#FFFFFF", ink: "#0C1120", danger: "#E0836A", good: "#6FBE93", warn: "#E6BB63",
};

/* ================================================================== */
/*  DATOS DE EJEMPLO                                                    */
/* ================================================================== */
const PROPERTIES = [
  { id: 1, name: "Casa Los Encinos", city: "Querétaro", zone: "Zibatá", price: 25000, op: "Renta", beds: 3, baths: 3, park: 2, m2: 220, fav: true, img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&q=80" },
  { id: 2, name: "Departamento Roma", city: "CDMX", zone: "Roma Norte", price: 4200000, op: "Venta", beds: 2, baths: 2, park: 1, m2: 95, fav: true, img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&q=80" },
  { id: 3, name: "Casa Altozano", city: "Querétaro", zone: "Altozano", price: 7000000, op: "Venta", beds: 4, baths: 4, park: 3, m2: 310, fav: false, img: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?w=900&q=80" },
  { id: 4, name: "Casa Bosques", city: "CDMX", zone: "Bosques de las Lomas", price: 32000, op: "Renta", beds: 3, baths: 3, park: 2, m2: 260, fav: false, img: "https://images.unsplash.com/photo-1568605114967-8130f3a36994?w=900&q=80" },
];
const FREQ_DAYS = { unico: 0, diario: 1, semanal: 7, mensual: 30, trimestral: 91, semestral: 182, anual: 365 };
const PERIOD_DAYS = { dia: 1, semana: 7, mes: 30, trimestre: 91, semestre: 182, año: 365 };

/* ================================================================== */
/*  COMPONENTES BASE                                                    */
/* ================================================================== */
function Money({ n }) {
  return <>{Math.round(n).toLocaleString("es-MX", { style: "currency", currency: "MXN", maximumFractionDigits: 0 })}</>;
}
function Pill({ active, children, onClick, t }) {
  return (
    <button onClick={onClick} className="mcc-sans text-[13px] font-medium px-4 py-2 rounded-full transition-colors whitespace-nowrap"
      style={{ background: active ? t.accent : "transparent", color: active ? t.onAccent : t.muted, border: `1px solid ${active ? t.accent : t.border}` }}>
      {children}
    </button>
  );
}
function SectionTitle({ children, t, action }) {
  return (
    <div className="flex items-center justify-between mb-3">
      <h2 className="mcc-serif text-[19px] font-medium" style={{ color: t.text }}>{children}</h2>
      {action && <button className="mcc-sans text-[12.5px] font-medium" style={{ color: t.accent }}>{action}</button>}
    </div>
  );
}
function Row({ label, val, t, dark, bold }) {
  return (
    <div className="flex items-center justify-between mb-1.5">
      <span className="mcc-sans text-[13.5px]" style={{ color: dark ? "rgba(255,255,255,0.65)" : t.muted }}>{label}</span>
      <span className={`mcc-sans text-[13.5px] ${bold ? "font-semibold" : ""}`} style={{ color: dark ? "#fff" : t.text }}><Money n={val} /></span>
    </div>
  );
}
function PropertyCard({ p, t, wide }) {
  return (
    <div className="rounded-[22px] overflow-hidden flex-shrink-0" style={{ background: t.card, border: `1px solid ${t.border}`, width: wide ? "100%" : 252 }}>
      <div className="relative h-40">
        <img src={p.img} alt={p.name} className="w-full h-full object-cover" />
        <button className="absolute top-3 right-3 w-8 h-8 rounded-full flex items-center justify-center" style={{ background: "rgba(255,255,255,0.9)" }}>
          <IconHeart size={14} color={p.fav ? "#D96C56" : "#101A33"} fill={p.fav ? "#D96C56" : "none"} />
        </button>
        <div className="absolute bottom-3 left-3 px-2.5 py-1 rounded-full mcc-sans text-[11px] font-semibold" style={{ background: "rgba(16,26,51,0.85)", color: "#fff" }}>{p.op}</div>
      </div>
      <div className="p-4">
        <div className="mcc-serif text-[17px] font-medium" style={{ color: t.text }}>{p.name}</div>
        <div className="flex items-center gap-1 mt-1 mcc-sans text-[12.5px]" style={{ color: t.muted }}><IconPin size={12} /> {p.zone}, {p.city}</div>
        <div className="mcc-sans text-[16px] font-semibold mt-2" style={{ color: t.accent }}>
          <Money n={p.price} />{p.op === "Renta" ? <span className="text-[12px] font-normal" style={{ color: t.muted }}> /mes</span> : null}
        </div>
        <div className="flex items-center gap-3 mt-2 mcc-sans text-[12px]" style={{ color: t.muted }}>
          <span className="flex items-center gap-1"><IconBed size={13} />{p.beds}</span>
          <span className="flex items-center gap-1"><IconBath size={13} />{p.baths}</span>
          <span className="flex items-center gap-1"><IconCar size={13} />{p.park}</span>
          <span className="flex items-center gap-1"><IconRuler size={13} />{p.m2}m²</span>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MENÚ LATERAL (hamburguesa)                                          */
/* ================================================================== */
function SideDrawer({ open, onClose, t, name, dark, setDark, tab, setTab }) {
  const items = [
    { id: "home", label: "Inicio", icon: IconHome },
    { id: "casas", label: "Mis casas", icon: IconBuilding },
    { id: "cotiza", label: "Cotiza", icon: IconCalc },
    { id: "comparar", label: "Comparar", icon: IconChart },
    { id: "perfil", label: "Perfil y ajustes", icon: IconUser },
  ];
  return (
    <div className={`absolute inset-0 z-40 transition-opacity ${open ? "pointer-events-auto opacity-100" : "pointer-events-none opacity-0"}`}>
      <div onClick={onClose} className="absolute inset-0" style={{ background: "rgba(8,12,24,0.45)" }} />
      <div className="absolute top-0 left-0 bottom-0 w-[78%] max-w-[280px] flex flex-col p-5 transition-transform duration-300"
        style={{ background: t.card, transform: open ? "translateX(0)" : "translateX(-100%)" }}>
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 rounded-xl flex items-center justify-center text-[16px]" style={{ background: t.accent }}>🏡</div>
            <span className="mcc-serif text-[16px] font-medium" style={{ color: t.text }}>Mejor Cotiza Casa</span>
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
          {items.map((it) => {
            const active = tab === it.id;
            return (
              <button key={it.id} onClick={() => { setTab(it.id); onClose(); }}
                className="flex items-center gap-3 px-3 py-3 rounded-xl text-left"
                style={{ background: active ? t.accentSoft : "transparent" }}>
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

function TopBar({ t, onMenu, title, subtitle }) {
  return (
    <div className="flex items-center justify-between px-5 pt-6 mb-1">
      <button onClick={onMenu} className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: t.card, border: `1px solid ${t.border}` }}>
        <IconMenu size={17} color={t.text} />
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
      <div className="text-[40px] mb-2">👋</div>
      <h1 className="mcc-serif text-[30px] leading-tight font-medium mb-2" style={{ color: t.text }}>¡Hola!</h1>
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
  { icon: IconLandmark, title: "Cotiza tu casa", body: "Explora diferentes opciones hipotecarias y escenarios de compra o construcción." },
  { icon: IconChart, title: "Compara", body: "Compara tus opciones antes de tomar una decisión." },
];
function IntroScreen({ t, onDone }) {
  const [i, setI] = useState(0);
  const Slide = INTRO_SLIDES[i].icon;
  return (
    <div className="h-full flex flex-col px-8 pt-8 pb-10" style={{ background: t.bg }}>
      <div className="flex justify-end">
        <button onClick={onDone} className="mcc-sans text-[13px]" style={{ color: t.muted }}>Saltar introducción</button>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center text-center">
        <div className="w-24 h-24 rounded-[26px] flex items-center justify-center mb-8" style={{ background: t.accentSoft }}>
          <Slide size={36} color={t.accent} />
        </div>
        <h2 className="mcc-serif text-[24px] font-medium mb-3" style={{ color: t.text }}>{INTRO_SLIDES[i].title}</h2>
        <p className="mcc-sans text-[14.5px] leading-relaxed max-w-[260px]" style={{ color: t.muted }}>{INTRO_SLIDES[i].body}</p>
      </div>
      <div className="flex items-center justify-center gap-1.5 mb-8">
        {INTRO_SLIDES.map((_, idx) => <div key={idx} className="rounded-full transition-all" style={{ width: idx === i ? 20 : 6, height: 6, background: idx === i ? t.accent : t.border }} />)}
      </div>
      <button onClick={() => (i < INTRO_SLIDES.length - 1 ? setI(i + 1) : onDone())}
        className="mcc-sans w-full py-4 rounded-full font-semibold text-[15px]" style={{ background: t.accent, color: t.onAccent }}>
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
    <button onClick={onClick} className="text-left rounded-[22px] p-5 flex items-start gap-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
      <div className="w-11 h-11 rounded-2xl flex items-center justify-center flex-shrink-0" style={{ background: t.accentSoft }}>
        <Icon size={19} color={t.accent} />
      </div>
      <div className="flex-1">
        <div className="mcc-sans text-[15px] font-semibold" style={{ color: t.text }}>{title}</div>
        <div className="mcc-sans text-[12.5px] mt-0.5" style={{ color: t.muted }}>{body}</div>
      </div>
      <IconChevronR size={17} style={{ color: t.muted, marginTop: 4 }} />
    </button>
  );
}
function HomeScreen({ t, name, go, onMenu }) {
  const favs = PROPERTIES.filter((p) => p.fav);
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} />
      <div className="px-5 pt-4">
        <div className="mcc-sans text-[13px]" style={{ color: t.muted }}>Hola, {name} 👋</div>
        <h1 className="mcc-serif text-[26px] font-medium mt-1 mb-6" style={{ color: t.text }}>¿Qué estás buscando hoy?</h1>
        <div className="flex flex-col gap-3">
          <ActionCard t={t} icon={IconBuilding} title="Explora casas" body="Encuentra y guarda tus favoritas." onClick={() => go("casas")} />
          <ActionCard t={t} icon={IconCalc} title="Cotiza tu renta" body="Descubre cuánto realmente te costaría." onClick={() => go("cotiza", "renta")} />
          <ActionCard t={t} icon={IconLandmark} title="Cotiza tu casa" body="Calcula compra o construcción." onClick={() => go("cotiza", "casa")} />
        </div>
        <div className="mt-8">
          <SectionTitle t={t} action="Ver todas">Mis favoritas</SectionTitle>
          <div className="flex gap-4 overflow-x-auto mcc-scroll -mx-5 px-5 pb-2">
            {favs.map((p) => <PropertyCard key={p.id} p={p} t={t} />)}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  MIS CASAS                                                           */
/* ================================================================== */
function CasasScreen({ t, onMenu }) {
  const byCity = useMemo(() => { const m = {}; PROPERTIES.forEach((p) => { (m[p.city] = m[p.city] || []).push(p); }); return m; }, []);
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Mis casas" />
      <div className="px-5 pt-4">
        <div className="flex items-center justify-between mb-5">
          <div className="flex-1 flex items-center gap-2 rounded-full px-4 py-2.5" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <IconSearch size={15} color={t.muted} />
            <span className="mcc-sans text-[13px]" style={{ color: t.muted }}>Buscar por ubicación</span>
          </div>
          <button className="w-10 h-10 ml-2 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: t.accent }}>
            <IconPlus size={18} color={t.onAccent} />
          </button>
        </div>
        {Object.entries(byCity).map(([city, list]) => (
          <div key={city} className="mb-7">
            <SectionTitle t={t}>{city}</SectionTitle>
            <div className="flex flex-col gap-4">{list.map((p) => <PropertyCard key={p.id} p={p} t={t} wide />)}</div>
          </div>
        ))}
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
      <h1 className="mcc-serif text-[24px] font-medium mb-1" style={{ color: t.text }}>Cotiza tu renta</h1>
      <p className="mcc-sans text-[13px] mb-6" style={{ color: t.muted }}>Descubre el costo real de rentar una propiedad.</p>
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Renta mensual</label>
      <input type="number" value={renta} onChange={(e) => setRenta(Number(e.target.value))} className="mcc-sans w-full mt-1.5 mb-5 px-4 py-3.5 rounded-2xl text-[16px] outline-none" style={fieldStyle} />
      <div className="rounded-2xl p-4 mb-5" style={{ background: t.card, border: `1px solid ${t.border}` }}>
        <label className="flex items-center justify-between cursor-pointer">
          <span className="mcc-sans text-[14px] font-medium" style={{ color: t.text }}>Incluir mantenimiento</span>
          <input type="checkbox" checked={mant} onChange={(e) => setMant(e.target.checked)} className="w-5 h-5" style={{ accentColor: t.accent }} />
        </label>
        {mant && <input type="number" value={mantMonto} onChange={(e) => setMantMonto(Number(e.target.value))} placeholder="Costo del mantenimiento" className="mcc-sans w-full mt-3 px-4 py-3 rounded-xl text-[14px] outline-none" style={fieldStyle} />}
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
              <input type="number" value={g.monto} onChange={(e) => updGasto(g.id, { monto: e.target.value })} placeholder="Monto" className="mcc-sans w-28 px-3 py-2 rounded-lg text-[13px] outline-none" style={fieldStyle} />
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
        <div className="mt-3 mcc-serif text-[26px] font-medium" style={{ color: "#8FB0FF" }}><Money n={periodTotal} /></div>
        <div className="mcc-sans text-[11.5px]" style={{ color: "rgba(255,255,255,0.5)" }}>estimado por {periodo}</div>
      </div>
    </div>
  );
}

/* ================================================================== */
/*  COTIZA — CASA (hipoteca)                                            */
/* ================================================================== */
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
function CasaCalc({ t }) {
  const [bank, setBank] = useState(null);
  const [product, setProduct] = useState(null);
  const [precio, setPrecio] = useState(3500000);
  const [enganchePct, setEnganchePct] = useState(20);
  const [plazo, setPlazo] = useState(20);
  const [tasa, setTasa] = useState(11.9);
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };
  const enganche = precio * (enganchePct / 100);
  const monto = precio - enganche;
  const r = tasa / 100 / 12;
  const n = plazo * 12;
  const mensualidad = r > 0 ? (monto * r) / (1 - Math.pow(1 + r, -n)) : monto / n;
  if (!bank) {
    return (
      <div className="px-5 pt-6 pb-28">
        <h1 className="mcc-serif text-[24px] font-medium mb-1" style={{ color: t.text }}>Cotiza tu casa</h1>
        <p className="mcc-sans text-[13px] mb-6" style={{ color: t.muted }}>Elige un banco para ver sus productos.</p>
        <div className="flex flex-col gap-3">
          {BANKS.map((b) => (
            <button key={b.id} disabled={!b.active} onClick={() => setBank(b)} className="text-left rounded-2xl p-4 flex items-center gap-4" style={{ background: t.card, border: `1px solid ${t.border}`, opacity: b.active ? 1 : 0.45 }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center text-white mcc-sans font-bold text-[13px]" style={{ background: b.color }}>{b.name.slice(0, 2)}</div>
              <div className="flex-1">
                <div className="mcc-sans text-[14.5px] font-semibold" style={{ color: t.text }}>{b.name}</div>
                <div className="mcc-sans text-[12px]" style={{ color: t.muted }}>{b.desc}</div>
              </div>
              {b.active && <IconChevronR size={16} color={t.muted} />}
            </button>
          ))}
        </div>
      </div>
    );
  }
  if (!product) {
    return (
      <div className="px-5 pt-6 pb-28">
        <button onClick={() => setBank(null)} className="flex items-center gap-1 mb-4 mcc-sans text-[13px]" style={{ color: t.muted }}><IconChevronL size={16} /> Bancos</button>
        <h1 className="mcc-serif text-[22px] font-medium mb-5" style={{ color: t.text }}>Productos {bank.name}</h1>
        <div className="flex flex-col gap-3">
          {PRODUCTS.map((p) => (
            <button key={p.id} onClick={() => setProduct(p)} className="text-left rounded-2xl p-4 flex items-center gap-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
              <div className="w-11 h-11 rounded-xl flex items-center justify-center" style={{ background: t.accentSoft }}><p.icon size={18} color={t.accent} /></div>
              <div className="flex-1">
                <div className="mcc-sans text-[14.5px] font-semibold" style={{ color: t.text }}>{p.name}</div>
                <div className="mcc-sans text-[12px]" style={{ color: t.muted }}>{p.desc}</div>
              </div>
              <IconChevronR size={16} color={t.muted} />
            </button>
          ))}
        </div>
      </div>
    );
  }
  return (
    <div className="px-5 pt-6 pb-28">
      <button onClick={() => setProduct(null)} className="flex items-center gap-1 mb-4 mcc-sans text-[13px]" style={{ color: t.muted }}><IconChevronL size={16} /> Productos</button>
      <h1 className="mcc-serif text-[22px] font-medium mb-1" style={{ color: t.text }}>{bank.name} · {product.name}</h1>
      <div className="flex items-center gap-1.5 mb-6 mcc-sans text-[11.5px] px-2.5 py-1 rounded-full w-fit" style={{ background: t.warn, color: "#3A2B08" }}>
        <IconSpark size={12} /> Tasa de ejemplo — verifica la vigente con el banco
      </div>
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Precio de la vivienda</label>
      <input type="number" value={precio} onChange={(e) => setPrecio(Number(e.target.value))} className="mcc-sans w-full mt-1.5 mb-4 px-4 py-3.5 rounded-2xl text-[15px] outline-none" style={fieldStyle} />
      <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Enganche ({enganchePct}%)</label>
      <input type="range" min="10" max="50" value={enganchePct} onChange={(e) => setEnganchePct(Number(e.target.value))} className="w-full mt-2 mb-4" />
      <div className="grid grid-cols-2 gap-3 mb-6">
        <div>
          <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Plazo (años)</label>
          <input type="number" value={plazo} onChange={(e) => setPlazo(Number(e.target.value))} className="mcc-sans w-full mt-1.5 px-4 py-3 rounded-2xl text-[15px] outline-none" style={fieldStyle} />
        </div>
        <div>
          <label className="mcc-sans text-[12.5px] font-medium" style={{ color: t.muted }}>Tasa anual (%)</label>
          <input type="number" step="0.1" value={tasa} onChange={(e) => setTasa(Number(e.target.value))} className="mcc-sans w-full mt-1.5 px-4 py-3 rounded-2xl text-[15px] outline-none" style={fieldStyle} />
        </div>
      </div>
      <div className="rounded-[26px] p-5" style={{ background: t.ink }}>
        <div className="mcc-sans text-[12.5px] mb-3" style={{ color: "#8FB0FF" }}>Estimación de crédito</div>
        <Row label="Enganche" val={enganche} t={t} dark />
        <Row label="Monto a financiar" val={monto} t={t} dark />
        <div className="h-px my-3" style={{ background: "rgba(255,255,255,0.15)" }} />
        <div className="mcc-sans text-[12px]" style={{ color: "rgba(255,255,255,0.55)" }}>Mensualidad estimada</div>
        <div className="mcc-serif text-[28px] font-medium" style={{ color: "#8FB0FF" }}><Money n={mensualidad} /></div>
      </div>
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
function CompararScreen({ t, onMenu }) {
  const [a, setA] = useState(PROPERTIES[0].id);
  const [b, setB] = useState(PROPERTIES[3].id);
  const pa = PROPERTIES.find((p) => p.id === a);
  const pb = PROPERTIES.find((p) => p.id === b);
  const rows = [["Precio", (p) => <Money n={p.price} />], ["Recámaras", (p) => p.beds], ["Baños", (p) => p.baths], ["Estacionamientos", (p) => p.park], ["m²", (p) => p.m2], ["Zona", (p) => p.zone]];
  const fieldStyle = { background: t.bgSoft, border: `1px solid ${t.border}`, color: t.text };
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Comparar" />
      <div className="px-5 pt-4">
        <p className="mcc-sans text-[13px] mb-5" style={{ color: t.muted }}>Elige dos propiedades para comparar lado a lado.</p>
        <div className="flex gap-3 mb-5">
          <select value={a} onChange={(e) => setA(Number(e.target.value))} className="mcc-sans flex-1 px-3 py-3 rounded-xl text-[13px] outline-none" style={fieldStyle}>
            {PROPERTIES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
          <select value={b} onChange={(e) => setB(Number(e.target.value))} className="mcc-sans flex-1 px-3 py-3 rounded-xl text-[13px] outline-none" style={fieldStyle}>
            {PROPERTIES.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
          </select>
        </div>
        <div className="rounded-[22px] overflow-hidden" style={{ border: `1px solid ${t.border}` }}>
          <div className="grid grid-cols-2">{[pa, pb].map((p, idx) => <img key={idx} src={p.img} className="h-28 w-full object-cover" />)}</div>
          {rows.map(([label, fn], i) => (
            <div key={label} className="grid grid-cols-2" style={{ background: i % 2 ? t.bgSoft : t.card }}>
              <div className="px-4 py-3 mcc-sans text-[13px] border-r" style={{ color: t.text, borderColor: t.border }}>
                <span className="block text-[10.5px] uppercase tracking-wide mb-0.5" style={{ color: t.muted }}>{label}</span>{fn(pa)}
              </div>
              <div className="px-4 py-3 mcc-sans text-[13px]" style={{ color: t.text }}>
                <span className="block text-[10.5px] uppercase tracking-wide mb-0.5" style={{ color: t.muted }}>{label}</span>{fn(pb)}
              </div>
            </div>
          ))}
        </div>
        {pa.op === "Renta" && pb.op === "Renta" && (
          <div className="mt-4 rounded-2xl p-4 mcc-sans text-[13px]" style={{ background: t.accentSoft, color: t.accent }}>
            Diferencia mensual: <b><Money n={Math.abs(pa.price - pb.price)} /></b>
          </div>
        )}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  PERFIL                                                              */
/* ================================================================== */
function PerfilScreen({ t, name, dark, setDark, onMenu }) {
  const items = ["Preferencias", "Personalización", "Datos y sincronización", "Cuenta"];
  return (
    <div className="pb-28">
      <TopBar t={t} onMenu={onMenu} title="Perfil" />
      <div className="px-5 pt-4">
        <div className="flex items-center gap-4 mb-6 rounded-2xl p-4" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <div className="w-14 h-14 rounded-full flex items-center justify-center mcc-serif text-[20px]" style={{ background: t.accent, color: t.onAccent }}>{name?.[0]?.toUpperCase() || "?"}</div>
          <div>
            <div className="mcc-sans text-[15px] font-semibold" style={{ color: t.text }}>{name}</div>
            <div className="mcc-sans text-[12px]" style={{ color: t.muted }}>Cuenta personal</div>
          </div>
        </div>
        <button onClick={() => setDark(!dark)} className="w-full flex items-center justify-between rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}>
          <span className="flex items-center gap-3 mcc-sans text-[14px]" style={{ color: t.text }}>{dark ? <IconMoon size={16} /> : <IconSun size={16} />} Apariencia</span>
          <span className="mcc-sans text-[12.5px]" style={{ color: t.muted }}>{dark ? "Oscuro" : "Claro"}</span>
        </button>
        {items.map((it) => (
          <button key={it} className="w-full flex items-center justify-between rounded-2xl p-4 mb-3" style={{ background: t.card, border: `1px solid ${t.border}` }}>
            <span className="mcc-sans text-[14px]" style={{ color: t.text }}>{it}</span>
            <IconChevronR size={16} color={t.muted} />
          </button>
        ))}
      </div>
    </div>
  );
}

/* ================================================================== */
/*  NAV INFERIOR (círculos flotantes)                                   */
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
    <div className="absolute bottom-5 left-0 right-0 flex items-center justify-center gap-3 px-6">
      {TABS.map((tb) => {
        const active = tab === tb.id;
        return (
          <button key={tb.id} onClick={() => setTab(tb.id)}
            className="w-12 h-12 rounded-full flex items-center justify-center transition-all shadow-md"
            style={{ background: active ? t.accent : t.card, border: `1px solid ${active ? t.accent : t.border}` }}>
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
  const [stage, setStage] = useState("name");
  const [name, setName] = useState("");
  const [tab, setTab] = useState("home");
  const [cotizaSub, setCotizaSub] = useState("renta");
  const [dark, setDark] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const t = dark ? DARK : LIGHT;
  const go = (tabId, sub) => { setTab(tabId); if (sub) setCotizaSub(sub); };

  let body;
  if (tab === "home") body = <HomeScreen t={t} name={name} go={go} onMenu={() => setMenuOpen(true)} />;
  else if (tab === "casas") body = <CasasScreen t={t} onMenu={() => setMenuOpen(true)} />;
  else if (tab === "cotiza") body = <CotizaScreen t={t} sub={cotizaSub} setSub={setCotizaSub} onMenu={() => setMenuOpen(true)} />;
  else if (tab === "comparar") body = <CompararScreen t={t} onMenu={() => setMenuOpen(true)} />;
  else body = <PerfilScreen t={t} name={name} dark={dark} setDark={setDark} onMenu={() => setMenuOpen(true)} />;

  return (
    <div className="w-full flex items-center justify-center" style={{ background: dark ? "#05070E" : "#E7EBF5", minHeight: "100vh" }}>
      <div className="relative w-full max-w-[430px] min-h-screen sm:min-h-[800px] sm:my-6 sm:rounded-[36px] overflow-hidden sm:shadow-2xl" style={{ background: t.bg }}>
        {stage === "name" && <NameScreen t={t} onNext={(n) => { setName(n); setStage("intro"); }} />}
        {stage === "intro" && <IntroScreen t={t} onDone={() => setStage("app")} />}
        {stage === "app" && (
          <div className="relative">
            {body}
            <BottomNav t={t} tab={tab} setTab={setTab} />
            <SideDrawer open={menuOpen} onClose={() => setMenuOpen(false)} t={t} name={name} dark={dark} setDark={setDark} tab={tab} setTab={setTab} />
          </div>
        )}
      </div>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
