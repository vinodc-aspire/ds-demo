"use client";

import {
  Home,
  Book,
  List,
  BookOpen,
  FileText,
  Archive,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function DSSidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-[#4b0082] text-white">
      {/* Logo Area */}
      <div className="flex items-center gap-2 p-6">
        <div className="h-8 w-8 text-[#a3d900]">
          {/* Placeholder for Logo */}
          <svg
            viewBox="0 0 24 24"
            fill="currentColor"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L2 12h3v8h6v-6h2v6h6v-8h3L12 2z" />
          </svg>
        </div>
        <div>
          <h1 className="text-lg font-bold leading-none">rəqəmsal məktəb</h1>
          <span className="text-[10px] font-semibold bg-white/20 px-1 rounded ml-auto inline-block">
            BETA
          </span>
        </div>
      </div>

      {/* Navigation */}
      <nav className="flex-1 space-y-2 px-4">
        <NavItem icon={Home} label="Ana səhifə" />

        <div>
          <NavItem icon={Book} label="Dərslər" hasChevron active />
          <div className="ml-9 mt-2 space-y-2 border-l border-white/20 pl-4">
            <Link
              href="#"
              className="block text-sm text-white/70 hover:text-white"
            >
              Günün dərsi
            </Link>
            <Link href="#" className="block text-sm text-[#a3d900] font-medium">
              Bütün dərslər
            </Link>
          </div>
        </div>

        <NavItem icon={List} label="Gündəlik" />
        <NavItem icon={BookOpen} label="Qiymətlər" />
        <NavItem icon={FileText} label="Şəxsi iş" />
        <NavItem icon={Archive} label="E-saxlanc" />
      </nav>

      {/* Footer */}
      <div className="border-t border-white/10 p-4">
        <button className="flex items-center gap-3 text-sm text-white/70 hover:text-white mb-6">
          <LogOut size={20} />
          <span>Çıxış</span>
        </button>

        <div className="flex items-center gap-3 rounded-lg bg-white/10 p-3">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a3d900] text-[#4b0082]">
            <User size={18} />
          </div>
          <div className="overflow-hidden">
            <p className="truncate text-sm font-medium">SƏMA MƏMMƏDOVA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function NavItem({
  icon: Icon,
  label,
  hasChevron,
  active,
}: {
  icon: any;
  label: string;
  hasChevron?: boolean;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm font-medium transition-colors hover:bg-white/10",
        active ? "text-white" : "text-white/80",
      )}
    >
      <Icon size={20} />
      <span className="flex-1">{label}</span>
      {hasChevron && <ChevronDown size={16} />}
    </button>
  );
}
