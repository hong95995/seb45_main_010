import { createAsyncThunk } from '@reduxjs/toolkit';
import { lessonGetType, requestPostType } from 'Types/Types';
import axios from 'axios';
import { getAccessToken } from 'components/Items/GetAccessToken';
import { URL } from 'configs/Url/config';

type id = {
  teacherId: number;
  studentId: number;
};
const token = getAccessToken();
console.log(token);

export const lessonRequestGet = createAsyncThunk<lessonGetType, id>(
  'lessonRequestGet',
  async (id) => {
    const response = await axios.get(
      `${URL}/matches?teacherId=${id.teacherId}&studentId=${id.studentId}`,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    const data = response.data;
    return data;
  }
);

export const lessonRequestPost = createAsyncThunk<requestPostType, requestPostType>(
  'lessonRequestPost',
  async (requestPost) => {
    const response = await axios.post(`${URL}/matches`, requestPost, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = response.data;
    return data;
  }
);
