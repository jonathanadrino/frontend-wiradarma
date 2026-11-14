import RootDocument from "@/components/RootDocument";

export const viewport = { themeColor: "#ffffff" };

export default function Layout({ children }) {
  return <RootDocument lang="en">{children}</RootDocument>;
}
