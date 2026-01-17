import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePost } from "@/hooks/use-posts";
import { useRoute } from "wouter";
import { format } from "date-fns";
import NotFound from "./not-found";

export default function PostDetail() {
  const [, params] = useRoute("/blog/:slug");
  const slug = params?.slug || "";
  const { data: post, isLoading } = usePost(slug);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background font-sans">
        <Navbar />
        <main className="max-w-3xl mx-auto px-6 pt-40 pb-20 animate-pulse">
          <div className="h-10 w-3/4 bg-muted rounded mb-6"></div>
          <div className="h-4 w-32 bg-muted rounded mb-12"></div>
          <div className="space-y-4">
            <div className="h-4 w-full bg-muted/60 rounded"></div>
            <div className="h-4 w-full bg-muted/60 rounded"></div>
            <div className="h-4 w-2/3 bg-muted/60 rounded"></div>
          </div>
        </main>
      </div>
    );
  }

  if (!post) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20">
        <article className="prose prose-stone dark:prose-invert max-w-none">
          <header className="mb-10 not-prose">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tight text-foreground mb-4">
              {post.title}
            </h1>
            <time className="text-sm text-muted-foreground">
              {post.createdAt && format(new Date(post.createdAt), 'MMMM d, yyyy')}
            </time>
          </header>

          <div className="leading-relaxed text-foreground/90 whitespace-pre-wrap">
            {post.content}
          </div>
        </article>

        <div className="mt-20 border-t border-border pt-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
