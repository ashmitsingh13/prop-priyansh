import NextImage from "next/image"

interface CustomImageProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Image({ src, alt, width = 400, height = 300, className }: CustomImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}
