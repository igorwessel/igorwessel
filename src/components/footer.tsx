const links = [
  {
    title: "GitHub",
    href: "https://github.com/igorwessel",
    label: "github.com/igorwessel",
  },
  {
    title: "Twitter",
    href: "https://twitter.com/igorwessel",
    label: "twitter.com/igorwessel",
  },
];

export default function Footer() {
  return (
    <footer className="mt-12 border-t border-border pt-6 pb-8">
      <div className="flex flex-col gap-4 text-sm text-muted-foreground">
        <div>
          <span className="text-primary mr-2">$</span>
          <span>cat footer.txt</span>
        </div>

        <div className="pl-4">
          <p>
            © 2025 Igor Wessel -{" "}
            <a
              className="hover:text-primary transition-colors"
              href="https://github.com/igorwessel/igorwessel/blob/main/LICENCE"
            >
              Terms & Conditions
            </a>
          </p>
          <ul className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            {links.map((link, index) => (
              <li key={link.href}>
                <a
                  key={link.href}
                  href={link.href}
                  title={link.title}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex gap-2 hover:text-primary transition-colors"
                >
                  {index > 0 && <span className="text-primary">|</span>}
                  <span>{link.label}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
