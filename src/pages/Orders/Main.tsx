import React from 'react';

import orderImage1 from '../../assets/images/order-image-1.png';

import { Order, OrderItem } from './components/OrderItem';

export const ORDERS_DATA: Order[] = [
  {
    id: '1',
    uid: 'product-a',
    title: 'Product A',
    date: '2023-07-01',
    reviewCount: 10,
    rating: 4.5,
    status: 'placed',
    price: 50,
    imageUrl: orderImage1,
  },
  {
    id: '2',
    uid: 'product-b',
    title: 'Product B',
    date: '2023-07-02',
    reviewCount: 5,
    rating: 3.8,
    status: 'processing',
    price: 30,
    imageUrl: orderImage1,
  },
  {
    id: '3',
    uid: 'product-c',
    title: 'Product C',
    date: '2023-07-03',
    reviewCount: 20,
    rating: 4.9,
    status: 'confirmed',
    price: 75,
    imageUrl: orderImage1,
  },
  {
    id: '4',
    uid: 'product-d',
    title: 'Product D',
    date: '2023-07-04',
    reviewCount: 8,
    rating: 4.0,
    status: 'completed',
    price: 45,
    imageUrl: orderImage1,
  },
  {
    id: '5',
    uid: 'product-e',
    title: 'Product E',
    date: '2023-07-05',
    reviewCount: 15,
    rating: 4.7,
    status: 'placed',
    price: 60,
    imageUrl: orderImage1,
  },
];

export const Main = () => {
  return (
    <main className="relative isolate z-0 py-4 xl:py-11">
      <div className="fb-container">
        <div className="grid h-full max-h-96 minimal-scrollbar overflow-auto gap-10 xl:gap-10 p-6 bg-brand-primary-color-1/[0.03] rounded-xl">
          {ORDERS_DATA?.map((order) => (
            <OrderItem key={order?.id} order={order} />
          ))}
        </div>
      </div>
    </main>
  );
};
