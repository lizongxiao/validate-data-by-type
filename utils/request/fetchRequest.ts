// fetchRequest.js

const setupFetchInterceptors = () => {
  const originalFetch = window.fetch;

  window.fetch = async (input, init) => {
    try {
      console.log("Fetch Request Intercepted:", input, init);
      const response = await originalFetch(input, init);
      console.log("Fetch Response Intercepted:", response);
      return response;
    } catch (error) {
      console.error("Fetch Request Interception Error:", error);
      throw error;
    }
  };
};

export const fetchRequest = async (url: string, options = {}) => {
  setupFetchInterceptors();
  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    throw error;
  }
};
