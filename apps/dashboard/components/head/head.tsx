import NextHead from 'next/head';
import badge from '@floyd/ui/assets/images/badge.svg';

interface Props {
  title: string;
  titlePure?: boolean;
  description?: string;
  canonical?: string;
  og?: {
    title?: string;
    description?: string;
    image?: string;
    url?: string;
  };
}

export function Head({ title, titlePure, canonical, description, og = {} }: Props) {
  const descriptionParam = description || og.description;
  const baseUrl = 'https://floyd.so';

  const ogParams = {
    title: og.title || title,
    description: og.description || description,
    image: og.image || new URL(badge.src, baseUrl).href
  };

  return (
    <NextHead>
      <title>{titlePure ? title : `${title} - Floyd`}</title>
      <meta property="og:locale" content="en_US" />
      {ogParams.title && <meta property="og:title" content={ogParams.title} />}
      {ogParams.description && <meta property="og:description" content={ogParams.description} />}
      {og.url && <meta property="og:url" content={og.url} />}
      <meta property="og:image" content={ogParams.image} />
      {descriptionParam && <meta name="description" content={descriptionParam} />}
      {canonical && <link rel="canonical" href={new URL(canonical, baseUrl).href} />}
    </NextHead>
  )
}
