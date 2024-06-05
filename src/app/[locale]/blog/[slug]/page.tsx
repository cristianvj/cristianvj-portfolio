'use client';

import { FC, useEffect, useState } from 'react';
import { 
  Categories,
  PostDetail, 
  PostHeader, 
  Main, 
  Comments,
  CommentsForm
} from '../../../../components';

import { Post } from '../../../../interfaces';
import { getPostDetails } from '../../../../services';

interface paramsTypes {
  params: {slug: string};
}

const PostDetails: FC<paramsTypes> = ({params}) =>{
  const [post, setPost] = useState<Post | null>(null);

   useEffect(() => {
    if(params.slug){
      getPostDetails(params.slug)
        .then((data) => setPost(data))
        .catch((error) => {console.log(error)});
    };
  }, [params.slug]);
  
  if(!post) return null;

  return (
    <Main>
        <div className="container mx-auto">
          <PostHeader post={post} />

          <div className="flex flex-wrap my-3 gap-2">
            <div className="lg:w-[75%]">
              <PostDetail post={post} />
              <Comments slug={post.slug} />
              <CommentsForm slug={post.slug} />
            </div>
            <div className="flex flex-col gap-3 lg:w-[24%]">
              {
                /* post?.categories?.length && 
                  <PostWidget 
                    slug={post.slug} 
                    categories={post.categories.map(category => category.slug)} 
                  /> */
              }
              <Categories/>
            </div>
          </div>
          
        </div>
    </Main>
  )
};

export default PostDetails;