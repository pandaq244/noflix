import * as types from './types';

export const updateBookmark = (num: number) => ({
    payload: num,
    type: types.UPDATE_BOOKMARK
});
