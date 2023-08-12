'use client';

import Image from 'next/image';
import type { ImageProps } from 'next/image';

export const WithImage: React.FC<ImageProps> = (props) => {
  return <Image {...props} />;
};

export default WithImage;
