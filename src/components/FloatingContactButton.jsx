import { FaCommentDots } from "react-icons/fa";
import { Link } from "react-router-dom";

const FloatingContactButton = () => {
  return (
    <Link
      to="/contact"
      className="
        fixed
        bottom-6
        right-6
        z-50
        flex
        items-center
        gap-2
        bg-[#cb9d54]
        text-black
        px-4
        py-3
        rounded-full
        shadow-lg
        hover:bg-white
        transition-all
        duration-300
        group
      "
    >
      <FaCommentDots className="text-2xl" />
      <span className="text-lg font-medium whitespace-nowrap">
        Contact Us
      </span>
    </Link>
  );
};

export default FloatingContactButton;
