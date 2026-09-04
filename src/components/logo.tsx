import { siteConfig } from "@/lib/site-config";

export function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className={`flex items-center gap-2 text-lg font-medium ${light ? "text-white" : "text-ink-900"}`}>
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand font-serif text-sm text-white italic">
        l.
      </span>
      {siteConfig.name}
    </span>
  );
}
