import axios from "axios";

const API_URL = "http://127.0.0.1:5000/api";

export const createThread = async (data) => {
  return axios.post(`${API_URL}/threads`, data);
};

export const createChat = async (data) => {
  return axios.post(`${API_URL}/chats`, data);
};

export const getChatsByThreadId = async (threadId) => {
  return axios.get(`${API_URL}/chats/${threadId}`);
};

export const getThreadsByUserId = async (userId) => {
  return axios.get(`${API_URL}/threads/${userId}`);
};

export const queryAI = async (prompt, returnSources = true, numberOfPagesToScan = 4, returnFollowUpQuestions = true) => {
  try {
    const response = await axios.post(`${API_URL}/query`, {
      prompt,
      returnSources,
      numberOfPagesToScan,
      returnFollowUpQuestions,
    });
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.error("Error querying AI:", error);
    throw error;
  }
};
