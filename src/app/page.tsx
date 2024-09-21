import Maincontent from "@/components/maincontent";
import Sidebar from "@/components/sidebar";

export default function Home() {
  return (
    <div className="flex">
      <Sidebar />
      <Maincontent />
    </div>
  );
}
