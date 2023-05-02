import React, {FC, useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';
import styled from 'styled-components';
import BaseLoader from '../components/UI/BaseLoader';
import Divider from '@mui/material/Divider';
import {useFetching} from '../hooks/useFetching';
import {getPost, getPostComments} from '../API/posts';
import {capitalize} from '../utils/utils';
import {font_header_xsmall} from '../theme/fonts';

interface IPostProps {
  id: number | null;
  title: string;
  body: string;
}

interface ICommentProps {
  id: number;
  email: string;
  body: string;
}

const PostId: FC = () => {
  const {id: paramId} = useParams();
  const [post, setPost] = useState<IPostProps>({
    id: null,
    title: '',
    body: '',
  });
  const [comments, setComments] = useState<ICommentProps[]>([]);

  const [fetchPost, isPostLoading] = useFetching(async () => {
    const {data} = await getPost(paramId);
    setPost(data);
  });

  const [fetchPostComments, isCommentsLoading] = useFetching(async () => {
    const {data} = await getPostComments(paramId);
    setComments(data);
  });

  useEffect(() => {
    typeof fetchPost === 'function' && fetchPost()
    typeof fetchPostComments === 'function' && fetchPostComments()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const {id, title, body} = post;

  return (
    <div>
      {isPostLoading || isCommentsLoading ? (
        <BaseLoader />
      ) : (
        <>
          <div>
            <Title>{id}. {capitalize(title)}</Title>
            <div>{capitalize(body)}</div>
          </div>

          <Divider style={{margin: '50px 0px 20px'}} />

          <div>
            <Title>Comments</Title>
            {comments.map(({id, email, body}) => (
              <Comment key={id}>
                <h4>{email}</h4>
                <div>{body}</div>
              </Comment>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

const Title = styled.div`
  ${font_header_xsmall};
  margin-bottom: 20px;
`;

const Comment = styled.div`
  margin: 20px 0;
  
  & h4 {
    margin-bottom: 10px;
  }
`;

export default PostId;