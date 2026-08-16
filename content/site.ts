/**
 * Single source of truth for all site copy and data.
 *
 * Copy and pricing come from the live Stella TV site. Distributors come from
 * the authorized distributor network — change them here and every section
 * updates, no component edits required.
 */

export type NavLink = {
  label: string;
  href: string;
};

export type DeviceLink = {
  name: string;
  description: string;
  href: string;
  /** lucide-react icon name resolved by the consuming component. */
  icon: "smartphone" | "tv" | "box" | "monitor";
};

export type Plan = {
  id: string;
  name: string;
  /** Short line under the plan name, e.g. "12 + 2 meses (regalo extra)". */
  tagline: string;
  /** Integer part of the price. */
  price: number;
  /** Decimal part, kept as text so "00" renders as written. */
  cents: string;
  currency: string;
  /** Billing period shown under the price. */
  period: string;
  screens: number;
  /** Renders the plan as the visually promoted tier. */
  featured?: boolean;
  /** Short badge shown above a featured plan. */
  badge?: string;
};

export type CatalogItem = {
  title: string;
  description: string;
  image: string;
};

export type Spotlight = {
  eyebrow: string;
  title: string;
  description: string;
  image: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export type Distributor = {
  name: string;
  phone: string;
  whatsapp: string;
  telegram?: string;
};

export type Country = {
  name: string;
  flag: string;
  /** Distributor ids, resolved against `distributors`. */
  distributors: string[];
};

export const brand = {
  name: "Stella TV",
  tagline: "Comprar Stella TV Online",
  description:
    "Cuentas oficiales de Stella TV: más de mil canales en vivo, +90 canales de deportes, películas, series y anime en HD y Full HD. Planes mensuales, trimestrales, semestrales y anuales.",
  logo: "/image/stella-tv.1edb4e2f.png",
  logoCompact: "/image/logo.8c7d33ac.png",
  copyright:
    "Copyright © 2025 Stella TV Streaming Media, All rights reserved.",
} as const;

export const downloads = {
  mobile: "https://www.stellatv.net/cel.apk",
  tv: "https://www.stellatv.net/tv.apk",
} as const;

export const siteUrl = "https://www.stellatv.net";

export const navLinks: NavLink[] = [
  { label: "Planes", href: "/#planes" },
  { label: "Descargar", href: "/#descargar" },
  { label: "Contenido", href: "/#contenido" },
  { label: "Distribuidores", href: "/#distribuidores" },
  { label: "Dudas", href: "/#faqs" },
];

export const hero = {
  eyebrow: "Web oficial de Stella TV",
  title: brand.name,
  subtitle: "Comprar Stella TV Online",
  description:
    "Los mejores planes con precios económicos, ofertas y promociones. Canales en vivo, películas, series y mucho deporte al comprar Stella TV Oficial.",
  primaryCta: { label: "Ver planes", href: "/#planes" },
  secondaryCta: { label: "Ser revendedor", href: "/stellatv-reseller" },
  stats: [
    { value: "+1000", label: "Canales en vivo" },
    { value: "+90", label: "Canales de deportes" },
    { value: "4K", label: "HD, Full HD y 4K" },
    { value: "24/7", label: "Soporte al cliente" },
  ],
} as const;

export const devices: DeviceLink[] = [
  {
    name: "Celular",
    description: "Android y tablets. Instalás el APK y entrás con tus datos.",
    href: downloads.mobile,
    icon: "smartphone",
  },
  {
    name: "Smart TV",
    description: "Televisores con sistema Android y Google TV.",
    href: downloads.tv,
    icon: "tv",
  },
  {
    name: "TV Box / Fire TV",
    description: "TV Box, Fire TV Stick y Chromecast de 4ta generación.",
    href: downloads.tv,
    icon: "box",
  },
  {
    name: "PC / Mac",
    description: "Con un emulador de Android en Windows o macOS.",
    href: downloads.mobile,
    icon: "monitor",
  },
];

/** Features shared by every plan, in the order the live site lists them. */
export const planFeatures = [
  "+90 canales de deportes",
  "Películas, series y animes",
  "Contenido Kids",
  "Contenido +18 adultos",
  "Compatible con Android",
] as const;

export const plans: Plan[] = [
  {
    id: "mensual",
    name: "1 Mes",
    tagline: "Plan mensual",
    price: 8,
    cents: "00",
    currency: "USD",
    period: "1 mes",
    screens: 3,
  },
  {
    id: "trimestral",
    name: "3 Meses",
    tagline: "Plan trimestral",
    price: 23,
    cents: "99",
    currency: "USD",
    period: "3 meses",
    screens: 3,
  },
  {
    id: "semestral",
    name: "6 Meses",
    tagline: "Plan semestral",
    price: 48,
    cents: "99",
    currency: "USD",
    period: "6 + 1 meses",
    screens: 4,
    badge: "1 mes de regalo",
  },
  {
    id: "anual",
    name: "12 Meses",
    tagline: "Plan anual",
    price: 86,
    cents: "99",
    currency: "USD",
    period: "12 + 2 meses",
    screens: 4,
    featured: true,
    badge: "2 meses de regalo",
  },
];

export const catalog: CatalogItem[] = [
  {
    title: "Series de TV",
    description:
      "Las series más populares del momento en la mejor calidad, con temporadas completas disponibles.",
    image: "/image/flujo-tv-contenido-300x188.a2a92076.jpg",
  },
  {
    title: "Películas",
    description:
      "Las mejores películas de todos los tiempos junto a los estrenos más recientes, con gran calidad de imagen y audio.",
    image: "/image/flujo-tv-para-ninos-control-300x188.b96ae23f.jpg",
  },
  {
    title: "Deportes",
    description:
      "Más de 90 canales deportivos para disfrutar desde España, México, Ecuador, Chile, Bolivia y otros países.",
    image: "/image/app-flujo-tv-descargar-300x188.c15ea7f2.jpg",
  },
  {
    title: "Zona Kids",
    description:
      "Contenido premium para toda la familia, con una extensa biblioteca de películas, series y dibujos animados.",
    image: "/image/foto-de-series-flujo-tv-300x188.be38f99f.jpg",
  },
];

export const spotlights: Spotlight[] = [
  {
    eyebrow: "Canales HOT",
    title: "Contenido para adultos HD (+18)",
    description:
      "Una amplia selección de canales para adultos (+18). Además podés configurar un control parental con la clave que elijas para restringir el acceso, así solo vos podés verlo.",
    image: "/image/aplicacion-flujo-tv.7df5cfc3.png",
  },
  {
    eyebrow: "Eventos deportivos",
    title: "Viva el fútbol en directo aquí",
    description:
      "Todos los canales latinos y españoles para disfrutar de distintas ligas de fútbol y otros deportes, con múltiples opciones de visualización en HD y Full HD.",
    image: "/image/stellatv-app-gratis-para-celulares.184064c5.png",
  },
  {
    eyebrow: "Cine en casa",
    title: "Películas y series en estreno",
    description:
      "No hace falta ir al cine: en Stella TV encontrás las películas y series más recientes de distintas plataformas de streaming.",
    image: "/image/flujo-tv-apk-android.07056ab1.png",
  },
];

/** Authorized distributors, keyed by id. Several of them cover more than one country. */
export const distributors: Record<string, Distributor> = {
  oleadatvprocol: {
    name: "OLEADATVPROCOL",
    phone: "+57 314 576 3378",
    whatsapp: "https://wa.me/573145763378",
    telegram: "https://t.me/oleadatvpro",
  },
  mgsprotv: {
    name: "MGSPROTV",
    phone: "+57 313 253 1929",
    whatsapp: "https://wa.me/573132531929",
    telegram: "https://t.me/magprotv",
  },
  mgsproCintia: {
    name: "MGSPRO-CINTIA",
    phone: "+57 311 352 3221",
    whatsapp: "https://wa.me/573113523221",
    telegram: "https://t.me/oleadatvpro",
  },
  carlosValbuena: {
    name: "Carlos Valbuena",
    phone: "+58 414 368 8614",
    whatsapp: "https://wa.me/584143688614",
    telegram: "https://t.me/cvalbuena",
  },
  danielTv: {
    name: "DanielTV",
    phone: "+55 47 99182 2685",
    whatsapp: "https://wa.me/5547991822685",
    telegram: "https://t.me/jorgedaniel92",
  },
  drSystemSolutions: {
    name: "Dr System SolutionsPC",
    phone: "+593 98 585 9472",
    whatsapp: "https://wa.me/593985859472",
    telegram: "https://t.me/SOPORTEDEMAGISTVPRO",
  },
  ivan: {
    name: "Ivan",
    phone: "+593 98 301 3302",
    whatsapp: "https://wa.me/593983013302",
  },
};

export const countries: Country[] = [
  {
    name: "Colombia",
    flag: "/flags/Colombia-SVG.svg",
    distributors: ["mgsprotv", "oleadatvprocol", "mgsproCintia"],
  },
  {
    name: "Ecuador",
    flag: "/flags/Ecuador-SVG.svg",
    distributors: ["drSystemSolutions", "ivan"],
  },
  {
    name: "Venezuela",
    flag: "/flags/Venezuela-SVG.svg",
    distributors: ["carlosValbuena"],
  },
  { name: "Perú", flag: "/flags/Peru-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "Chile", flag: "/flags/Chile-SVG.svg", distributors: ["carlosValbuena"] },
  { name: "Brasil", flag: "/flags/Brazil-SVG.svg", distributors: ["danielTv"] },
  { name: "Cuba", flag: "/flags/Cuba-SVG.svg", distributors: ["danielTv"] },
  {
    name: "Panamá",
    flag: "/flags/Panama-SVG.svg",
    distributors: ["carlosValbuena"],
  },
  {
    name: "República Dominicana",
    flag: "/flags/DominicanRepublic-SVG.svg",
    distributors: ["carlosValbuena"],
  },
  {
    name: "Estados Unidos",
    flag: "/flags/USA-SVG.svg",
    distributors: ["carlosValbuena"],
  },
];

/** Prefilled WhatsApp link so the customer does not start from a blank chat. */
export function distributorWhatsapp(
  distributor: Distributor,
  country: string,
  plan?: string,
): string {
  const about = plan ? `el plan de ${plan}` : "los planes";
  const message = `Hola, te contacto desde la web de ${brand.name} (${country}). Quiero información sobre ${about} y la activación.`;

  return `${distributor.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Qué es Stella TV y para qué sirve?",
    answer:
      "Stella TV es una aplicación de suscripción que permite acceder a más de mil canales de televisión en vivo. Además ofrece películas, series, anime y contenido para adultos (+18). El servicio está disponible en celulares y en smart TVs con sistema Android.",
  },
  {
    question: "¿Qué dispositivos son compatibles con Stella TV?",
    answer:
      "Por ahora la aplicación es compatible únicamente con dispositivos Android: celulares, tabletas, Fire TV Stick, smart TVs con Android, TV Box, Chromecast de 4ta generación y emuladores de Android para PC con Windows o macOS.",
  },
  {
    question: "¿En cuántas pantallas se puede ver?",
    answer:
      "Los planes mensual y trimestral incluyen 3 pantallas simultáneas; los planes semestral y anual, 4. Podés usarlas en la misma casa o en lugares distintos, con la misma o diferente IP.",
  },
  {
    question: "¿Cómo instalar Stella TV en una PC o Mac?",
    answer:
      "La instalación solo es posible en computadoras con un emulador de Android. Sin ese emulador no se puede instalar la aplicación de Stella TV.",
  },
  {
    question: "¿Brindan un demo de prueba?",
    answer:
      "Por el momento no hay demos. Antes se daban pruebas de 6 horas, pero no alcanzaban para probar todo el servicio (canales, películas, series, anime). Por eso recomendamos comprar 1 mes y probarlo completo.",
  },
  {
    question: "¿Se puede instalar en un iPhone?",
    answer:
      "No. La aplicación solo puede instalarse en dispositivos móviles con Android. La lista IPTV que funcionaba en iOS está deshabilitada, así que no es posible ver el contenido en iOS.",
  },
  {
    question: "¿Se puede ver en un TV Samsung o LG?",
    answer:
      "Los televisores Samsung o LG no usan sistema operativo Android, por lo que no se puede instalar la aplicación. En esos casos recomendamos un TV Box o un Fire TV Stick para adaptarlo a tu smart TV.",
  },
];

export const footer = {
  description:
    "Somos Stella TV Oficial, el lugar donde podés adquirir una cuenta premium para disfrutar del mejor entretenimiento en línea. ¡Ofrecemos los mejores planes y promociones!",
  columns: [
    {
      title: "Ofrecemos",
      links: [
        { label: "Canales en vivo", href: "/#contenido" },
        { label: "Películas HD", href: "/#contenido" },
        { label: "Series de TV", href: "/#contenido" },
        { label: "Deportes en vivo", href: "/#contenido" },
        { label: "Canales de adultos", href: "/#contenido" },
      ],
    },
    {
      title: "Instalar en",
      links: [
        { label: "Celulares", href: "/#descargar" },
        { label: "Smart TV", href: "/#descargar" },
        { label: "TV Box", href: "/#descargar" },
        { label: "Fire Stick", href: "/#descargar" },
        { label: "PC / Mac", href: "/#descargar" },
      ],
    },
    {
      title: "Stella TV",
      links: [
        { label: "Planes", href: "/#planes" },
        { label: "Distribuidores", href: "/#distribuidores" },
        { label: "Ser revendedor", href: "/stellatv-reseller" },
        { label: "Preguntas frecuentes", href: "/#faqs" },
      ],
    },
  ],
} as const;
