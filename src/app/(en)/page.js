import HomePage from "@/components/HomePage";
import { getMetadata } from "@/content";

export const metadata = getMetadata("en");

export default function Page() {
  return <HomePage locale="en" />;
}
