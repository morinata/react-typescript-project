import {useMemo} from 'react';
import {IPostProps} from '../components/PostsList';

export const useSortedPosts = (posts: IPostProps[], sort: string | number) => {
  return useMemo(() => {
    if (sort) {
      return [...posts].sort((a: any, b: any) => a[sort].localeCompare(b[sort]));
    }
    return posts;
  }, [sort, posts]);
};

export const usePosts = (posts: IPostProps[], sort: string | number, query: string) => {
  const sortedPosts: IPostProps[] = useSortedPosts(posts, sort);

  return useMemo(() => sortedPosts.filter(({title}) => title.toLowerCase().includes(query)), [query, sortedPosts]);
};