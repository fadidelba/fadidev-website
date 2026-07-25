// ponytail: motion is earned — the uniform scroll fade-in was the biggest
// "AI-generated" tell, so FadeIn is now a plain wrapper. Kept so legal pages
// that still import it render unchanged; remove usages opportunistically.
export default function FadeIn({
  children,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  return <div className={className}>{children}</div>;
}
