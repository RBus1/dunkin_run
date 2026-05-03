import Head from "next/head";

// ─── SWAP THIS URL WHEN THE PARTIFUL LINK IS READY ───────────────────────────
const PARTIFUL_URL = "https://partiful.com/[PARTIFUL_LINK_HERE]";
// ─────────────────────────────────────────────────────────────────────────────

const STOPS = [
  "1 Broadway, Cambridge MA",
  "1001 Cambridge St, Cambridge MA",
  "84 Massachusetts Ave, Cambridge MA",
  "Charles River Esplanade, Cambridge MA",
  "808 Memorial Dr, Cambridge MA",
  "655 Massachusetts Ave, Cambridge MA",
  "1001 Massachusetts Ave, Cambridge MA",
  "65 JFK St, Cambridge MA",
  "61 Church St, Cambridge MA",
  "1 White St, Cambridge MA",
  "2480 Massachusetts Ave, Cambridge MA",
  "5 Cambridgepark Dr, Cambridge MA",
  "201 Alewife Brook Pkwy, Cambridge MA",
  "517 Concord Ave, Cambridge MA",
];

function buildMapsUrl(stops) {
  const origin = encodeURIComponent(stops[0]);
  const destination = encodeURIComponent(stops[stops.length - 1]);
  const waypoints = stops
    .slice(1, -1)
    .map((s) => encodeURIComponent(s))
    .join("|");
  return `https://www.google.com/maps/embed/v1/directions?key=AIzaSyD-9tSrke72PouQMnMX-a7eZSW0jkFMBWY&origin=${origin}&destination=${destination}&waypoints=${waypoints}&mode=walking`;
}

const MAPS_URL = buildMapsUrl(STOPS);

const RULES = [
  "Start at Stop 1 (1 Broadway, Kendall Square)",
  "Purchase and consume at least one item at each Dunkin\u2019 location",
  "No skipping stops \u2014 the route must be completed in order",
  "All travel between stops must be on foot",
  "Finish at Stop 13 (517 Concord Ave)",
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Cambridge Dunkin Half Marathon</title>
        <meta
          name="description"
          content="13 miles. 13 Dunkins. America runs on Dunkin — we\u2019re testing that proposition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <style global jsx>{`
        *, *::before, *::after {
          box-sizing: border-box;
          margin: 0;
          padding: 0;
        }

        :root {
          --orange: #FF6E00;
          --pink: #E8145A;
          --bg: #1C1C1C;
          --white: #FFFFFF;
          --muted: #888888;
          --card-bg: #242424;
        }

        html, body {
          background: var(--bg);
          color: var(--white);
          font-family: Arial, Helvetica, sans-serif;
          font-size: 16px;
          line-height: 1.6;
          -webkit-font-smoothing: antialiased;
        }
      `}</style>

      <style jsx>{`
        .page {
          max-width: 860px;
          margin: 0 auto;
          padding: 0 24px 64px;
        }

        /* HEADER */
        header {
          padding: 56px 0 40px;
          text-align: center;
        }

        .eyebrow {
          display: inline-block;
          background: #FF6E00;
          color: #1C1C1C;
          font-family: Impact, Arial Black, sans-serif;
          font-size: 11px;
          font-weight: 900;
          letter-spacing: 0.2em;
          text-transform: uppercase;
          padding: 4px 14px;
          margin-bottom: 20px;
        }

        .title {
          font-family: Impact, Arial Black, sans-serif;
          font-size: clamp(36px, 8vw, 80px);
          font-weight: 900;
          text-transform: uppercase;
          color: #FF6E00;
          letter-spacing: -0.01em;
          line-height: 1;
          margin-bottom: 16px;
        }

        .subtitle {
          font-family: Impact, Arial Black, sans-serif;
          font-size: clamp(20px, 4.5vw, 40px);
          font-weight: 900;
          text-transform: uppercase;
          color: #E8145A;
          letter-spacing: 0.04em;
          line-height: 1.1;
        }

        /* DIVIDER */
        .divider {
          border: none;
          border-top: 3px solid #FF6E00;
          margin: 40px 0;
        }

        /* DESCRIPTION */
        .description {
          font-size: clamp(16px, 2.5vw, 20px);
          line-height: 1.7;
          color: #FFFFFF;
          max-width: 680px;
          margin: 0 auto;
          text-align: center;
        }

        /* SECTION */
        section {
          margin-top: 56px;
        }

        .section-heading {
          font-family: Impact, Arial Black, sans-serif;
          font-size: clamp(28px, 5vw, 48px);
          font-weight: 900;
          text-transform: uppercase;
          color: #FF6E00;
          letter-spacing: 0.02em;
          margin-bottom: 24px;
        }

        /* RULES */
        .rules-list {
          list-style: none;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .rules-list li {
          display: flex;
          align-items: flex-start;
          gap: 16px;
          font-size: clamp(15px, 2.2vw, 18px);
          line-height: 1.5;
        }

        .rule-num {
          flex-shrink: 0;
          width: 32px;
          height: 32px;
          background: #E8145A;
          color: #FFFFFF;
          font-family: Impact, Arial Black, sans-serif;
          font-weight: 900;
          font-size: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-top: 2px;
        }

        /* RSVP */
        .rsvp-wrap {
          margin-top: 56px;
          text-align: center;
        }

        .rsvp-btn {
          display: inline-block;
          background: #E8145A;
          color: #FFFFFF;
          font-family: Impact, Arial Black, sans-serif;
          font-size: clamp(20px, 3.5vw, 30px);
          font-weight: 900;
          text-transform: uppercase;
          letter-spacing: 0.06em;
          text-decoration: none;
          padding: 18px 52px;
          border-radius: 999px;
          border: none;
          cursor: pointer;
          transition: background 0.15s, transform 0.1s;
        }

        .rsvp-btn:hover {
          background: #c40f4d;
          transform: scale(1.03);
        }

        .rsvp-btn:active {
          transform: scale(0.98);
        }

        /* MAP */
        .map-wrap {
          position: relative;
          width: 100%;
          padding-bottom: 56.25%;
          height: 0;
          overflow: hidden;
          border: 3px solid #FF6E00;
        }

        .map-wrap iframe {
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          border: 0;
        }

        /* STOPS GRID */
        .stops-grid {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(220px, 1fr));
          gap: 10px;
          margin-top: 24px;
        }

        .stop-card {
          background: #242424;
          border-left: 4px solid #FF6E00;
          padding: 10px 14px;
          font-size: 14px;
          line-height: 1.4;
        }

        .stop-card.finish {
          border-left-color: #E8145A;
        }

        .stop-label {
          font-family: Impact, Arial Black, sans-serif;
          font-size: 11px;
          letter-spacing: 0.12em;
          color: #FF6E00;
          text-transform: uppercase;
          display: block;
          margin-bottom: 2px;
        }

        .stop-card.finish .stop-label {
          color: #E8145A;
        }

        /* FOOTER */
        footer {
          margin-top: 72px;
          padding-top: 24px;
          border-top: 1px solid #333;
          text-align: center;
          color: #888888;
          font-size: 13px;
          letter-spacing: 0.03em;
        }

        /* MOBILE */
        @media (max-width: 480px) {
          .page {
            padding: 0 16px 48px;
          }
          header {
            padding: 40px 0 28px;
          }
          .rsvp-btn {
            width: 100%;
            padding: 18px 24px;
          }
        }
      `}</style>

      <div className="page">
        <header>
          <div className="eyebrow">Cambridge, MA</div>
          <h1 className="title">
            Cambridge Dunkin<br />Half Marathon
          </h1>
          <p className="subtitle">13 miles. 13 Dunkins.</p>
        </header>

        <hr className="divider" />

        <p className="description">
          They say that America runs on Dunkin &mdash; and we&rsquo;ve decided to test that
          proposition. This run will stop at every single Dunkin&rsquo; location within
          Cambridge city limits.
        </p>

        <section aria-labelledby="rules-heading">
          <h2 className="section-heading" id="rules-heading">The Rules</h2>
          <ol className="rules-list">
            {RULES.map((rule, i) => (
              <li key={i}>
                <span className="rule-num" aria-hidden="true">{i + 1}</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className="rsvp-wrap">
          <a
            className="rsvp-btn"
            href={PARTIFUL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            RSVP on Partiful
          </a>
        </div>

        <section aria-labelledby="route-heading">
          <h2 className="section-heading" id="route-heading">The Route</h2>
          <div className="map-wrap">
            <iframe
              src={MAPS_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cambridge Dunkin Half Marathon Route"
            />
          </div>

          <div className="stops-grid">
            {STOPS.map((stop, i) => {
              const isFinish = i === STOPS.length - 1;
              return (
                <div className={`stop-card${isFinish ? " finish" : ""}`} key={i}>
                  <span className="stop-label">
                    {isFinish ? "Finish" : `Stop ${i + 1}`}
                  </span>
                  {stop.replace(", Cambridge MA", "")}
                </div>
              );
            })}
          </div>
        </section>

        <footer>
          <p>Not affiliated with Dunkin&rsquo; Donuts.</p>
        </footer>
      </div>
    </>
  );
}
