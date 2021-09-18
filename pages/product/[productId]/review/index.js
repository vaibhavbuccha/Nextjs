import { useRouter } from "next/router";
import React from "react";

export default function review() {
  const router = useRouter();
  const product = router.query.productId;
  return <div>All Reviews of products {product}</div>;
}
