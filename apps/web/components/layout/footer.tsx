import Link from 'next/link';
import badge from '@floyd/ui/assets/images/badge.svg';

export function Footer() {
  return (
    <div className="border-t border-gray-200 border-dashed text-sm py-12">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-8">
        <Links
          title="Floyd"
          links={[
            { label: "Home", href: "/", external: false },
            { label: "About us", href: "/about", external: false },
            { label: "Pricing", href: "/pricing", external: false },
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
            { label: "Creators", href: "/for/creators", external: false },
            { label: "Workshops", href: "/for/workshops", external: false },
            { label: "Gamers", href: "/for/gamers", external: false },
            { label: "Musicians", href: "/for/musicians", external: false },
            { label: "Comedy clubs", href: "/for/comedy-clubs", external: false },
            { label: "Yoga instructors", href: "/for/yoga-instructors", external: false },
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
        <div className="text-center md:text-right col-span-2 md:col-span-1">
          <a href="/" className="text-lg font-semibold inline-block mb-2">
            <img src={badge.src} className="h-[2.5rem] rounded-xl" />
          </a>
          <p className="text-bunker-500">
            © {new Date().getFullYear()}, Floyd LLC
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
