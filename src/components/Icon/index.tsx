import {
  FaBoxOpen,
  FaTshirt,
  FaHatCowboy,
  FaBath,
  FaSpaceShuttle,
  FaGlasses,
  FaCat,
} from "react-icons/fa";
import { IoIosBowtie } from "react-icons/io";

type IconProps = { name: string };

export const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "boxes": {
      return <FaBoxOpen />;
    }

    case "clothes": {
      return <FaTshirt />;
    }

    case "hats": {
      return <FaHatCowboy />;
    }

    case "sinks": {
      return <FaBath />;
    }

    case "space": {
      return <FaSpaceShuttle />;
    }

    case "sunglasses": {
      return <FaGlasses />;
    }

    case "ties": {
      return <IoIosBowtie />;
    }

    default: {
      return <FaCat />;
    }
  }
};
