import Image, { StaticImageData } from "next/image";

interface PartnerProps {
  src: StaticImageData;
  alt: string;
}

export function Partner({ src, alt }: PartnerProps) {
  return <Image src={src} alt={alt} className="h-8 w-auto flex-none" />;
}
