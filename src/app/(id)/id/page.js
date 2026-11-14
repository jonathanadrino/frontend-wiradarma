import HomePage from "@/components/HomePage";
import { getMetadata } from "@/content";

export const metadata = getMetadata("id");

export default function Page() {
  return <HomePage locale="id" />;
}
