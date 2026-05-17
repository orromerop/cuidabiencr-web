import "./globals.css";

export const metadata = {
  title: "CuidaBien — Gestión integral para organizaciones de salud y cuido",
  description: "Plataforma SaaS para hogares de cuido y organizaciones de salud. Gestión de pacientes, signos vitales, medicamentos, citas y más.",
  keywords: "hogar de cuido, adulto mayor, gestión clínica, Costa Rica, SaaS salud",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  );
}
