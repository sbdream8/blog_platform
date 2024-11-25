export async function getServerSideProps({ params }) {
    const res = await fetch(`http://localhost:3000/api/posts`);
    const { data } = await res.json();
    const post = data.find((post) => post._id === params.id);
    return { props: { post } };
  }
  
  export default function PostDetail({ post }) {
    return (
      <div>
        <h1>{post.title}</h1>
        <p>{post.content}</p>
        <p>Created At: {new Date(post.createdAt).toLocaleDateString()}</p>
      </div>
    );
  }
  