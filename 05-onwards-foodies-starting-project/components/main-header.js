import Link from "next/link";
import logoImg from "../assets/logo.png";
import classes from "./main-header.module.css";
export default function MainHeader() {
  return (
    <header className={classes.header}>
      <Link className={classes.logo} href="/">
        <img src={logoImg.src} alt="Food in a Plate" />
      </Link>
      <h1>Foodies</h1>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link href="/">All Meals</Link>
          </li>
          <li>
            <Link href="/meals">Meals</Link>
          </li>
          <li>
            <Link href="/community">Community</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
