import { Body, Container, Head, Html, Img, Link, Section, Tailwind } from '@react-email/components';
import { ReactNode } from 'react';
import { colors } from '@floyd/utils/colors';

interface Props {
  children?: ReactNode;
}

export function Layout({ children }: Props) {
  return (
    <Tailwind config={tailwindConfig}>
      <Html lang="en" dir="ltr" className="bg-gray-100 text-bunker-950">
        <Head />
        <Body className="font-sans">
          <Section className="bg-gray-100 text-bunker-950 p-12">
            <Container className="container">
              <Link href="https://floyd.so">
                <Img src="https://floyd.so/images/logo-dark.png" alt="Floyd" className="mb-6 h-7" />
              </Link>
              {children}
            </Container>
          </Section>
        </Body>
      </Html>
    </Tailwind>
  )
}

const tailwindConfig = {
  theme: {
    extend: {
      colors
    },
    container: {
      center: true,
      padding: '1rem',
      screens: {
        sm: '640px',
        md: '768px',
        lg: '1024px',
        xl: '1280px',
      }
    }
  }
};
