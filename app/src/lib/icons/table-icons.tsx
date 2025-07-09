import { IconPlus, IconSettings } from "@tabler/icons-react";

export function Settings(props: { className?: string }) {
  return (
    <IconSettings className={props.className} />
  );
}

export function Plus(props: { className?: string }) {
  return (
    <IconPlus className={props.className} />
  );
}
