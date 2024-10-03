import Link from "next/link";

export default function Home() {
  return (
    <div>
      <nav>
        <Link href="/">Home</Link>
        <Link href="/product">Product</Link>
      </nav>
      <h1 className="text-danger">Homesss</h1>
    </div>
  );
}
