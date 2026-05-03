import Head from "next/head";
import styles from "@/styles/Home.module.css";

// ─── SWAP THIS URL WHEN THE PARTIFUL LINK IS READY ───────────────────────────
const PARTIFUL_URL = "https://partiful.com/e/Mw4JXPRNoURjfpwa5t92?c=KO5icZVn";
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
  const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;
  return `https://www.google.com/maps/embed/v1/directions?key=${apiKey}&origin=${origin}&destination=${destination}&waypoints=${waypoints}&mode=walking`;
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
          content="13 miles. 13 Dunkins. America runs on Dunkin \u2014 we\u2019re testing that proposition."
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.page}>
        <header className={styles.header}>
          <div className={styles.eyebrow}>Cambridge, MA</div>
          <h1 className={styles.title}>
            Cambridge Dunkin<br />Half Marathon
          </h1>
          <p className={styles.subtitle}>13 miles. 13 Dunkins.</p>
        </header>

        <hr className={styles.divider} />

        <p className={styles.description}>
          They say that America runs on Dunkin and we&rsquo;ve decided to test that
          proposition. This run will stop at every single Dunkin&rsquo; location within
          Cambridge city limits.
        </p>

        <section className={styles.section} aria-labelledby="rules-heading">
          <h2 className={styles.sectionHeading} id="rules-heading">The Rules</h2>
          <ol className={styles.rulesList}>
            {RULES.map((rule, i) => (
              <li key={i} className={styles.rulesItem}>
                <span className={styles.ruleNum} aria-hidden="true">{i + 1}</span>
                <span>{rule}</span>
              </li>
            ))}
          </ol>
        </section>

        <div className={styles.rsvpWrap}>
          <a
            className={styles.rsvpBtn}
            href={PARTIFUL_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            RSVP on Partiful
          </a>
        </div>

        <section className={styles.section} aria-labelledby="route-heading">
          <h2 className={styles.sectionHeading} id="route-heading">The Route</h2>
          <div className={styles.mapWrap}>
            <iframe
              src={MAPS_URL}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Cambridge Dunkin Half Marathon Route"
            />
          </div>

          <div className={styles.stopsGrid}>
            {STOPS.map((stop, i) => {
              const isFinish = i === STOPS.length - 1;
              return (
                <div
                  className={isFinish ? styles.stopCardFinish : styles.stopCard}
                  key={i}
                >
                  <span className={isFinish ? styles.stopLabelFinish : styles.stopLabel}>
                    {isFinish ? "Finish" : `Stop ${i + 1}`}
                  </span>
                  {stop.replace(", Cambridge MA", "")}
                </div>
              );
            })}
          </div>
        </section>

        <footer className={styles.footer}>
          <p>Not affiliated with Dunkin&rsquo; Donuts.</p>
        </footer>
      </div>
    </>
  );
}
