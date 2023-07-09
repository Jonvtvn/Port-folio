import Link from "next/link";
const NavItem = ({ text, href, active }) => {
  return (
    <Link legacyBehavior href={href}>
      <a className={`text-gray-950 bg-gradient-to-r hover:from-indigo-700  hover:to-pink-700 inline-block hover:text-transparent bg-clip-text rounded-md text-sm font-medium `}>{text}</a>
    </Link>
  );
};

export default NavItem;
