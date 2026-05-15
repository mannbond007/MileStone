import type { Metadata } from "next";
import { blogPreviews } from "@/constants/home-data";
import { formatDate } from "@/lib/utils";
import { ArrowLeft, Clock, Calendar } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Badge } from "@/components/ui/badge";

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = blogPreviews.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found" };
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = blogPreviews.find((p) => p.slug === slug);
  if (!post) notFound();

  return (
    <div className="pt-24">
      <article className="py-12 md:py-16">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <Link href="/blog" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors mb-8">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <Badge variant="secondary" className="mb-4">{post.category}</Badge>
          <h1 className="font-heading text-3xl md:text-4xl font-extrabold tracking-tight text-primary dark:text-white mb-4">{post.title}</h1>
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-8">
            <span className="flex items-center gap-1"><Calendar className="h-4 w-4" />{formatDate(post.date)}</span>
            <span className="flex items-center gap-1"><Clock className="h-4 w-4" />{post.readTime}</span>
          </div>
          <div className="h-56 rounded-2xl bg-gradient-to-br from-navy to-navy-light mb-8" />
          <div className="prose prose-sm dark:prose-invert max-w-none">
            <p className="text-muted-foreground leading-relaxed text-base">{post.excerpt}</p>
            <p className="text-muted-foreground leading-relaxed text-base mt-4">
              This is a placeholder for the full blog post content. In production, this would be fetched from the database
              and rendered as rich content with proper formatting, images, and embedded elements.
            </p>
          </div>
        </div>
      </article>
    </div>
  );
}
