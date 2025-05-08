'use server';

import { NotificationType } from '@/app/(notification)/notification/_components/notification.types';

export const getNotification = async (): Promise<NotificationType[]> => {
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return [
    {
      id: '1',
      message: 'Low stock on fruits',
    },
    {
      id: '2',
      message: 'Low stock on vegetables',
    },
  ];
};
