import classes from "./all-posts.module.css";
import PostsGrid from "./posts-card";

export default function AllPosts(props: any) {
  return (
    <section className={classes.posts}>
      <h1>All Posts</h1>
      <PostsGrid posts={props.posts} />
    </section>
  );
}
