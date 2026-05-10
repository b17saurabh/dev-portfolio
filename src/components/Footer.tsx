const footerLinks = [
  { label: 'LinkedIn', href: 'https://linkedin.com/in/b17saurabh' },
  { label: 'GitHub', href: 'https://github.com/b17saurabh' },
  { label: 'Email', href: 'mailto:saurabhbatham17@gmail.com' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[var(--surface-line)] bg-[var(--surface-muted)] py-8">
      <div className="portfolio-container flex flex-col items-center justify-between gap-4 md:flex-row">
        <div className="font-mono text-xs font-bold uppercase tracking-[0.05em] text-[var(--primary)]">
          Saurabh Batham. Built for impact.
        </div>
        <div className="flex gap-8">
          {footerLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target={link.href.startsWith('http') ? '_blank' : undefined}
              rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="font-mono text-xs font-semibold uppercase tracking-[0.05em] text-[var(--text-muted)] transition hover:text-[#0051d5]"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
