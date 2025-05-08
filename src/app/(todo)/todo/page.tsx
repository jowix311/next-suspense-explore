import Link from 'next/link';
import { Button } from '@/components/ui/button';

const TodoList = async () => {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return (
    <ul>
      <li>Buy 1 Apple</li>
      <li>Buy 5 Oranges</li>
    </ul>
  );
};

export default async function Page() {
  return (
    // <Suspense fallback="Loading the Todo List...">
    // </Suspense>
    // Using the loading.tsx component instead of explicit wrapping inside Suspense
    <>
      <TodoList />
      <Button type="button" variant="link" asChild>
        <Link href="/">Go back to Home Page</Link>
      </Button>
    </>
  );
}
