import { Link } from "react-router-dom";

interface Props {
  /** nav label */
  label: string | null;

  /** nav link */
  link: string | null;
}

const resourcesItems: Props[] = [
  {
    label: "Home",
    link: "/"
  },
  {
    label: "Modules",
    link: "/components"
  },
  {
    label: "Code Samples",
    link: "/code"
  },
];

const Navbar = (): JSX.Element => {
  return (
    <ul className="flex flex-row justify-center my-4">
      {resourcesItems.map((item: Props, index: number) => (
        <NavbarItem
          key={`navitem-${index}`}
          label={ item.label}
          link={ item.link }
        />
      ))}
    </ul>
  );
};

const NavbarItem = ({ label, link }: Props): JSX.Element => {
  return (
    <li className="basis-1/5 text-center px-2">
      { link && <Link to={ link } className="block px-4 py-2 text-sm bg-blue rounded-none shadow-sm text-white font-bold">{ label }</Link> }
    </li>
  );
};

export default Navbar;