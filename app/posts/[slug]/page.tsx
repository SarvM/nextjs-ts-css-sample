import { Layout } from "@/components/navigation-bar/layout";

export default function Page({ params }: { params: { slug: string } }) {
  return (
    <main>
      <Layout />
    </main>
  );
}
