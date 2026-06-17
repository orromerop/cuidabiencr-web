"use client";
import { useState, useEffect } from "react";
import styles from "./page.module.css";

const HERO_IMAGES = [
  '/hero/hero-1.jpg',
  '/hero/hero-2.jpg',
  '/hero/hero-3.jpg',
];

export default function Home() {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [heroIndex, setHeroIndex] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setHeroIndex(i => (i + 1) % HERO_IMAGES.length), 6000);
    return () => clearInterval(t);
  }, []);
  return (
    <main className={styles.main}>
      {/* ── Navbar ── */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <img src="/brand/logo.svg" alt="CuidaBien" className={styles.navLogoImg} />
          <span className={styles.navName}>
            <span className={styles.navNameCuida}>Cuida</span><span className={styles.navNameBien}>Bien</span>
          </span>
        </div>
        <div className={styles.navLinks}>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#comunidad">Comunidad</a>
          <a href="#planes">Planes</a>
          <a href="#contacto">Contacto</a>
        </div>
        <div className={styles.navActions}>
          <a href="#contacto" className={styles.navCtaOutline}>Solicitar prueba gratuita</a>
          <a href="https://app.cuidabiencr.com/login" className={styles.navCta}>Ingresar →</a>
        </div>
        <button
          className={styles.navHamburger}
          onClick={() => setMenuAbierto(m => !m)}
          aria-label="Abrir menú"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="4" y1="6" x2="20" y2="6"/>
            <line x1="4" y1="12" x2="20" y2="12"/>
            <line x1="4" y1="18" x2="20" y2="18"/>
          </svg>
        </button>
        {menuAbierto && (
          <div className={styles.navMobileMenu}>
            <a href="#funcionalidades" onClick={() => setMenuAbierto(false)}>Funcionalidades</a>
            <a href="#comunidad" onClick={() => setMenuAbierto(false)}>Comunidad</a>
            <a href="#planes" onClick={() => setMenuAbierto(false)}>Planes</a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)}>Contacto</a>
            <a href="#contacto" onClick={() => setMenuAbierto(false)} className={styles.navCtaOutline}>Solicitar prueba gratuita</a>
          </div>
        )}
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        {HERO_IMAGES.map((src, i) => (
          <div
            key={src}
            className={`${styles.heroBgSlide} ${i === heroIndex ? styles.heroBgSlideActive : ''}`}
            style={{ backgroundImage: `url(${src})` }}
          />
        ))}
        <div className={styles.heroContent}>
          <div className={styles.heroBadgeWrap}>
            <span className={styles.heroBadge}>Hecho para Costa Rica 🇨🇷</span>
            <img src="/brand/logo-icon.svg" alt="CuidaBien icono" className={styles.heroBadgeIcon} />
          </div>
          <div className={styles.heroTitleWrap}>
            <h1 className={styles.heroTitle}>
              <span className={styles.heroTitleMain}>Cuida mejor</span>
              <span className={styles.heroTitleSub}>Gestiona con orden</span>
            </h1>
          </div>
          <p className={styles.heroSlogan}>Información que cuida, tranquilidad que acompaña.</p>
          <div className={styles.heroPilares}>
            <div className={styles.heroPilar}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 5H7a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2"/>
                <rect x="9" y="3" width="6" height="4" rx="1"/>
                <line x1="9" y1="12" x2="15" y2="12"/>
                <line x1="9" y1="16" x2="13" y2="16"/>
              </svg>
              <span>Registros clínicos claros</span>
            </div>
            <div className={styles.heroPilar}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/>
                <path d="M13.73 21a2 2 0 0 1-3.46 0"/>
              </svg>
              <span>Alertas visuales</span>
            </div>
            <div className={styles.heroPilar}>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              </svg>
              <span>Acceso familiar seguro</span>
            </div>
          </div>
          <p className={styles.heroDesc}>
            CuidaBien centraliza toda la información clínica del paciente -signos vitales,
            medicamentos, citas y más- para que el equipo a cargo cuide mejor y la familia tenga tranquilidad.
          </p>
          <div className={styles.heroCtas}>
            <a href="#contacto" className={styles.btnPrimary}>
              Solicita tu prueba gratuita
            </a>
            <a href="#funcionalidades" className={styles.btnGhostHero}>
              Mira cómo funciona
            </a>
          </div>
          <p className={styles.heroMicroCopy}>
            Sin tarjeta de crédito &middot; 7 días de prueba completa &middot; Soporte incluido
          </p>
        </div>
      </section>

      {/* ── Diferenciadores ── */}
      <section className={styles.difSection}>
        <h2 className={styles.difTitle}>
          Más que un registro digital: una forma más segura de acompañar el cuidado.
        </h2>
        <div className={styles.difGrid}>
          {diferenciadores.map(d => (
            <div key={d.titulo} className={styles.difCard}>
              <div className={styles.difIcon}>{d.icon}</div>
              <div className={styles.difTitulo}>{d.titulo}</div>
              <p className={styles.difDesc}>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── El Problema ── */}
      <section className={styles.problemaSection}>
        <div className={styles.problemaInner}>
          <h2 className={styles.problemaTitle}>
            Cuando la información se dispersa, el cuidado se vuelve más difícil.
          </h2>
          <div className={styles.problemaLayout}>
            <div className={styles.problemaPuntos}>
              {puntosDolor.map(p => (
                <div key={p.texto} className={styles.problemaPunto}>
                  <span className={styles.problemaPuntoIcon}>{p.icon}</span>
                  <span className={styles.problemaPuntoTexto}>{p.texto}</span>
                </div>
              ))}
            </div>
            <div className={styles.problemaImgWrap}>
              <img
                src="/problem/antes-despues.jpg"
                alt="Antes: libretas y WhatsApp. Después: CuidaBien."
                className={styles.problemaImg}
              />
            </div>
          </div>
          <p className={styles.problemaClose}>
            CuidaBien nace para reemplazar libretas, Excel y WhatsApp por una plataforma segura, trazable y accesible.
          </p>
        </div>
      </section>

      {/* ── Funcionalidades ── */}
      <section className={styles.section} id="funcionalidades">
        <h2 className={styles.sectionTitle}>Todo lo que necesitás</h2>
        <p className={styles.sectionDesc}>
          Módulos clínicos y administrativos diseñados para el día a día del cuido.
        </p>
        <div className={styles.featGrid}>
          {features.map(f => (
            <div key={f.title} className={styles.featCard}>
              <div className={styles.featIcon}>{f.icon}</div>
              <div className={styles.featTitle}>{f.title}</div>
              <div className={styles.featDesc}>{f.desc}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Planes ── */}
      <section className={styles.sectionAlt} id="planes">
        <h2 className={styles.sectionTitle}>Planes simples, sin sorpresas</h2>
        <p className={styles.sectionDesc}>Empezá gratis y escalá cuando lo necesités.</p>
        <div className={styles.planesGrid}>
          {planes.map(p => (
            <div key={p.nombre} className={`${styles.planCard} ${p.destacado ? styles.planDestacado : ''}`}>
              {p.destacado && <div className={styles.planBadge}>Más popular</div>}
              <div className={styles.planNombre}>{p.nombre}</div>
              <div className={styles.planPrecio}>
                {p.precio === 0
                  ? <span className={styles.planGratis}>Gratis</span>
                  : <>
                      <span className={styles.planMoneda}>$</span>
                      <span className={styles.planMonto}>{p.precio}</span>
                      <span className={styles.planPer}>/mes</span>
                    </>
                }
              </div>
              <ul className={styles.planFeatures}>
                <li>{p.usuarios} usuario{p.usuarios > 1 ? 's' : ''}</li>
                <li>{p.pacientes} paciente{p.pacientes > 1 ? 's' : ''}</li>
                {p.extras.map(e => <li key={e}>{e}</li>)}
              </ul>
              <a href="https://app.cuidabiencr.com/login" className={p.destacado ? styles.btnPrimary : styles.btnGhost}>
                {p.precio === 0 ? 'Empezar gratis' : 'Elegir plan'}
              </a>
            </div>
          ))}
        </div>
      </section>

      {/* ── Solicitar acceso ── */}
      <section className={styles.section} id="contacto">
        <div className={styles.solicitarWrap}>
          <div className={styles.solicitarInfo}>
            <span className={styles.heroBadge}>Acceso por invitación</span>
            <h2 className={styles.solicitarTitle}>¿Querés probarlo?</h2>
            <p className={styles.solicitarDesc}>
              Completá el formulario y en menos de 24 horas te enviamos un código de acceso para explorar la plataforma <strong>gratis por 7 días</strong>. Sin tarjeta de crédito.
            </p>
            <ul className={styles.solicitarBeneficios}>
              <li>✓ Acceso completo a todos los módulos</li>
              <li>✓ Sin compromiso de pago</li>
              <li>✓ Soporte durante el período de prueba</li>
            </ul>
          </div>
          <SolicitarForm />
        </div>
      </section>

      {/* ── CTA final ── */}
      <section className={styles.ctaSection}>
        <h2 className={styles.ctaTitle}>Gestión moderna para el cuido que merecen</h2>
        <p className={styles.ctaDesc}>Únete a las organizaciones que ya confían en CuidaBien.</p>
        <a href="#contacto" className={styles.btnPrimaryLg}>
          Solicitar acceso gratuito →
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <img src="/brand/logo.svg" alt="CuidaBien" className={styles.navLogoImg} />
          <span>CuidaBien</span>
        </div>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} CuidaBien. Hecho con ♥ en Costa Rica.</p>
      </footer>
    </main>
  );
}

function SolicitarForm() {
  const [form, setForm] = useState({ nombre_contacto: '', org_nombre: '', email: '' });
  const [estado, setEstado] = useState(null); // null | 'enviando' | 'ok' | 'error'
  const [error, setError] = useState('');

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  async function enviar() {
    if (!form.nombre_contacto || !form.org_nombre || !form.email) {
      setError('Completá todos los campos'); setEstado('error'); return;
    }
    setEstado('enviando'); setError('');
    try {
      const res = await fetch('https://app.cuidabiencr.com/auth/solicitar-acceso', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setEstado('ok');
      } else {
        const d = await res.json();
        setError(d.error || 'Error al enviar'); setEstado('error');
      }
    } catch {
      setError('No se pudo conectar. Intentá de nuevo.'); setEstado('error');
    }
  }

  if (estado === 'ok') return (
    <div className={styles.formCard}>
      <div className={styles.formOk}>
        <div className={styles.formOkIcon}>✓</div>
        <h3>¡Solicitud recibida!</h3>
        <p>Te contactamos en menos de 24 horas con tu código de acceso.</p>
      </div>
    </div>
  );

  return (
    <div className={styles.formCard}>
      <div className={styles.formField}>
        <label className={styles.formLabel}>Tu nombre</label>
        <input className={styles.formInput} type="text" placeholder="María González"
          value={form.nombre_contacto} onChange={e => set('nombre_contacto', e.target.value)} />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel}>Nombre de tu organización</label>
        <input className={styles.formInput} type="text" placeholder="Hogar San José"
          value={form.org_nombre} onChange={e => set('org_nombre', e.target.value)} />
      </div>
      <div className={styles.formField}>
        <label className={styles.formLabel}>Correo electrónico</label>
        <input className={styles.formInput} type="email" placeholder="tu@email.com"
          value={form.email} onChange={e => set('email', e.target.value)} />
      </div>
      {estado === 'error' && <p className={styles.formError}>{error}</p>}
      <button className={styles.btnPrimary} onClick={enviar} disabled={estado === 'enviando'}
        style={{ width: '100%', marginTop: '4px' }}>
        {estado === 'enviando' ? 'Enviando...' : 'Solicitar acceso gratuito'}
      </button>
    </div>
  );
}

const puntosDolor = [
  {
    texto: 'Libretas que se pierden',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
      </svg>
    ),
  },
  {
    texto: 'Mensajes de WhatsApp difíciles de rastrear',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
      </svg>
    ),
  },
  {
    texto: 'Hojas de Excel desactualizadas',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="18" height="18" rx="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="3" y1="15" x2="21" y2="15"/><line x1="9" y1="3" x2="9" y2="21"/><line x1="15" y1="3" x2="15" y2="21"/>
      </svg>
    ),
  },
  {
    texto: 'Familiares que preguntan constantemente',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.63 3.18 2 2 0 0 1 3.6 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.6a16 16 0 0 0 6.29 6.29l.97-.97a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
      </svg>
    ),
  },
  {
    texto: 'Cuidadores que trabajan bajo presión',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    texto: 'Supervisores que necesitan trazabilidad sin encontrarla',
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/>
      </svg>
    ),
  },
];

const diferenciadores = [
  {
    titulo: 'Nace de una necesidad real',
    desc: 'Diseñado por una familia que vivió el cuidado de cerca. No es una solución genérica para cualquier industria, es una experiencia real.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
      </svg>
    ),
  },
  {
    titulo: 'Mobile-first',
    desc: 'Pensado para usarse desde el celular durante el turno, no solo desde una computadora de escritorio.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <rect x="5" y="2" width="14" height="20" rx="2" ry="2"/>
        <line x1="12" y1="18" x2="12.01" y2="18"/>
      </svg>
    ),
  },
  {
    titulo: 'Alertas visuales simples',
    desc: 'El semáforo de colores avisa cuándo un signo vital está fuera de rango, sin necesidad de formación médica.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/>
        <line x1="12" y1="9" x2="12" y2="13"/>
        <line x1="12" y1="17" x2="12.01" y2="17"/>
      </svg>
    ),
  },
  {
    titulo: 'Acceso familiar integrado',
    desc: 'La familia puede consultar el estado del paciente en tiempo real sin interferir con el trabajo del equipo cuidador.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
      </svg>
    ),
  },
  {
    titulo: 'Trazabilidad completa',
    desc: 'Cada acción queda registrada. Sabes siempre quién y cuándo realizó alguna acción.',
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10"/>
        <polyline points="12 6 12 12 16 14"/>
      </svg>
    ),
  },
];

const features = [
  { icon: "❤️", title: "Signos Vitales", desc: "Registro de presión, temperatura, glucosa y más con historial gráfico." },
  { icon: "💊", title: "Medicamentos", desc: "Control de recetas, dosis, horarios y calendario de administración." },
  { icon: "📅", title: "Citas Médicas", desc: "Agenda de citas con recordatorios para cuidadores y responsables." },
  { icon: "🍽️", title: "Alimentación", desc: "Registro detallado de comidas y control nutricional por paciente." },
  { icon: "👥", title: "Múltiples Pacientes", desc: "Administrá todos tus pacientes desde un solo panel organizado." },
  { icon: "📊", title: "Reportes", desc: "Informes de consumo, historial clínico y actividad del personal." },
  { icon: "🔒", title: "Permisos por perfil", desc: "Control granular de acceso: cuidador, supervisor, director, responsable." },
  { icon: "📱", title: "Responsive", desc: "Funciona en celular, tablet y computadora. Sin instalar nada." },
];

const planes = [
  { nombre: "Familiar Gratis",        precio: 0,   usuarios: 2,   pacientes: 1,  extras: ["Módulos esenciales"],                                           destacado: false },
  { nombre: "Familiar Básico",        precio: 10,  usuarios: 3,   pacientes: 2,  extras: ["Todos los módulos", "Soporte por email"],                        destacado: false },
  { nombre: "Empresa Básico",         precio: 40,  usuarios: 20,  pacientes: 10, extras: ["Todos los módulos", "Soporte prioritario", "Reportes avanzados"], destacado: true  },
  { nombre: "Empresa Professional",   precio: 100, usuarios: 100, pacientes: 25, extras: ["Todo incluido", "Soporte dedicado"],                             destacado: false },
];
