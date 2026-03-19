import { useState } from "react";

interface OptimizedImageProps extends Omit<React.ImgHTMLAttributes<HTMLImageElement>, 'loading' | 'fetchpriority'> {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  priority?: boolean;
  className?: string;
}

export function OptimizedImage({
  src,
  alt,
  width,
  height,
  priority = false,
  className = "",
  ...props
}: OptimizedImageProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // Calculate aspect ratio string for CSS
  const aspectRatio = width && height ? `${width} / ${height}` : undefined;

  return (
    <div 
      className={`relative overflow-hidden bg-muted/20 ${className}`} 
      style={{ 
        aspectRatio,
        width: width ? `${width}px` : '100%',
        maxWidth: '100%'
      }}
    >
      {isLoading && !error && (
        <div className="absolute inset-0 bg-secondary/30 animate-pulse flex items-center justify-center">
          <div className="w-10 h-10 border-4 border-primary/20 border-t-primary rounded-full animate-spin" />
        </div>
      )}
      <img
        src={src}
        alt={alt}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : "auto"}
        width={width}
        height={height}
        onLoad={() => setIsLoading(false)}
        onError={() => {
          setIsLoading(false);
          setError(true);
        }}
        className={`w-full h-full object-cover transition-all duration-700 ease-in-out ${
          isLoading ? "scale-105 blur-sm opacity-0" : "scale-100 blur-0 opacity-100"
        } ${error ? "hidden" : ""}`}
        {...props}
      />
      {error && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-muted/10 p-4 text-center">
          <div className="text-muted-foreground mb-2">📸</div>
          <span className="text-muted-foreground text-xs font-medium">Image not available</span>
        </div>
      )}
    </div>
  );
}
