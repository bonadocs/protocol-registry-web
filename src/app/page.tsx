import { Sidebar } from "@/components/sidebar/Sidebar";
import { Registry } from "@/components/registry/Registry";
import '../styles/main.scss'
export default function Home() {
  return (
    <div className="bonadocs__search">
      <Sidebar />
      <Registry/>
      {/* <main className="flex min-h-screen items-center justify-between p-24"></main>   */}
    </div>
  );
}
