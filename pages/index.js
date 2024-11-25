import Link from "next/link";

export async function getServerSideProps() {
  const res = await fetch("http://localhost:3000/api/posts");
  const { data } = await res.json();
  return { props: { posts: data } };
}

export default function Home({ posts }) {
  return (
    <div>
      <h1>Blog Platform</h1>
      <Link href="/new">
        <a>Create New Post</a>
      </Link>
      <ul>
        {posts.map((post) => (
          <li key={post._id}>
            <Link href={`/post/${post._id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
