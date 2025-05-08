import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Notification } from './_components/notification.component';

// Checking Suspense with client components,
// Do we need to explicitly wrap client components inside Suspense? <- According to research, no
// We will use the usual client side useState loading for now.
export default function Page() {
  return (
    <>
      {/*<Suspense fallback="Loading the Notification...">*/}
      {/*  <Notification />*/}
      {/*</Suspense>*/}
      <Notification />
      <Button type="button" variant="link" asChild>
        <Link href="/">Go back to Home Page</Link>
      </Button>
    </>
  );
}
