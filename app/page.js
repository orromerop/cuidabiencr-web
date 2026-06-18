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
          Más que un registro digital: una forma más segura de acompañar el cuidado
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
            Cuando la información se dispersa, el cuidado se vuelve más difícil
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
        <h2 className={styles.sectionTitle}>
          Herramientas pensadas para cuidar con más orden y menos incertidumbre
        </h2>
        <p className={styles.sectionDesc}>
          Cada módulo está diseñado para que cuidadores, supervisores y familiares tengan información
          clara, actualizada y fácil de consultar. CuidaBien reemplaza libretas, Excel y grupos de
          WhatsApp por una plataforma segura y trazable.
        </p>

        <div className={styles.featGroup}>
          <div className={styles.featGroupHeader}>
            <span className={styles.featGroupLabelClinical}>Módulos Clínicos</span>
          </div>
          <div className={styles.featGridClinical}>
            {clinicalModules.map(m => (
              <div key={m.title} className={styles.featCardClinical}>
                <div className={styles.featCardTop}>
                  <div className={styles.featIconSvg}>{m.icon}</div>
                  <div className={styles.featTitle}>{m.title}</div>
                  <p className={styles.featDesc}>{m.desc}</p>
                  {m.semaforo && (
                    <div className={styles.featSemaforo}>
                      <span className={styles.semaVerde} />
                      <span className={styles.semaAmarillo} />
                      <span className={styles.semaRojo} />
                      <span className={styles.semaLabel}>Alerta automática de rangos</span>
                    </div>
                  )}
                </div>
                {m.img && (
                  <div className={styles.featImgWrap}>
                    <img src={m.img} alt={m.title} className={styles.featImg} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.featPuente}>
          <p className={styles.featPuenteTexto}>
            CuidaBien no reemplaza el cuidado humano: lo organiza, lo respalda y lo hace más seguro.
          </p>
          <div className={styles.featPuenteImgWrap}>
            <img
              src="/features/Mockup%20con%20dashboard%20en%20tablet.jpg"
              alt="Dashboard CuidaBien en tablet"
              className={styles.featPuenteImg}
            />
          </div>
        </div>

        <div className={styles.featGroup}>
          <div className={styles.featGroupHeader}>
            <span className={styles.featGroupLabelAdmin}>Módulos Administrativos</span>
          </div>
          <div className={styles.featGridAdmin}>
            {adminModules.map(m => (
              <div key={m.title} className={styles.featCardAdmin}>
                <div className={styles.featCardTop}>
                  <div className={styles.featIconSvg}>{m.icon}</div>
                  <div className={styles.featTitle}>{m.title}</div>
                  <p className={styles.featDesc}>{m.desc}</p>
                </div>
                {m.img && (
                  <div className={styles.featImgWrap}>
                    <img src={m.img} alt={m.title} className={styles.featImg} />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className={styles.featCtaWrap}>
          <a href="#contacto" className={styles.btnGreen}>Probá gratis por 7 días →</a>
        </div>
      </section>

      {/* ── Comunidad ── */}
      <section className={styles.comunidadSection} id="comunidad">
        <div className={styles.comunidadInner}>
          <h2 className={styles.sectionTitle}>Comunidad conectada</h2>
          <div className={styles.comunidadGrid}>

            <div className={styles.comunidadCol}>
              <div className={styles.comunidadCard}>
                <div className={styles.comunidadCardLabel}>Familias y responsables</div>
                <p className={styles.comunidadCardDesc}>
                  Accede al registro del estado de tu familiar en tiempo real. Consulta citas,
                  medicamentos y signos vitales con acceso solo lectura, desde cualquier lugar
                  en cualquier momento.
                </p>
              </div>
              <div className={styles.comunidadCard}>
                <div className={styles.comunidadCardLabel}>Supervisores y directores</div>
                <p className={styles.comunidadCardDesc}>
                  Revisa el historial de todos tus pacientes desde un panel central. Detecta
                  alertas a tiempo y coordina mejor a tu equipo.
                </p>
              </div>
            </div>

            <div className={styles.comunidadPhotoWrap}>
              <img
                src="/comunidad/Comunidad.jpg"
                alt="Comunidad CuidaBien"
                className={styles.comunidadPhoto}
              />
            </div>

            <div className={styles.comunidadCol}>
              <div className={styles.comunidadCard}>
                <div className={styles.comunidadCardLabel}>Cuidadores directos</div>
                <p className={styles.comunidadCardDesc}>
                  Registra signos, medicamentos y alimentación desde tu celular, en segundos.
                  Sin papeles, sin riesgo de olvido.
                </p>
              </div>
              <div className={styles.comunidadCard}>
                <div className={styles.comunidadCardLabel}>Administradores de organizaciones</div>
                <p className={styles.comunidadCardDesc}>
                  Gestiona usuarios, permisos, inventario, suministros y reportes desde un mismo
                  sistema. Trazabilidad completa de cada acción.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ── Misión y Visión ── */}
      <section className={styles.mvSection}>
        <div className={styles.mvGrid}>
          <div className={styles.mvCard}>
            <div className={styles.mvCardBg} style={{backgroundImage: "url('/mision/Misi%C3%B3n.jpg')"}} />
            <div className={styles.mvCardContent}>
              <div className={styles.mvCardEtiqueta}>Misión</div>
              <p className={styles.mvCardTexto} style={{textAlign: 'justify'}}>
                Mejorar la calidad de vida de las personas mediante tecnología que simplifica, organiza y humaniza el cuidado.
              </p>
            </div>
          </div>
          <div className={styles.mvCard}>
            <div className={styles.mvCardBg} style={{backgroundImage: "url('/mision/Visi%C3%B3n.jpg')"}} />
            <div className={styles.mvCardContent}>
              <div className={styles.mvCardEtiqueta}>Visión</div>
              <p className={styles.mvCardTexto}>
                Que nadie cuide en soledad.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Valores de Marca ── */}
      <section className={styles.valoresSection}>
        <div className={styles.valoresInner}>
          <h2 className={styles.sectionTitle}>Valores de Marca</h2>
          <div className={styles.valoresGrid}>
            {valores.map(v => (
              <div key={v.titulo} className={styles.valorCard}>
                <div className={styles.valorIcon}>{v.icon}</div>
                <div className={styles.valorTitulo}>{v.titulo}</div>
                <p className={styles.valorDesc}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Planes ── */}
      <section className={styles.planesSection} id="planes">
        <div className={styles.planesInner}>
          <h2 className={styles.sectionTitle}>Encontrá el plan ideal que necesitas</h2>
          <p className={styles.sectionDesc}>
            Elige el plan según el tipo de cuidado que gestionas. Todos incluyen acceso completo a los módulos clínicos.
          </p>

          {/* Bloque Familiares */}
          <div className={styles.planesBloque}>
            <p className={styles.planesBloqueHeader}>
              <strong>Planes Familiares</strong> — Para familias que cuidan a un ser querido en casa.
            </p>
            <div className={styles.planesFamiliarGrid}>
              {planesFamiliares.map(p => <PlanCard key={p.nombre} plan={p} ctaLabel="Organizar mi cuidado familiar" />)}
            </div>
          </div>

          {/* Bloque Empresariales */}
          <div className={styles.planesBloque}>
            <p className={styles.planesBloqueHeader}>
              <strong>Planes Empresariales</strong> — Para hogares de cuido, clínicas y organizaciones de salud.
            </p>
            <div className={styles.planesEmpresaGrid}>
              {planesEmpresariales.map(p => <PlanCard key={p.nombre} plan={p} ctaLabel="Solicitar acceso" />)}
            </div>
            <div className={styles.planMedida}>
              <div>
                <div className={styles.planMedidaNombre}>Empresa a la Medida</div>
                <p className={styles.planMedidaDesc}>¿Tu organización tiene necesidades específicas? Hablemos y diseñamos juntos el plan ideal.</p>
              </div>
              <a href="#contacto" className={styles.planMedidaBtn}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Contactar
              </a>
            </div>
          </div>

          {/* Garantía */}
          <div className={styles.planesGarantia}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            Sin contrato de permanencia · Cancelas cuando quieras · Soporte en español · Facturación electrónica CR
          </div>
          <p className={styles.planesNota}>
            Inicia con un plan básico y luego podrás escalar cuando tu operación lo necesite.
          </p>

          {/* FAQ */}
          <div className={styles.planesFaqWrap}>
            <h3 className={styles.planesFaqTitulo}>Preguntas frecuentes</h3>
            {faqPlanes.map(q => <FaqItem key={q.pregunta} pregunta={q.pregunta} respuesta={q.respuesta} />)}
          </div>
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

function PlanCard({ plan, ctaLabel }) {
  const pillClass = plan.badgeColor === 'dorado' ? styles.planPillDorado : styles.planPillBase;
  return (
    <div className={`${styles.planCardV2} ${plan.destacado ? styles.planCardDestacado2 : ''}`}>
      <div className={`${styles.planPill} ${pillClass}`}>{plan.badgeTexto || plan.badgeLabel}</div>
      <div className={styles.planNombreV2}>{plan.nombre}</div>
      <p className={styles.planDescV2}>{plan.desc}</p>
      <div className={styles.planPrecioV2}>
        <span className={styles.planCifra}>${plan.precio}</span>
        <span className={styles.planUnidad}>/mes</span>
      </div>
      <div className={styles.planDivisorV2} />
      <ul className={styles.planItemsList}>
        {plan.items.map(item => (
          <li key={item} className={styles.planItem}>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <a href="https://app.cuidabiencr.com/login" className={plan.destacado ? styles.planBtnSolido : styles.planBtnOutline}>
        {ctaLabel}
      </a>
    </div>
  );
}

function FaqItem({ pregunta, respuesta }) {
  const [abierto, setAbierto] = useState(false);
  return (
    <div className={styles.faqItem}>
      <button className={styles.faqPregunta} onClick={() => setAbierto(a => !a)}>
        <span>{pregunta}</span>
        <span className={styles.faqIcono}>{abierto ? '−' : '+'}</span>
      </button>
      {abierto && <p className={styles.faqRespuesta}>{respuesta}</p>}
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

const valores = [
  {
    titulo: 'Humanidad',
    desc: 'Ponemos a las personas en el centro de cada decisión, utilizando la tecnología para acercar, acompañar y dignificar el cuidado.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>),
  },
  {
    titulo: 'Confianza',
    desc: 'Protegemos la información y garantizamos procesos seguros, transparentes y confiables para quienes cuidan y quienes son cuidados.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B59A3B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
  },
  {
    titulo: 'Acompañamiento',
    desc: 'Creemos que cuidar es una responsabilidad compartida y trabajamos para que nadie tenga que hacerlo en soledad.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  },
  {
    titulo: 'Organización',
    desc: 'Transformamos la complejidad del cuidado en información clara, accesible y útil para tomar mejores decisiones.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B59A3B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 2 7 12 12 22 7 12 2"/><polyline points="2 17 12 22 22 17"/><polyline points="2 12 12 17 22 12"/></svg>),
  },
  {
    titulo: 'Bienestar',
    desc: 'Impulsamos una mejor calidad de vida promoviendo un cuidado más oportuno, informado y humano.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>),
  },
  {
    titulo: 'Innovación',
    desc: 'La tecnología debe simplificar procesos reales.',
    icon: (<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#B59A3B" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>),
  },
];

const clinicalModules = [
  {
    title: 'Signos Vitales',
    desc: 'Registra presión, temperatura, frecuencia cardíaca, glucosa, oxígeno en sangre y peso. El sistema aplica un semáforo de colores automático que alerta visualmente cuando un valor está fuera del rango normal, sin que el cuidador necesite ser médico.',
    semaforo: true,
    img: '/features/M%C3%B3dulo%20signos%20vitales.jpg',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>),
  },
  {
    title: 'Medicamentos y Calendario',
    desc: 'Gestiona los medicamentos de cada paciente con horarios, dosis y alertas automáticas. El calendario visual elimina la duda de si el paciente tomó su pastilla y cuándo fue la última dosis.',
    img: '/features/M%C3%B3dulo%20Medicamentos.jpg',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m10.5 20.5 10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7Z"/><path d="m8.5 8.5 7 7"/></svg>),
  },
  {
    title: 'Citas Médicas',
    desc: 'Registra citas, especialidades y resultados de cada visita médica. Toda la historia clínica queda centralizada y accesible para el equipo y la familia.',
    img: '/features/M%C3%B3dulo%20Citas%20M%C3%A9dicas.jpg',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/><path d="m9 16 2 2 4-4"/></svg>),
  },
  {
    title: 'Alimentación',
    desc: 'Registra dietas, restricciones y consumo diario. Información clave para cuidadores y supervisores, en tiempo real.',
    img: '/features/M%C3%B3dulo%20Alimentaci%C3%B3n.jpg',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>),
  },
  {
    title: 'Higiene y Eliminaciones',
    desc: 'Registra las rutinas de higiene y el control de eliminaciones de cada paciente. Esta información es clave para detectar cambios en el estado de salud a tiempo y mantener un historial claro que cualquier miembro del equipo pueda consultar entre turnos, sin depender de la memoria ni de notas en papel.',
    img: '/features/M%C3%B3dulo%20higiene.jpg',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z"/></svg>),
  },
];

const adminModules = [
  {
    title: 'Múltiples Pacientes',
    desc: 'Administra varios pacientes desde un mismo perfil. Ideal para hogares de adulto mayor, clínicas y centros de rehabilitación con múltiples residentes.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>),
  },
  {
    title: 'Inventario de Suministros',
    desc: 'Lleva el control de los insumos del hogar o centro: pañales, guantes, medicamentos generales, materiales de curación y más. El sistema te permite saber qué hay disponible, qué está por agotarse y cuándo reabastecer, antes de que la falta de un suministro afecte la atención.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>),
  },
  {
    title: 'Reportes',
    desc: 'Genera reportes por paciente, por período o por módulo con un solo clic. Ideal para reuniones de equipo, actualizaciones a familias y auditorías internas. Toda la información del cuidado queda documentada, organizada y lista para compartir cuando la necesites.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/><line x1="2" y1="20" x2="22" y2="20"/></svg>),
  },
  {
    title: 'Permisos por Perfil',
    desc: 'Asigna niveles de acceso a cada usuario: cuidador, supervisor, administrador o familiar. Cada persona ve solo lo que necesita.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>),
  },
  {
    title: 'Inventario de Pertenencias',
    desc: 'Registra los objetos personales de cada paciente: ropa, documentos, dispositivos, artículos de valor y cualquier pertenencia relevante. Evita pérdidas, conflictos y malentendidos con las familias gracias a un registro claro de qué hay, en qué estado está y quién lo recibió.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"/><line x1="7" y1="7" x2="7.01" y2="7"/></svg>),
  },
  {
    title: 'Notificaciones automáticas',
    desc: 'CuidaBien te avisa cuando algo requiere atención: un medicamento próximo a su hora, una cita médica que se acerca o el nivel de infusión próximo a terminarse. Las notificaciones llegan al dispositivo correcto, para la persona indicada, en el momento oportuno, sin que nadie tenga que recordar revisar manualmente.',
    icon: (<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#009E73" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>),
  },
];

const planesFamiliares = [
  {
    nombre: 'Familiar Básico',
    desc: 'Para familias que necesitan coordinar el cuidado con más de un responsable.',
    precio: 10,
    items: ['3 usuarios', '2 pacientes', 'Todos los módulos clínicos', 'Soporte por email', 'Facturación electrónica CR'],
    destacado: false, badgeLabel: 'Familiar',
  },
  {
    nombre: 'Familiar Ampliado',
    desc: 'Para familias que necesitan mayor cantidad de usuarios y pacientes.',
    precio: 25,
    items: ['10 usuarios', '5 pacientes', 'Todos los módulos clínicos', 'Soporte por email', 'Facturación electrónica CR'],
    destacado: true, badgeLabel: 'Familiar',
  },
];

const planesEmpresariales = [
  {
    nombre: 'Empresa Básico',
    desc: 'Para hogares de adulto mayor o centros de cuido pequeños que necesitan orden operativo y clínico.',
    precio: 40,
    items: ['20 usuarios', '10 pacientes', 'Todos los módulos clínicos', 'Soporte prioritario', 'Reportes'],
    destacado: false, badgeLabel: 'Empresarial',
    badgeTexto: 'Ideal para hogares de cuido', badgeColor: 'dorado',
  },
  {
    nombre: 'Empresa Profesional',
    desc: 'Para organizaciones en crecimiento que necesitan gestionar un equipo más amplio de usuarios y un mayor número de pacientes con reportes avanzados y trazabilidad completa.',
    precio: 100,
    items: ['100 usuarios', '25 pacientes', 'Todos los módulos clínicos', 'Soporte prioritario', 'Reportes'],
    destacado: true, badgeLabel: 'Empresarial', badgeTexto: 'Más popular',
  },
  {
    nombre: 'Empresa Business',
    desc: 'Para empresas con múltiples equipos y sedes que necesitan gestionar un volumen mayor de pacientes con la misma trazabilidad y orden clínico.',
    precio: 200,
    items: ['200 usuarios', '50 pacientes', 'Todos los módulos clínicos', 'Soporte prioritario', 'Reportes'],
    destacado: false, badgeLabel: 'Empresarial',
  },
  {
    nombre: 'Empresa Enterprise',
    desc: 'Para grandes organizaciones de salud con operaciones complejas, múltiples unidades y altos volúmenes de pacientes que requieren el máximo nivel de capacidad y control.',
    precio: 400,
    items: ['400 usuarios', '100 pacientes', 'Todos los módulos clínicos', 'Soporte prioritario', 'Reportes'],
    destacado: false, badgeLabel: 'Empresarial',
  },
];

const faqPlanes = [
  { pregunta: '¿Necesito instalar algún programa o aplicación?', respuesta: 'No necesitas instalar nada. CuidaBien funciona directamente desde el navegador de tu dispositivo, así que puedes empezar a usarlo de inmediato, sin descargas ni configuraciones técnicas.' },
  { pregunta: '¿Puedo usarlo desde el celular?', respuesta: '¡Claro que sí! CuidaBien está diseñado para funcionar desde cualquier celular, tablet o computadora que tenga acceso a internet, sin importar el modelo o la marca. Puedes registrar, consultar y hacer seguimiento desde donde estés.' },
  { pregunta: '¿Los familiares pueden acceder?', respuesta: 'Sí, los familiares pueden consultar la información del paciente con acceso de solo lectura. La cantidad de usuarios familiares habilitados varía según el plan que hayas escogido, por lo que siempre encontrarás una opción que se ajuste a las necesidades de tu familia o equipo.' },
  { pregunta: '¿Puedo cambiar de plan en cualquier momento?', respuesta: 'Sí, puedes solicitar el cambio de plan cuando lo necesites. Te recomendamos hacerlo antes de que concluya tu mes activo para que el ajuste se refleje en tu próxima facturación sin ninguna interrupción en el servicio.' },
  { pregunta: '¿Qué pasa cuando termina el período de prueba?', respuesta: 'Al finalizar los 7 días de prueba, el acceso a la plataforma se inhabilitará temporalmente hasta que formalices el plan que quieres adquirir. Y con toda tranquilidad, puedes continuar después pues todos tus datos quedan guardados y estarán disponibles en cuanto actives tu suscripción, sin perder ningún registro.' },
  { pregunta: '¿Tienen facturación electrónica para Costa Rica?', respuesta: 'Sí, emitimos factura electrónica de acuerdo con los requisitos del Ministerio de Hacienda de Costa Rica. Puedes solicitarla al momento de formalizar tu plan.' },
  { pregunta: '¿La prueba requiere tarjeta de crédito?', respuesta: 'No, la prueba gratuita no requiere ningún dato de pago. Cuando decidas suscribirte a un plan, puedes hacerlo con tarjeta de crédito o débito, de forma segura y sencilla.' },
];
