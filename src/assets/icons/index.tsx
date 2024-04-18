import { ReactComponent as Close } from "./close.svg";
import { ReactComponent as Copy } from "./copy.svg";
import { ReactComponent as Delete } from "./delete.svg";
import { ReactComponent as Help } from "./help.svg";
import { ReactComponent as Home } from "./home.svg";
import { ReactComponent as Move } from "./move.svg";
import { ReactComponent as Plus } from "./plus.svg";
import { ReactComponent as QrScanner } from "./qr_scanner.svg";
import { ReactComponent as Reference } from "./reference.svg";
import { ReactComponent as Settings } from "./settings.svg";

export const icons = {
  close: Close,
  copy: Copy,
  delete: Delete,
  help: Help,
  home: Home,
  move: Move,
  plus: Plus,
  qrScanner: QrScanner,
  reference: Reference,
  settings: Settings,
};

export type IconType = keyof typeof icons;

export type IconProps = {
  type: IconType;
};

export const Icon = (props: IconProps) => {
  const { type } = props;

  const SelectedIcon = icons[type];

  return <SelectedIcon />;
};
