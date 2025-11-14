import axios, {
  AxiosInstance,
  AxiosRequestConfig,
  AxiosResponse,
  AxiosError,
  InternalAxiosRequestConfig,
} from "axios";

// Configuration type
export type ApiConfig = {
  baseURL?: string;
  getAccessToken?: () => Promise<string | null> | string | null;
  onAuthError?: (error: AxiosError) => Promise<void> | void;
};

// Default configuration
const defaultConfig: ApiConfig = {
  baseURL: process.env.NEXT_PUBLIC_API_URL || "/api",
  getAccessToken: async () => {
    // Try to get token from localStorage (client-side)
    if (typeof window !== "undefined") {
      return localStorage.getItem("accessToken");
    }
    // Server-side: you can implement server-side token retrieval here
    return null;
  },
  onAuthError: async (error: AxiosError) => {
    // Handle 401 unauthorized errors
    if (error.response?.status === 401) {
      if (typeof window !== "undefined") {
        localStorage.removeItem("accessToken");
        // Optionally redirect to login
        // window.location.href = "/login";
      }
    }
  },
};

// Create axios instance factory
function createApiInstance(config: ApiConfig = {}): AxiosInstance {
  const mergedConfig = { ...defaultConfig, ...config };

  const instance = axios.create({
    baseURL: mergedConfig.baseURL,
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    timeout: 30000, // 30 seconds
  });

  // Request interceptor - add auth token
  instance.interceptors.request.use(
    async (config: InternalAxiosRequestConfig) => {
      const token = await mergedConfig.getAccessToken?.();
      if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
      }
      return config;
    },
    (error: AxiosError) => {
      return Promise.reject(error);
    }
  );

  // Response interceptor - handle errors
  instance.interceptors.response.use(
    (response: AxiosResponse) => {
      return response;
    },
    async (error: AxiosError) => {
      if (error.response?.status === 401) {
        await mergedConfig.onAuthError?.(error);
      }
      return Promise.reject(error);
    }
  );

  return instance;
}

// Create the default API instance
const axiosInstance = createApiInstance();

// API object with all HTTP methods
export const api = {
  // GET request
  get: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.get<T>(url, config);
  },

  // POST request
  post: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.post<T>(url, data, config);
  },

  // PUT request
  put: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.put<T>(url, data, config);
  },

  // PATCH request
  patch: <T = unknown>(
    url: string,
    data?: unknown,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.patch<T>(url, data, config);
  },

  // DELETE request
  delete: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.delete<T>(url, config);
  },

  // HEAD request
  head: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.head<T>(url, config);
  },

  // OPTIONS request
  options: <T = unknown>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<AxiosResponse<T>> => {
    return axiosInstance.options<T>(url, config);
  },

  // Get the underlying axios instance (for advanced usage)
  getInstance: (): AxiosInstance => {
    return axiosInstance;
  },

  // Create a new instance with custom config
  create: (config: ApiConfig): AxiosInstance => {
    return createApiInstance(config);
  },
};

// Export default api
export default api;
