import PostsCard from "../posts/posts-card";
import classes from "./featured-posts.module.css";

export default function FeaturedPosts(props: any) {
  return (
    <section className={classes.latest}>
      <h2>Featured Posts</h2>
      <PostsCard posts={props.posts} />
    </section>
  );
}
