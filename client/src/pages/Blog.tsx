import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { usePosts } from "@/hooks/use-posts";
import { format } from "date-fns";
import { Link } from "wouter";

export default function Blog() {
  const { data: posts, isLoading, error } = usePosts();

  return (
    <div className="min-h-screen bg-background font-sans">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20">
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground mb-4">
            Writing
          </h1>
          <p className="text-muted-foreground text-lg">
            Thoughts on AI, software development, and learning.
          </p>
        </header>

        <section className="space-y-12">
          {isLoading ? (
            <div className="space-y-8 animate-pulse">
              {[1, 2, 3].map((i) => (
                <div key={i} className="space-y-3">
                  <div className="h-6 w-3/4 bg-muted rounded"></div>
                  <div className="h-4 w-full bg-muted/60 rounded"></div>
                  <div className="h-3 w-24 bg-muted/40 rounded"></div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="p-4 rounded-lg bg-destructive/10 text-destructive text-sm">
              Failed to load posts. Please try again later.
            </div>
          ) : posts?.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-20 text-center border border-dashed border-border rounded-lg">
              <p className="text-muted-foreground mb-2">No posts yet.</p>
              <p className="text-sm text-muted-foreground/60">Check back soon for updates!</p>
            </div>
          ) : (
            posts?.map((post) => (
              <article key={post.id} className="group relative flex flex-col items-start">
                <h2 className="text-xl font-semibold text-foreground tracking-tight mb-2">
                  <Link href={`/blog/${post.slug}`} className="hover:underline underline-offset-4 decoration-muted-foreground/30">
                    {post.title}
                  </Link>
                </h2>
                <time className="relative z-10 order-first mb-3 flex items-center text-sm text-muted-foreground pl-3.5">
                  <span className="absolute inset-y-0 left-0 flex items-center" aria-hidden="true">
                    <span className="h-4 w-0.5 rounded-full bg-border group-hover:bg-foreground/20 transition-colors"></span>
                  </span>
                  {post.createdAt && format(new Date(post.createdAt), 'MMMM d, yyyy')}
                </time>
                <p className="relative z-10 mt-2 text-sm leading-6 text-muted-foreground line-clamp-3">
                  {post.summary}
                </p>
                <div className="relative z-10 mt-4 flex items-center text-sm font-medium text-foreground">
                  <Link href={`/blog/${post.slug}`} className="flex items-center hover:text-foreground/80 transition-colors">
                    Read article
                    <svg viewBox="0 0 16 16" fill="none" aria-hidden="true" className="ml-1 h-4 w-4 stroke-current">
                      <path d="M6.75 5.75 9.25 8l-2.5 2.25" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>

        <div className="mt-20 border-t border-border pt-10">
          <Footer />
        </div>
      </main>
    </div>
  );
}
