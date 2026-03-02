export function Footer() {
  return (
    <footer className="flex flex-col items-center justify-between gap-4 bg-[#0e0e0c] px-8 py-8 text-[0.7rem] text-[rgba(250,250,248,0.6)] md:flex-row md:px-16">
      <p className="tracking-[0.08em] text-[rgba(250,250,248,0.5)]">
        © 2025 Viktor Rura Photography · Dublin, Ireland
      </p>
      <ul className="flex gap-6">
        <li>
          <a
            href="#"
            className="uppercase tracking-widest text-[rgba(250,250,248,0.6)] transition-colors hover:text-accent"
          >
            Instagram
          </a>
        </li>
        <li>
          <a
            href="#"
            className="uppercase tracking-widest text-[rgba(250,250,248,0.6)] transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
        </li>
        <li>
          <a
            href="mailto:hello@viktorrura.ie"
            className="uppercase tracking-widest text-[rgba(250,250,248,0.6)] transition-colors hover:text-accent"
          >
            Email
          </a>
        </li>
      </ul>
    </footer>
  );
}

