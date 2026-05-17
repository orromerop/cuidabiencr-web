import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      {/* ── Navbar ── */}
      <nav className={styles.nav}>
        <div className={styles.navBrand}>
          <span className={styles.navLogo}>CB</span>
          <span className={styles.navName}>CuidaBien</span>
        </div>
        <div className={styles.navLinks}>
          <a href="#funcionalidades">Funcionalidades</a>
          <a href="#planes">Planes</a>
          <a href="#contacto">Contacto</a>
        </div>
        <a href="https://app.cuidabiencr.com/login" className={styles.navCta}>
          Ingresar →
        </a>
      </nav>

      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroContent}>
          <span className={styles.heroBadge}>Hecho para Costa Rica 🇨🇷</span>
          <h1 className={styles.heroTitle}>
            Cuida mejor.<br />
            <span className={styles.heroTitleAccent}>Gestiona con orden.</span>
          </h1>
          <p className={styles.heroDesc}>
            CuidaBien es la plataforma SaaS pensada para hogares de cuido y
            organizaciones de salud. Signos vitales, medicamentos, citas y
            mucho más — todo en un solo lugar.
          </p>
          <div className={styles.heroCtas}>
            <a href="https://app.cuidabiencr.com/login" className={styles.btnPrimary}>
              Empezar gratis
            </a>
            <a href="#funcionalidades" className={styles.btnGhost}>
              Ver funcionalidades
            </a>
          </div>
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

      {/* ── CTA final ── */}
      <section className={styles.ctaSection} id="contacto">
        <h2 className={styles.ctaTitle}>¿Listo para empezar?</h2>
        <p className={styles.ctaDesc}>Creá tu cuenta gratis hoy. Sin tarjeta de crédito.</p>
        <a href="https://app.cuidabiencr.com/login" className={styles.btnPrimaryLg}>
          Crear cuenta gratis →
        </a>
      </section>

      {/* ── Footer ── */}
      <footer className={styles.footer}>
        <div className={styles.footerBrand}>
          <span className={styles.navLogo}>CB</span>
          <span>CuidaBien</span>
        </div>
        <p className={styles.footerCopy}>© {new Date().getFullYear()} CuidaBien. Hecho con ♥ en Costa Rica.</p>
      </footer>
    </main>
  );
}

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
