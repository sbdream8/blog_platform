import Link from "next/link";

export async function getServerSideProps() {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/posts`);
    
    if (!res.ok) {
      console.error("Failed to fetch posts");
      return { props: { posts: [] } }; // Return empty array on failure
    }
  
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
