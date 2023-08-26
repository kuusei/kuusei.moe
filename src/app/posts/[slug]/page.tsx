const Post = ({ params }: { params: { slug: string } }) => {
  return <div>Post: {params.slug}</div>;
};

export default Post;
