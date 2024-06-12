import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "../../components/meals/meals-grid";
export default function MealsPage() {
  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highligh}>by you</span>
        </h1>
        <p>
          Choose you favorite recipe and cook it yourself. It is easy and fun.
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share you favorite recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <MealsGrid meals={[]}></MealsGrid>
      </main>
    </>
  );
}
