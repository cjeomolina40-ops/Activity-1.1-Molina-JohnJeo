
import Image from 'next/image';

export default function HeritageImage({
  src,
  alt,
  className = '',
}) {
  return (
    <Image
      className={className}
      src={src}
      alt={alt}
      width={800}
      height={500}
      sizes="(max-width: 560px) 94vw, (max-width: 800px) 48vw, 350px"
      loading="lazy"
      decoding="async"
    />
  );
}

