import { cn } from "@/lib/cn";

/** NexJob's compact N monogram. Uses theme colors for light and dark modes. */
export function BrandMark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 64 64" aria-hidden="true" className={cn("size-8 shrink-0", className)}>
      <rect width="64" height="64" rx="17" className="fill-primary" />
      <path
        d="M18 44V20L46 44V20"
        fill="none"
        stroke="currentColor"
        strokeWidth="6.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="text-on-primary"
      />
      <circle cx="46" cy="17.5" r="3.2" className="fill-on-primary" />
    </svg>
  );
}
