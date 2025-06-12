import { ContactComposite, getContactDetails } from '@/components/contact';

import Link from 'next/link';
import { Suspense } from 'react';

const LinksWrapper = async () => {
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return (
    <ul>
      <li>
        <Link className="text-blue-600" href="/todo">
          📝 Check out the Todo List here...
        </Link>
      </li>
      <li>
        <Link className="text-blue-600" href="/notification">
          🔔 Check out the Notifications
        </Link>
      </li>
      <li>
        <Link className="text-blue-600" href="/about">
          Visit the About Page
        </Link>
      </li>
    </ul>
  );
};


export default async function Home() {

  const contactPromise = getContactDetails();

  return (
    <main>
      <h1 className="scroll-m-20 text-4xl font-bold tracking-tight lg:text-5xl mb-4">
        NextJS Suspense Explorer
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6 mb-6">
        The purpose for this web app is to explore NextJS Suspense.
        <span className="italic">Click on links below to start.</span>
      </p>

      <Suspense fallback={<p>Loading the list...</p>}>
        <LinksWrapper />
      </Suspense>

      {/* Trigger suspense using "use" */}
      <Suspense fallback={<p>Loading contact info...</p>}>
        <ContactComposite detailPromise={contactPromise} />
      </Suspense>
    </main>
  );
}
