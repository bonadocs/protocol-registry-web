import Image from "next/image";
import { Sidebar } from "@components/Sidebar";
import '../styles/main.scss'
export default function Home() {
  return (
    <div className="bonadocs__search">
      <Sidebar className="bonadocs__search__sidebar"/>
      <main className="flex min-h-screen items-center justify-between p-24"></main>  
    </div>
  );
}
