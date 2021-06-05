// import {
//   FaBoxOpen,
//   FaTshirt,
//   FaHatCowboy,
//   FaBath,
//   FaSpaceShuttle,
//   FaGlasses,
//   FaCat,
// } from "react-icons/fa";
// import { IoIosBowtie } from "react-icons/io";

type IconProps = { name: string };

// export const Icon: React.FC<IconProps> = ({ name }) => {
//   switch (name) {
//     case "boxes": {
//       return <FaBoxOpen />;
//     }

//     case "clothes": {
//       return <FaTshirt />;
//     }

//     case "hats": {
//       return <FaHatCowboy />;
//     }

//     case "sinks": {
//       return <FaBath />;
//     }

//     case "space": {
//       return <FaSpaceShuttle />;
//     }

//     case "sunglasses": {
//       return <FaGlasses />;
//     }

//     case "ties": {
//       return <IoIosBowtie />;
//     }

//     default:
//       {
//         return <FaCat />;
//       }
//       break;
//   }
// };

export const Icon: React.FC<IconProps> = ({ name }) => {
  switch (name) {
    case "boxes": {
      return <div>icon</div>;
    }

    case "clothes": {
      return <div>icon</div>;
    }

    case "hats": {
      return <div>icon</div>;
    }

    case "sinks": {
      return <div>icon</div>;
    }

    case "space": {
      return <div>icon</div>;
    }

    case "sunglasses": {
      return <div>icon</div>;
    }

    case "ties": {
      return <div>icon</div>;
    }

    default:
      {
        return <div>icon</div>;
      }
      break;
  }
};
