import React from 'react'
import { LoginForm } from '../components/forms/LoginForm'
import { useLogin } from '../hooks/useLogin'
import { Button } from '@headlessui/react'
import clsx from 'clsx'
import { Blog } from '../schema/types'
import BlogCard from '../components/ui/Blogcard'
import { CreateBlogForm } from '../components/forms/CreateBlog'
import Toggable from '../components/Toggable'
import { CreateBlogFormData } from '../schema/formTypes'
import { CreateNewBlog } from '../service/api-gateway'
const LoginPage = () => {
  const { state, login, logout } = useLogin()
  const [_blogs, setBlogs] = React.useState<Blog[]>([])
  const onLogin = async (data: { username: string; password: string }) => {
    const blogs = await login(data)
    setBlogs(blogs.slice(0, 5))
  }
  const addBlog = async (data: CreateBlogFormData) => {
    const newBlog = await CreateNewBlog(data)
    setBlogs([..._blogs, newBlog])
  }
  return (
    <article className='w-4/5 my-10 h-full p-4'>
      {state !== 'LOGGED' && <LoginForm status={state} onSubmit={onLogin} />}
      {
        state === 'LOGGED' && (
          <>
            <div className='my-4 flex gap-4'>
              <Button className={clsx(`w-full rounded-lg max-w-32 bg-white/30 py-1.5 px-3 text-sm/6 text-white`)} onClick={logout}>Logout</Button>

            </div>
            <Toggable>
              <CreateBlogForm status={''} onSubmit={addBlog} />
            </Toggable>
            <div className='w-full grid grid-cols-3 gap-4'>
              {
                _blogs.map(blog => <BlogCard key={blog.id} {...blog} />)
              }
            </div>
          </>

        )
      }
    </article>
  )
}

export default LoginPage
