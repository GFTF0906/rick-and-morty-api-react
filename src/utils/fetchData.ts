import axios, { AxiosError } from 'axios';

export const fetchData = async <T>(url: string) => {
  try {
    const data: T = await axios.get<T>(url).then((response) => response.data);
    return data;
  } catch (error) {
    throw error instanceof AxiosError
      ? new AxiosError(error.message)
      : error instanceof Error
      ? new Error(error.message)
      : error;
  }
};
