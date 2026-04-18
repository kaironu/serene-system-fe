const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000/api';

interface FetchOptions {
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: any;
  headers?: Record<string, string>;
  tags?: string[];
}

export async function fetchAPI<T>(
  endpoint: string,
  options: FetchOptions = {}
): Promise<T> {
  const { method = 'GET', body, headers = {}, tags = [] } = options;

  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
    body: body ? JSON.stringify(body) : undefined,
    next: { tags, revalidate: 3600 },
  });

  if (!response.ok) {
    throw new Error(`API Error: ${response.status}`);
  }

  return response.json();
}

export const productAPI = {
  getAll: (params?: { skip?: number; take?: number }) =>
    fetchAPI('/products', { tags: ['products'] }),

  getBySlug: (slug: string) =>
    fetchAPI(`/products/${slug}`, { tags: ['products', slug] }),

  search: (query: string) =>
    fetchAPI(`/products/search?q=${query}`, { tags: ['products'] }),
};

export const collectionAPI = {
  getAll: () =>
    fetchAPI('/collections', { tags: ['collections'] }),

  getBySlug: (slug: string) =>
    fetchAPI(`/collections/${slug}`, { tags: ['collections', slug] }),
};

export const cartAPI = {
  checkout: (data: any) =>
    fetchAPI('/cart/checkout', {
      method: 'POST',
      body: data,
    }),
};
