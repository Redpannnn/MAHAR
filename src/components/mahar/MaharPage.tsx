"use client";

import { useEffect, useMemo, useRef, useState, type FC, type ReactNode } from "react";
import {
  maharProducts,
  ringBoxProducts,
  heroImages,
  waLink,
  type Product,
  type PriceRow,
} from "./products";

// ============================================================
// Icons
// ============================================================

const DiamondIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 3h12l4 6-10 13L2 9l4-6z" />
    <path d="M2 9h20" />
    <path d="M12 22 8 9l4-6 4 6-4 13z" />
  </svg>
);

const WhatsAppIcon: FC<{ size?: number }> = ({ size = 16 }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" width={size} height={size} aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const InstagramIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const ImageIcon: FC<{ size?: number }> = ({ size = 12 }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round" width={size} height={size} aria-hidden="true">
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="9" cy="9" r="2" />
    <path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21" />
  </svg>
);

// Step icons (inline so we don't depend on an icon lib mapping)
const Step1Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 0 1-8 0" />
  </svg>
);
const Step2Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const Step3Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <rect x="2" y="6" width="20" height="12" rx="2" />
    <circle cx="12" cy="12" r="2.5" />
  </svg>
);
const Step4Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M5 22h14" />
    <path d="M5 2h14" />
    <path d="M17 22v-4.17a2 2 0 0 0-.59-1.42L12 12l-4.41 4.41A2 2 0 0 0 7 17.83V22" />
    <path d="M7 2v4.17a2 2 0 0 0 .59 1.42L12 12l4.41-4.41A2 2 0 0 0 17 6.17V2" />
  </svg>
);
const Step5Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);
const Step6Icon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
    <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
    <line x1="12" y1="22.08" x2="12" y2="12" />
  </svg>
);

const ChatIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
  </svg>
);
const PinIcon: FC = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

// ============================================================
// Steps data
// ============================================================

const ORDER_STEPS: { tag: string; title: string; desc: string; Icon: FC }[] = [
  { tag: "Langkah 1", title: "Pilih Produk", desc: "Pilih template mahar atau ring box favoritmu di katalog. Masih ragu? Admin bantu rekomendasi.", Icon: Step1Icon },
  { tag: "Langkah 2", title: "Kontak Admin", desc: "Chat admin via WhatsApp, sebutkan produk, ukuran, dan tanggal acaramu.", Icon: Step2Icon },
  { tag: "Langkah 3", title: "DP Min. Rp300rb", desc: "Pesanan langsung masuk list produksi setelah DP minimal Rp300.000 masuk.", Icon: Step3Icon },
  { tag: "Langkah 4", title: "Antrian Proses", desc: "Pesanan dikerjakan sesuai urutan antrian dengan detail & penuh ketelitian.", Icon: Step4Icon },
  { tag: "Langkah 5", title: "Pelunasan", desc: "Setelah barang jadi, lakukan pelunasan dulu sebelum barang dikirim.", Icon: Step5Icon },
  { tag: "Langkah 6", title: "Siap Kirim", desc: "Barang dikemas aman & rapi, lalu meluncur ke alamatmu. Saatnya tunjukkin! 🎉", Icon: Step6Icon },
];

// ============================================================
// Hook: scroll reveal with IntersectionObserver
// ============================================================

function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("visible");
            io.unobserve(e.target);
          }
        }
      },
      { threshold: 0.12 }
    );
    const els = document.querySelectorAll<HTMLElement>(".reveal");
    els.forEach((el) => {
      io.observe(el);
      el.addEventListener("animationend", () => el.classList.add("done"), { once: true });
    });
    return () => io.disconnect();
  }, []);
}

// ============================================================
// Hook: lock body scroll while modal is open
// ============================================================

function useBodyScrollLock(locked: boolean) {
  useEffect(() => {
    if (!locked) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [locked]);
}

// ============================================================
// Navbar
// ============================================================

const Navbar: FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#beranda", label: "Beranda" },
    { href: "#cara-pemesanan", label: "Cara Pemesanan" },
    { href: "#mahar", label: "Mahar" },
    { href: "#ringbox", label: "Ring Box" },
    { href: "#kontak", label: "Kontak" },
  ];

  return (
    <nav className={`nav${scrolled ? " scrolled" : ""}`} id="nav">
      <div className="container nav-inner">
        <a href="#beranda" className="brand" onClick={() => setOpen(false)}>
          <span className="brand-mark">
            <DiamondIcon />
          </span>
          <span className="brand-text">
            Mahar
            <small>by Memoraa&apos;</small>
          </span>
        </a>
        <ul className={`nav-links${open ? " open" : ""}`} id="navLinks">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a
          href={waLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-sm nav-cta"
        >
          <WhatsAppIcon size={16} />
          Chat Admin
        </a>
        <button
          className={`nav-toggle${open ? " open" : ""}`}
          id="navToggle"
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
        </button>
      </div>
    </nav>
  );
};

// ============================================================
// Hero
// ============================================================

const Hero: FC = () => (
  <header className="hero" id="beranda">
    <div className="container hero-grid">
      <div className="hero-content">
        <span className="hero-pill">✦ Mahar by Memoraa&apos; ✦</span>
        <h1>
          Mahar &amp; Ring Box Custom untuk <em>Hari Bahagiamu</em>
        </h1>
        <p className="lead">
          Katalog mahar pernikahan &amp; ring box handmade yang dikerjakan penuh detail. Bisa custom
          nama, tanggal, dan warna sesuai request — dikirim ke seluruh Indonesia.
        </p>
        <div className="hero-actions">
          <a href="#mahar" className="btn btn-gold">
            Lihat Katalog
          </a>
          <a href="#cara-pemesanan" className="btn btn-outline">
            Cara Pemesanan
          </a>
        </div>
        <div className="hero-stats">
          <div>
            <strong>9</strong>
            <span>Desain Template</span>
          </div>
          <div>
            <strong>100%</strong>
            <span>Handmade</span>
          </div>
          <div>
            <strong>Gratis</strong>
            <span>Custom Nama</span>
          </div>
        </div>
      </div>
      <div className="hero-visual">
        <svg
          className="gunungan"
          viewBox="0 0 200 300"
          fill="none"
          stroke="currentColor"
          strokeWidth={2}
          aria-hidden="true"
        >
          <path d="M100 8 C108 45 128 58 134 88 C158 98 164 122 152 142 C178 162 172 196 148 206 C166 232 152 264 122 266 L128 292 L72 292 L78 266 C48 264 34 232 52 206 C28 196 22 162 48 142 C36 122 42 98 66 88 C72 58 92 45 100 8 Z" />
          <path d="M100 60 L100 250" strokeDasharray="3 7" opacity=".6" />
        </svg>
        <div className="hero-chip">✨ Handmade with Love</div>
        <div className="hero-main">
          <img src={heroImages.main} alt="Mahar Gunungan Resin Koin Kitab" />
          <span className="hero-badge">Best Seller</span>
        </div>
        <div className="hero-float">
          <img src={heroImages.float} alt="Ring Box Gypsum Premium" />
        </div>
      </div>
    </div>
  </header>
);

// ============================================================
// Marquee
// ============================================================

const Marquee: FC = () => {
  const items = [
    "✦ MAHAR PERNIKAHAN",
    "✦ RING BOX",
    "✦ CUSTOM NAMA & TANGGAL",
    "✦ FREE KONSULTASI",
    "✦ HANDMADE WITH LOVE",
    "✦ KIRIM SELURUH INDONESIA",
  ];
  return (
    <div className="marquee" aria-hidden="true">
      <div className="marquee-track">
        <div className="marquee-group">
          {items.map((s, i) => (
            <span key={i}>{s}</span>
          ))}
        </div>
        <div className="marquee-group">
          {items.map((s, i) => (
            <span key={`b-${i}`}>{s}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

// ============================================================
// Order steps
// ============================================================

const OrderSteps: FC = () => (
  <section className="section" id="cara-pemesanan">
    <div className="container">
      <div className="section-head reveal">
        <span className="eyebrow">Cara Pemesanan</span>
        <h2>6 Langkah Mudah Pesan di Memoraa&apos;</h2>
        <p>
          Berlaku untuk semua produk, baik <strong>Mahar</strong> maupun <strong>Ring Box</strong>.
          Gampang banget!
        </p>
      </div>
      <div className="steps-grid">
        {ORDER_STEPS.map((s, i) => (
          <div
            className="step-card reveal"
            key={s.tag}
            style={{ animationDelay: `${(i % 3) * 100}ms` }}
          >
            <span className="step-tag">{s.tag}</span>
            <div className="step-icon">
              <s.Icon />
            </div>
            <h3>{s.title}</h3>
            <p>{s.desc}</p>
          </div>
        ))}
      </div>
      <div className="note-banner reveal">
        <span style={{ fontSize: "1.35rem" }}>💡</span>
        <p>
          <strong>Tips:</strong> Semua produk bisa custom nama, tanggal acara, dan warna. Ngga yakin
          pilih yang mana? Chat admin aja, gratis konsultasi kok 😊
        </p>
      </div>
    </div>
  </section>
);

// ============================================================
// Product card
// ============================================================

const ProductCard: FC<{
  product: Product;
  onOpen: (p: Product) => void;
}> = ({ product, onOpen }) => {
  // Compact feature list — pick the first 4 specs for the card.
  const feats = product.specs.slice(0, 4);
  return (
    <article className="product-card reveal">
      <div className="thumb">
        {product.badge ? <span className="badge">{product.badge}</span> : null}
        <img src={product.images[0]} alt={product.name} loading="lazy" />
        {product.images.length > 1 ? (
          <span className="thumb-count">
            <ImageIcon size={12} /> {product.images.length} foto
          </span>
        ) : null}
      </div>
      <div className="card-body">
        <span className="cat-label">
          {product.category === "mahar" ? "Mahar" : "Ring Box"}
        </span>
        <h3>{product.shortName}</h3>
        <p className="desc">{product.description}</p>
        <ul className="feat">
          {feats.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
        <div className="price-row">
          <div className="price">
            <small>Mulai dari</small>
            <strong>{product.startingPrice}</strong>
          </div>
        </div>
        <div className="actions">
          <button
            className="btn btn-outline btn-sm btn-block"
            onClick={() => onOpen(product)}
            aria-label={`Preview ${product.name}`}
          >
            Preview
          </button>
        </div>
      </div>
    </article>
  );
};

// ============================================================
// Catalog section (generic — used for Mahar and Ring Box)
// ============================================================

const Catalog: FC<{
  id: string;
  alt?: boolean;
  eyebrow: string;
  title: string;
  subtitle: ReactNode;
  products: Product[];
  onOpen: (p: Product) => void;
}> = ({ id, alt, eyebrow, title, subtitle, products, onOpen }) => (
  <section className={`section${alt ? " section-alt" : ""}`} id={id}>
    <div className="container">
      <div className="section-head reveal">
        <span className="eyebrow">{eyebrow}</span>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>
      <div className="catalog-grid">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} onOpen={onOpen} />
        ))}
      </div>
    </div>
  </section>
);

// ============================================================
// Product modal — gallery + specs + price table
// ============================================================

const ProductModal: FC<{
  product: Product | null;
  onClose: () => void;
}> = ({ product, onClose }) => {
  // Escape to close.
  useEffect(() => {
    if (!product) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [product, onClose]);

  useBodyScrollLock(!!product);

  if (!product) return null;

  // The inner body is keyed by product.id so the gallery's useState
  // resets to the first image whenever a different product is opened,
  // without needing a setState-in-effect.
  return (
    <ModalBody key={product.id} product={product} onClose={onClose} />
  );
};

const ModalBody: FC<{ product: Product; onClose: () => void }> = ({
  product,
  onClose,
}) => {
  const [activeImg, setActiveImg] = useState(0);
  const images = product.images;
  const isRingBox = product.category === "ringbox";

  return (
    <div className="modal open" role="dialog" aria-modal="true" aria-label={product.name}>
      <div className="modal-backdrop" onClick={onClose} />
      <div className="modal-card">
        <button className="modal-close" aria-label="Tutup" onClick={onClose}>
          ✕
        </button>
        <div className="modal-cat">
          {isRingBox ? "Ring Box" : "Mahar"}
        </div>
        <h3>{product.name}</h3>
        <p className="modal-desc">{product.description}</p>

        {/* Gallery */}
        <div className="modal-gallery">
          <div className="modal-main-img">
            <img
              src={images[activeImg]}
              alt={`${product.name} — foto ${activeImg + 1}`}
            />
          </div>
          {images.length > 1 ? (
            <div className="modal-thumbs">
              {images.map((src, i) => (
                <button
                  key={src}
                  className={`modal-thumb${i === activeImg ? " active" : ""}`}
                  onClick={() => setActiveImg(i)}
                  aria-label={`Lihat foto ${i + 1}`}
                  aria-pressed={i === activeImg}
                >
                  <img src={src} alt={`${product.name} — thumbnail ${i + 1}`} />
                </button>
              ))}
            </div>
          ) : null}
        </div>

        {/* Specs */}
        <div className="modal-section">
          <h4>Spesifikasi</h4>
          <ul className="modal-specs">
            {product.specs.map((s, i) => (
              <li key={i}>{s}</li>
            ))}
          </ul>
        </div>

        {/* Price table */}
        <div className="modal-section">
          <h4>Harga &amp; Ukuran</h4>
          <PriceTable rows={product.prices} isRingBox={isRingBox} />
        </div>

        <a
          href={waLink(product.name)}
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-gold btn-block"
        >
          <WhatsAppIcon size={16} />
          Pesan via WhatsApp
        </a>
        <p className="modal-note">
          📢 Harga sudah termasuk Replika Uang kertas, Replika Logam Mulia (1 keping), dan Buku
          Nikah Papper (untuk produk Mahar). Bisa tambah LED, Koin Kuno, Replika Perhiasan atau
          Logo. Yuk langsung pesan via WhatsApp!
        </p>
      </div>
    </div>
  );
};

// ============================================================
// Price table — adapts to Mahar (size + tanpa/+LED)
// vs Ring Box (variant + single price, optional image + note)
// ============================================================

const PriceTable: FC<{ rows: PriceRow[]; isRingBox: boolean }> = ({ rows, isRingBox }) => {
  // For Mahar we render three columns: Size | Tanpa LED | + LED
  // For Ring Box we render: Variant | Note | Harga (with optional image)
  if (!isRingBox) {
    return (
      <table className="price-table price-table--mahar">
        <thead>
          <tr>
            <th>Ukuran</th>
            <th>Tanpa LED</th>
            <th>+ LED</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr key={i}>
              <td className="size">
                {r.size}
                {r.note ? (
                  <>
                    <br />
                    <span style={{ fontSize: "0.78rem", color: "var(--muted)", fontWeight: 400 }}>
                      {r.note}
                    </span>
                  </>
                ) : null}
              </td>
              <td className="price-cell">{r.withoutLed ?? "—"}</td>
              <td className="price-cell">{r.withLed ?? "—"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  }
  return (
    <table className="price-table price-table--ringbox">
      <thead>
        <tr>
          <th>Varian</th>
          <th>Keterangan</th>
          <th>Harga</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((r, i) => (
          <tr key={i} className={r.image ? "variant-with-image" : ""}>
            <td className="size">
              {r.image ? (
                <div className="row-image">
                  <img src={r.image} alt={r.size} loading="lazy" />
                </div>
              ) : null}
              {r.size}
            </td>
            <td className="note-cell">{r.note ?? "—"}</td>
            <td className="price-cell">{r.price ?? "—"}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

// ============================================================
// Footer
// ============================================================

const Footer: FC = () => (
  <footer className="footer" id="kontak">
    <div className="container">
      <div className="footer-grid">
        <div>
          <a href="#beranda" className="brand">
            <span className="brand-mark">
              <DiamondIcon />
            </span>
            <span className="brand-text">
              Mahar
              <small>by Memoraa&apos;</small>
            </span>
          </a>
          <p className="footer-desc">
            Mahar pernikahan &amp; ring box handmade dari Memoraa&apos;. Dikerjakan satu per satu
            dengan detail, karena hari bahagiamu layak dapat yang terbaik.
          </p>
          <div className="socials">
            <a
              href={waLink()}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="WhatsApp"
            >
              <WhatsAppIcon size={19} />
            </a>
            <a
              href="https://instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram"
            >
              <InstagramIcon />
            </a>
          </div>
        </div>
        <div>
          <h4>Menu</h4>
          <div className="footer-links">
            <a href="#beranda">Beranda</a>
            <a href="#cara-pemesanan">Cara Pemesanan</a>
            <a href="#mahar">Katalog Mahar</a>
            <a href="#ringbox">Katalog Ring Box</a>
          </div>
        </div>
        <div>
          <h4>Hubungi Kami</h4>
          <div className="contact-item">
            <ChatIcon />
            <span>
              <a href={waLink()} target="_blank" rel="noopener noreferrer">
                Chat WhatsApp Admin
              </a>
              <br />
              <small>Fast response setiap hari</small>
            </span>
          </div>
          <div className="contact-item">
            <PinIcon />
            <span>
              Salatiga, Jawa Tengah
              <br />
              <small>Kirim seluruh Indonesia</small>
            </span>
          </div>
        </div>
      </div>
    </div>
    <div className="footer-bottom">
      © 2025 Mahar by Memoraa&apos; · Dibuat dengan ❤ di Indonesia
    </div>
  </footer>
);

// ============================================================
// Floating WhatsApp button
// ============================================================

const WhatsAppFloat: FC = () => (
  <a
    href={waLink()}
    target="_blank"
    rel="noopener noreferrer"
    className="wa-float"
    aria-label="Chat WhatsApp"
  >
    <WhatsAppIcon size={29} />
  </a>
);

// ============================================================
// Main MaharPage
// ============================================================

const MaharPage: FC = () => {
  const [active, setActive] = useState<Product | null>(null);
  useScrollReveal();

  // Memoize subtitle fragments so React doesn't recreate them every render.
  const maharSubtitle = useMemo(
    () => (
      <>
        Pilih template favoritmu — semua bisa custom. Klik <em>“Lihat Harga”</em> untuk cek daftar
        harga lengkap per ukuran (tanpa LED / + LED).
      </>
    ),
    []
  );
  const ringBoxSubtitle = useMemo(
    () => (
      <>
        Tempat cincin aesthetic buat hari H. Klik <em>“Lihat Harga”</em> untuk detail varian,
        kapasitas, dan foto sample.
      </>
    ),
    []
  );

  return (
    <div className="mahar-shell">
      <Navbar />
      <main>
        <Hero />
        <Marquee />
        <OrderSteps />
        <Catalog
          id="mahar"
          alt
          eyebrow="Katalog Mahar"
          title="Template Mahar Pernikahan"
          subtitle={maharSubtitle}
          products={maharProducts}
          onOpen={setActive}
        />
        <Catalog
          id="ringbox"
          eyebrow="Katalog Ring Box"
          title="Ring Box Cantik untuk Cincinmu"
          subtitle={ringBoxSubtitle}
          products={ringBoxProducts}
          onOpen={setActive}
        />
      </main>
      <Footer />
      <WhatsAppFloat />
      <ProductModal product={active} onClose={() => setActive(null)} />
    </div>
  );
};

export default MaharPage;
