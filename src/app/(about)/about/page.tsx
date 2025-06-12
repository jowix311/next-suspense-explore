import { Button } from "@/components/ui/button";
import Link from "next/link";

const DummyButton = async () => {

	await new Promise((resolve) => setTimeout(resolve, 3000));

	return (
		<Button asChild>
			<Link href="/">This button as loaded way to slow</Link>
		</Button>
	);
};

export default async function Page() {

	return (
		<>
			<h1>This is about page.... </h1>
			<DummyButton />
		</>
	);
}
