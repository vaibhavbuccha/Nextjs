import React from "react";
import Posts from "../../components/posts";

export default function PostList({ posts }) {
  return (
    <div>
      <h1>List of Posts</h1>
      <hr />
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Posts post={post} />
          </div>
        );
      })}
    </div>
  );
}

export async function getStaticProps() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return {
    props: {
      posts: data.slice(0, 10),
    },
  };
}
