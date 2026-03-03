"use client";

import {
  Home,
  CalendarDays,
  BarChart2,
  Users,
  Bell,
  LayoutGrid,
  LogOut,
  User,
  ArrowUpRight,
  KeyRound,
} from "lucide-react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import axios from "axios";

type App = {
  id: string;
  name: string;
  description: string;
  blobColor: string;
  blobContent: React.ReactNode;
  onClick?: () => void;
};

const apps: App[] = [
  {
    id: "reqemsal-komekci",
    name: "Rəqəmsal köməkçi",
    description:
      "Tədris prosesində gündəlik fəaliyyəti asanlaşdıran interaktiv dəstək moduludur.",
    blobColor: "#4b0082",
    blobContent: (
      <Image
        src="/raqamsal.png"
        alt="Rəqəmsal köməkçi"
        width={60}
        height={60}
        className="object-contain -rotate-12"
      />
    ),
  },
  {
    id: "mektebimde-wifi",
    name: "Məktəbimdə Wi-Fi",
    description:
      "Məktəb daxilində sürətli və təhlükəsiz internet bağlantısına çıxışı təmin edir.",
    blobColor: "#ddd6f7",
    blobContent: (
      <Image
        src="/wifi.png"
        alt="Wi-Fi"
        width={48}
        height={48}
        className="object-contain -rotate-12"
      />
    ),
  },
  {
    id: "canva",
    name: "Canva",
    description:
      "Canva tətbiqi müəllim və şagirdlərə vizual təqdimatlar, posterlər, infografiklər və digər yaradıcılıq yönümlü materialları asanlıqla hazırlamaq imkanı yaradır.",
    blobColor: "#ff0090",
    blobContent: (
      <Image
        src="/canva.png"
        alt="Canva"
        width={60}
        height={30}
        className="object-contain -rotate-12"
      />
    ),
  },
  {
    id: "aspire",
    name: "Aspire",
    description:
      "Şagirdlərin akademik inkişafını izləmək, fərdi hədəflər qoymaq və nailiyyətlərini mərhələli şəkildə dəyərləndirmək üçün nəzərdə tutulmuş rəqəmsal inkişaf platformasıdır.",
    blobColor: "#a3d900",
    blobContent: (
      <Image
        src="/aspire.png"
        alt="Aspire"
        width={60}
        height={30}
        className="object-contain"
      />
    ),
  },
  {
    id: "tredu",
    name: "Tredu",
    description:
      "TREDU tətbiqi müxtəlif istiqamətlər üzrə fəaliyyət göstərən dərnək proqramlarını özündə birləşdirən rəqəmsal tədris ekosistemidir.",
    blobColor: "#c8bcf5",
    blobContent: (
      <Image
        src="/tredu.png"
        alt="Tredu"
        width={60}
        height={30}
        className="object-contain -rotate-12"
      />
    ),
  },
  {
    id: "2school",
    name: "2School",
    description:
      "Şagirdlərin məktəbə təhlükəsiz və etibarlı daşınma xidmətini təklif edir.",
    blobColor: "#3b2ef5",
    blobContent: (
      <Image
        src="/2school.png"
        alt="2School"
        width={60}
        height={30}
        className="object-contain -rotate-12"
      />
    ),
  },
];

export default function AspireDemoPage() {
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
    <div className="flex min-h-screen bg-white font-sans">
      {/* Sidebar */}
      <aside className="w-56 bg-[#F2F2F2] flex flex-col h-screen fixed left-0 top-0">
        {/* Logo */}
        <div className="flex items-center px-5 py-5">
          <Image
            src="/raqamsalmakatab.png"
            alt="rəqəmsal məktəb"
            width={140}
            height={40}
            className="object-contain"
          />
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-2 space-y-0.5 overflow-y-auto">
          <SideNavItem icon={Home} label="Ana səhifə" />
          <SideNavItem icon={CalendarDays} label="Dərs cədvəli" />
          <SideNavItem icon={BarChart2} label="Qiymətləndirmə" />
          <SideNavItem icon={Users} label="Şagird siyahısı" />
          <SideNavItem icon={Bell} label="Elanlar" badge={2} />
          <SideNavItem icon={LayoutGrid} label="Tətbiqlər" active />
          <SideNavItem icon={LayoutGrid} label="Microsoft kabineti" />
        </nav>

        {/* Footer */}
        <div className="px-2 pt-2 pb-4 border-t border-gray-100 space-y-0.5">
          <SideNavItem
            icon={KeyRound}
            label="Microsoft kabinetinin şifrəsinin bərpası"
            small
          />
          <SideNavItem icon={LogOut} label="Çıxış" />
          <div className="flex items-center gap-2.5 mt-2 px-3 py-2 rounded-xl bg-gray-50">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[#a3d900] text-[#4b0082] flex-shrink-0">
              <User size={14} />
            </div>
            <span className="text-xs font-semibold text-gray-800 truncate">
              Aynurə Rzazadə
            </span>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 ml-56 p-8">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-3xl font-bold text-gray-900">Tətbiqlər</h1>
          <p className="mt-2 text-sm text-gray-500 max-w-3xl leading-relaxed">
            Bu bölmə tədris və öyrənmə prosesinin keyfiyyətini artırmaq
            məqsədilə yaradılmış rəqəmsal mühitdir. Bu bölmə müəllim və
            şagirdlərə tədrisin planlaşdırılması, dərs resurslarının idarə
            edilməsi, qiymətləndirmə, fərdiləşdirilmiş öyrənmə, ünsiyyət və s.
            kimi əsas pedaqoji fəaliyyətləri dəstəkləyən tətbiqlərə vahid
            məkandan çıxış imkanı yaradır.
          </p>
        </div>

        {/* Apps Grid */}
        <div className="grid grid-cols-2 gap-4">
          {apps.map((app) => (
            <AppCard
              key={app.id}
              app={app}
              onClick={
                app.id === "aspire" ? handleAspireBannerClick : undefined
              }
            />
          ))}
        </div>
      </div>
    </div>
  );
}

function AppCard({ app, onClick }: { app: App; onClick?: () => void }) {
  return (
    <div className="bg-[#F2F2F2] rounded-3xl p-6 flex items-center justify-between overflow-hidden relative">
      {/* Left: text content */}
      <div className="flex-1 flex flex-col gap-3 pr-4 min-w-0">
        <h2 className="text-xl font-bold text-gray-900">{app.name}</h2>
        <p className="text-sm text-gray-500 leading-relaxed">
          {app.description}
        </p>
        <button
          onClick={onClick}
          className="self-start border border-[#520484] text-[#520484] px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-1.5 hover:bg-[#520484] hover:text-white transition-colors"
        >
          Keçid et
          <ArrowUpRight size={14} />
        </button>
      </div>

      {/* Right: blob shape */}
      <div className="relative w-36 h-36 flex-shrink-0 flex items-center justify-center">
        {/* SVG blob */}
        <svg
          viewBox="0 0 100 100"
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M 50,8 Q 68,38 92,50 Q 68,62 50,92 Q 32,62 8,50 Q 32,38 50,8 Z"
            fill={app.blobColor}
          />
        </svg>
        {/* Blob content */}
        <div className="relative z-10 flex items-center justify-center">
          {app.blobContent}
        </div>
      </div>
    </div>
  );
}

function SideNavItem({
  icon: Icon,
  label,
  active,
  badge,
  small,
}: {
  icon: React.ElementType;
  label: string;
  active?: boolean;
  badge?: number;
  small?: boolean;
}) {
  return (
    <button
      className={cn(
        "flex w-full items-center gap-2.5 rounded-xl px-3 py-2 text-left transition-colors",
        small ? "text-xs" : "text-sm",
        active
          ? "bg-[#ede9ff] text-[#4b0082] font-semibold"
          : "text-gray-600 hover:bg-gray-50 font-medium",
      )}
    >
      <Icon size={small ? 14 : 17} className="flex-shrink-0" />
      <span className="flex-1 leading-snug">{label}</span>
      {badge !== undefined && (
        <span className="flex h-5 w-5 items-center justify-center rounded-full bg-green-500 text-[10px] font-bold text-white">
          {badge}
        </span>
      )}
    </button>
  );
}
