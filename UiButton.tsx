import {type JSX} from "@bossley9/sjsx/jsx-runtime";

export function UiButton({label, onClick}: {label: string, onClick: string}): JSX.Element {
  return <button onClick={onClick}>{label}</button>
}

export function Teste() {
  return <UiButton label="Teste" onClick="play" />
}
