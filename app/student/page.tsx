"use client";

import { GraduationCap } from "lucide-react";
import Link from "next/link";
import { AspireBanner } from "@/components/AspireBanner";
import axios from "axios";

export default function StudentPage() {
  const handleAspireBannerClick = async () => {
    try {
      const data = {
        type: "student",
        personal_identity_info: {
          name: "DS",
          middle_name: "",
          surname: "Student",
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
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
        <div className="rounded-full bg-primary/10 p-4">
          <GraduationCap className="h-12 w-12 text-primary" />
        </div>
        <h1 className="text-4xl font-bold tracking-tight text-foreground">
          Student Portal
        </h1>
        <p className="text-muted-foreground">
          This is the student dashboard page.
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
