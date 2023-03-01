import {
  Bars3Icon,
  ChevronLeftIcon,
  HeartIcon,
  MagnifyingGlassIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import { Link, useLocation } from "react-router-dom";

export default function AppHeader() {
  const { hash } = useLocation();

  return (
    <header className="sticky top-0 z-50 flex h-14 w-full items-center bg-white shadow-md md:h-16 md:px-1 md:shadow-lg lg:px-2">
      <Link to="#menu" aria-label="Open menu" className="icon lg:hidden">
        <Bars3Icon />
      </Link>

      <Link to="/" aria-label="Home" className="icon md:mx-2 lg:mx-4">
        <picture>
          <img src="/vite.svg" alt="Logo" width={40} height={40} />
        </picture>
      </Link>

      <nav
        className={`${
          hash === "#menu" ? "!left-0 z-30" : "-left-full"
        } fixed top-0 w-4/5 bg-inherit transition-all duration-150 ease-in-out motion-reduce:transition-none max-lg:h-screen max-lg:max-w-xs max-lg:shadow-lg lg:relative lg:left-1 lg:h-16 lg:w-full lg:max-w-fit`}
      >
        <ul className="flex max-lg:flex-col max-lg:space-y-3 max-lg:p-1 lg:h-16 lg:items-center lg:space-x-5">
          <li>
            <Link to="/men">Men</Link>
          </li>
          <li>
            <Link to="/women">Women</Link>
          </li>
          <li>
            <Link to="/kids">Kids</Link>
          </li>
          <li>
            <Link to="/beauty">Beauty</Link>
          </li>
          <li>
            <Link to="/sports">Sports</Link>
          </li>
          <li>
            <Link to="/electronics">Electronics</Link>
          </li>
          <li>
            <Link to="/appliance">Appliance</Link>
          </li>
          <li>
            <Link to="/offers">Offers</Link>
          </li>
        </ul>
      </nav>
      <span
        onClick={() => history.back()}
        className={`${
          hash === "#menu"
            ? "top-0 left-0 z-20 !inline h-screen w-full bg-slate-500 opacity-70"
            : "!hidden"
        } fixed`}
      ></span>

      <Link
        to="#search"
        aria-label="Open searchbar"
        className="icon ml-auto md:hidden"
      >
        <MagnifyingGlassIcon />
      </Link>

      <form
        action="/search"
        method="get"
        className={`${
          hash === "#search"
            ? "max-w-full max-md:fixed max-md:top-0 max-md:z-20 max-md:h-screen"
            : "max-md:hidden"
        } mx-auto flex w-full flex-wrap items-center self-start md:top-3 md:h-10 md:max-w-md md:overflow-hidden md:border-2 md:focus-within:h-96 md:focus-within:shadow-2xl lg:mr-1 lg:max-w-xs`}
      >
        <button
          onClick={() => history.back()}
          type="button"
          aria-label="Close searchbar"
          className="icon md:hidden"
        >
          <ChevronLeftIcon />
        </button>

        <input
          type="search"
          name="q"
          id="si"
          placeholder="Search anything here.."
          className="h-12 w-full px-2 max-md:max-w-[calc(100%-88px)] md:h-[37px] md:max-w-[calc(100%-34px)]"
        />

        <button
          type="submit"
          aria-label="Search now"
          className="max-md:icon h-8 w-8 p-1"
        >
          <MagnifyingGlassIcon />
        </button>

        <div className="h-full w-full overflow-y-auto border-t-2">
          {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
            <p key={i} className="p-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic
              dolorem vero ducimus doloribus laboriosam illo saepe voluptatibus,
              eligendi iusto iste ad consequatur quo recusandae iure accusamus
              non possimus sequi. Lorem, ipsum dolor sit amet consectetur
              adipisicing elit. Voluptate voluptatum nostrum amet, quasi ea
              sint! Quasi temporibus, incidunt sed provident magni accusantium
              commodi fugit ex? Sint quia asperiores exercitationem fuga.
            </p>
          ))}
        </div>
      </form>

      <Link to="/wishlist" aria-label="Wishlist" className="icon">
        <HeartIcon />
      </Link>

      <Link to="/cart" aria-label="Cart" data-badge={5} className="icon">
        <ShoppingBagIcon />
      </Link>

      <Link to="/account" aria-label="Account" className="icon">
        <UserIcon />
      </Link>
    </header>
  );
}
