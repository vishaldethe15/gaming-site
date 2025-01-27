const navLinkData = [
  {
    title: "Home",
    url: "#",
  },
  {
    title: "About",
    url: "#",
  },
  {
    title: "Features",
    url: "./Pages",
  },
];

const NavLinks = () => {
  return (
    <nav className="hidden gap-12 lg:flex">
      {navLinkData.map((link, index) => (
        <NavLink title={link.title} url={link.url} key={index} />
      ))}
    </nav>
  );
};

const NavLink = ({ title, url }) => {
  return (
    <a
      href={url}
      className="text-lg font-normal text-gray-600 transition duration-100 hover:text-indigo-500 active:text-indigo-700"
    >
      {title}
    </a>
  );
};

export default NavLinks;
