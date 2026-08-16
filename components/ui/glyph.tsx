/**
 * Renders icon path data from the content layer inside a normalized 24x24 box.
 * Decorative by default — the surrounding text carries the meaning.
 */
type GlyphProps = {
  path: string;
  className?: string;
};

export function Glyph({ path, className = "size-6" }: GlyphProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
    >
      <path d={path} />
    </svg>
  );
}
