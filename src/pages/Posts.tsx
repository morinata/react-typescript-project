import React, {useCallback, useEffect, useRef, useState} from 'react';
import styled from 'styled-components';
import {toast} from 'react-toastify';
import BaseLoader from '../components/UI/BaseLoader';
import BaseButton from '../components/UI/BaseButton';
import BaseModal from '../components/UI/BaseModal';
import BaseNotification from '../components/UI/BaseNorification';
import BasePagination from '../components/UI/BasePagination';
import Divider from '@mui/material/Divider';
import PostsList, {IPostProps} from '../components/PostsList';
import PostForm from '../components/PostForm';
import PostFilter from '../components/PostFilter';
import {getAllPosts} from '../API/posts';
import {usePosts} from '../hooks/usePosts';
import {useFetching} from '../hooks/useFetching';
import {useObserver} from '../hooks/useObserver';
import {getPageCount} from '../utils/utils';
import {OverrideStyles} from '../theme/overrideStyles';

export interface IFilterProps {
  sort: string | number;
  query: string
}

const Posts = () => {
  const [posts, setPosts] = useState<IPostProps[]>([]);
  const [filter, setFilter] = useState<IFilterProps>({sort: '', query: ''});
  const [isOpenModal, setOpenModal] = useState<boolean>(false);
  const [classItem, setClassItem] = useState<string>('');
  const [totalPages, setTotalPages] = useState<number>(0);
  const [limit] = useState<number>(6);
  const [page, setPage] = useState<number>(1);
  const sortedAndSearchedPosts = usePosts(posts, filter.sort, filter.query);
  const [fetchPosts, isPostLoading, postError] = useFetching(async () => {
    const response = await getAllPosts(limit, page);
    setPosts(posts.concat(response.data));
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(totalCount, limit));
  });

  const lastElement = useRef<any>();

  useObserver(lastElement, page < totalPages, isPostLoading, () => setPage(page + 1));

  const handleCloseModal = () => setOpenModal(false);

  const createPost = useCallback((newPost: IPostProps) => {
    setPosts([...posts, newPost]);
    setOpenModal(false);
    setClassItem('enter enter-active');
    toast.success('Post was created successfully');
  }, [posts]);

  const removePost = useCallback((id: string | number) => {
    setPosts(posts.filter((post) => post.id !== id));
    setClassItem('exit exit-active');
    toast.success('Post was removed');
  }, [posts]);

  const changePage = (page: number) => {
    setPage(page)
  };

  useEffect(() => {
    typeof fetchPosts === 'function' && fetchPosts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const errorMessage = (
    <ErrorMessage>
      <h1>{`Something wrong happened ${postError}`}</h1>
    </ErrorMessage>
  );

  const content = postError
    ? errorMessage
    : <PostsList createPost={createPost} removePost={removePost} posts={sortedAndSearchedPosts} classItem={classItem} />;

  return (
    <Wrapper>
      <OverrideStyles />
      <BaseNotification hideProgressBar pauseOnHover autoClose={1000} />

      <div>
        <BaseButton onClick={() => setOpenModal(true)} className="purple">Create Post</BaseButton>
        <BaseModal handleOpen={isOpenModal} handleClose={handleCloseModal}>
          <PostForm createPost={createPost} />
        </BaseModal>
      </div>

      <Divider style={{margin: '20px 0'}} />

      <PostFilter filter={filter} setFilter={setFilter} />

      {content}
      <div ref={lastElement} />

      {isPostLoading ? <BaseLoader /> : (
        <>
          {sortedAndSearchedPosts.length > 0 &&
            <BasePagination totalPages={totalPages} page={page} changePage={changePage} />}
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin-top: -30px;
`;

const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export default Posts;
