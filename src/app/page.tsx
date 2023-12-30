import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Registry } from "@/layout/registry/Registry";
import "../styles/main.scss";

export default function Home() {
  return (
    <div className="bonadocs__search">
      <Sidebar />
      <Registry />
    </div>
  );
}
