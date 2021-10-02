import { useRouter } from "next/dist/client/router";
import Link from "next/link";
function Home() {
  return (
    <div>
      <h1>Next js data pre-rendering</h1>
      <Link href="/users">
        <a>Users</a>
      </Link>
      <Link href="/posts">
        <a>Posts</a>
      </Link>
    </div>
  );
}

export default Home;
