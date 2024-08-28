'use client'
import { Sidebar } from "@/layout/sidebar/Sidebar";
import { Registry } from "@/layout/registry/Registry";

export const HomeWrapper: React.FC = () => {
  return <div className="bonadocs__search">
        <Sidebar />
        <Registry />
    </div>;
};