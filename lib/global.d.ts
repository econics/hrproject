// lib/global.d.ts
interface Window {
  gtag: (
    command: "config" | "event",
    targetId: string,
    config?: Gtag.ConfigParams | Gtag.EventParams
  ) => void;
}
