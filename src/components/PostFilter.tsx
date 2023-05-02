import React, {ChangeEvent, FC} from 'react';
import styled from 'styled-components';
import BaseInput from './UI/BaseInput';
import BaseSelect from './UI/BaseSelect';
import {SORT_OPTIONS} from '../PostsConsts';
import {IFilterProps} from '../pages/Posts';

interface IProps {
  filter: IFilterProps;
  setFilter: (filter: IFilterProps) => void;
}

const PostFilter: FC<IProps> = ({filter, setFilter}) => (
  <Wrapper>
    <BaseInput
      value={filter.query}
      onChange={({target: {value}}: ChangeEvent<HTMLInputElement>) => setFilter({...filter, query: value})}
      placeholder="Search..."
    />
    <Select
      defaultValue="Sort"
      options={SORT_OPTIONS}
      value={filter.sort}
      onChange={({target: {value}}) => setFilter({...filter, sort: value})}
    />
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const Select = styled(BaseSelect)`
  width: 200px;
`;

export default PostFilter;