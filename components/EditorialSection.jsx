import Link from "next/link";

export default function EditorialSection({ intro, highlights = [], faqs = [], links = [] }) {
  return (
    <section className="editorial-section" aria-label="Restaurant guide details">
      {intro ? (
        <div className="editorial-intro">
          {intro.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      ) : null}

      {highlights.length ? (
        <div>
          <h2>Best For</h2>
          <div className="highlight-grid">
            {highlights.map((item) => (
              <article key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {faqs.length ? (
        <div>
          <h2>FAQs</h2>
          <div className="faq-list">
            {faqs.map((item) => (
              <article key={item.question}>
                <h3>{item.question}</h3>
                <p>{item.answer}</p>
              </article>
            ))}
          </div>
        </div>
      ) : null}

      {links.length ? (
        <div>
          <h2>Keep Browsing</h2>
          <div className="editorial-links">
            {links.map((link) => (
              <Link href={link.href} key={link.href}>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      ) : null}
    </section>
  );
}
