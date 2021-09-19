import React from "react";
import Link from "next/link";

export default function productList() {
  return (
    <div>
      <Link href="/">
        <a>Home</a>
      </Link>
      <Link href="/product/1">
        <a>Product 1</a>
      </Link>
      <Link href="/product/2">
        <a>Product 2</a>
      </Link>
      <Link href="/product/3" replace>
        <a>Product 3</a>
      </Link>
    </div>
  );
}
