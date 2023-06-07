'use client'

import { FC, useEffect, useState } from 'react';
import { Categories, PostWidget, PostDetail, Main } from '../../../components';

import { Post } from '../../../interfaces';
import { getPostDetails } from '../../../services';

interface paramsTypes {
  params: {slug: string};
}

const PostDetails: FC<paramsTypes> = ({params}) =>{
  const [post, setPost] = useState<Post | null>(null);

   useEffect(() => {
    if(params.slug){
      getPost(params.slug).then((data) => setPost(data));
    };
  }, [params.slug]);
  
  if(!post) return null;

  return (
    <Main>
        <div className="container mx-auto">
          <div className="">
            <PostDetail post={post} />
            <h1>{post.title}</h1>
            <p>{post.slug}</p>
          </div>
          <div className="col-span-1 lg:col-span-4">
            <div className="relative lg:sticky top-8">
              {post?.categories?.length && <PostWidget 
                slug={post.slug} 
                categories={post.categories.map(category => category.slug)} 
              />}
              <Categories/>
            </div>
          </div>
        </div>
    </Main>
  )
};

export default PostDetails;

async function getPost(slug: string) {
  const res = await getPostDetails(slug);
  return res;
}