import React, {FC} from 'react';
import styled from 'styled-components';
import {useNavigate} from 'react-router-dom';
import BaseButton from './UI/BaseButton';
import {IPostProps} from './PostsList';
import {capitalize} from '../utils/utils';
import {boldWeight, font_medium} from '../theme/fonts';
import Colors from '../theme/colors';
import {POSTS_CONSTS} from '../PostsConsts';

const {OPEN_POST, REMOVE_POST} = POSTS_CONSTS;

const {blue100} = Colors;

interface IProps {
  post: IPostProps,
  removePost: (id: string | number) => void;
}

const PostItem: FC<IProps> = ({post: {id, title, body}, removePost}) => {
  const navigate = useNavigate();
  return (
    <Wrapper>
      <Post>
        <Title>{id}. {capitalize(title)}</Title>
        <Description>{capitalize(body)}</Description>
      </Post>
      <Actions>
        <BaseButton onClick={() => navigate(`/posts/${id}`)} className="purple">{OPEN_POST}</BaseButton>
        <BaseButton onClick={() => removePost(id)} className="purple">{REMOVE_POST}</BaseButton>
      </Actions>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid ${blue100};
  border-radius: 8px;
  padding: 10px 20px;
  margin: 20px 0;
`;

const Post = styled.div`
  margin-right: 20px;
`;

const Title = styled.div`
  ${font_medium};
  ${boldWeight};
  margin-bottom: 10px;
`;

const Description = styled.div`
  ${font_medium};
`;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  
  & button:first-child {
    margin-bottom: 10px;
  }
`;

export default PostItem;