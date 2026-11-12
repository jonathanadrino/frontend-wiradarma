import Image from "next/image";

// Theme-aware photo treatment (values live in globals.css):
//  - light: near-natural colour with a faint cool tint; scrims wash toward white
//  - dark:  grayscale + navy multiply; scrims darken toward ink
export default function Photo({
  photo,
  sizes = "100vw",
  preload = false,
  tintOpacity = 0.45,
  scrim = 0,
  className = "",
  imgClassName = "",
  children,
}) {
  // Callers that position the photo themselves (e.g. "absolute inset-0") must not also get `relative`,
  // otherwise the two position utilities clash and the wrapper collapses to zero height.
  const position = /\b(absolute|fixed)\b/.test(className) ? "" : "relative";
  return (
    <div className={`${position} overflow-hidden ${className}`}>
      <div className="photo-filter absolute inset-0">
        <Image
          src={photo.src}
          alt={photo.alt}
          fill
          sizes={sizes}
          preload={preload}
          placeholder="blur"
          className={`object-cover ${imgClassName}`}
        />
      </div>
      <div aria-hidden="true" className="photo-tint absolute inset-0" style={{ "--tint": tintOpacity }} />
      {scrim > 0 && <div aria-hidden="true" className="photo-scrim absolute inset-0" style={{ "--scrim": scrim }} />}
      {children}
    </div>
  );
}
