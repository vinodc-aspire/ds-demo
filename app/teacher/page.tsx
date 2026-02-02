"use client";

import { DSSidebar } from "@/components/DSSidebarTeacher";
import {
  Search,
  ChevronRight,
  ChevronLeft,
  PlayCircle,
  Book,
  FileText,
  Share2,
  MoreVertical,
  ArrowUpRight,
  LayoutGrid,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import axios from "axios";

export default function TeacherPage() {
  const handleAspireBannerClick = async () => {
    try {
      const data = {
        type: "teacher",
        personal_identity_info: {
          name: "SƏMA",
          middle_name: "",
          surname: "MƏMMƏDOVA",
          patronymic: "RUSTEM OGLU",
          gender: "MALE",
        },
        utis_teacher_info: {
          utis_code: 2913943,
          school_utis_codes: [360452736, 432452736],
          lang_name: "Azərbaycan",
          main_subject_name: "Kimya",
          main_subject_id: 20000106,
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
      <DSSidebar />

      <div className="flex-1 flex flex-col">
        {/* Top Header */}
        <header className="flex items-center justify-between border-b bg-white px-8 py-4">
          <div className="flex items-center gap-4">
            <div className="w-48">
              <Select defaultValue="math">
                <SelectTrigger className="bg-gray-100 border-none rounded-2xl h-10">
                  <SelectValue placeholder="Riyaziyyat" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">Riyaziyyat</SelectItem>
                  <SelectItem value="physics">Fizika</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="w-96 relative">
            <Search
              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400"
              size={18}
            />
            <Input
              className="pl-10 rounded-full border border-gray-200 bg-white shadow-sm"
              placeholder="Axtarış"
            />
          </div>
        </header>

        {/* Main Content */}
        <main className="flex-1 overflow-auto p-8">
          {/* Breadcrumbs */}
          <div className="mb-6 flex items-center gap-2 text-xs text-gray-500">
            <span>Home</span>
            <span>/</span>
            <span>Günün dərsi</span>
            <span>/</span>
            <span>Bütün dərslər</span>
            <span>/</span>
            <span>Bölmə 1: Dərəcədən kök. Rasional üstlü qüvvət</span>
            <span>/</span>
            <span className="font-semibold text-[#4b0082]">Həqiqi ədədlər</span>
          </div>

          {/* Content Grid */}
          <div className="grid grid-cols-12 gap-8">
            {/* Left Outline Column */}

            {/* Right Video Column */}
            <div className="col-span-12 lg:col-span-8 space-y-6">
              {/* Ask Teachers Banner */}
              <div className="relative overflow-hidden rounded-3xl bg-[#a3d900] p-6 lg:p-8 flex items-center justify-between">
                <div className="relative z-10 max-w-lg"></div>
                <button
                  onClick={handleAspireBannerClick}
                  className="bg-black text-white px-6 py-2.5 rounded-full text-sm font-medium flex items-center gap-2 hover:bg-gray-800 transition-colors z-10"
                >
                  Take me to Aspire <ArrowUpRight size={16} />
                </button>
                {/* Decorative lines */}
                <div className="absolute bottom-0 right-0 w-64 h-full pointer-events-none">
                  <svg
                    viewBox="0 0 200 100"
                    className="absolute bottom-0 right-0 h-full w-full opacity-50"
                  >
                    <path
                      d="M0,80 Q50,90 100,50 T200,80"
                      fill="none"
                      stroke="#4b0082"
                      strokeWidth="2"
                    />
                    <path
                      d="M20,90 Q70,100 120,60 T220,90"
                      fill="none"
                      stroke="#4b0082"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function LessonItem({
  active,
  icon: Icon,
  title,
  meta,
}: {
  active?: boolean;
  icon: any;
  title: string;
  meta?: string;
}) {
  return (
    <div
      className={cn(
        "flex items-start gap-3 p-4 border-b border-gray-200 cursor-pointer transition-colors",
        active ? "bg-[#f3f0ff]" : "bg-white hover:bg-gray-50",
      )}
    >
      <div
        className={cn("mt-0.5", active ? "text-[#4b0082]" : "text-gray-500")}
      >
        <Icon size={20} />
      </div>
      <div className="flex-1">
        <p
          className={cn(
            "text-sm font-medium leading-tight mb-1",
            active ? "text-[#4b0082]" : "text-gray-700",
          )}
        >
          {title}
        </p>
        {meta && <p className="text-xs text-gray-400">{meta}</p>}
      </div>
    </div>
  );
}
