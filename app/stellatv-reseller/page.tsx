import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ShieldCheck, TrendingUp, Smartphone, Users, Headset } from "lucide-react";
import { brand, siteUrl } from "@/content/site";

const resellerTitle = "Conviértete en revendedor de Stella TV";
const resellerDescription =
  "Compra créditos al por mayor, define tu propio precio de venta y activa cuentas desde tu panel en cualquier momento. Nosotros ponemos la plataforma y el soporte; el negocio lo manejas tú.";

/** Kept under ~155 characters so Google shows it whole instead of truncating. */
const resellerMetaDescription =
  "Conviértete en revendedor de Stella TV: compra créditos a precio mayorista, gestiona a tus clientes desde tu panel y escala tus ganancias.";

export const metadata: Metadata = {
  title: "Ser revendedor: créditos al por mayor",
  description: resellerMetaDescription,
  keywords: [
    "revendedor stella tv",
    "reseller stella tv",
    "panel stella tv",
    "creditos stella tv",
    "distribuidor stella tv",
  ],
  alternates: {
    canonical: "/stellatv-reseller",
  },
  openGraph: {
    title: `${resellerTitle} | ${brand.name}`,
    description: resellerMetaDescription,
    url: "/stellatv-reseller",
    type: "website",
    locale: "es_ES",
    siteName: brand.name,
    // Inherits the generated card from app/opengraph-image.tsx.
  },
  twitter: {
    card: "summary_large_image",
    title: `${resellerTitle} | ${brand.name}`,
    description: resellerMetaDescription,
  },
};

const resellerJsonLd = {
  "@context": "https://schema.org",
  "@type": "WebPage",
  "@id": `${siteUrl}/stellatv-reseller#webpage`,
  url: `${siteUrl}/stellatv-reseller`,
  name: resellerTitle,
  description: resellerDescription,
  inLanguage: "es",
  about: {
    "@type": "Organization",
    name: brand.name,
    url: siteUrl,
    logo: `${siteUrl}${brand.logo}`,
  },
  mainEntity: {
    "@type": "ItemList",
    name: "Beneficios para revendedores de Stella TV",
    itemListElement: [
      "Empieza con poco",
      "Panel sin vueltas",
      "Margen real",
      "Soporte cuando lo necesitas",
      "Desde donde estés",
      "Producto que se vende solo",
    ].map((name, position) => ({
      "@type": "ListItem",
      position: position + 1,
      name,
    })),
  },
};

export default function ResellerPage() {
  return (
    <div className="min-h-screen bg-[#060505] text-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(resellerJsonLd).replace(/</g, "\\u003c"),
        }}
      />
      {/* Navigation (Simplified for this page, usually part of layout) */}
      <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-black/60 backdrop-blur-md border-b border-white/10">
        <Link href="/" className="flex items-center gap-2">
          <Image
            src={brand.logoCompact}
            alt={brand.name}
            width={105}
            height={45}
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/" className="text-sm font-medium text-white/80 hover:text-white transition-colors">
            Volver al inicio
          </Link>
          <Link href="#pricing" className="btn-primary text-sm px-6 py-2">
            VER PRECIOS
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary/20 blur-[120px] rounded-full pointer-events-none" />
        
        <div className="relative max-w-5xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Conviértete en revendedor de <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#d62d08]">Stella TV</span>
          </h1>
          <p className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto mb-10 leading-relaxed">
            {resellerDescription}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link href="#pricing" className="btn-primary text-lg px-8 py-4 w-full sm:w-auto shadow-[0_0_20px_rgba(238,181,0,0.3)] hover:shadow-[0_0_30px_rgba(238,181,0,0.5)]">
              Comenzar ahora
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-[#0A0A0A] border-y border-white/5 relative z-10">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="sr-only">Beneficios de ser revendedor de Stella TV</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <TrendingUp size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Empieza con poco</h3>
              <p className="text-white/60 leading-relaxed">
                Arrancas con el panel más chico y subes de categoría cuando tus ventas lo justifiquen. No hay que inmovilizar capital para probar si el negocio te funciona.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <ShieldCheck size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Panel sin vueltas</h3>
              <p className="text-white/60 leading-relaxed">
                Creas, renuevas y consultas las cuentas de tus clientes desde una sola pantalla. Si además tienes sub-revendedores, los administras desde el mismo lugar.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Users size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Margen real</h3>
              <p className="text-white/60 leading-relaxed">
                Tu ganancia es la diferencia entre el precio de panel y lo que cobras al cliente final. Con los valores mayoristas actuales, ese margen puede duplicar lo que invertiste.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Headset size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Soporte cuando lo necesitas</h3>
              <p className="text-white/60 leading-relaxed">
                Hay soporte técnico disponible las 24 horas para lo que no puedas resolver solo: fallas de reproducción, dudas del panel o problemas de activación.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <Smartphone size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Desde donde estés</h3>
              <p className="text-white/60 leading-relaxed">
                El panel corre en el navegador, así que lo abres desde el celular o la computadora, estés donde estés, sin instalar nada.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="bg-[#121212] border border-white/5 p-8 rounded-2xl hover:border-primary/30 transition-colors group">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6 group-hover:scale-110 transition-transform">
                <CheckCircle2 size={24} />
              </div>
              <h3 className="text-xl font-bold mb-3">Producto que se vende solo</h3>
              <p className="text-white/60 leading-relaxed">
                Stella TV ya tiene demanda propia en la región: buena parte de tus clientes van a llegar buscando el servicio por su nombre, no a que se lo expliques.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Planes de Paneles</h2>
            <p className="text-white/60 max-w-2xl mx-auto text-lg">
              Cada panel define cuántos créditos recibes y qué puedes hacer con ellos. Elige el que se ajuste al volumen que manejas hoy y súbelo cuando crezcas.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Bronze Plan */}
            <div className="flex flex-col bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/80 mb-2 uppercase tracking-wider">Panel Bronce</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$60</span>
                  <span className="text-white/50">USD</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>15</strong> Créditos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>$4</strong> Cada Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-white/80">3-4 Conexiones por Crédito</span>
                </li>
                <li className="flex items-center gap-3 text-white/40">
                  <div className="w-5 flex justify-center">-</div>
                  <span>No Puede Vender Panel</span>
                </li>
              </ul>
              <Link href="https://wa.me/message/3PKA7YCORQRVA1" className="btn-outline w-full hover:bg-primary/10">
                COMPRAR
              </Link>
            </div>

            {/* Silver Plan */}
            <div className="flex flex-col bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative overflow-hidden">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/80 mb-2 uppercase tracking-wider">Panel Plata</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$185</span>
                  <span className="text-white/50">USD</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>50</strong> Créditos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>$3.7</strong> Cada Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-white/80">3-4 Conexiones por Crédito</span>
                </li>
                <li className="flex items-center gap-3 text-white/40">
                  <div className="w-5 flex justify-center">-</div>
                  <span>No Puede Vender Panel</span>
                </li>
              </ul>
              <Link href="https://wa.me/message/3PKA7YCORQRVA1" className="btn-outline w-full hover:bg-primary/10">
                COMPRAR
              </Link>
            </div>

            {/* Gold/Super Plan */}
            <div className="flex flex-col bg-gradient-to-b from-[#2a1f00] to-[#111] border border-primary/50 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300 relative shadow-[0_0_30px_rgba(238,181,0,0.1)]">
              <div className="absolute top-0 left-1/2 -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-b-lg uppercase tracking-widest">
                Más Popular
              </div>
              <div className="mb-8 mt-4">
                <h3 className="text-xl font-medium text-primary mb-2 uppercase tracking-wider">Super Panel</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold text-white">$350</span>
                  <span className="text-white/50">USD</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>100</strong> Créditos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>$3.5</strong> Cada Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-white/80">3-4 Conexiones por Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-semibold text-white">Puede Vender Panel</span>
                </li>
              </ul>
              <Link href="https://wa.me/message/3PKA7YCORQRVA1" className="btn-primary w-full shadow-[0_0_15px_rgba(238,181,0,0.2)]">
                COMPRAR
              </Link>
            </div>

            {/* Platinum/Super Silver Plan */}
            <div className="flex flex-col bg-[#111] border border-white/10 rounded-3xl p-8 hover:-translate-y-2 transition-transform duration-300">
              <div className="mb-8">
                <h3 className="text-xl font-medium text-white/80 mb-2 uppercase tracking-wider">Super Plata</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-bold">$780</span>
                  <span className="text-white/50">USD</span>
                </div>
              </div>
              <ul className="flex-1 space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>300</strong> Créditos</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span><strong>$2.6</strong> Cada Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="text-white/80">3-4 Conexiones por Crédito</span>
                </li>
                <li className="flex items-center gap-3">
                  <CheckCircle2 size={20} className="text-primary" />
                  <span className="font-semibold text-white">Puede Vender Panel</span>
                </li>
              </ul>
              <Link href="https://wa.me/message/3PKA7YCORQRVA1" className="btn-outline w-full hover:bg-primary/10">
                COMPRAR
              </Link>
            </div>
          </div>
          <div className="mt-8 text-center text-white/40 text-sm">
            *Coordinas el pago directamente con nuestro equipo, desde cualquier país.
          </div>
        </div>
      </section>
    </div>
  );
}
