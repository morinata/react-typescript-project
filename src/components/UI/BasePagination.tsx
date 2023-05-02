import React, {FC, ChangeEvent} from 'react';
import styled from 'styled-components';
import Stack from '@mui/material/Stack';
import Pagination from '@mui/material/Pagination';
import Colors from '../../theme/colors';

const {blue100, blue050, blue030, white000} = Colors;

interface IProps {
  totalPages: number;
  page: number;
  changePage: any;
}

const BasePagination: FC<IProps> = ({totalPages, page, changePage}) => (
  <Wrapper>
    <Pagination
      count={totalPages} page={page}
      onChange={(event: ChangeEvent<unknown>, page: number) => changePage(page)}
    />
  </Wrapper>
)

const Wrapper = styled(Stack)`
  align-items: center;
  padding-bottom: 20px;
  
  & button {
     &[aria-current=true] {
      background-color: ${blue050};
      color: ${white000};

       &:hover {
         background-color: ${blue030};
         color: ${blue100};
       }
    }
    
    &:hover {
      background-color: ${blue030};
    }
  }
`;
export default BasePagination;