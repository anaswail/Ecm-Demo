interface ScreenshotFrameProps {
  src: string;
  alt: string;
  /** Tailwind aspect-ratio class, e.g. "aspect-[16/10]". Omit to size naturally at full width — no cropping. */
  aspect?: string;
  className?: string;
}

const ScreenshotFrame = ({
  src,
  alt,
  aspect,
  className = "",
}: ScreenshotFrameProps) => {
  return (
    <div
      className={`overflow-hidden rounded-md border border-border bg-bg-main ${className}`}
    >
      <div className="flex items-center gap-1.5 border-b border-border px-3 py-2.5">
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-primary" />
        <span className="h-2 w-2 rounded-full bg-primary" />
      </div>
      <div className={aspect ?? "w-full"}>
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className={
            aspect
              ? "h-full w-full object-cover object-top"
              : "h-auto w-full object-contain"
          }
        />
      </div>
    </div>
  );
};

export default ScreenshotFrame;
