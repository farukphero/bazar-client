import Image from "next/image";
import Plus from "../../../images/icons/plus.svg";
import Minus from "../../../images/icons/minus.svg";

interface AppProps {
  id: number;
  open: number;
}

export function Icon({ id, open }: AppProps) {
  if (id === open) {
    return <Image src={Minus} alt="minus" width={16} height={16} />;
  }

  return <Image src={Plus} alt="plus" width={16} height={16} />;
}
