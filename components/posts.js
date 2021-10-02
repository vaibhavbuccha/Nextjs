import React from "react";
import Link from "next/link";
export default function Posts({ post }) {
  return (
    <div>
      <Link href={`posts/${post.id}`} passHref>
        <h3>
          {post.id} {post.title}
        </h3>
      </Link>
      <hr />
    </div>
  );
}
