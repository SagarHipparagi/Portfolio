import { Footer } from "@/components/Footer";
import { Navbar } from "@/components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen bg-background font-sans selection:bg-foreground/10">
      <Navbar />
      
      <main className="max-w-3xl mx-auto px-6 pt-32 md:pt-40 pb-20">
        <div className="flex flex-col gap-12">
          
          {/* Hero Section */}
          <section className="space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-foreground">
              Sagar Hipparagi
            </h1>
            
            <div className="space-y-4">
              <h2 className="text-xl md:text-2xl text-foreground/80 font-medium">
                B.Tech in UVCE, Bengaluru | AI & Python Enthusiast
              </h2>
              
              <p className="text-base md:text-lg text-muted-foreground leading-relaxed max-w-2xl">
                I’m an undergraduate working on AI-powered software with Python, exploring how ideas scale from theory to real-world systems.
              </p>
            </div>
          </section>

          <hr className="border-border/40" />

          {/* Projects Section */}
          <section>
            <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-8">
              Selected Project
            </h3>
            
            <div className="group">
              <div className="flex flex-col gap-3 p-6 -mx-6 rounded-2xl hover:bg-muted/50 transition-colors duration-300">
                <div className="flex items-baseline justify-between">
                  <h4 className="text-lg font-semibold text-foreground group-hover:text-foreground/90 transition-colors">
                    Document Search Engine using AI
                  </h4>
                </div>
                
                <p className="text-muted-foreground leading-relaxed">
                  Built a private local document search engine using sentence-transformer embeddings 
                  and LLM-based query chains for accurate, context-aware retrieval.
                </p>

                <div className="flex gap-2 pt-2">
                  <span className="text-xs px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground font-medium">Python</span>
                  <span className="text-xs px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground font-medium">LangChain</span>
                  <span className="text-xs px-2 py-1 rounded bg-muted-foreground/10 text-muted-foreground font-medium">Embeddings</span>
                </div>
              </div>
            </div>
          </section>

          <Footer />
        </div>
      </main>
    </div>
  );
}
