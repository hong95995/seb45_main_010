import { createAsyncThunk } from '@reduxjs/toolkit';
import { ListPageType, SearchType } from 'Types/Types';
import axios from 'axios';
import { URL } from 'configs/Url/config';

export const getData = createAsyncThunk<ListPageType[], SearchType>('getData', async (search) => {
  const response = await axios.get(
    `${URL}/teachers?teacherName=${search.teacherName}&regions=${search.regions}&subjects=${search.subject}&page=${search.page}&size=${search.size}`
  );
  const data = response.data;
  return data;
});