import CloseIcon from "@/assets/CloseIcon";
import HamburgerMenu from "@/assets/HamburgerMenu";

export const MenuIcon = ({
  isOpen,
  toggle,
}: {
  isOpen: boolean;
  toggle: () => void;
}) => (
  <button onClick={toggle} className="text-black block lg:hidden">
    {isOpen ? <CloseIcon /> : <HamburgerMenu />}
  </button>
);
