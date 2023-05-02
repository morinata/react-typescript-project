export const capitalize = (text: string) => `${text.charAt(0).toUpperCase()}${text.slice(1)}`

export const getPageCount = (totalCount: number, limit: number) => Math.ceil(totalCount / limit);

export const getPagesArray = (totalPages: number) => {
  let result = [];
  for (let i = 0; i < totalPages; i++) {
    result.push(i + 1);
  }

  return result;
}