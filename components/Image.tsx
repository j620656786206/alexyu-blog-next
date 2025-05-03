'use client';

import NextImage, { ImageProps } from 'next/image';
import { useState } from 'react';
import dynamic from 'next/dynamic';

const LightboxWrapper = dynamic(() => import('./LightboxWrapper'), {
  ssr: false,
});

const basePath = process.env.BASE_PATH || '';

const Image = ({ src, alt, ...rest }: ImageProps) => {
  const [open, setOpen] = useState(false);
  const fullSrc = `${basePath}${src}`;

  return (
    <div className="relative my-4">
      <NextImage
        src={fullSrc}
        alt={alt || ''}
        {...rest}
        className={`cursor-zoom-in ${rest.className || ''}`}
        onClick={() => setOpen(true)}
      />

      {open && (
        <LightboxWrapper
          open={open}
          close={() => setOpen(false)}
          slides={[{ src: fullSrc, alt: alt || '', description: alt || '' }]}
        />
      )}
    </div>
  );
};

export default Image;
