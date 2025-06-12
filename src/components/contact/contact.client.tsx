'use client';

import { use } from 'react';
import { ContactDetail } from './contact.types';

export const ContactInfo =  ({ detailPromise }: { detailPromise: Promise<ContactDetail> }) => {
  const detail =  use(detailPromise);
  const { name, email } = detail;
  return (
    <section>
      <p>name: {name}</p>
      <p>email: {email}</p>
    </section>
  );
};
