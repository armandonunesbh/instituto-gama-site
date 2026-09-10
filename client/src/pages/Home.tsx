import { useState } from "react";
import {
  ArrowUpRight,
  BookOpen,
  Check,
  ChevronDown,
  Clock3,
  Instagram,
  Menu,
  MapPin,
  MessageCircle,
  Sparkles,
  Users,
  X,
} from "lucide-react";

const visitUrl = "https://forms.gle/AM4voshNxN4ytnPz5";

const segments = [
  {
    number: "01",
    title: "Educação Infantil",
    description:
      "Um começo cheio de descobertas, vínculo e autonomia para cada criança aprender brincando.",
    items: ["Maternal 3", "1º período", "2º período"],
    color: "bg-[#F8E6C4]",
  },
  {
    number: "02",
    title: "Fundamental I",
    description:
      "Base sólida para desenvolver curiosidade, repertório e confiança em cada nova etapa.",
    items: ["1º ao 5º ano", "Projetos autorais", "Acompanhamento próximo"],
    color: "bg-[#DCEBE4]",
  },
  {
    number: "03",
    title: "Fundamental II",
    description:
      "Conhecimento, pensamento crítico e protagonismo para os desafios do mundo contemporâneo.",
    items: ["6º ao 9º ano", "Interdisciplinaridade", "Preparação para o futuro"],
    color: "bg-[#E6E0F1]",
  },
];

const pillars = [
  ["01", "Acolhimento", "Relações de confiança para que cada estudante se sinta visto, ouvido e capaz."],
  ["02", "Autonomia", "Espaço para experimentar, fazer escolhas e se tornar protagonista do próprio caminho."],
  ["03", "Aprendizagem viva", "Conhecimento conectado à vida, com projetos, investigação e muita mão na massa."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <main className="min-h-screen overflow-hidden bg-[#F7F5F0] text-[#173E42] selection:bg-[#F2B94B] selection:text-[#173E42]">
      <header className="absolute left-0 top-0 z-30 w-full text-white">
        <div className="mx-auto flex max-w-[1280px] items-center justify-between px-5 py-6 sm:px-8 lg:px-12">
          <a href="#inicio" className="group flex items-center gap-3" onClick={closeMenu}>
            <span className="grid h-11 w-11 place-items-center rounded-full bg-[#F2B94B] text-[#173E42] shadow-lg shadow-black/10 transition-transform duration-200 group-hover:rotate-6">
              <Sparkles size={21} strokeWidth={2.5} />
            </span>
            <span className="leading-[0.9]">
              <span className="block font-display text-[1.35rem] font-semibold tracking-[-0.04em]">Instituto</span>
              <span className="block text-[0.65rem] font-semibold uppercase tracking-[0.24em] text-white/70">Gama de Ensino</span>
            </span>
          </a>

          <nav className="hidden items-center gap-8 text-sm font-medium lg:flex">
            <a className="nav-link" href="#sobre">Nossa essência</a>
            <a className="nav-link" href="#segmentos">Segmentos</a>
            <a className="nav-link" href="#visita">Visite a escola</a>
            <a className="nav-link" href="#contato">Contato</a>
          </nav>

          <a href={visitUrl} target="_blank" rel="noreferrer" className="hidden items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-bold text-[#173E42] transition hover:-translate-y-0.5 hover:bg-[#F2B94B] sm:flex">
            Agende uma visita <ArrowUpRight size={16} />
          </a>

          <button aria-label={menuOpen ? "Fechar menu" : "Abrir menu"} className="rounded-full border border-white/30 p-2 lg:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
        {menuOpen && (
          <div className="mx-4 rounded-3xl border border-white/20 bg-[#173E42]/95 p-5 shadow-2xl backdrop-blur-xl lg:hidden">
            <div className="flex flex-col gap-4 text-base font-medium">
              <a href="#sobre" onClick={closeMenu}>Nossa essência</a>
              <a href="#segmentos" onClick={closeMenu}>Segmentos</a>
              <a href="#visita" onClick={closeMenu}>Visite a escola</a>
              <a href="#contato" onClick={closeMenu}>Contato</a>
              <a href={visitUrl} target="_blank" rel="noreferrer" className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[#F2B94B] px-5 py-3 font-bold text-[#173E42]">Agende uma visita <ArrowUpRight size={16} /></a>
            </div>
          </div>
        )}
      </header>

      <section id="inicio" className="relative flex min-h-[720px] items-end overflow-hidden bg-[#0D383D] pb-16 pt-32 sm:min-h-[780px] lg:pb-24">
        <img src="/manus-storage/instituto-gama-hero_5f4487b0.jpg" alt="Crianças aprendendo juntas em uma sala de aula" className="absolute inset-0 h-full w-full object-cover object-center opacity-75" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0D383D] via-[#0D383D]/85 to-[#0D383D]/10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0D383D]/70 via-transparent to-[#0D383D]/30" />
        <div className="absolute -right-20 top-36 hidden h-72 w-72 rounded-full border border-white/10 lg:block" />
        <div className="relative z-10 mx-auto w-full max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="max-w-3xl animate-fade-up">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/25 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.2em] text-[#F8E6C4] backdrop-blur-sm">
              <span className="h-2 w-2 rounded-full bg-[#F2B94B]" /> Matrículas abertas para 2026
            </div>
            <h1 className="max-w-3xl font-display text-[3.8rem] font-medium leading-[0.94] tracking-[-0.065em] text-white sm:text-[5.4rem] lg:text-[6.8rem]">
              O futuro começa<br /><em className="font-serif font-normal text-[#F2B94B]">aqui.</em>
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-white/80 sm:text-xl">Uma escola que acolhe o presente, desperta a curiosidade e prepara cada estudante para criar o seu próprio caminho.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a href={visitUrl} target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 rounded-full bg-[#F2B94B] px-6 py-4 font-bold text-[#173E42] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#F2B94B]/20">Quero conhecer o Gama <ArrowUpRight size={18} /></a>
              <a href="#sobre" className="inline-flex items-center justify-center gap-2 rounded-full border border-white/35 px-6 py-4 font-semibold text-white transition hover:border-white hover:bg-white/10">Descubra nossa essência <ChevronDown size={17} /></a>
            </div>
          </div>
          <div className="mt-16 flex flex-wrap items-center gap-x-8 gap-y-3 border-t border-white/20 pt-5 text-sm text-white/70 sm:mt-24">
            <span className="flex items-center gap-2"><MapPin size={16} className="text-[#F2B94B]" /> Alípio de Melo · Belo Horizonte</span>
            <span className="hidden h-1 w-1 rounded-full bg-white/40 sm:block" />
            <span className="flex items-center gap-2"><Clock3 size={16} className="text-[#F2B94B]" /> Visitas agendadas · seg a sex, 17h30</span>
          </div>
        </div>
      </section>

      <section id="sobre" className="relative bg-[#F7F5F0] py-24 sm:py-32">
        <div className="mx-auto grid max-w-[1280px] gap-14 px-5 sm:px-8 lg:grid-cols-[0.82fr_1.18fr] lg:gap-24 lg:px-12">
          <div>
            <p className="eyebrow">Nossa essência</p>
            <h2 className="mt-5 max-w-md font-display text-4xl font-medium leading-[1.02] tracking-[-0.05em] text-[#173E42] sm:text-5xl">Educar é cultivar possibilidades.</h2>
            <div className="mt-9 h-px w-20 bg-[#F2B94B]" />
          </div>
          <div className="max-w-2xl lg:pt-8">
            <p className="text-2xl font-medium leading-snug text-[#173E42] sm:text-3xl">No Gama, cada criança é convidada a descobrir o mundo com olhos atentos, perguntas corajosas e a certeza de que pode ir além.</p>
            <p className="mt-7 text-base leading-relaxed text-[#567174]">Somos uma comunidade de aprendizagem que combina intencionalidade pedagógica, relações próximas e experiências que fazem sentido. Aqui, conhecimento e afeto caminham juntos para formar pessoas curiosas, autônomas e prontas para transformar o seu entorno.</p>
            <a href="#segmentos" className="mt-8 inline-flex items-center gap-2 font-bold text-[#D27A31] transition hover:gap-3">Conheça nossa proposta <ArrowUpRight size={17} /></a>
          </div>
        </div>
        <div className="mx-auto mt-24 grid max-w-[1280px] gap-px overflow-hidden rounded-[2rem] bg-[#D7E1DC] px-5 sm:grid-cols-3 sm:px-8 lg:px-12">
          {pillars.map(([number, title, text]) => (
            <div key={number} className="group bg-[#F7F5F0] py-8 sm:px-6 sm:py-10 lg:px-8">
              <span className="font-mono text-xs font-bold tracking-[0.2em] text-[#D27A31]">{number}</span>
              <h3 className="mt-10 font-display text-2xl font-semibold tracking-[-0.03em]">{title}</h3>
              <p className="mt-3 max-w-xs text-sm leading-relaxed text-[#567174]">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="segmentos" className="bg-[#E9F0EB] py-24 sm:py-32">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Uma jornada inteira</p>
              <h2 className="mt-5 max-w-xl font-display text-4xl font-medium leading-[1.02] tracking-[-0.05em] sm:text-5xl">Cada fase tem seu tempo. E seu jeito de florescer.</h2>
            </div>
            <p className="max-w-xs text-sm leading-relaxed text-[#567174]">Da primeira descoberta ao pensamento crítico, acompanhamos cada etapa com presença e propósito.</p>
          </div>
          <div className="mt-14 grid gap-4 lg:grid-cols-3">
            {segments.map((segment) => (
              <article key={segment.number} className={`${segment.color} group relative min-h-[380px] overflow-hidden rounded-[2rem] p-7 transition duration-300 hover:-translate-y-2 hover:shadow-xl hover:shadow-[#173E42]/10 sm:p-9`}>
                <div className="flex items-start justify-between"><span className="font-mono text-sm font-bold text-[#173E42]/50">{segment.number}</span><ArrowUpRight className="text-[#173E42]/50 transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" size={22} /></div>
                <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9"><h3 className="max-w-xs font-display text-3xl font-semibold leading-none tracking-[-0.04em]">{segment.title}</h3><p className="mt-4 max-w-sm text-sm leading-relaxed text-[#173E42]/70">{segment.description}</p><div className="mt-6 flex flex-wrap gap-2">{segment.items.map((item) => <span key={item} className="rounded-full bg-white/55 px-3 py-1.5 text-xs font-semibold text-[#173E42]/75">{item}</span>)}</div></div>
              </article>
            ))}
          </div>
          <div className="mt-5 flex items-center gap-3 rounded-2xl bg-[#173E42] px-6 py-5 text-white sm:px-8"><Users size={20} className="text-[#F2B94B]" /><p className="text-sm text-white/80">Também oferecemos <strong className="text-white">período integral e parcial</strong>, com uma rotina pensada para cada família.</p></div>
        </div>
      </section>

      <section id="visita" className="relative overflow-hidden bg-[#173E42] py-24 text-white sm:py-32">
        <div className="absolute -right-20 -top-28 h-96 w-96 rounded-full border border-white/10" /><div className="absolute -bottom-48 -left-20 h-96 w-96 rounded-full border border-white/10" />
        <div className="relative mx-auto grid max-w-[1280px] items-center gap-12 px-5 sm:px-8 lg:grid-cols-[1fr_0.9fr] lg:gap-24 lg:px-12">
          <div><p className="eyebrow text-[#F2B94B]">Venha sentir de perto</p><h2 className="mt-5 max-w-2xl font-display text-5xl font-medium leading-[0.96] tracking-[-0.06em] sm:text-6xl">A escola que você procura pode estar mais perto do que imagina.</h2><p className="mt-7 max-w-lg text-lg leading-relaxed text-white/70">Agende uma visita e conheça nossos espaços, nossa equipe e o jeito Gama de fazer educação.</p><a href={visitUrl} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-full bg-[#F2B94B] px-6 py-4 font-bold text-[#173E42] transition hover:-translate-y-1 hover:shadow-xl hover:shadow-black/20">Agendar minha visita <ArrowUpRight size={18} /></a></div>
          <div className="rounded-[2rem] border border-white/15 bg-white/10 p-7 backdrop-blur-sm sm:p-9"><div className="flex items-center gap-3 text-[#F2B94B]"><BookOpen size={22} /><span className="text-xs font-bold uppercase tracking-[0.2em]">Um convite para conhecer</span></div><p className="mt-7 font-display text-3xl leading-tight tracking-[-0.04em]">“O lugar onde aprender faz os olhos brilharem.”</p><div className="mt-8 h-px bg-white/15"/><div className="mt-6 flex items-start gap-3 text-sm text-white/70"><Clock3 size={18} className="mt-0.5 shrink-0 text-[#F2B94B]"/><span><strong className="text-white">Horário para visitas</strong><br/>Segunda a sexta, às 17h30</span></div></div>
        </div>
      </section>

      <footer id="contato" className="bg-[#F7F5F0] py-14 sm:py-20">
        <div className="mx-auto max-w-[1280px] px-5 sm:px-8 lg:px-12"><div className="grid gap-12 border-b border-[#D7E1DC] pb-12 lg:grid-cols-[1.25fr_0.75fr_0.75fr]">
          <div><div className="flex items-center gap-3"><span className="grid h-10 w-10 place-items-center rounded-full bg-[#173E42] text-[#F2B94B]"><Sparkles size={19}/></span><span className="font-display text-xl font-semibold">Instituto Gama</span></div><p className="mt-5 max-w-sm text-sm leading-relaxed text-[#567174]">Educação que acolhe, inspira e prepara para o mundo. Belo Horizonte, MG.</p></div>
          <div><p className="eyebrow">Fale com a gente</p><a href="mailto:marcia@institutogamabh.com" className="mt-4 block text-sm font-semibold hover:text-[#D27A31]">marcia@institutogamabh.com</a><a href="tel:+553130553804" className="mt-2 block text-sm text-[#567174] hover:text-[#D27A31]">(31) 3055-3804</a></div>
          <div><p className="eyebrow">Encontre a escola</p><p className="mt-4 max-w-[210px] text-sm leading-relaxed text-[#567174]">Avenida dos Engenheiros, 867<br/>Alípio de Melo · Belo Horizonte/MG</p><div className="mt-4 flex gap-3"><a href="https://instagram.com/institutogamabh" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-9 w-9 place-items-center rounded-full bg-[#E9F0EB] text-[#173E42] transition hover:bg-[#F2B94B]"><Instagram size={17}/></a><a href="https://wa.me/553130553804" target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-9 w-9 place-items-center rounded-full bg-[#E9F0EB] text-[#173E42] transition hover:bg-[#F2B94B]"><MessageCircle size={17}/></a></div></div>
        </div><div className="flex flex-col justify-between gap-3 pt-7 text-xs text-[#789091] sm:flex-row"><span>© {new Date().getFullYear()} Instituto Gama de Ensino</span><span>Feito para aprender. Feito para crescer.</span></div></div>
      </footer>
    </main>
  );
}
