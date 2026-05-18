import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import {
  Snowflake,
  Wrench,
  Sparkles,
  ClipboardCheck,
  PackageOpen,
  HardHat,
  ShieldCheck,
  Clock,
  Award,
  Users,
  Phone,
  Mail,
  MapPin,
  Instagram,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
  Menu,
  X,
  Star,
  CheckCircle2,
  ChevronDown,
} from "lucide-react";
import heroAc from "@/assets/hero-ac.jpg";
import heroCommercial from "@/assets/hero-commercial.jpg";
import heroMaintenance from "@/assets/hero-maintenance.jpg";
import aboutTeam from "@/assets/about-team.jpg";
import heroLogo from "@/assets/hero-logo.png";
import notaFiscalBadge from "@/assets/nota-fiscal-badge.jpg";

export const Route = createFileRoute("/")({
  component: Index,
});

const WHATSAPP = "5521973849758";
const WHATSAPP_DISPLAY = "(21) 97384-9758";
const WHATSAPP_2 = "5521990760755";
const WHATSAPP_2_DISPLAY = "(21) 99076-0755";
const WHATSAPP_3 = "5521976235740";
const WHATSAPP_3_DISPLAY = "(21) 97623-5740";
const waLink = (msg: string) =>
  `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(msg)}`;
const waLinkTo = (number: string, msg: string) =>
  `https://wa.me/${number}?text=${encodeURIComponent(msg)}`;

const slides = [
  {
    img: heroLogo,
    eyebrow: "Ideal Clima Refrigeração",
    title: "Excelência em climatização para você",
    subtitle:
      "Tradição, qualidade técnica e atendimento personalizado em Nova Iguaçu/RJ — a marca de confiança em refrigeração.",
    isLogo: true,
  },
  {
    img: heroAc,
    eyebrow: "Instalação Residencial",
    title: "Climatização que transforma seu ambiente",
    subtitle:
      "Instalação profissional de ar-condicionado com qualidade técnica, garantia e atendimento personalizado em Nova Iguaçu/RJ.",
  },
  {
    img: heroMaintenance,
    eyebrow: "Manutenção Preventiva",
    title: "Mais durabilidade, menos surpresas",
    subtitle:
      "Manutenção preventiva e corretiva que evita falhas, reduz o consumo e prolonga a vida útil do seu equipamento.",
  },
  {
    img: heroCommercial,
    eyebrow: "Soluções Comerciais",
    title: "Conforto e desempenho para o seu negócio",
    subtitle:
      "Projetos completos de climatização para escritórios, lojas e ambientes comerciais com acompanhamento próximo.",
  },
];

const services = [
  {
    icon: Snowflake,
    title: "Instalação de Ar-Condicionado",
    desc: "Instalação profissional para residências e comércios, garantindo desempenho máximo e segurança.",
  },
  {
    icon: Wrench,
    title: "Manutenção Preventiva e Corretiva",
    desc: "Evite falhas, aumente a vida útil e mantenha a eficiência do seu sistema com revisões regulares.",
  },
  {
    icon: HardHat,
    title: "Reparo e Conserto",
    desc: "Diagnóstico técnico preciso e atendimento ágil para resolver defeitos com qualidade.",
  },
  {
    icon: Sparkles,
    title: "Limpeza de Filtros e Dutos",
    desc: "Higienização completa para um ar mais saudável e melhor desempenho dos equipamentos.",
  },
  {
    icon: ClipboardCheck,
    title: "Consultoria Especializada",
    desc: "Ajudamos você a escolher o sistema ideal para cada ambiente e necessidade.",
  },
  {
    icon: PackageOpen,
    title: "Desinstalação e Remoção",
    desc: "Remoção segura e organizada, preservando equipamentos e a estrutura do ambiente.",
  },
];

const differentials = [
  { icon: Award, title: "Expertise Especializada", desc: "Profissionais qualificados com domínio técnico em refrigeração." },
  { icon: ShieldCheck, title: "Qualidade Garantida", desc: "Serviços executados com rigor técnico e ética profissional." },
  { icon: Clock, title: "Atendimento Ágil", desc: "Diagnóstico rápido e prazos claros do orçamento à entrega." },
  { icon: Users, title: "Atendimento Personalizado", desc: "Acompanhamento próximo e foco real na sua satisfação." },
  { icon: CheckCircle2, title: "Transparência Total", desc: "Orçamentos claros, sem custos ocultos ou surpresas." },
  { icon: Snowflake, title: "Eficiência Energética", desc: "Soluções que reduzem consumo e prolongam a vida útil." },
];

const testimonials = [
  {
    name: "Carla Mendes",
    role: "Gerente Administrativa, escritório em Nova Iguaçu",
    text: "Profissionalismo do início ao fim. A instalação foi impecável e o atendimento, atencioso. Recomendo de olhos fechados.",
  },
  {
    name: "Ricardo Almeida",
    role: "Proprietário residencial",
    text: "Fizeram a manutenção do meu split e ficou como novo. Pontuais, organizados e com preço justo. Equipe de confiança.",
  },
  {
    name: "Juliana Pereira",
    role: "Dona de loja comercial",
    text: "Resolveram em uma única visita um problema que outros não conseguiram. Atendimento ágil e diagnóstico certeiro.",
  },
  {
    name: "Marcos Silva",
    role: "Síndico de condomínio",
    text: "Excelente serviço de limpeza e revisão. O ar voltou a refrigerar bem e o ambiente ficou muito mais saudável.",
  },
];

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <HeroCarousel />
      <About />
      <Services />
      <Differentials />
      <BrandsAndTypes />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}

function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#sobre", label: "Sobre" },
    { href: "#servicos", label: "Serviços" },
    { href: "#diferenciais", label: "Diferenciais" },
    { href: "#depoimentos", label: "Depoimentos" },
    { href: "#contato", label: "Contato" },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/95 backdrop-blur-md shadow-sm" : "bg-background/70 backdrop-blur-sm"
      }`}
    >
      <nav className="container mx-auto flex items-center justify-between px-4 py-4">
        <a href="#top" className="flex items-center gap-2 font-extrabold text-primary">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
            <Snowflake className="h-5 w-5" />
          </span>
          <span className="text-lg leading-tight">
            Ideal Clima<span className="block text-[10px] font-semibold tracking-widest text-muted-foreground">REFRIGERAÇÃO</span>
          </span>
        </a>
        <ul className="hidden lg:flex items-center gap-8 text-sm font-medium">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="text-foreground/80 hover:text-primary transition-colors">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="hidden lg:flex items-center gap-3">
          <a
            href={waLink("Olá! Gostaria de tirar dúvidas sobre os serviços da Ideal Clima.")}
            target="_blank"
            rel="noopener"
            className="text-sm font-semibold text-primary hover:text-primary-glow transition-colors"
          >
            Quero Tirar Dúvidas
          </a>
          <a
            href={waLink("Olá! Quero falar com um especialista da Ideal Clima.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-card)] hover:opacity-90 transition-all"
          >
            <MessageCircle className="h-4 w-4" /> Falar com Especialista
          </a>
        </div>
        <button
          aria-label="Abrir menu"
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-md text-primary"
          onClick={() => setOpen((o) => !o)}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>
      {open && (
        <div className="lg:hidden border-t bg-background">
          <ul className="container mx-auto px-4 py-4 space-y-3">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block py-2 text-sm font-medium text-foreground/80"
                >
                  {l.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href={waLink("Olá! Quero falar com um especialista da Ideal Clima.")}
                target="_blank"
                rel="noopener"
                className="mt-2 inline-flex w-full items-center justify-center gap-2 rounded-lg bg-primary px-5 py-3 text-sm font-semibold text-primary-foreground"
              >
                <MessageCircle className="h-4 w-4" /> Falar com Especialista
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

function HeroCarousel() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % slides.length), 6000);
    return () => clearInterval(id);
  }, []);
  const go = (n: number) => setI((p) => (p + n + slides.length) % slides.length);

  return (
    <section id="top" className="relative h-[100svh] min-h-[640px] w-full overflow-hidden pt-20">
      <h1 className="sr-only">Instalação e Manutenção de Ar-Condicionado em Nova Iguaçu e Região</h1>
      {slides.map((s, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${idx === i ? "opacity-100" : "opacity-0"}`}
          aria-hidden={idx !== i}
        >
          <img
            src={s.img}
            alt={s.title}
            className={`h-full w-full ${s.isLogo ? "object-contain bg-primary" : "object-cover"}`}
            loading={idx === 0 ? "eager" : "lazy"}
            width={1920}
            height={1080}
          />
          {!s.isLogo && (
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(110deg, oklch(0.18 0.06 257 / 0.92) 0%, oklch(0.20 0.07 257 / 0.78) 45%, oklch(0.20 0.07 257 / 0.35) 100%)",
            }}
          />
          )}
        </div>
      ))}

      {!slides[i].isLogo && (
      <div className="relative z-10 container mx-auto h-full px-4 flex items-center">
        <div key={i} className="max-w-2xl text-primary-foreground animate-fade-up">
          <span className="inline-block rounded-full border border-white/30 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
            {slides[i].eyebrow}
          </span>
          <h2 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.05]">
            {slides[i].title}
          </h2>
          <p className="mt-6 text-lg text-white/85 max-w-xl leading-relaxed">{slides[i].subtitle}</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href={waLink("Olá! Quero falar com um especialista da Ideal Clima.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-primary shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform"
            >
              <MessageCircle className="h-5 w-5" /> Quero Falar com Especialista
            </a>
            <a
              href="#servicos"
              className="inline-flex items-center gap-2 rounded-lg border border-white/40 bg-white/5 px-7 py-4 text-sm font-bold text-white backdrop-blur-sm hover:bg-white/10 transition-colors"
            >
              Conhecer Serviços
            </a>
          </div>

          <div className="mt-12 flex flex-wrap items-center gap-6 text-sm text-white/80">
            <div className="flex items-center gap-2"><ShieldCheck className="h-5 w-5" /> Serviço com garantia</div>
            <div className="flex items-center gap-2"><Clock className="h-5 w-5" /> Atendimento ágil</div>
            <div className="flex items-center gap-2"><Award className="h-5 w-5" /> Profissionais qualificados</div>
          </div>
        </div>
      </div>
      )}

      <button
        onClick={() => go(-1)}
        aria-label="Slide anterior"
        className="absolute left-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md hover:bg-white/25 transition-colors"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => go(1)}
        aria-label="Próximo slide"
        className="absolute right-4 top-1/2 z-20 -translate-y-1/2 inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/15 text-white backdrop-blur-md hover:bg-white/25 transition-colors"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setI(idx)}
            aria-label={`Ir para slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all ${
              idx === i ? "w-10 bg-white" : "w-4 bg-white/40 hover:bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="sobre" className="py-24 lg:py-32">
      <div className="container mx-auto px-4 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        <div className="animate-fade-up">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Sobre Nós</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
            Climatização com qualidade técnica e relacionamento duradouro
          </h2>
          <p className="mt-6 text-base lg:text-lg text-muted-foreground leading-relaxed">
            A Ideal Clima Refrigeração nasceu do compromisso de oferecer soluções
            completas em climatização para residências e empresas em Nova Iguaçu e região,
            sempre com profissionais qualificados e foco em qualidade, segurança e eficiência.
          </p>
          <p className="mt-4 text-base lg:text-lg text-muted-foreground leading-relaxed">
            Acreditamos que cada serviço é uma oportunidade de construir confiança.
            Por isso, atuamos com atendimento personalizado, diagnóstico técnico preciso
            e a transparência que você merece — do orçamento à entrega final.
          </p>

          <div className="mt-10 grid grid-cols-3 gap-6 border-t border-border pt-8">
            {[
              { n: "+10", l: "Anos de experiência" },
              { n: "+500", l: "Clientes atendidos" },
              { n: "100%", l: "Compromisso técnico" },
            ].map((s) => (
              <div key={s.l}>
                <div className="text-3xl lg:text-4xl font-extrabold text-primary">{s.n}</div>
                <div className="mt-1 text-xs lg:text-sm text-muted-foreground">{s.l}</div>
              </div>
            ))}
          </div>

          <a
            href={waLink("Olá! Quero agendar uma consulta com a Ideal Clima.")}
            target="_blank"
            rel="noopener"
            className="mt-10 inline-flex items-center gap-2 rounded-lg bg-secondary px-6 py-3 text-sm font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors"
          >
            Quero Agendar uma Consulta
          </a>
        </div>

        <div className="relative">
          <div className="absolute -inset-4 rounded-2xl bg-gradient-to-br from-primary/20 to-transparent blur-xl" aria-hidden />
          <img
            src={aboutTeam}
            alt="Profissional da Ideal Clima Refrigeração realizando manutenção"
            className="relative rounded-2xl shadow-[var(--shadow-elegant)] w-full h-[520px] object-cover object-top"
            loading="lazy"
            width={1024}
            height={1024}
          />
          <div className="absolute -bottom-6 -left-6 hidden sm:flex items-center gap-3 rounded-xl bg-background p-4 shadow-[var(--shadow-card)] border border-border">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <ShieldCheck className="h-6 w-6" />
            </div>
            <div>
              <div className="text-sm font-bold text-primary">Garantia técnica</div>
              <div className="text-xs text-muted-foreground">Em todos os serviços</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Services() {
  return (
    <section id="servicos" className="bg-muted/40 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="relative max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Serviços</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
            Soluções completas em climatização
          </h2>
          <p className="mt-5 text-muted-foreground text-base lg:text-lg">
            Do projeto à manutenção, cuidamos de tudo para você ter conforto, segurança e desempenho
            sem dor de cabeça.
          </p>
          <img
            src={notaFiscalBadge}
            alt="Emitimos Nota Fiscal — Profissional Certificado"
            loading="lazy"
            className="hidden lg:block absolute top-1/2 left-full -translate-y-1/2 ml-8 w-60 xl:w-72 h-auto rounded-full shadow-[var(--shadow-card)]"
          />
          <img
            src={notaFiscalBadge}
            alt="Emitimos Nota Fiscal — Profissional Certificado"
            loading="lazy"
            className="lg:hidden mx-auto mt-8 w-48 sm:w-60 h-auto rounded-full shadow-[var(--shadow-card)]"
          />
        </div>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s) => (
            <article
              key={s.title}
              className="group flex flex-col rounded-2xl border border-border bg-card p-7 shadow-[var(--shadow-card)] hover:-translate-y-1 hover:border-primary/30 transition-all"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                <s.icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl text-primary">{s.title}</h3>
              <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">{s.desc}</p>
              <a
                href={waLink(`Olá! Quero agendar uma consulta para: ${s.title}.`)}
                target="_blank"
                rel="noopener"
                className="mt-6 inline-flex items-center justify-center gap-2 rounded-lg bg-secondary px-4 py-2.5 text-sm font-bold text-secondary-foreground hover:bg-secondary/80 transition-colors"
              >
                Quero Agendar uma Consulta
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Differentials() {
  return (
    <section id="diferenciais" className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Diferenciais</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
            Por que escolher a Ideal Clima?
          </h2>
          <p className="mt-5 text-muted-foreground text-base lg:text-lg">
            Atendimento personalizado, expertise especializada e compromisso real com a sua satisfação.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {differentials.map((d) => (
            <div
              key={d.title}
              className="flex gap-4 rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all"
            >
              <div className="shrink-0 inline-flex h-11 w-11 items-center justify-center rounded-lg bg-primary text-primary-foreground">
                <d.icon className="h-5 w-5" />
              </div>
              <div>
                <h3 className="text-base text-primary">{d.title}</h3>
                <p className="mt-1 text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const [i, setI] = useState(0);
  const go = (n: number) => setI((p) => (p + n + testimonials.length) % testimonials.length);
  useEffect(() => {
    const id = setInterval(() => setI((p) => (p + 1) % testimonials.length), 7000);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="depoimentos" className="bg-muted/40 py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Depoimentos</span>
          <h2 className="mt-3 text-3xl sm:text-4xl lg:text-5xl text-primary">
            Confiança que vem de quem já contratou
          </h2>
        </div>

        <div className="relative mt-14 max-w-3xl mx-auto">
          <div className="rounded-3xl bg-card border border-border p-8 lg:p-12 shadow-[var(--shadow-card)]">
            <div className="flex gap-1 text-primary">
              {Array.from({ length: 5 }).map((_, k) => (
                <Star key={k} className="h-5 w-5 fill-current" />
              ))}
            </div>
            <p className="mt-6 text-lg lg:text-xl text-foreground leading-relaxed font-medium">
              “{testimonials[i].text}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold">
                {testimonials[i].name.charAt(0)}
              </div>
              <div>
                <div className="font-bold text-primary">{testimonials[i].name}</div>
                <div className="text-sm text-muted-foreground">{testimonials[i].role}</div>
              </div>
            </div>
          </div>

          <div className="mt-8 flex items-center justify-center gap-4">
            <button
              onClick={() => go(-1)}
              aria-label="Anterior"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setI(idx)}
                  aria-label={`Depoimento ${idx + 1}`}
                  className={`h-2 rounded-full transition-all ${
                    idx === i ? "w-8 bg-primary" : "w-2 bg-border hover:bg-secondary"
                  }`}
                />
              ))}
            </div>
            <button
              onClick={() => go(1)}
              aria-label="Próximo"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-card border border-border text-primary hover:bg-primary hover:text-primary-foreground transition-colors"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function BrandsAndTypes() {
  return (
    <section className="py-24 lg:py-32">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Especialistas</span>
          <h2 className="mt-3 text-3xl sm:text-4xl text-primary">
            Marcas e Modelos que Trabalhamos
          </h2>
          <p className="mt-5 text-muted-foreground text-base lg:text-lg">
            Atendemos os principais fabricantes do mercado e somos especialistas em diversos sistemas de climatização.
          </p>
        </div>

        <div className="mt-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {[
            { t: "Split Hi-Wall", d: "Instalação e manutenção completa" },
            { t: "Ar-Condicionado Inverter", d: "Economia e conforto térmico" },
            { t: "Sistemas VRF", d: "Projetos comerciais avançados" },
            { t: "Piso Teto e Cassete", d: "Ideal para grandes ambientes" },
          ].map((item) => (
            <div key={item.t} className="rounded-2xl border border-border bg-card p-6 text-center hover:border-primary/30 hover:shadow-[var(--shadow-card)] transition-all">
              <h3 className="text-base font-bold text-primary">{item.t}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{item.d}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 md:gap-12 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
          <div className="text-xl font-bold">LG</div>
          <div className="text-xl font-bold">Samsung</div>
          <div className="text-xl font-bold">Midea</div>
          <div className="text-xl font-bold">Daikin</div>
          <div className="text-xl font-bold">Elgin</div>
          <div className="text-xl font-bold">Carrier</div>
        </div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      q: "Quanto tempo demora uma instalação de ar-condicionado?",
      a: "A instalação de um aparelho Split padrão costuma levar de 2 a 4 horas, dependendo da complexidade do local e da infraestrutura existente."
    },
    {
      q: "Quando devo fazer a manutenção preventiva?",
      a: "Recomendamos a manutenção preventiva a cada 6 meses para residências e a cada 3 meses para ambientes comerciais. Isso evita falhas e garante que o ar esteja sempre puro."
    },
    {
      q: "Vocês trabalham com aparelhos Inverter?",
      a: "Sim, somos especialistas em tecnologia Inverter de todas as marcas (LG, Samsung, Midea, etc), oferecendo instalação e reparo focados na máxima economia de energia."
    },
    {
      q: "Os serviços possuem garantia?",
      a: "Com certeza. Todos os nossos serviços de instalação, manutenção e conserto acompanham garantia técnica e nota fiscal para sua total segurança."
    }
  ];

  return (
    <section className="bg-muted/40 py-24 lg:py-32">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center">
          <span className="text-xs font-bold tracking-widest text-primary uppercase">Dúvidas Frequentes</span>
          <h2 className="mt-3 text-3xl sm:text-4xl text-primary">
            Perguntas Frequentes (FAQ)
          </h2>
        </div>
        <div className="mt-12 space-y-4">
          {faqs.map((faq, i) => (
            <details key={i} className="group rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer items-center justify-between font-bold text-primary">
                {faq.q}
                <span className="transition group-open:rotate-180">
                  <ChevronDown className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-4 text-muted-foreground leading-relaxed text-sm">
                {faq.a}
              </p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section
      id="contato"
      className="relative overflow-hidden py-24 lg:py-32 text-primary-foreground"
      style={{ background: "var(--gradient-hero)" }}
    >
      <div
        className="pointer-events-none absolute -top-32 -right-32 h-96 w-96 rounded-full opacity-30 blur-3xl"
        style={{ background: "var(--primary-glow)" }}
        aria-hidden
      />
      <div className="container mx-auto px-4 text-center max-w-3xl relative">
        <span className="inline-block rounded-full border border-white/25 bg-white/10 px-4 py-1.5 text-xs font-bold tracking-widest uppercase">
          Pronto para começar?
        </span>
        <h2 className="mt-6 text-3xl sm:text-4xl lg:text-5xl">
          Entregamos resultados que superam expectativas
        </h2>
        <p className="mt-6 text-base lg:text-lg text-white/85">
          Orçamento transparente, prazo definido e qualidade técnica garantida.
          Fale agora com um especialista e descubra a solução ideal para o seu ambiente.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={waLink("Olá! Quero falar com um especialista da Ideal Clima.")}
            target="_blank"
            rel="noopener"
            className="inline-flex items-center gap-2 rounded-lg bg-white px-7 py-4 text-sm font-bold text-primary shadow-[var(--shadow-elegant)] hover:scale-[1.02] transition-transform"
          >
            <MessageCircle className="h-5 w-5" /> Quero Falar com Especialista
          </a>
        </div>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {[
            { num: WHATSAPP, display: WHATSAPP_DISPLAY },
            { num: WHATSAPP_2, display: WHATSAPP_2_DISPLAY },
            { num: WHATSAPP_3, display: WHATSAPP_3_DISPLAY },
          ].map((c) => (
            <a
              key={c.num}
              href={waLinkTo(c.num, "Olá! Vim pelo site da Ideal Clima.")}
              target="_blank"
              rel="noopener"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
            >
              <MessageCircle className="h-5 w-5" /> {c.display}
            </a>
          ))}
          <a
            href="https://instagram.com/ideal.clima.rj"
            target="_blank"
            rel="noopener"
            className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/40 bg-white/5 px-5 py-3 text-sm font-bold text-white hover:bg-white/10 transition-colors"
          >
            <Instagram className="h-5 w-5" /> @ideal.clima.rj
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-10">
        <div>
          <div className="flex items-center gap-2 font-extrabold text-primary">
            <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-primary text-primary-foreground">
              <Snowflake className="h-5 w-5" />
            </span>
            Ideal Clima
          </div>
          <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
            Soluções completas em refrigeração e climatização em Nova Iguaçu/RJ.
            Qualidade técnica, ética profissional e atendimento personalizado.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#sobre" className="hover:text-primary">Sobre</a></li>
            <li><a href="#servicos" className="hover:text-primary">Serviços</a></li>
            <li><a href="#diferenciais" className="hover:text-primary">Diferenciais</a></li>
            <li><a href="#depoimentos" className="hover:text-primary">Depoimentos</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Contato</h4>
          <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href={`tel:+${WHATSAPP}`} className="hover:text-primary">{WHATSAPP_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href={`tel:+${WHATSAPP_2}`} className="hover:text-primary">{WHATSAPP_2_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Phone className="h-4 w-4 mt-0.5 text-primary" />
              <a href={`tel:+${WHATSAPP_3}`} className="hover:text-primary">{WHATSAPP_3_DISPLAY}</a>
            </li>
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 text-primary" />
              <a href="mailto:alexfelipe2011@live.com" className="hover:text-primary break-all">alexfelipe2011@live.com</a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 text-primary" />
              Nova Iguaçu — RJ
            </li>
            <li className="flex items-start gap-2">
              <Instagram className="h-4 w-4 mt-0.5 text-primary" />
              <a href="https://instagram.com/ideal.clima.rj" target="_blank" rel="noopener" className="hover:text-primary">
                @ideal.clima.rj
              </a>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-bold text-primary uppercase tracking-wider">Atendimento</h4>
          <p className="mt-4 text-sm text-muted-foreground">Segunda a Sexta<br />8h às 18h</p>
          <a
            href={waLink("Olá! Gostaria de tirar dúvidas sobre os serviços.")}
            target="_blank"
            rel="noopener"
            className="mt-5 inline-flex items-center gap-2 rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:opacity-90 transition-opacity"
          >
            <MessageCircle className="h-4 w-4" /> Quero Tirar Dúvidas
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 text-xs text-muted-foreground text-center">
          © {new Date().getFullYear()} Ideal Clima Refrigeração. Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}

function WhatsAppFloat() {
  return (
    <a
      href={waLink("Olá! Vim pelo site e gostaria de mais informações.")}
      target="_blank"
      rel="noopener"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[var(--shadow-elegant)] hover:scale-110 transition-transform"
    >
      <MessageCircle className="h-7 w-7" />
      <span className="absolute -inset-1 rounded-full bg-[#25D366]/40 animate-ping" aria-hidden />
    </a>
  );
}
