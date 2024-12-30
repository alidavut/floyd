import Link from 'next/link';
import badge from '@floyd/ui/assets/images/badge.svg';

export function Footer() {
  return (
    <div className="border-t border-dashed text-sm py-12">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-8">
        <Links
          title="Floyd"
          links={[
            { label: "Home", href: "/", external: false },
            { label: "About", href: "/about", external: false },
            { label: "Contact", href: "mailto:hey@floyd.so", external: true }
          ]}
        />
        <Links
          title="Community"
          links={[
            { label: "Twitter", href: "https://twitter.com/HeyFloydSo", external: true },
            { label: 'Instagram', href: "https://instagram.com/HeyFloydSo", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/floydhq", external: true }
          ]}
        />
        <Links
          title="For"
          links={[
            { label: "Concerts", href: "/for/concerts", external: false },
            { label: "Festivals", href: "/for/festivals", external: false },
            { label: "Yoga Instructors", href: "/for/yoga-instructors", external: false },
            { label: "Theaters", href: "/for/theaters", external: false },
            { label: "Webinars", href: "/for/webinars", external: false },
            { label: "Workshops", href: "/for/workshops", external: false },
            { label: "More", href: "/for", external: false }
          ]}
        />
        <Links
          title="Legal"
          links={[
            { label: "Terms of Service", href: "/about/terms", external: false },
            { label: "Privacy Policy", href: "/about/privacy", external: false }
          ]}
        />
        <div className="text-center md:text-right">
          <a href="/" className="text-lg font-semibold inline-block mb-2">
            <img src={badge.src} className="h-[2.5rem] rounded-sm" />
          </a>
          <p className="text-bunker-500">
            Copyright {new Date().getFullYear()} Floyd.
          </p>
        </div>
      </div>
    </div>
  )
}

export function Links({ title, links }: { title: string, links: { label: string, href: string, external: boolean }[] }) {
  return (
    <div className="text-center md:text-left">
      <h4 className="uppercase mb-4 font-semibold">{title}</h4>
      <ul className="space-y-1">
      {links.map((link, i) => {
        const linkClassNames = "text-bunker-500 hover:text-bunker-950 transition-colors";

        const linkContent = link.external ? (
          <a href={link.href} target="_blank" rel="noreferrer" className={linkClassNames}>
            {link.label}
          </a>
        ) : (
          <Link href={link.href} className={linkClassNames}>{link.label}</Link>
        )

        return (
          <li key={i}>
            {linkContent}
          </li>
        )
      })}
      </ul>
    </div>
  )
}
