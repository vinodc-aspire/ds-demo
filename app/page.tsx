import Link from "next/link";
import { GraduationCap, School } from "lucide-react";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-background p-4">
      <div className="mx-auto flex max-w-4xl flex-col items-center gap-8 text-center">
        <div className="space-y-4">
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-foreground">
            Welcome to DS Demo
          </h1>
          <p className="text-xl text-muted-foreground">
            Please select your role to continue
          </p>
        </div>

        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-8 mt-8">
          <Link
            href="/teacher"
            className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border bg-card p-8 transition-colors hover:border-primary hover:bg-accent/50 text-card-foreground"
          >
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <School className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Teacher</h2>
              <p className="text-muted-foreground text-sm">
                Access classroom controls and management tools
              </p>
            </div>
          </Link>

          <Link
            href="/student"
            className="group relative flex flex-col items-center justify-center gap-4 overflow-hidden rounded-2xl border bg-card p-8 transition-colors hover:border-primary hover:bg-accent/50 text-card-foreground"
          >
            <div className="rounded-full bg-primary/10 p-4 transition-colors group-hover:bg-primary/20">
              <GraduationCap className="h-12 w-12 text-primary" />
            </div>
            <div className="space-y-2">
              <h2 className="text-2xl font-semibold">Student</h2>
              <p className="text-muted-foreground text-sm">
                Join classrooms and view your dashboard
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
