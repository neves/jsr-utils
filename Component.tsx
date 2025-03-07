import type { JSX } from "@kt3k/picojsx/jsx-runtime";

export function UiButton(
  { label, onClick }: { label: string; onClick: string },
): JSX.IntrinsicElements {
  return <button type="button" onClick={onClick}>{label}</button>;
}

export function Teste(): JSX.IntrinsicElements {
  return <UiButton label="Teste" onClick="play" />;
}
