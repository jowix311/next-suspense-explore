
import { ContactInfo } from './contact.client';
import { Contact } from './contact.server';
import { ContactDetail } from './contact.types';

export const ContactComposite = async ({
  detailPromise,
}: {
  detailPromise: Promise<ContactDetail>;
}) => {
  return (
    <Contact>
      <ContactInfo detailPromise={detailPromise} />
    </Contact>
  );
};
