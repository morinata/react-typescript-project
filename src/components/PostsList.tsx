import React, {FC} from 'react';
import styled from 'styled-components';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import PostItem from './PostItem';
import {POSTS_CONSTS} from '../PostsConsts';

const {POSTS_TITLE, POSTS_NOT_FOUND} = POSTS_CONSTS;

export interface IPostProps {
  id: number | string;
  title: string;
  body: string;
}

interface IProps {
  createPost: (newPost: IPostProps) => void;
  removePost: (id: string | number) => void;
  posts: IPostProps[];
  classItem: string;
}

const PostsList: FC<IProps> = ({removePost, posts, classItem}) => {
  if (!posts.length) {
    return <EmptyList>{POSTS_NOT_FOUND}</EmptyList>
  }

  return (
    <>
      <Wrapper>
        <Title>{POSTS_TITLE}</Title>
        <TransitionGroup>
          {posts?.map((post: IPostProps) => (
            <CSSTransition
              key={post.id}
              timeout={500}
              className={classItem}
            >
              <PostItem post={post} removePost={removePost} />
            </CSSTransition>
          ))}
        </TransitionGroup>
      </Wrapper>
    </>
  );
}

const Wrapper = styled.div`
  .enter {
    transform: translateX(350px);
  }

  .enter-active {
    transform: translateX(0px);
    transition: all 500ms ease-in;
  }

  .exit {
    opacity: 1;
  }

  .exit-active {
    transform: translateX(-350px);
    transition: all 500ms ease-in;
  }
`;

const Title = styled.h1`
  text-align: center;
`;

const EmptyList = styled.h1`
  margin-top: 20px;
  text-align: center;
`;

export default PostsList;
