import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ApiService } from '../../services/api';
import { BlogPost } from '../../types';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';

export const BlogPage: React.FC = () => {
  const [blogs, setBlogs] = useState<BlogPost[]>([]);

  useEffect(() => {
    ApiService.getBlogPosts().then(setBlogs);
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-12">
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <span className="text-lime-400 font-bold text-xs uppercase tracking-widest">FITNESS KNOWLEDGE VAULT</span>
        <h1 className="text-4xl sm:text-5xl font-black text-white uppercase">Fitness Resources & Blog</h1>
        <p className="text-slate-300 text-base">
          Evidence-based articles on Indian nutrition, strength training, body fat loss, and workout consistency.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {blogs.map((blog) => (
          <article key={blog.id} className="bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden flex flex-col justify-between hover:border-lime-400/50 transition-colors">
            <div className="space-y-4">
              <div className="h-48 overflow-hidden relative">
                <img src={blog.coverImage} alt={blog.title} className="w-full h-full object-cover" />
                <span className="absolute top-3 left-3 bg-slate-950/80 text-lime-400 border border-lime-400/30 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase">
                  {blog.category}
                </span>
              </div>
              <div className="p-6 space-y-3">
                <div className="flex items-center gap-4 text-xs text-slate-400">
                  <span className="flex items-center gap-1"><User className="w-3.5 h-3.5" /> {blog.author}</span>
                  <span className="flex items-center gap-1"><Calendar className="w-3.5 h-3.5" /> {blog.publishedAt}</span>
                </div>
                <h2 className="text-lg font-bold text-white hover:text-lime-400 transition-colors">{blog.title}</h2>
                <p className="text-xs text-slate-400 leading-relaxed">{blog.excerpt}</p>
              </div>
            </div>
            <div className="p-6 pt-0">
              <Link to={`/blog/${blog.slug}`} className="inline-flex items-center gap-1.5 text-xs font-bold text-lime-400 hover:underline">
                <span>Read Full Guide</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export const BlogPostPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<BlogPost | null>(null);

  useEffect(() => {
    if (slug) {
      ApiService.getBlogPostBySlug(slug).then(res => setPost(res || null));
    }
  }, [slug]);

  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center text-slate-400">
        Article loading or not found.
      </div>
    );
  }

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 space-y-8">
      <div className="space-y-4">
        <span className="bg-lime-400/10 text-lime-400 border border-lime-400/30 text-xs font-bold px-3 py-1 rounded-full uppercase">
          {post.category}
        </span>
        <h1 className="text-3xl sm:text-5xl font-black text-white">{post.title}</h1>
        <div className="flex items-center gap-4 text-sm text-slate-400">
          <span>By {post.author}</span>
          <span>•</span>
          <span>Published on {post.publishedAt}</span>
        </div>
      </div>

      <div className="rounded-3xl overflow-hidden border border-slate-800">
        <img src={post.coverImage} alt={post.title} className="w-full h-96 object-cover" />
      </div>

      <div className="prose prose-invert max-w-none text-slate-300 space-y-4 text-base leading-relaxed">
        <p className="text-lg font-medium text-slate-200">{post.excerpt}</p>
        <div className="pt-4 space-y-4">
          <p>{post.content}</p>
        </div>
      </div>
    </article>
  );
};
