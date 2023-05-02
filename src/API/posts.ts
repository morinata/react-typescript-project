import axios from 'axios';

export const getAllPosts = async (limit: number, page: number) =>
  await axios.get('https://jsonplaceholder.typicode.com/posts', {
    params: {
      _limit: limit,
      _page: page,
    }
  }).then((response) => response);

export const getPost = async (id: string | undefined) =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`).then((response) => response);

export const getPostComments = async (id: string | undefined) =>
  await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`).then((response) => response);