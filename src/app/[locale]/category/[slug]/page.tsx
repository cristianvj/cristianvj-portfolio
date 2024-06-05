'use client';

import React, { FC, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

import { getCategoryPost } from '../../../../services';
import { Categories, PostCard } from '../../../../components';

import { useDarkContext } from '@/context/darkMode.context';

interface Post {
  author: Author;
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  featuredImage: {
    url: string;
  };
  categories: Category[];
  node?: any;
};

interface PropsPostNode {
  posts: PostNode[];
};

interface PostNode {
  node: Post;
};

type Category = {
  name: string;
  slug: string;
};

type Author = {
  bio: string;
  name: string;
  id: string;
  photo: {
    url: string;
  };
};

const CategoryPost: FC<any> = ({ params }) => {
  const { darkMode } = useDarkContext() || {};
  const router: any = useRouter();

  const [posts, setPosts] = useState<Post[] | null>([]);

   useEffect(() => {
    if(params.slug){
      getCategoryPost(params.slug).then((data) => setPosts(data));
    };
  }, [params.slug]);

  if (router.isFallback) {
    return <h1 className="text-white">Loading ...</h1>;
  }

  return (
    <div className={`
      flex
      flex-wrap
      justify-between
      gap-5
      py-28
      px-8
      ${darkMode ? "bg-gray-900" : ""}
    `}>
      <Categories/>
      <div className='w-full'>
      <h1 className={`
        text-2xl
        ${darkMode ? "text-gray-200" : "text-gray-700"}
      `}>
        {`Posts about: ${params.slug}`}
      </h1>
      </div>
      { posts && posts.map((post, id) => <PostCard post={post.node} key={id} />) }
    </div>
  );
};

export default CategoryPost;

// Fetch data at build time
/* export const getStaticProps: GetStaticProps = async({params}) => {
  const posts = params?.slug && await getCategoryPost(params.slug);

  return {
    props: { posts },
  };
}

// Specify dynamic routes to pre-render pages based on data.
// The HTML is generated at build time and will be reused on each request.
export const getStaticPaths: GetStaticPaths  = async () => {
  const categories: {slug: string}[] = await getCategories();
  return {
    paths: categories.map(({ slug }) => ({ params: { slug } })),
    fallback: true,
  };
} */