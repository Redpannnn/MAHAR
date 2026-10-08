// ============================================================
// Mahar by Memoraa' — Catalog data
// 6 Mahar products + 3 Ring Box categories with their variants.
// All images are served from imglinkv-3.vercel.app.
// ============================================================

export type PriceRow = {
  /** Size or variant label, e.g. "Size 35 x 45 CM" or "Sekat Akrilik Size M" */
  size: string;
  /** Price without LED, e.g. "Rp 1.090.000" */
  withoutLed?: string;
  /** Price with LED, e.g. "Rp 1.190.000" */
  withLed?: string;
  /** Single price (used when there is no Tanpa LED / + LED split, e.g. Ring Box) */
  price?: string;
  /** Extra note for the row, e.g. "MAX 3 item (Tanpa Uang)" or "Wayang Rustic" */
  note?: string;
  /** Optional image for the row (used by Ring Box variants that have their own photo) */
  image?: string;
};

export type Product = {
  id: string;
  category: "mahar" | "ringbox";
  name: string;
  shortName: string;
  badge?: string;
  description: string;
  specs: string[];
  prices: PriceRow[];
  startingPrice: string;
  images: string[];
};

// ---------------------------------------------------------------
// Mahar catalog
// ---------------------------------------------------------------

export const maharProducts: Product[] = [
  {
    id: "m-resin-koin-kitab",
    category: "mahar",
    name: "Mahar Gunungan Resin Koin Kitab",
    shortName: "Resin Koin Kitab",
    badge: "Populer",
    description:
      "Perpaduan koin 100 rupiah asli, kitab resin, dan akrilik dengan frame kayu gunungan pilihan warna. Full custom sesuai hari bahagiamu.",
    specs: [
      "Ornamen dalam menggunakan Akrilik",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Menggunakan Frame Kayu Gunungan (Coklat, Hitam, Putih, Natural)",
      "Bebas Request Warna Bunga, Warna Resin",
      "Include Koin 100rupiah asli",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno, Replika Perhiasan atau Logo",
    ],
    prices: [
      { size: "35 x 45 CM", withoutLed: "Rp 1.090.000", withLed: "Rp 1.190.000" },
      { size: "40 x 50 CM", withoutLed: "Rp 1.280.000", withLed: "Rp 1.410.000" },
      { size: "40 x 60 CM", withoutLed: "Rp 1.450.000", withLed: "Rp 1.600.000" },
      { size: "50 x 70 CM", withoutLed: "Rp 1.850.000", withLed: "Rp 2.000.000" },
      { size: "60 x 80 CM", withoutLed: "Rp 2.200.000", withLed: "Rp 2.380.000" },
    ],
    startingPrice: "Rp 1.090.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzhhc8s43v1whl4/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzhhdi6lqovwskm/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzhhe6gafkscpa0/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzhhepts1dz2imy/file",
    ],
  },
  {
    id: "m-resin-wayang-kulit",
    category: "mahar",
    name: "Mahar Gunungan Resin Wayang Kulit",
    shortName: "Resin Wayang Kulit",
    badge: "Premium",
    description:
      "Wayang kulit ukir asli dipadukan dengan frame kayu gunungan dan ornamen akrilik. Elegan, bernilai, dan penuh makna.",
    specs: [
      "Ornamen dalam menggunakan Akrilik",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Menggunakan Frame Kayu Gunungan (Coklat, Hitam, Putih, Natural)",
      "Wayang Menggunakan Wayang Kulit Ukir Asli",
      "Bebas Request Warna Bunga, Warna Resin",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno, Replika Perhiasan atau Logo",
    ],
    prices: [
      { size: "30 x 40 CM", withoutLed: "Rp 1.070.000", withLed: "Rp 1.170.000" },
      { size: "35 x 45 CM", withoutLed: "Rp 1.170.000", withLed: "Rp 1.270.000" },
      { size: "40 x 50 CM", withoutLed: "Rp 1.380.000", withLed: "Rp 1.510.000" },
      { size: "40 x 60 CM", withoutLed: "Rp 1.580.000", withLed: "Rp 1.730.000" },
      { size: "50 x 70 CM", withoutLed: "Rp 1.980.000", withLed: "Rp 2.130.000" },
      { size: "60 x 80 CM", withoutLed: "Rp 2.330.000", withLed: "Rp 2.510.000" },
    ],
    startingPrice: "Rp 1.070.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzhrxx9lnepim7k/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzhryyy0d4h8svt/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzhrznrumkl41zu/file",
    ],
  },
  {
    id: "m-resin-modern",
    category: "mahar",
    name: "Mahar Gunungan Resin Modern",
    shortName: "Resin Modern",
    badge: "Modern",
    description:
      "Tampilan modern dengan frame akrilik dan background resin bebas request warna. Cocok untuk pasangan yang suka desain kontemporer.",
    specs: [
      "Ornamen dalam menggunakan Akrilik",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Menggunakan Frame Akrilik",
      "Menggunakan Background Resin (Bebas Request Warna)",
      "Bebas Request Warna Bunga, Warna Plat",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno, Replika Perhiasan atau Logo",
    ],
    prices: [
      { size: "30 x 40 CM", withoutLed: "Rp 950.000", withLed: "Rp 1.050.000" },
      { size: "35 x 45 CM", withoutLed: "Rp 1.060.000", withLed: "Rp 1.160.000" },
      { size: "40 x 50 CM", withoutLed: "Rp 1.200.000", withLed: "Rp 1.330.000" },
      { size: "40 x 60 CM", withoutLed: "Rp 1.360.000", withLed: "Rp 1.510.000" },
    ],
    startingPrice: "Rp 950.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzi1gj3dyzmc5nh/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzi1hhgqmy5n90f/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzi1ib741innrjz/file",
    ],
  },
  {
    id: "m-wayang-lengkung",
    category: "mahar",
    name: "Mahar Wayang Kulit Frame Lengkung",
    shortName: "Wayang Frame Lengkung",
    description:
      "Wayang kulit ukir asli dengan frame lengkung elegan. Detail ornamen akrilik dan bebas request warna bunga.",
    specs: [
      "Ornamen dalam menggunakan Akrilik",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Menggunakan Frame Lengkung",
      "Include Wayang Kulit Ukir Asli",
      "Bebas Request Warna Bunga",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno, Replika Perhiasan atau Logo",
    ],
    prices: [
      { size: "30 x 40 CM", withoutLed: "Rp 930.000", withLed: "Rp 1.030.000" },
      { size: "35 x 45 CM", withoutLed: "Rp 1.030.000", withLed: "Rp 1.130.000" },
      { size: "40 x 50 CM", withoutLed: "Rp 1.170.000", withLed: "Rp 1.320.000" },
      { size: "40 x 60 CM", withoutLed: "Rp 1.280.000", withLed: "Rp 1.430.000" },
    ],
    startingPrice: "Rp 930.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzic5vs4h1xsmc2/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzic4pu4hiawunh/file",
    ],
  },
  {
    id: "m-java-series",
    category: "mahar",
    name: "Mahar Java Series",
    shortName: "Java Series",
    badge: "Harga Terbaik",
    description:
      "Mahar Java Series dengan frame fiber ukir double frame 3 cm. Pilihan wayang Rustic atau Scrapbook, bebas request pecahan wayang.",
    specs: [
      "Ornamen dalam menggunakan Akrilik",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Menggunakan Frame Fiber Ukir Double Frame 3 CM",
      "Bebas Request Pecahan Wayang",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno, Replika Perhiasan atau Logo",
    ],
    prices: [
      {
        size: "32 x 47 CM",
        note: "Wayang Rustic",
        withoutLed: "Rp 680.000",
        withLed: "Rp 780.000",
      },
      {
        size: "32 x 47 CM",
        note: "Wayang Scrapbook",
        withoutLed: "Rp 670.000",
        withLed: "Rp 770.000",
      },
    ],
    startingPrice: "Rp 670.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuziialhkp3s20m4/file",
      "https://imglinkv-3.vercel.app/api/images/cmuziie5s1dd29khw/file",
    ],
  },
  {
    id: "m-garden-bloom",
    category: "mahar",
    name: "Mahar Garden Bloom",
    shortName: "Garden Bloom",
    badge: "Best Seller",
    description:
      "Mahar dengan frame akrilik dan ornamen akrilik warna. Bebas request desain, warna bunga, dan plat akrilik. Personal dan estetik.",
    specs: [
      "Ornamen dalam menggunakan Akrilik Warna",
      "Nama, Tanggal dan Nominal menggunakan Akrilik",
      "Bebas Request Desain",
      "Menggunakan Frame Akrilik",
      "Bebas Request Warna Bunga dan Plat Akrilik",
      "Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 Keping) dan Buku Nikah Papper",
      "Bisa tambah LED, Koin Kuno dan Replika Perhiasan",
    ],
    prices: [
      { size: "30 x 40 CM", withoutLed: "Rp 900.000", withLed: "Rp 1.000.000" },
      { size: "35 x 45 CM", withoutLed: "Rp 1.000.000", withLed: "Rp 1.100.000" },
      { size: "40 x 50 CM", withoutLed: "Rp 1.160.000", withLed: "Rp 1.290.000" },
      { size: "40 x 60 CM", withoutLed: "Rp 1.360.000", withLed: "Rp 1.500.000" },
      { size: "50 x 70 CM", withoutLed: "Rp 1.730.000", withLed: "Rp 1.880.000" },
      { size: "60 x 80 CM", withoutLed: "Rp 2.130.000", withLed: "Rp 2.280.000" },
    ],
    startingPrice: "Rp 900.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzir2khr0sl0i6w/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzir5opk7no23bl/file",
    ],
  },
];

// ---------------------------------------------------------------
// Ring Box catalog
// Each Ring Box category may have multiple size/variant rows,
// each with its own price (and optionally its own sample photo).
// ---------------------------------------------------------------

export const ringBoxProducts: Product[] = [
  {
    id: "rb-sekat-akrilik",
    category: "ringbox",
    name: "Ring Box Sekat Akrilik",
    shortName: "Sekat Akrilik",
    badge: "Promo",
    description:
      "Box akrilik full transparan dengan sekat dan nama Print UV Gold. Tersedia size M, L, dan XL dengan kapasitas berbeda.",
    specs: [
      "Menggunakan sekat Full Akrilik",
      "Bebas request warna bunga",
      "Nama menggunakan Print UV Gold",
      "Bisa request warna alas dalam, dsb.",
    ],
    prices: [
      {
        size: "Sekat Akrilik Size M",
        note: "MAX 3 item (Tanpa Uang)",
        price: "Rp 390.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzizg3fc8fs1v80/file",
      },
      {
        size: "Sekat Akrilik Size L",
        note: "MAX 4 item isian",
        price: "Rp 490.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzizf3pfljj494v/file",
      },
      {
        size: "Sekat Akrilik Size XL",
        note: "MAX 5 item isian (Tanpa Uang)",
        price: "Rp 570.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzizdunh1l0x463/file",
      },
    ],
    startingPrice: "Rp 390.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzizg3fc8fs1v80/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzizf3pfljj494v/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzizdunh1l0x463/file",
    ],
  },
  {
    id: "rb-gypsum-premium",
    category: "ringbox",
    name: "Ring Box Gypsum Premium",
    shortName: "Gypsum Premium",
    badge: "Best Seller",
    description:
      "Ring box premium setinggi 20 cm dari gypsum + resin. Cuttingan nama tersedia Gold, Rosegold, atau Silver. Pilihan cincin only atau perhiasan lengkap.",
    specs: [
      "Tinggi 20 cm",
      "Semua bahan terbuat dari gypsum + resin",
      "Bisa request warna bunga",
      "Nama cuttingan (Gold, Rosegold, Silver)",
    ],
    prices: [
      {
        size: "Cincin Only",
        price: "Rp 500.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzj79t2ib89bos3/file",
      },
      {
        size: "Perhiasan Lengkap",
        price: "Rp 550.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzj78bncdk3d0ij/file",
      },
    ],
    startingPrice: "Rp 500.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzj79t2ib89bos3/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzj78bncdk3d0ij/file",
    ],
  },
  {
    id: "rb-terarium-kotak",
    category: "ringbox",
    name: "Ring Box Terarium Kotak",
    shortName: "Terarium Kotak",
    description:
      "Kotak terarium dengan manekin (Hitam, Merah, Natural) dan cuttingan nama/tanggal dari plywood. Size M max 3 isian, Size L max 4 isian.",
    specs: [
      "Menggunakan Kotak Terarium",
      "Bebas request warna bunga",
      "Beberapa pilihan warna Manekin (Hitam, Merah, Natural)",
      "Cuttingan Nama dan Tanggal menggunakan plywood",
      "Size M max 3 isian perhiasan",
      "Size L max 4 isian perhiasan",
    ],
    prices: [
      {
        size: "Size M",
        note: "Max 3 isian perhiasan",
        price: "Rp 395.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzjbu78y1clsc5e/file",
      },
      {
        size: "Size L",
        note: "Max 4 isian perhiasan",
        price: "Rp 470.000",
        image: "https://imglinkv-3.vercel.app/api/images/cmuzjbvng1g3mlmsz/file",
      },
    ],
    startingPrice: "Rp 395.000",
    images: [
      "https://imglinkv-3.vercel.app/api/images/cmuzjbu78y1clsc5e/file",
      "https://imglinkv-3.vercel.app/api/images/cmuzjbvng1g3mlmsz/file",
    ],
  },
];

// All products combined (used to keep hero image selection tidy).
export const allProducts: Product[] = [...maharProducts, ...ringBoxProducts];

// ---------------------------------------------------------------
// Hero featured images (hand-picked from the new catalog).
// ---------------------------------------------------------------

export const heroImages = {
  main: "https://imglinkv-3.vercel.app/api/images/cmuzhhc8s43v1whl4/file", // Mahar Gunungan Resin Koin Kitab
  float: "https://imglinkv-3.vercel.app/api/images/cmuzj79t2ib89bos3/file", // Ring Box Gypsum Premium
};

// ---------------------------------------------------------------
// Admin WhatsApp number.
// Format: 62 + nomor (tanpa +, tanpa 0 di depan).
// ---------------------------------------------------------------

export const ADMIN_WA = "6285183256967";

/**
 * Build a wa.me link with a pre-filled message.
 *
 * - If `product` is provided (used from the preview modal), the message reads:
 *   "Halo admin, saya tertarik dengan {product}. Bisa saya berkonsultasi dahulu?"
 *   Since mahar product names already start with "Mahar …" and ring box names
 *   already start with "Ring Box …", the category is conveyed automatically.
 * - If no product is given (navbar CTA, floating button, footer chat link),
 *   a general inquiry template is used instead.
 */
export function waLink(product?: string): string {
  const msg = product
    ? `Halo admin, saya tertarik dengan ${product}. Bisa saya berkonsultasi dahulu?`
    : `Halo admin, saya tertarik dengan produk Mahar & Ring Box dari Memoraa'. Bisa saya berkonsultasi dahulu?`;
  return `https://wa.me/${ADMIN_WA}?text=${encodeURIComponent(msg)}`;
}
