import Link from "next/link";

export default function Meals() {
  return (
    <div>
      <h1>Meals Page</h1>
      <p><Link href="/shares">Share</Link></p>
      <p><Link href="/slug">Slug</Link></p>
    </div>
  );
}