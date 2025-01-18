import NativeImgix, { Background as NativeBackground } from 'react-imgix';
import { ReactElement } from 'react';

export function Imgix({ src, ...rest }: NativeImgix['props']): ReactElement {
  return (
    <NativeImgix
      src={new URL(src, `https://${process.env.NEXT_PUBLIC_IMGIX_HOSTNAME}`).href}
      {...rest}
    />
  )
}

export function Background({ src, ...rest }: NativeImgix['props']): ReactElement {
  return (
    <NativeBackground
      src={new URL(src, `https://${process.env.NEXT_PUBLIC_IMGIX_HOSTNAME}`).href}
      {...rest}
    />
  )
}
