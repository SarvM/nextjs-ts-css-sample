import { Layout } from "@/components/navigation-bar/layout";
import AllPosts from "@/components/posts/all-posts";
import { getAllPosts } from "@/lib/posts-util";

export default function Page() {
  const allPosts = getAllPosts();
  return (
    <main>
      <Layout />
      <AllPosts posts={allPosts} />
    </main>
  );
}
