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
  ChevronLeft,
  ChevronRight,
  Search,
  Calendar,
  Clock,
  Download,
  ArrowRight,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import axios from "axios";

const dates = [12, 13, 14, 15, 16, 17, 18, 19];

export default function StudentHomePage() {
  const handleAspireBannerClick = async () => {
    try {
      const data = {
        type: "student",
        personal_identity_info: {
          name: "Aynurə",
          middle_name: "",
          surname: "Rzazadə",
          patronymic: "RUSTEM OGLU",
          gender: "MALE",
        },
        utis_student_info: {
          utis_code: 3516811,
          school_utis_code: 360452736,
          teach_status: "Oxuyur",
          class_code: 1885845,
        },
      };
      const response = await axios.post("/api/proxy/ds/login", data, {
        headers: {
          "Landau-Token": "gSgCzdAQuvcfd9jDkD4XAdznzhte3AtVR3fh6A6uuPPvZGun7c",
          "Content-Type": "application/json",
        },
      });
      console.log("Response:", response.data);
      if (response.data?.body?.redirect_url) {
        const redirectUrl = response.data.body.redirect_url;
        window.open(redirectUrl, "_blank");
      } else {
        alert("Data sent successfully!");
      }
    } catch (error) {
      console.error("Error sending data:", error);
      alert("Failed to send data.");
    }
  };
  return (
    <div className="flex min-h-screen w-full bg-gray-50 font-sans">
      {/* Sidebar */}
      <aside className="flex h-screen w-64 flex-col bg-[#4b0082] text-white fixed left-0 top-0">
        {/* Logo */}
        <div className="flex items-center gap-2 p-6">
          <div className="h-8 w-8 text-[#a3d900]">
            <svg viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 12L12 3l9 9-1.5 1.5L12 6 4.5 13.5 3 12z" />
              <rect x="5" y="12" width="4" height="7" rx="0.5" />
              <rect x="15" y="12" width="4" height="7" rx="0.5" />
              <rect x="10" y="15" width="4" height="4" rx="0.5" />
            </svg>
          </div>
          <div>
            <h1 className="text-base font-bold leading-tight">
              rəqəmsal məktəb
            </h1>
            <span className="text-[9px] font-bold bg-white/20 px-1.5 py-0.5 rounded">
              BETA
            </span>
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 space-y-1 px-3">
          <SideNavItem icon={Home} label="Ana səhifə" active />

          <div>
            <SideNavItem icon={Book} label="Dərslər" hasChevron />
            <div className="ml-8 mt-1.5 space-y-1 border-l border-white/20 pl-4">
              <Link
                href="#"
                className="block text-sm text-white/60 hover:text-white py-0.5"
              >
                Günün dərsi
              </Link>
              <Link
                href="#"
                className="block text-sm text-white/60 hover:text-white py-0.5"
              >
                Bütün dərslər
              </Link>
            </div>
          </div>

          <SideNavItem icon={List} label="Gündəlik" />
          <SideNavItem icon={BookOpen} label="Qiymətlər" />
          <SideNavItem icon={FileText} label="Şəxsi iş" />
          <SideNavItem icon={Archive} label="E-saxlanc" />
        </nav>

        {/* Footer */}
        <div className="border-t border-white/10 p-4 space-y-4">
          <button className="flex items-center gap-3 text-sm text-white/60 hover:text-white">
            <LogOut size={18} />
            <span>Çıxış</span>
          </button>
          <div className="flex items-center gap-3 rounded-xl bg-white/10 p-2.5">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a3d900] text-[#4b0082] flex-shrink-0">
              <User size={16} />
            </div>
            <p className="text-sm font-semibold truncate">Aynurə Rzazadə</p>
          </div>
        </div>
      </aside>

      {/* Main area */}
      <div className="flex-1 flex flex-col ml-64">
        {/* Top Header */}
        <header className="flex items-center justify-between bg-white border-b border-gray-100 px-8 py-3 gap-4">
          {/* Subject selector */}
          <div className="w-44">
            <Select defaultValue="math">
              <SelectTrigger className="bg-gray-100 border-none rounded-2xl h-10 text-sm font-medium">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="math">Riyaziyyat</SelectItem>
                <SelectItem value="physics">Fizika</SelectItem>
                <SelectItem value="history">Tarix</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Calendar date navigation */}
          <div className="flex items-center gap-2 flex-1 justify-center">
            <button className="h-9 w-9 rounded-full bg-[#4b0082] flex items-center justify-center flex-shrink-0">
              <Calendar size={16} className="text-white" />
            </button>
            <button className="text-gray-400 hover:text-gray-600 px-1">
              <ChevronLeft size={18} />
            </button>
            <span className="text-sm font-medium text-gray-700 w-12 text-center">
              Aprel
            </span>
            <button className="text-gray-400 hover:text-gray-600 px-1">
              <ChevronRight size={18} />
            </button>

            <div className="flex items-center gap-1 ml-2">
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronLeft size={16} />
              </button>
              {dates.map((d) => (
                <button
                  key={d}
                  className={cn(
                    "h-9 w-9 rounded-full text-sm font-medium transition-colors",
                    d === 12
                      ? "bg-gray-900 text-white"
                      : "text-gray-600 hover:bg-gray-100",
                  )}
                >
                  {d}
                </button>
              ))}
              <button className="text-gray-400 hover:text-gray-600">
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Search */}
          <button className="h-10 w-10 rounded-full bg-gray-900 flex items-center justify-center flex-shrink-0">
            <Search size={16} className="text-white" />
          </button>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8 space-y-6">
          {/* Hero Banner */}
          <div className="flex gap-4">
            {/* Left purple card */}
            <div className="flex-1 rounded-3xl bg-[#5B55F5] p-8 flex items-center gap-6 relative overflow-hidden min-h-[180px]">
              {/* Background decoration */}
              <div className="absolute right-0 top-0 h-full w-64 opacity-10 pointer-events-none">
                <svg viewBox="0 0 200 200" className="h-full w-full">
                  <circle cx="160" cy="40" r="80" fill="white" />
                  <circle cx="180" cy="160" r="60" fill="white" />
                </svg>
              </div>

              {/* Date block */}
              <div className="bg-white/20 rounded-2xl p-4 text-center text-white flex-shrink-0 min-w-[72px]">
                <div className="text-xs font-medium text-white/80 mb-1">
                  Aprel
                </div>
                <div className="text-4xl font-bold leading-none">12</div>
                <div className="text-xs text-white/80 mt-1">B.e</div>
              </div>

              {/* Lesson info */}
              <div className="flex-1 relative z-10">
                <div className="text-sm text-white mb-2">
                  Günün dərsi: Riyaziyyat
                </div>
                <h2 className="text-2xl font-bold text-[#a3d900] leading-tight mb-4">
                  Rasional ədədlərin ədəd oxunda göstərilməsi
                </h2>
                <div className="flex items-center gap-4">
                  <div className="flex-1 max-w-xs">
                    <div className="h-1.5 rounded-full bg-white/20 overflow-hidden">
                      <div
                        className="h-full rounded-full bg-[#a3d900]"
                        style={{ width: "46%" }}
                      />
                    </div>
                    <div className="text-xs text-white mt-1 text-right">
                      46%
                    </div>
                  </div>
                  <button className="bg-gray-900 text-white px-5 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors">
                    Öyrən
                    <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>

            {/* Right light purple card */}
            <div className="w-64 rounded-3xl bg-[#e8e0f5] p-6 flex flex-col justify-between">
              <p className="text-[#4b0082] font-bold text-lg leading-snug">
                Riyaziyyat üzrə bütün dərslərə bax
              </p>
              <button className="self-start mt-4 bg-white border border-[#4b0082]/20 text-[#4b0082] px-4 py-2 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-[#4b0082] hover:text-white transition-colors">
                Bax
                <ArrowRight size={14} />
              </button>
            </div>
          </div>

          {/* Content Cards Grid */}
          <div className="grid grid-cols-3 gap-4">
            {/* Video dərs card */}
            <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">Video dərs</h3>
              <div className="rounded-2xl overflow-hidden bg-gray-200 aspect-video relative flex items-center justify-center">
                <Image
                  src="/video-thumbnail.jpg"
                  alt="Video dərs thumbnail"
                  fill
                  className="object-cover"
                />
                <button className="relative z-10 h-12 w-12 bg-white rounded-full flex items-center justify-center shadow-md hover:scale-105 transition-transform">
                  <svg
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-6 w-6 ml-0.5"
                  >
                    <polygon points="5,3 19,12 5,21" />
                  </svg>
                </button>
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-gray-800 leading-snug">
                  Rasional ədədlərin ədəd oxunda göstərilməsi
                </p>
                <div className="flex items-center gap-1 mt-2 text-gray-500">
                  <Clock size={14} />
                  <span className="text-xs">12 dəq</span>
                </div>
              </div>
              <button className="self-start border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:border-[#4b0082] hover:text-[#4b0082] transition-colors">
                Ətraflı
                <ArrowRight size={13} />
              </button>
            </div>

            {/* Dərslik card */}
            <div className="bg-white rounded-3xl p-5 shadow-sm flex flex-col gap-4">
              <h3 className="text-xl font-bold text-gray-900">Dərslik</h3>
              <div className="rounded-2xl overflow-hidden bg-gray-100 flex items-center justify-center h-40 relative">
                <Image
                  src="/riyasiyyat.png"
                  alt="Riyaziyyat dərslik"
                  fill
                  className="object-contain p-2"
                />
              </div>
              <div className="flex-1">
                <p className="text-sm font-semibold text-gray-800">
                  Riyaziyyat 9 sinif
                </p>
                <p className="text-xs text-gray-500 mt-1 leading-snug">
                  Rasional ədədlərin ədəd oxunda göstərilməsi
                </p>
              </div>
              <button className="self-start border border-gray-200 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:border-[#4b0082] hover:text-[#4b0082] transition-colors">
                Yüklə
                <Download size={13} />
              </button>
            </div>

            {/* Tapşırıq + Quiz stacked */}
            <div className="flex flex-col gap-4">
              {/* Tapşırıq */}
              <div className="bg-gray-100 rounded-3xl p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-gray-900">Tapşırıq</h3>
                <p className="text-sm text-gray-500 flex-1">
                  Öyrəndiklərini tətbiq et
                </p>
                <button className="self-start border border-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:border-[#4b0082] hover:text-[#4b0082] transition-colors">
                  Ətraflı
                  <ArrowRight size={13} />
                </button>
              </div>

              {/* Quiz */}
              <div className="bg-gray-100 rounded-3xl p-5 flex flex-col gap-3 flex-1">
                <h3 className="text-xl font-bold text-gray-900">Quiz</h3>
                <p className="text-sm text-gray-500 flex-1">
                  Biliyini möhkəmləndir
                </p>
                <button className="self-start border border-gray-300 text-gray-700 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:border-[#4b0082] hover:text-[#4b0082] transition-colors">
                  Ətraflı
                  <ArrowRight size={13} />
                </button>
              </div>
            </div>
          </div>

          {/* Ask Teachers Banner */}
          <div className="rounded-3xl bg-[#a3d900] p-7 flex items-center justify-between relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-xl font-bold text-gray-900">
                Müəllimlərdn soruş
              </h3>
              <p className="text-sm text-gray-700 mt-1">
                Sualın var? Cavab tapa bilmirsən?
                <br />
                Bizim müəllimlərimizdən soruş
              </p>
            </div>

            {/* Decorative sparkles */}
            <div className="absolute right-56 top-4 text-[#c5f000] opacity-60">
              <Sparkles size={28} />
            </div>
            <div className="absolute right-48 bottom-4 text-[#c5f000] opacity-40">
              <Sparkles size={18} />
            </div>

            <button
              onClick={handleAspireBannerClick}
              className="relative z-10 bg-gray-900 text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors"
            >
              Take me to Aspire <ArrowUpRight size={16} />
            </button>
          </div>
        </main>
      </div>
    </div>
  );
}

function SideNavItem({
  icon: Icon,
  label,
  hasChevron,
  active,
}: {
  icon: React.ElementType;
  label: string;
  hasChevron?: boolean;
  active?: boolean;
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left text-sm font-medium transition-colors",
        active
          ? "bg-white/15 text-white"
          : "text-white/75 hover:bg-white/10 hover:text-white",
      )}
    >
      <Icon size={18} />
      <span className="flex-1">{label}</span>
      {hasChevron && <ChevronDown size={15} className="opacity-60" />}
    </button>
  );
}
