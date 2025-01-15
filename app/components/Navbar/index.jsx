import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
  return (
    <header className="mb-4 flex items-center justify-between py-4 md:py-8">
      <Logo />
      <NavLinks />
    </header>
  );
};

export default Navbar;
