import React from "react";

interface IBlog {
  id: string;
  title: string;
  url: string;
  author: string;
  likes: number;
}

interface BlogDetailsProps {
  content: IBlog;
  onLike: (id: string) => void;
}

const BlogDetails: React.FC<BlogDetailsProps> = ({ content, onLike }) => {
    return (
        <div className="min-h-screen bg-gray-100">
          <header className="bg-blue-500 py-10 text-white">
            <div className="max-w-5xl mx-auto px-4">
              <h1 className="text-5xl font-bold mb-4">{content.title}</h1>
              <p className="text-lg">
                Written by <span className="font-medium">{content.author}</span>
              </p>
            </div>
          </header>
    
          <main className="max-w-5xl mx-auto py-12 px-4">
            <section className="mb-8">
              <p className="text-gray-700 text-lg leading-relaxed">
                Explore the topic in detail by reading the full blog post. This page
                highlights key aspects of the content and provides a direct link to
                the source for further reading.
              </p>
            </section>
    
            <section className="mb-8 space-y-4">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis doloribus nostrum labore sit quas fuga voluptatibus! Aut quam itaque dicta recusandae doloribus voluptatum maxime, iste consequatur veritatis, molestiae beatae ex, impedit nihil! Repellendus, voluptatem magni sapiente rem, adipisci deserunt veniam nulla sequi hic ut eveniet, sit temporibus? At, amet?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis doloribus nostrum labore sit quas fuga voluptatibus! Aut quam itaque dicta recusandae doloribus voluptatum maxime, iste consequatur veritatis, molestiae beatae ex, impedit nihil! Repellendus, voluptatem magni sapiente rem, adipisci deserunt veniam nulla sequi hic ut eveniet, sit temporibus? At, amet?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis doloribus nostrum labore sit quas fuga voluptatibus! Aut quam itaque dicta recusandae doloribus voluptatum maxime, iste consequatur veritatis, molestiae beatae ex, impedit nihil! Repellendus, voluptatem magni sapiente rem, adipisci deserunt veniam nulla sequi hic ut eveniet, sit temporibus? At, amet?</p>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi perferendis doloribus nostrum labore sit quas fuga voluptatibus! Aut quam itaque dicta recusandae doloribus voluptatum maxime, iste consequatur veritatis, molestiae beatae ex, impedit nihil! Repellendus, voluptatem magni sapiente rem, adipisci deserunt veniam nulla sequi hic ut eveniet, sit temporibus? At, amet?</p>
            </section>
    
            <section className="flex items-center gap-4">
              <span className="text-xl text-gray-700">
                <strong>{content.likes}</strong> Likes
              </span>
              <button className="px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                onClick={() => onLike(content.id)}
              >
                Like this post
              </button>
            </section>
          </main>
    
          <footer className="bg-gray-900 text-gray-400 py-6 mt-10">
            <div className="max-w-5xl mx-auto px-4">
              <p>
                © {new Date().getFullYear()} Blog Details. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      );
};

export default BlogDetails;
