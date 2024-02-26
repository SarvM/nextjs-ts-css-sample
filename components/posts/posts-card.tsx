import PostItem from "./post-item";
import classes from "./posts-card.module.css";

function PostsCard(props: any) {
  const { posts } = props;

  return (
    <ul className={classes.grid}>
      {posts.map((post: any) => (
        <PostItem key={post.slug} post={post} />
      ))}
    </ul>
  );
}

export default PostsCard;
