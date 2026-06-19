import { useState } from "react";
import { motion } from "framer-motion";

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  alt: string;
  src: string;
}

export function OptimizedImage({ src, alt, className, ...props }: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);

  return (
    <div className={`relative overflow-hidden bg-gray-100 dark:bg-gray-800 ${className}`}>
      {/* Skeleton / Placeholder animado */}
      {!isLoaded && (
        <div className="absolute inset-0 animate-pulse bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-700 dark:via-gray-800 dark:to-gray-700" />
      )}
      
      <motion.img
        src={src}
        alt={alt}
        loading="lazy"
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoaded ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        onLoad={() => setIsLoaded(true)}
        className={`w-full h-full object-cover ${className || ""}`}
        {...props}
      />
    </div>
  );
}
