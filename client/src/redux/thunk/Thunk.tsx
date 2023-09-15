import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import UseCheckAuth, { APIurl, APIUSERURL, PROFILEURL } from 'hooks/UseCheckAuth';
import { ACCESSTOKEN } from 'configs/Url/config';
import { ScheduleType } from 'Types/Types';

export const FetchProfile = createAsyncThunk('FetchProfile', async (id: number) => {
  const response = await axios.get(`${PROFILEURL}/${id}`);
  const data = response.data;
  return data;
});

export const FetchRequest = createAsyncThunk('FetchRequest', async (id: number) => {
  const response = await axios.get(`http://localhost:8081/request/${id}`);
  const data = response.data;
  return data;
});

export const FetchSchedule = createAsyncThunk('schedule/fetchSchedule', async (id: number) => {
  const response = await axios.get<ScheduleType>(`http://localhost:8081/schedule/${id}`);
  const data = response.data;
  return data;
});

export const FetchSubjects = createAsyncThunk('subjects', async () => {
  const response = await axios.get(`${APIurl}/subjects`);
  const data = response.data;
  return data.subjects;
});

export const FetchRegions = createAsyncThunk('regions', async () => {
  const response = await axios.get(`${APIurl}/regions`);
  const data = response.data;
  return data.regions;
});

export const updateSchedule = createAsyncThunk(
  'schedule/updateSchedule',
  async ({
    id,
    date,
    method,
  }: {
    id: number;
    date: string[];
    method: 'POST' | 'PATCH' | 'DELETE';
  }) => {
    let response;
    if (method === 'POST') {
      response = await axios.post(`http://localhost:8081/schedule/${id}`, { date });
    } else if (method === 'PATCH') {
      response = await axios.patch(`http://localhost:8081/schedule/${id}`, { date });
    } else {
      response = await axios.delete(`http://localhost:8081/schedule/${id}`, {
        data: date,
      });
    }
    return response.data;
  }
);
export const updateOnline = createAsyncThunk(
  'profile/updateOnline',
  async ({ id, onLine }: { id: number; onLine: boolean }) => {
    const response = await axios.patch(`${APIurl}/teachers/onLine`, {
      id: id,
      onLine: onLine,
    });
    return response.data;
  }
);

export const updateOffline = createAsyncThunk(
  'profile/updateOffline',
  async ({ id, offLine }: { id: number; offLine: boolean }) => {
    const response = await axios.patch(`${APIurl}/teachers/offLine`, {
      id: id,
      offLine: offLine,
    });
    return response.data;
  }
);

export const updateLectureFee = createAsyncThunk(
  'profile/updateLectureFee',
  async ({ id, lectureFee }: { id: number; lectureFee: string }) => {
    const response = await axios.patch(`${APIurl}/teachers/lectureFee`, {
      id: id,
      lectureFee: lectureFee,
    });
    return response.data;
  }
);

export const updateCareer = createAsyncThunk(
  'profile/updateCareer',
  async ({ id, career }: { id: number; career: string }) => {
    const response = await axios.patch(`${APIurl}/teachers/career`, {
      id: id,
      career: career,
    });
    return response.data;
  }
);

export const updateOption = createAsyncThunk(
  'profile/updateOption',
  async ({ id, option }: { id: number; option: string }) => {
    const response = await axios.patch(
      `${APIUSERURL}/option`,
      {
        id: id,
        option: option,
      },
      {
        headers: {
          Authorization: ACCESSTOKEN,
        },
      }
    );
    return response.data;
  }
);

export const updateIntroduction = createAsyncThunk(
  'profile/updateIntroduction',
  async ({ id, introduction }: { id: number; introduction: string }) => {
    const response = await axios.patch(
      `${APIUSERURL}/introduction`,
      {
        id: id,
        introduction: introduction,
      },
      {
        headers: {
          Authorization: ACCESSTOKEN,
        },
      }
    );
    console.log(response.data);
    return response.data;
  }
);

export const updateSubjects = createAsyncThunk(
  'profile/updateSubjects',
  async ({ id, subjects }: { id: number; subjects: string[] }) => {
    const response = await axios.patch(
      `${APIUSERURL}/subjects`,
      {
        id: id,
        subjects: subjects,
      },
      {
        headers: {
          Authorization: ACCESSTOKEN,
        },
      }
    );
    return response.data;
  }
);

export const updateRegions = createAsyncThunk(
  'profile/updateRegions',
  async ({ id, regions }: { id: number; regions: string[] }) => {
    const response = await axios.patch(
      `${APIUSERURL}/regions`,
      {
        id: id,
        regions: regions,
      },
      {
        headers: {
          Authorization: ACCESSTOKEN,
        },
      }
    );
    return response.data;
  }
);