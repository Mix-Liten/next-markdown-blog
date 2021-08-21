import Link from "next/link";

export default function Header() {
  return (
    <header>
      <Link href="/">
        <h2>Dev Blog</h2>
      </Link>
    </header>
  );
}
