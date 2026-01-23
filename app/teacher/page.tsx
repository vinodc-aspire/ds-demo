"use client";

import { School } from "lucide-react";
import Link from "next/link";
import { AspireBanner } from "@/components/AspireBanner";
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <School className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Teacher Portal
        </h1>
        <p className="text-muted-foreground">
          This is the teacher dashboard page.
        </p>
        <Link
          href="/"
          className="text-primary hover:underline underline-offset-4"
        >
          Back to Home
        </Link>
        <AspireBanner onClick={handleAspireBannerClick} />
      </div>
    </div>
  );
}
