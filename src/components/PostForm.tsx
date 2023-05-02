import React, {FC, ChangeEvent, MouseEvent, useCallback, useState, useMemo} from 'react';
import styled from 'styled-components';
import BaseInput from './UI/BaseInput';
import BaseButton from './UI/BaseButton';
import {POSTS_CONSTS} from '../PostsConsts';
import {IPostProps} from './PostsList';

const {CREATE_POST} = POSTS_CONSTS;

interface IProps {
  createPost: (newPost: IPostProps) => void;
}

const PostForm: FC<IProps> = ({createPost}) => {
  const initialState: IPostProps = useMemo(() => ({
    id: '',
    title: '',
    body: '',
  }), []);

  const [post, setPost] = useState<IPostProps>(initialState);
  const [error, setError] = useState<{[key: string]: boolean}>({title: false, body: false});

  const handleChangeInput = useCallback((name: string, value: string) => {
    setPost({...post, [name]: value});
    setError({...error, [name]: false});
  }, [error, post]);

  const handleClickCreate = useCallback((event: MouseEvent) => {
    event.preventDefault();

    if (post.title !== '' && post.body !== '') {
      const newPost: IPostProps = {
        ...post, id: Date.now()
      }
      createPost(newPost);
      setPost(initialState);
    }
    setError({title: post.title === '', body: post.body === ''});
  }, [initialState, post, createPost]);

  return (
    <Form>
      <BaseInput
        type="text"
        value={post.title}
        placeholder="Title"
        onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => handleChangeInput('title', value)}
        error={error.title}
      />
      <BaseInput
        type="text"
        value={post.body}
        placeholder="Description"
        onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => handleChangeInput('body', value)}
        error={error.body}
      />
      <BaseButton onClick={handleClickCreate} className="purple">{CREATE_POST}</BaseButton>
    </Form>
  );
}

const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export default PostForm;