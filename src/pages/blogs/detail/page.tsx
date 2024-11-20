
import { useLoaderData } from 'react-router-dom'
import BlogDetails from './components/Detail';
import { IBlog } from '../../../domain/schema/entities';
import { useBlogs } from '../../../infrastructure/hooks/useBlogs';
import { useEffect, useState } from 'react';

const DetailPage = () => {
    const blogData = useLoaderData() as IBlog
    const {edit} = useBlogs()
    const [blog, setBlog] = useState<IBlog>(blogData)
    return (
        <div className="min-h-screen  flex items-center justify-center">
          <BlogDetails 
            content={blog}
            onLike={async (id) => {
              await edit(id, {...blogData, likes: blogData.likes + 1})
              setBlog({...blogData, likes: blog.likes + 1})
              }
            } 
            />
        </div>
      );
}

export default DetailPage
