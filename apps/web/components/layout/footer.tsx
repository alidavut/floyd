import Link from 'next/link';
import badge from '@floyd/ui/assets/images/badge.svg';

export function Footer() {
  return (
    <div className="border-t border-brown-200 border-dashed text-sm py-12">
      <div className="container grid grid-cols-2 md:grid-cols-5 gap-8">
        <Links
          title="Floyd"
          links={[
            { label: "Home", href: "/", external: false },
            { label: "About", href: "/about", external: false },
            { label: "Contact", href: "mailto:support@floyd.so", external: true }
          ]}
        />
        <Links
          title="Community"
          links={[
            { label: 'Github', href: "https://github.com/FloydHQ", external: true },
            { label: "Twitter", href: "https://twitter.com/FloydHQ", external: true },
            { label: "LinkedIn", href: "https://www.linkedin.com/company/floydhq", external: true }
          ]}
        />
        <Links
          title="Legal"
          links={[
            { label: "Terms of Service", href: "/about/terms", external: false },
            { label: "Privacy Policy", href: "/about/privacy", external: false }
          ]}
        />
        <div className="text-center md:text-right col-span-2">
          <a href="/" className="text-lg font-semibold inline-block mb-2">
            <img src={badge.src} className="h-[2.5rem] rounded" />
          </a>
          <p className="text-gray-500">
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
        const linkClassNames = "text-gray-600 hover:text-gray-950 transition-colors";

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