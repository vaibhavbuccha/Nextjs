import { useRouter } from "next/router";
import React from "react";

export default function productReview() {
  const router = useRouter();
  const productId = router.query.productId;
  const reviewId = router.query.reviewId;
  return (
    <div>
      Product id = {productId} Review id = {reviewId}
    </div>
  );
}
