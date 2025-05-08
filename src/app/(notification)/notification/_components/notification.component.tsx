'use client';

import { useEffect, useState } from 'react';
import { NotificationType } from '@/app/(notification)/notification/_components/notification.types';
import { getNotification } from '@/app/(notification)/notification/_components/notification.actions';

export const Notification = () => {
  const [notifications, setNotifications] = useState<NotificationType[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let mounted = true;

    const fetchNotification = async () => {
      setIsLoading(true);
      const data = await getNotification();
      setIsLoading(false);
      // Only updates state if the component is still mounted - prevent ace condition
      if (mounted) {
        setNotifications(data);
      }
    };

    fetchNotification();

    // Cleanup function runs when the component unmounts
    return () => {
      mounted = false;
    };
  }, []);

  if (isLoading) {
    return <p>Loading Notification...</p>;
  }

  if (!notifications?.length) {
    return <p>No notifications found.</p>;
  }

  return (
    <ul>
      {notifications?.map((notification) => <li key={notification.id}>{notification.message}</li>)}
    </ul>
  );
};
