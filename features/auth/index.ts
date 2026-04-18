export function validateEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export function validatePhone(phone: string): boolean {
  const regex = /^(\+84|0)[1-9]\d{8}$/;
  return regex.test(phone);
}

export function validateAddress(address: ShippingAddress): boolean {
  return !!(
    address.fullName &&
    address.phone &&
    address.email &&
    address.address &&
    address.province
  );
}

interface ShippingAddress {
  fullName: string;
  phone: string;
  email: string;
  address: string;
  district: string;
  province: string;
  postalCode?: string;
}
