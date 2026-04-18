export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

export const COLORS = [
  { name: 'Đỏ', value: 'red' },
  { name: 'Xanh', value: 'blue' },
  { name: 'Vàng', value: 'yellow' },
  { name: 'Hồng', value: 'pink' },
  { name: 'Trắng', value: 'white' },
  { name: 'Đen', value: 'black' },
];

export const SHIPPING_COST = 30000;
export const FREE_SHIPPING_THRESHOLD = 500000;
export const TAX_RATE = 0.1;

export const PROVINCES = [
  { id: 'hcm', name: 'TP. Hồ Chí Minh' },
  { id: 'hn', name: 'Hà Nội' },
  { id: 'dn', name: 'Đà Nẵng' },
  { id: 'hue', name: 'Huế' },
];

export const PAYMENT_METHODS = [
  { id: 'cod', label: 'Thanh toán khi nhận hàng (COD)' },
  { id: 'transfer', label: 'Chuyển khoản ngân hàng' },
  { id: 'vnpay', label: 'Thanh toán qua VNPay' },
];
