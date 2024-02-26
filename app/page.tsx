import Image from "next/image";
import styles from "./page.module.css";
import { Layout } from "@/components/navigation-bar/layout";
import Hero from "@/components/landing-page/hero";
import FeaturedPosts from "@/components/landing-page/featured-posts";
import { getFeaturedPosts } from "@/lib/posts-util";

export default function Home() {
  const featuredPosts = getFeaturedPosts();
  return (
    <main>
      <Layout />
      <Hero />
      <FeaturedPosts posts={featuredPosts} />
    </main>
  );
}
