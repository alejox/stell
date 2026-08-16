/**
 * Single source of truth for all site copy and data.
 *
 * The prose here is written for this site — it is deliberately not a copy of
 * any other Stella TV page, so search engines have no duplicate to collapse.
 * Facts (prices, screen counts, supported devices) are the ones the service
 * actually offers; change them here and every section updates.
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
  /** Short line under the plan name, e.g. "Plan anual". */
  tagline: string;
  /** Integer part of the price. */
  price: number;
  /** Decimal part, kept as text so "00" renders as written. */
  cents: string;
  currency: string;
  /** Billing period shown under the price. */
  period: string;
  screens: number;
  /** One line explaining who the plan is for. */
  bestFor: string;
  /** Renders the plan as the visually promoted tier. */
  featured?: boolean;
  /** Short badge shown above a featured plan. */
  badge?: string;
};

export type Step = {
  title: string;
  description: string;
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
  tagline: "Televisión en vivo, películas y series en un solo lugar",
  description:
    "Stella TV reúne más de mil canales en vivo, +90 señales deportivas, películas, series y anime en una sola aplicación Android. Se compra por distribuidor autorizado y se activa el mismo día.",
  logo: "/image/stella-tv-logo.png",
  logoCompact: "/image/stella-tv-isotipo.png",
  legalName: "Stella TV",
} as const;

export const downloads = {
  mobile: "https://www.stellatv.net/cel.apk",
  tv: "https://www.stellatv.net/tv.apk",
} as const;

/** Canonical origin of THIS site. Everything SEO-related derives from it. */
export const siteUrl = "https://www.stellatv.lat";

/**
 * Search-facing copy. Kept apart from the on-page copy because it answers a
 * different question: what a person typing into Google needs to read to click.
 */
export const seo = {
  title: "Stella TV: precios, planes y cómo comprar tu cuenta",
  description:
    "Compara los planes de Stella TV desde $8, revisa qué dispositivos son compatibles y compra con un distribuidor autorizado de tu país. Activación el mismo día.",
  keywords: [
    "stella tv",
    "comprar stella tv",
    "planes stella tv",
    "precios stella tv",
    "cuenta stella tv",
    "stella tv apk",
    "stella tv android",
    "stella tv 2026",
    "distribuidores stella tv",
    "canales en vivo",
  ],
  /** Generated at build time by app/opengraph-image.tsx (1200x630 PNG). */
  socialImage: "/opengraph-image",
} as const;

export const navLinks: NavLink[] = [
  { label: "Planes", href: "/#planes" },
  { label: "Cómo comprar", href: "/#como-comprar" },
  { label: "Dispositivos", href: "/#descargar" },
  { label: "Contenido", href: "/#contenido" },
  { label: "Preguntas", href: "/#faqs" },
];

export const hero = {
  eyebrow: "Distribuidores autorizados",
  title: brand.name,
  subtitle: "Toda la televisión en una sola app",
  description:
    "Canales en vivo, deportes, películas, series y anime desde tu celular, tu smart TV o tu TV Box. Eliges el plan, escribes al distribuidor de tu país y recibes tus datos de acceso el mismo día.",
  primaryCta: { label: "Ver precios", href: "/#planes" },
  secondaryCta: { label: "Cómo comprar", href: "/#como-comprar" },
  stats: [
    { value: "+1000", label: "Canales en vivo" },
    { value: "+90", label: "Señales de deportes" },
    { value: "4", label: "Pantallas a la vez" },
    { value: "10", label: "Países con distribuidor" },
  ],
} as const;

export const devices: DeviceLink[] = [
  {
    name: "Celular y tablet",
    description:
      "Descarga el APK en cualquier Android 5 o superior, ingresa usuario y contraseña, y listo.",
    href: downloads.mobile,
    icon: "smartphone",
  },
  {
    name: "Smart TV Android",
    description:
      "Para televisores con Android TV o Google TV integrado. Se instala directo desde el archivo.",
    href: downloads.tv,
    icon: "tv",
  },
  {
    name: "TV Box y Fire TV",
    description:
      "TV Box, Fire TV Stick y Chromecast de 4ta generación en adelante usan la misma versión de TV.",
    href: downloads.tv,
    icon: "box",
  },
  {
    name: "PC y Mac",
    description:
      "Funciona a través de un emulador de Android como BlueStacks. No existe versión nativa de escritorio.",
    href: downloads.mobile,
    icon: "monitor",
  },
];

/** Features shared by every plan. */
export const planFeatures = [
  "+1000 canales en vivo",
  "+90 señales deportivas",
  "Películas, series y anime",
  "Sección infantil",
  "Canales +18 con control parental",
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
    bestFor: "Para probar el servicio completo antes de comprometerte.",
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
    bestFor: "Para una temporada deportiva sin renovar cada mes.",
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
    bestFor: "Medio año pagando el equivalente a $7 por mes.",
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
    bestFor: "El precio por mes más bajo: 14 meses por el valor de 12.",
  },
];

export const steps: Step[] = [
  {
    title: "Elige tu plan",
    description:
      "Compara duración y pantallas simultáneas. Los planes largos incluyen meses de regalo y bajan el costo mensual.",
  },
  {
    title: "Escribe al distribuidor de tu país",
    description:
      "Cada distribuidor maneja los medios de pago locales: transferencia, billeteras digitales, tarjeta o cripto. El chat de WhatsApp se abre con tu consulta ya escrita.",
  },
  {
    title: "Recibe tus datos y descarga la app",
    description:
      "El usuario y la contraseña llegan por correo el mismo día. Instalas el APK en tu dispositivo, inicias sesión y empiezas a ver.",
  },
];

export const catalog: CatalogItem[] = [
  {
    title: "Series y novelas",
    description:
      "Temporadas completas de estrenos y clásicos, con audio latino y subtitulado, ordenadas por género para que no pierdas tiempo buscando.",
    image: "/image/stella-tv-series.svg",
  },
  {
    title: "Películas",
    description:
      "Catálogo bajo demanda que se actualiza con los estrenos recientes, además del cine que ya conoces, en HD y Full HD.",
    image: "/image/stella-tv-peliculas.svg",
  },
  {
    title: "Deportes en vivo",
    description:
      "Más de 90 señales deportivas de España y Latinoamérica: fútbol de liga, torneos internacionales, motor, boxeo y más.",
    image: "/image/stella-tv-deportes.svg",
  },
  {
    title: "Infantil",
    description:
      "Una sección aparte con dibujos animados, series y películas para los más chicos, separada del resto del catálogo.",
    image: "/image/stella-tv-infantil.svg",
  },
];

export const spotlights: Spotlight[] = [
  {
    eyebrow: "Deportes",
    title: "El partido, en vivo y sin recargas",
    description:
      "Las señales deportivas latinas y españolas están agrupadas en su propia categoría, con varias opciones por evento. Si una se satura, cambias a otra sin perder el partido.",
    image: "/image/stella-tv-deportes-en-vivo.svg",
  },
  {
    eyebrow: "Control parental",
    title: "Tú decides qué se ve en tu casa",
    description:
      "Los canales para adultos (+18) se bloquean con una clave que eliges al configurar la aplicación. Sin esa clave, esa categoría no aparece en el menú.",
    image: "/image/stella-tv-control-parental.svg",
  },
  {
    eyebrow: "Multipantalla",
    title: "Hasta 4 dispositivos al mismo tiempo",
    description:
      "Una misma cuenta funciona en el televisor del living, el celular de la oficina y la tablet de los chicos a la vez. No hace falta que estén en la misma casa ni en la misma red.",
    image: "/image/stella-tv-multipantalla.svg",
  },
];

/** Official support line: reseller enquiries and general customer service. */
export const support = {
  phone: "+57 321 664 7256",
  whatsapp: "https://wa.me/573216647256",
} as const;

/** Opens the support chat with the reason for the message already written. */
export function supportWhatsapp(topic: string): string {
  const message = `Hola, te contacto desde la web de ${brand.name}. ${topic}`;

  return `${support.whatsapp}?text=${encodeURIComponent(message)}`;
}

/** Authorized distributors, keyed by id. Several of them cover more than one country. */
export const distributors: Record<string, Distributor> = {
  oleadatvprocol: {
    name: "STELLATV-COLOMBIA",
    phone: "+57 321 6647256",
    whatsapp: "https://wa.me/573216647256",
    telegram: "https://t.me/oleadatvpro",
  },
  mgsprotv: {
    name: "STELLATV-JUAN",
    phone: "+57 313 253 1929",
    whatsapp: "https://wa.me/573132531929",
    telegram: "https://t.me/magprotv",
  },
  mgsproCintia: {
    name: "STELLATV-CINTIA",
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
    distributors: ["oleadatvprocol","mgsprotv", "mgsproCintia"],
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
  plan?: string,
): string {
  const about = plan ? `el plan de ${plan}` : "los planes";
  const message = `Hola, te contacto desde la web de ${brand.name}. Quiero información sobre ${about} y la activación.`;

  return `${distributor.whatsapp}?text=${encodeURIComponent(message)}`;
}

export const faqs: FaqItem[] = [
  {
    question: "¿Qué es Stella TV?",
    answer:
      "Es una aplicación de suscripción para dispositivos Android que reúne televisión en vivo y contenido bajo demanda en un mismo lugar: más de mil canales, más de 90 señales deportivas, películas, series, anime, una sección infantil y canales para adultos. Se paga por período (1, 3, 6 o 12 meses) y no depende de la operadora de cable de tu zona.",
  },
  {
    question: "¿Cómo compro una cuenta y cuánto tarda en activarse?",
    answer:
      "Eliges el plan, abres el chat del distribuidor de tu país desde esta página y coordinas el pago con los medios que ese distribuidor maneja. Una vez confirmado, el usuario y la contraseña llegan a tu correo el mismo día. No hay formulario ni pasarela intermedia: hablas directo con la persona que activa tu cuenta.",
  },
  {
    question: "¿Cuánto cuesta Stella TV?",
    answer:
      "El plan mensual cuesta 8 dólares. El trimestral, 23,99. El semestral, 48,99 e incluye un mes adicional de regalo. El anual, 86,99 con dos meses de regalo, lo que deja el costo mensual más bajo de los cuatro. Los precios son los mismos para todos los países; lo que cambia es el medio de pago local de cada distribuidor.",
  },
  {
    question: "¿En cuántos dispositivos puedo ver al mismo tiempo?",
    answer:
      "Los planes mensual y trimestral permiten 3 reproducciones simultáneas; el semestral y el anual, 4. Las pantallas no tienen que estar en la misma casa ni en la misma red: pueden ser direcciones IP distintas, en ciudades distintas. Registrar dispositivos no consume el límite, solo las reproducciones activas.",
  },
  {
    question: "¿Qué dispositivos son compatibles?",
    answer:
      "Todo lo que corra Android: celulares, tablets, televisores con Android TV o Google TV, TV Box, Fire TV Stick y Chromecast de 4ta generación en adelante. En computadoras funciona a través de un emulador de Android. Hay dos archivos de instalación distintos, uno pensado para celular y otro para televisor.",
  },
  {
    question: "¿Funciona en iPhone o iPad?",
    answer:
      "No. La aplicación es exclusivamente para Android y la lista IPTV que antes permitía verlo en iOS ya no está habilitada. Si tu único dispositivo es un iPhone, el servicio no te va a servir. Una alternativa es usar un TV Box o Fire TV Stick conectado al televisor.",
  },
  {
    question: "¿Sirve en un televisor Samsung o LG?",
    answer:
      "No directamente, porque esos televisores usan Tizen y webOS, no Android, y no admiten la instalación del archivo. La solución práctica es conectar un TV Box o un Fire TV Stick por HDMI: el televisor pasa a ser solo la pantalla y la aplicación corre en ese dispositivo.",
  },
  {
    question: "¿Hay una prueba gratuita?",
    answer:
      "No ofrecemos demos. Las pruebas de pocas horas que existían antes no alcanzaban para recorrer el catálogo real, y terminaban generando más dudas que respuestas. Si quieres evaluar el servicio, el camino honesto es el plan de un mes: cuesta 8 dólares y te da acceso a exactamente lo mismo que los planes largos.",
  },
  {
    question: "¿Qué velocidad de internet necesito?",
    answer:
      "Como referencia general para streaming, con 5 Mbps estables se ve bien en HD y a partir de 15 o 20 Mbps tienes margen cómodo para Full HD y varias pantallas a la vez. Más que la velocidad máxima contratada, lo que importa es la estabilidad de la conexión, sobre todo por WiFi y en horario pico.",
  },
  {
    question: "¿Cómo controlo lo que ven los niños?",
    answer:
      "Al configurar la aplicación defines una clave para la categoría de adultos (+18). Sin esa clave, esos canales no se muestran en el menú. Además hay una sección infantil separada, con dibujos animados y películas familiares, para que los chicos naveguen sin cruzarse con el resto del catálogo.",
  },
  {
    question: "¿Cómo renuevo cuando se vence mi cuenta?",
    answer:
      "Le escribes al mismo distribuidor con el que compraste y le pides la renovación del período que quieras. La cuenta mantiene el usuario y la contraseña de siempre, así que no hay que reinstalar la aplicación ni reconfigurar los dispositivos: se extiende la fecha de vencimiento y listo.",
  },
  {
    question: "¿Qué formas de pago se aceptan?",
    answer:
      "Depende del país, porque cada distribuidor trabaja con los medios de su plaza: transferencias y depósitos bancarios, billeteras digitales, tarjetas de crédito y débito, y criptomonedas en varios casos. Al abrir el chat, el distribuidor te confirma qué opciones tiene disponibles en ese momento.",
  },
];

export const footer = {
  description:
    "Vendemos y activamos cuentas de Stella TV a través de una red de distribuidores autorizados en diez países. Aquí encuentras los precios actualizados, los requisitos de instalación y el contacto directo de tu zona.",
  columns: [
    {
      title: "Contenido",
      links: [
        { label: "Canales en vivo", href: "/#contenido" },
        { label: "Películas", href: "/#contenido" },
        { label: "Series y novelas", href: "/#contenido" },
        { label: "Deportes", href: "/#contenido" },
        { label: "Infantil", href: "/#contenido" },
      ],
    },
    {
      title: "Instalación",
      links: [
        { label: "Celular y tablet", href: "/#descargar" },
        { label: "Smart TV Android", href: "/#descargar" },
        { label: "TV Box", href: "/#descargar" },
        { label: "Fire TV Stick", href: "/#descargar" },
        { label: "PC y Mac", href: "/#descargar" },
      ],
    },
    {
      title: "Comprar",
      links: [
        { label: "Precios y planes", href: "/#planes" },
        { label: "Cómo comprar", href: "/#como-comprar" },
        { label: "Distribuidores", href: "/#distribuidores" },
        { label: "Ser revendedor", href: "/stellatv-reseller" },
        { label: "Preguntas frecuentes", href: "/#faqs" },
      ],
    },
  ],
} as const;
