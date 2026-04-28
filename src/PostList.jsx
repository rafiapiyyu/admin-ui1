import PostCard from "./PostCard";

const posts = [
  {
    id: 1,
    userId: 1,
    title: "Post Pertama",
    body: "Ini adalah isi dari post pertama",
  },
  {
    id: 2,
    userId: 1,
    title: "Post Kedua",
    body: "Ini adalah isi dari post kedua",
  },
  {
    id: 3,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 4,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 5,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 6,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 7,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 8,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 9,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 10,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
  {
    id: 11,
    userId: 2,
    title: "Post Ketiga",
    body: "Ini adalah isi dari post ketiga",
  },
];

function PostList() {
  return (
    <div className="min-h-screen bg-gray-100 p-6" >
        <h1 className="text-3xl font-bold text-center mb-6 text-special-red2">
          Post Cards
        </h1>
      {posts.map((post) => (
        <PostCard key={post.id} {...post} />
      ))}
    </div>
    
  );
}

export default PostList;