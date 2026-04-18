export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  sizes: Size[];
  collections: string[];
  featured: boolean;
  rating?: number;
  reviewCount?: number;
}

export interface Size {
  id: string;
  label: string;
  stock: number;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  banner?: string;
  productCount: number;
}

export interface CartItem {
  productId: string;
  sizeId: string;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  tax: number;
  shipping: number;
}

export interface Order {
  id: string;
  userId: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'confirmed' | 'shipped' | 'delivered' | 'cancelled';
  createdAt: string;
  shippingAddress: ShippingAddress;
}

export interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  province: string;
  postalCode: string;
}

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  addresses: ShippingAddress[];
  createdAt: string;
}
