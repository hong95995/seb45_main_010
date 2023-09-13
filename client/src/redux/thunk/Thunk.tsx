import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { User } from 'Types/Types';

export const FetchProfile = createAsyncThunk('FetchProfile', async (userId: number) => {
  const response = await axios.get(`http://localhost:8081/profile/${userId}`);
  const data = response.data;
  return data;
});

export const FetchRequest = createAsyncThunk('FetchRequest', async (userId: number) => {
  const response = await axios.get(`http://localhost:8081/request/${userId}`);
  const data = response.data;
  return data;
});

export const FetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (userId: number) => {
  const response = await axios.get(`http://localhost:8081/schedule/${userId}`);
  const data = response.data;
  return data;
});

export const updateSchedule = createAsyncThunk(
  'schedule/updateSchedule',
  async ({
    userId,
    date,
    method,
  }: {
    userId: number;
    date: User['date'] | null;
    method: 'POST' | 'PATCH' | 'DELETE';
  }) => {
    let response;
    if (method === 'POST') {
      response = await axios.post(`http://localhost:8081/schedule/${userId}`, { date });
    } else if (method === 'PATCH') {
      response = await axios.patch(`http://localhost:8081/schedule/${userId}`, { date });
    } else {
      response = await axios.delete(`http://localhost:8081/schedule/${userId}`, {
        data: date,
      });
    }
    return response.data;
  }
);
export const updateClassMethod = createAsyncThunk(
  'profile/updateClassMethod',
  async ({ userId, onLine, offLine }: { userId: number; onLine: boolean; offLine: boolean }) => {
    const response = await axios.patch(`http://localhost:8081/profile/${userId}`, {
      onLine,
      offLine,
    });
    return response.data;
  }
);

export const updateLectureFee = createAsyncThunk(
  'profile/updateLectureFee',
  async ({ userId, lectureFee }: { userId: number; lectureFee: string }) => {
    console.log('강의료', { userId, lectureFee });
    const response = await axios.patch(`http://localhost:8081/profile/${userId}`, {
      lectureFee,
    });
    return response.data;
  }
);

export const updateCareer = createAsyncThunk(
  'profile/updateCareer',
  async ({ userId, career }: { userId: number; career: string }) => {
    const response = await axios.patch(`http://localhost:8081/profile/${userId}`, {
      career,
    });
    return response.data;
  }
);

export const updateOption = createAsyncThunk(
  'profile/updateOption',
  async ({ userId, option }: { userId: number; option: string }) => {
    const response = await axios.patch(`http://localhost:8081/profile/${userId}`, {
      option,
    });
    return response.data;
  }
);

export const updateIntroduce = createAsyncThunk(
  'profile/updateIntroduce',
  async ({ userId, introduce }: { userId: number; introduce: string }) => {
    const response = await axios.patch(`http://localhost:8081/profile/${userId}`, {
      introduce,
    });
    return response.data;
  }
);