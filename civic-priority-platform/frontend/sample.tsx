import { useEffect, useMemo, useState, type ReactNode } from "react";
import { ArrowUpRight, ChevronDown, Menu, MoveRight, X } from "lucide-react";

type Project = {
  name: string;
  year: string;
  type: string;
  image: string;
  note: string;
  accent: string;
};

const projects: Project[] = [
  {
    name: "Merla",
    year: "2026",
    type: "Brand identity / web",
    image: "/__mockup/images/komma/image_1786719686938.png",
    note: "A sharper visual language for a new kind of intelligence retail.",
    accent: "#e25a45",
  },
  {
    name: "Hanna Stína",
    year: "2025",
    type: "Digital presence",
    image: "/__mockup/images/komma/image_1786719697075.png",
    note: "A quiet, tactile home for work that refuses to sit still.",
    accent: "#c5a98d",
  },
  {
    name: "Dagsins",
    year: "2025",
    type: "Campaign / editorial",
    image: "/__mockup/images/komma/image_1786719715235.png",
    note: "Making the everyday feel worth looking at twice.",
    accent: "#8b9274",
  },
  {
    name: "Tölum íslensku",
    year: "2024",
    type: "Brand system",
    image: "/__mockup/images/komma/image_1786719725214.png",
    note: "A warmer invitation into the Icelandic language.",
    accent: "#d67b58",
  },
  {
    name: "Perla",
    year: "2024",
    type: "Experience design",
    image: "/__mockup/images/komma/image_1786719740844.png",
    note: "A digital landmark for a place with a long memory.",
    accent: "#586b52",
  },
];

const services = [
  [
    "Brand Strategy",
    "Before anything visual, we work out what the brand stands for and who it is actually talking to. Skip this part and the design becomes decoration with nothing underneath.",
  ],
  [
    "Brand Identity",
    "A distinctive system of type, colour, form and language that can hold its own in the real world — not just in a presentation deck.",
  ],
  [
    "Brand Presence",
    "The places your brand shows up, shaped into one coherent point of view: campaigns, social, print, packaging and the small details people remember.",
  ],
  [
    "Website Design",
    "Digital experiences with a clear point of view, generous pacing and the kind of responsive detail that makes a site feel made, not assembled.",
  ],
  [
    "Website Development",
    "Fast, considered builds that keep the original idea intact. We work in close loops, from first prototype to the last careful transition.",
  ],
];

const ascii = `             .-::::::-.             
          .:+oooooooooo+:.          
        .+oooooossssssoooo+.        
       /oooossssoooooosssso/        
      +ooosso:.       .:osso+       
     /oosso.             .osso/     
    :ooso.    .------.     .oso:    
    oso:    .+oooooooo+.    :oso    
   :os:    /oooo+..+oooo/    :so:   
   +o+    :ooo+.    .+ooo:    +o+   
   so:    +oo+        +oo+    :os   
   so:    so:          :os    :os   
   +o+    so:   .--.   :os    +o+   
   :so.   :oo+ .+oo+. +oo:   .os:   
    +os.   :osooooooosso:   .so+    
     +os.    :+oooooo+:    .so+     
      :oso.       .      .oso:      
       :osso:.         .:soso:      
        .+osso+:.   .:+osso+.       
          .:ossssoossssso:.         
             .:------:.             `;

function BrandMark() {
  return (
    <div className="kk-mark" aria-label="Komma Komma home">
      ”
    </div>
  );
}

function Button({
  children,
  coral = false,
  onClick,
}: {
  children: ReactNode;
  coral?: boolean;
  onClick?: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className={`kk-button ${coral ? "kk-button-coral" : ""}`}
    >
      {children}
      <ArrowUpRight size={15} strokeWidth={2.2} />
    </button>
  );
}

function MenuOverlay({ close }: { close: () => void }) {
  return (
    <div
      className="kk-menu"
      role="dialog"
      aria-modal="true"
      aria-label="Site navigation"
    >
      <div className="kk-menu-top">
        <BrandMark />
        <button className="kk-close" onClick={close} aria-label="Close menu">
          <X size={28} />
        </button>
      </div>
      <nav className="kk-menu-links">
        {["Home", "Work", "Studio", "Contact"].map((item, i) => (
          <a href={`#${item.toLowerCase()}`} onClick={close} key={item}>
            <span>0{i + 1}</span>
            {item}
            <ArrowUpRight size={28} />
          </a>
        ))}
      </nav>
      <p className="kk-menu-foot">
        Reykjavík, IS
        <br />A small studio for big points of view.
      </p>
    </div>
  );
}

export function KommaKomma() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState(0);
  const [service, setService] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const active = projects[selected];
  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 32);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  const laurels = useMemo(() => ["OSMO", "GSAP", "Site of Sites", "W."], []);

  return (
    <div className="kk-page">
      <style>{`
      @import url('https://fonts.googleapis.com/css2?family=DM+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap');
      .kk-page{--ink:#171817;--paper:#eeede9;--soft:#d9d8d2;--coral:#e25a45;--moss:#1c2d1c;background:var(--paper);color:var(--ink);font-family:'Space Grotesk',sans-serif;overflow:hidden}
      .kk-page *{box-sizing:border-box}.kk-page a{color:inherit;text-decoration:none}.kk-page button{font:inherit;cursor:pointer}.kk-page button:focus-visible,.kk-page a:focus-visible{outline:2px solid var(--coral);outline-offset:4px}
      .kk-hero:after{content:"";position:absolute;inset:0 0 auto;height:92px;background:#132013;z-index:0}.kk-hero-grid{position:relative;z-index:1}
      .kk-hero{background-size:auto 150%}
      .kk-page:before{content:"";position:fixed;inset:0;pointer-events:none;z-index:50;opacity:.055;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 180 180' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='.35'/%3E%3C/svg%3E")}
      .kk-header{position:fixed;top:0;left:0;right:0;height:84px;padding:18px 24px;display:flex;align-items:center;justify-content:space-between;z-index:40;transition:background .3s,backdrop-filter .3s;border-bottom:1px solid transparent}.kk-header.is-scrolled{background:#eeede9d9;backdrop-filter:blur(18px);border-color:#17181720}.kk-mark{width:51px;height:51px;border:1.5px solid currentColor;border-radius:4px;display:grid;place-items:center;font-size:42px;line-height:1;letter-spacing:-.16em;padding-bottom:10px;font-family:Georgia,serif}.kk-head-actions{display:flex;align-items:center;gap:30px}.kk-button{border:0;background:var(--ink);color:var(--paper);padding:12px 13px 12px 15px;display:inline-flex;align-items:center;gap:20px;font-size:14px;font-weight:600;transition:transform .25s,background .25s}.kk-button:hover{transform:translateY(-2px);background:#353833}.kk-button-coral{background:var(--coral);color:#fff}.kk-menu-trigger{border:0;background:none;width:27px;height:25px;display:grid;align-content:center;gap:7px;padding:0}.kk-menu-trigger i{height:1.5px;background:currentColor;width:100%;display:block}
      .kk-hero{min-height:100svh;background:var(--moss);color:#f3f1ea;position:relative;display:flex;align-items:end;padding:110px 24px 38px;background-image:linear-gradient(180deg,#07130755,#071307bb),url("/__mockup/images/komma/image_1786719686938.png");background-size:cover;background-position:center}.kk-hero-grid{width:100%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr;gap:18px;align-items:end;font:12px 'DM Mono',monospace;text-transform:uppercase}.kk-hero-title{grid-column:1/-1;max-width:760px;font-size:clamp(30px,4.5vw,68px);line-height:.98;letter-spacing:-.055em;font-weight:500;margin:0 0 20vh}.kk-hero-grid span:last-child{text-align:right}.kk-hero-note{font-size:13px;line-height:1.4;max-width:240px;text-transform:none;letter-spacing:-.02em}
      .kk-section{padding:150px 8vw}.kk-intro{display:grid;grid-template-columns:1fr 2fr;gap:10vw;min-height:82vh;align-items:start}.kk-kicker,.kk-mono{font:11px 'DM Mono',monospace;text-transform:uppercase;letter-spacing:.1em}.kk-intro-copy{font-size:clamp(28px,4vw,60px);line-height:1.03;letter-spacing:-.055em;max-width:850px}.kk-intro-copy p{margin:0 0 38px}.kk-intro-copy p+p{color:#777872}
      .kk-projects{padding-top:70px}.kk-section-title{font-size:clamp(44px,8vw,110px);font-weight:500;line-height:.9;letter-spacing:-.075em;margin:0 0 80px}.kk-project-layout{display:grid;grid-template-columns:1.25fr .75fr;gap:8vw;align-items:start}.kk-project-visual{position:sticky;top:130px;height:62vh;min-height:420px;overflow:hidden;background:#182319}.kk-project-visual img{width:100%;height:100%;object-fit:cover;filter:saturate(.8);transition:opacity .35s,transform .5s}.kk-project-visual:hover img{transform:scale(1.025)}.kk-project-label{position:absolute;top:20px;left:20px;background:var(--coral);color:#fff;padding:10px 14px;font-weight:600}.kk-project-arrow{position:absolute;bottom:20px;right:20px;background:#171817d9;color:#fff;padding:11px 13px;font:11px 'DM Mono',monospace;text-transform:uppercase}.kk-project-list{border-top:1px solid #17181755}.kk-project-row{width:100%;border:0;border-bottom:1px solid #17181755;background:none;text-align:left;padding:20px 0;display:grid;grid-template-columns:35px 1fr;gap:15px;transition:color .25s}.kk-project-row:hover,.kk-project-row.active{color:var(--coral)}.kk-project-row strong{font-size:clamp(25px,3vw,45px);font-weight:500;letter-spacing:-.05em;line-height:.95}.kk-project-row small{font:10px 'DM Mono',monospace;color:#7b7d75}.kk-project-detail{padding:28px 0;color:#777872;font-size:16px;line-height:1.35;max-width:300px}.kk-project-meta{display:flex;justify-content:space-between;margin-top:35px;color:#777872}
      .kk-dark{background:#192419;color:#eeede9}.kk-services{display:grid;grid-template-columns:1.15fr .85fr;gap:10vw}.kk-service-list{margin-top:55px}.kk-service{border-top:1px solid #eeede944}.kk-service button{display:grid;grid-template-columns:55px 1fr 24px;align-items:center;width:100%;border:0;background:none;color:inherit;text-align:left;padding:22px 0}.kk-service button strong{font-size:clamp(25px,4vw,54px);font-weight:500;letter-spacing:-.06em;line-height:.95;color:#eeede9aa;transition:color .2s}.kk-service.active button strong{color:#eeede9}.kk-service button span{font:11px 'DM Mono',monospace;color:#eeede999}.kk-service-body{padding:0 15% 28px 55px;color:#b9beb3;line-height:1.45;max-width:650px}.kk-service-art{height:470px;position:sticky;top:130px;background:var(--coral);overflow:hidden}.kk-service-art img{width:100%;height:100%;object-fit:cover;mix-blend-mode:multiply;opacity:.78}.kk-service-art:after{content:"KK / 04";position:absolute;bottom:20px;left:20px;font:11px 'DM Mono',monospace;color:#fff}
      .kk-proof{min-height:75vh}.kk-quote-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:15vw;align-items:start;margin:50px 0 150px}.kk-quote{font-size:clamp(24px,3vw,44px);line-height:1.06;letter-spacing:-.05em}.kk-person{font:13px 'DM Mono',monospace;line-height:1.5}.kk-person:before{content:"";display:block;width:64px;height:64px;border-radius:50%;background:url("/__mockup/images/komma/image_1786719725214.png") center/cover;filter:grayscale(1);margin-bottom:20px}.kk-laurels{display:grid;grid-template-columns:repeat(4,1fr);gap:15px;border-top:1px solid #17181755;padding-top:40px}.kk-laurel{text-align:center;font-size:24px;font-weight:600;min-height:90px;display:grid;place-items:center;position:relative}.kk-laurel:before,.kk-laurel:after{content:"❬";font-family:Georgia,serif;font-size:55px;position:absolute;top:10px;color:#555}.kk-laurel:before{left:0}.kk-laurel:after{right:0;transform:scaleX(-1)}
      .kk-cta{background:#dad9d3;display:grid;grid-template-columns:1fr 1fr;gap:10vw;min-height:78vh;align-items:center}.kk-cta h2{font-size:clamp(48px,8vw,105px);line-height:.86;letter-spacing:-.075em;font-weight:500;margin:0 0 50px}.kk-ascii{font:10px/1.08 'DM Mono',monospace;white-space:pre;color:#969790;justify-self:center;opacity:.8;transform:scale(1.1)}.kk-footer{background:#a9aaa4;padding:100px 3vw 18px}.kk-footer-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:30px;min-height:270px}.kk-footer h3{font:11px 'DM Mono',monospace;color:#62645f;text-transform:uppercase;font-weight:400;margin:0 0 65px}.kk-footer p,.kk-footer a{font-size:14px;line-height:1.35;display:block}.kk-wordmark{font-size:clamp(72px,19vw,270px);white-space:nowrap;letter-spacing:-.13em;line-height:.8;margin:80px -2vw 0;font-weight:700}.kk-footer-bottom{border-top:1px solid #17181755;margin-top:24px;padding-top:10px;display:flex;justify-content:space-between;font:10px 'DM Mono',monospace}
      .kk-menu{position:fixed;inset:0;z-index:60;background:var(--coral);color:#171817;padding:18px 24px;animation:kk-in .35s ease both}.kk-menu-top{display:flex;justify-content:space-between;align-items:center}.kk-close{border:0;background:none}.kk-menu-links{margin-top:14vh;display:grid}.kk-menu-links a{font-size:clamp(58px,12vw,160px);line-height:.9;letter-spacing:-.08em;border-bottom:1px solid #17181755;padding:12px 0;display:grid;grid-template-columns:70px 1fr auto;align-items:center}.kk-menu-links span{font:12px 'DM Mono',monospace}.kk-menu-foot{position:absolute;bottom:25px;font:12px 'DM Mono',monospace}@keyframes kk-in{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:none}}
      @media(max-width:767px){.kk-header{padding:14px 16px;height:72px}.kk-mark{width:44px;height:44px;font-size:36px}.kk-head-actions{gap:12px}.kk-button{padding:10px 10px 10px 12px;font-size:12px;gap:10px}.kk-hero{padding:100px 16px 22px;min-height:92svh}.kk-hero-grid{grid-template-columns:1fr 1fr;gap:12px}.kk-hero-title{font-size:39px;margin-bottom:22vh}.kk-hero-grid span:last-child{text-align:left}.kk-section{padding:92px 16px}.kk-intro{display:block;min-height:auto}.kk-intro .kk-kicker{margin-bottom:54px}.kk-intro-copy{font-size:32px}.kk-section-title{font-size:57px;margin-bottom:45px}.kk-project-layout,.kk-services,.kk-quote-grid,.kk-cta{display:block}.kk-project-visual{position:relative;top:auto;height:65vh;min-height:390px;margin-bottom:30px}.kk-project-row strong{font-size:31px}.kk-service-list{margin-top:35px}.kk-service-art{height:300px;margin-top:55px;position:relative;top:auto}.kk-service-body{padding-left:55px;padding-right:0}.kk-quote-grid{margin-bottom:80px}.kk-person{margin-top:40px}.kk-laurels{grid-template-columns:repeat(2,1fr);gap:10px}.kk-cta{min-height:auto}.kk-cta h2{font-size:62px;padding-bottom:50px}.kk-ascii{font-size:7px;transform:scale(.84);margin-bottom:40px}.kk-footer{padding:75px 16px 14px}.kk-footer-grid{grid-template-columns:1fr 1fr;gap:45px 20px;min-height:auto}.kk-footer h3{margin-bottom:25px}.kk-wordmark{font-size:24vw;margin-top:75px}.kk-footer-bottom{gap:15px;flex-wrap:wrap}.kk-menu{padding:14px 16px}.kk-menu-links{margin-top:12vh}.kk-menu-links a{grid-template-columns:35px 1fr auto;font-size:58px}.kk-menu-links a svg{width:22px}}
      @media(prefers-reduced-motion:reduce){*,*:before,*:after{scroll-behavior:auto!important;transition-duration:.01ms!important;animation-duration:.01ms!important}}
    `}</style>
      <header className={`kk-header ${scrolled ? "is-scrolled" : ""}`}>
        <a href="#home">
          <BrandMark />
        </a>
        <div className="kk-head-actions">
          <Button
            onClick={() =>
              document
                .getElementById("contact")
                ?.scrollIntoView({ behavior: "smooth" })
            }
          >
            Book a call
          </Button>
          <button
            className="kk-menu-trigger"
            onClick={() => setMenuOpen(true)}
            aria-label="Open menu"
          >
            <i />
            <i />
          </button>
        </div>
      </header>
      {menuOpen && <MenuOverlay close={() => setMenuOpen(false)} />}
      <main>
        <section className="kk-hero" id="home">
          <div className="kk-hero-grid">
            <h1 className="kk-hero-title">
              Ideas with a pulse.
              <br />
              Built to be seen.
            </h1>
            <span>Featured project</span>
            <span>{active.name}</span>
            <span>{active.year}</span>
            <span>
              View project{" "}
              <MoveRight
                size={14}
                style={{ display: "inline", verticalAlign: "middle" }}
              />
            </span>
            <p className="kk-hero-note">
              Reykjavík-based product design & web-experience studio for people
              who care how their work is seen.
            </p>
          </div>
        </section>
        <section className="kk-section kk-intro" id="studio">
          <div className="kk-kicker">/ 01 — Introduction</div>
          <div className="kk-intro-copy">
            <p>
              Komma Komma is a product design & web-experience studio run by
              Óliver & Freyr. We make visual identities, websites, and campaigns
              for people who care how their work is seen.
            </p>
            <p>
              We work with founders and creative teams who have outgrown the
              template and want a presence that feels bespoke, shaped around the
              brand.
            </p>
          </div>
        </section>
        <section className="kk-section kk-projects" id="work">
          <h2 className="kk-section-title">
            Featured
            <br />
            projects
          </h2>
          <div className="kk-project-layout">
            <div className="kk-project-visual">
              <img src={active.image} alt={`${active.name} project artwork`} />
              <span className="kk-project-label">{active.name}</span>
              <span className="kk-project-arrow">Click to view ↗</span>
            </div>
            <div>
              <div className="kk-project-list">
                {projects.map((p, i) => (
                  <button
                    className={`kk-project-row ${selected === i ? "active" : ""}`}
                    key={p.name}
                    onClick={() => setSelected(i)}
                  >
                    <small>0{i + 1}</small>
                    <strong>{p.name}</strong>
                  </button>
                ))}
              </div>
              <div className="kk-project-detail">
                {active.note}
                <div className="kk-project-meta">
                  <span>{active.type}</span>
                  <span>{active.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="kk-section kk-dark" id="services">
          <div className="kk-services">
            <div>
              <div className="kk-kicker">/ 02 — Where we can add value</div>
              <div className="kk-service-list">
                {services.map(([title, body], i) => (
                  <div
                    className={`kk-service ${service === i ? "active" : ""}`}
                    key={title}
                  >
                    <button
                      onClick={() => setService(service === i ? -1 : i)}
                      aria-expanded={service === i}
                    >
                      <span>0{i + 1}</span>
                      <strong>{title}</strong>
                      {service === i ? (
                        <X size={20} />
                      ) : (
                        <ChevronDown size={20} />
                      )}
                    </button>
                    {service === i && (
                      <div className="kk-service-body">{body}</div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div className="kk-service-art">
              <img
                src="/__mockup/images/komma/image_1786719715235.png"
                alt="Coral printed brand materials on a table"
              />
            </div>
          </div>
        </section>
        <section className="kk-section kk-proof">
          <div className="kk-kicker">/ 03 — In good company</div>
          <div className="kk-quote-grid">
            <blockquote className="kk-quote">
              “We have worked with Komma Komma on a couple of projects now, and
              somehow they always delivered beyond what we expected. They are
              consistent, easy to work with, and have great attention to
              detail.”
            </blockquote>
            <div className="kk-person">
              Kristín Eva Ólafsdóttir
              <br />
              CEO at Gagarin
            </div>
          </div>
          <div className="kk-laurels">
            {laurels.map((x) => (
              <div className="kk-laurel" key={x}>
                {x}
              </div>
            ))}
          </div>
        </section>
        <section className="kk-section kk-cta" id="contact">
          <div>
            <h2>
              Do you have a<br />
              project in mind?
            </h2>
            <Button coral>Let's talk</Button>
          </div>
          <pre className="kk-ascii" aria-label="ASCII portrait">
            {ascii}
          </pre>
        </section>
      </main>
      <footer className="kk-footer">
        <div className="kk-footer-grid">
          <div>
            <h3>Contact info</h3>
            <a href="mailto:hello@kommakomma.is">hello@kommakomma.is</a>
            <a href="#contact">Book a call</a>
          </div>
          <div>
            <h3>Navigation</h3>
            {["Home", "Work", "Studio", "Contact"].map((x) => (
              <a href={`#${x.toLowerCase()}`} key={x}>
                {x.toUpperCase()}
              </a>
            ))}
          </div>
          <div>
            <h3>Studio</h3>
            <p>
              Reykjavík, IS
              <br />
              14 30 GMT
              <br />
              64.1470° N, 21.9408° W
            </p>
          </div>
          <div>
            <h3>Privacy policy</h3>
            <p>
              Copyright © 2026 Komma Komma
              <br />
              Terms of use
              <br />
              Manage Cookies
              <br />
              Transparency Statement
            </p>
          </div>
        </div>
        <div className="kk-wordmark">KOMMA KOMMA</div>
        <div className="kk-footer-bottom">
          <span>© 2026 Komma Komma</span>
          <span>Made with care in Reykjavík</span>
        </div>
      </footer>
    </div>
  );
}

export default KommaKomma;
