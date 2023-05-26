'use client';

import { useEffect, useState } from 'react';
import { PostCard, Categories, PostWidget, FeaturedPosts } from '../../components';

import type { NextPage } from 'next';

import { getPosts } from '../../services';
import { Post } from '../../interfaces';

const Blog: NextPage = () => {

  const [posts, setPosts] = useState<Post[]>([])

  useEffect(() => {
      getPosts()
        .then((result) => setPosts(result));
  }, []);

  return (
    <div className="flex flex-col gap-4 container mx-auto text-white">
      <FeaturedPosts post={posts[0]} />
      <div className='
        flex
        flex-wrap
        justify-between
        gap-4
      '>
        { posts.map((post, id) => <PostCard post={post.node} key={id} />) }
      </div>
      {/* <div className="lg:col-span-4 col-span-1">
        <div className='lg:sticky relative top-8'>
          <PostWidget categories={undefined} slug={undefined} />
          <Categories />
        </div>
      </div> */}
    </div>
)}

export default Blog;