// jsr ainda não suporta jsx: https://github.com/jsr-io/jsr/issues/24
import type { JSX } from "@bossley9/sjsx/jsx-runtime";

export function UiButton({label, onClick}: {label: string, onClick: string}): JSX.Element {
  return <button onClick={onClick}>{label}</button>
}
