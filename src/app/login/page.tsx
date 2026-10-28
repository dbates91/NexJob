import type { Metadata } from "next";
import { redirect } from "next/navigation";

import { BrandMark } from "@/components/brand-mark";
import { getSession } from "@/lib/auth/session";

import { LoginForm } from "./login-form";

export const metadata: Metadata = { title: "Sign in" };

/** Password-only sign-in, outside the app shell (PRD AUTH-1, AUTH-8). */
export default async function LoginPage({ searchParams }: PageProps<"/login">) {
  if (await getSession()) redirect("/");
  const { next } = await searchParams;

  return (
    // The form on the panel's colour, a warm wash on the right.
    <main className="nexjob-login grid min-h-screen bg-surface min-[960px]:grid-cols-2">
      <div className="flex items-center justify-center px-8 py-12">
      <div className="flex w-full max-w-[400px] flex-col gap-8">
        <div className="flex flex-col items-start gap-2">
          <BrandMark className="size-10" />
          <div className="flex flex-col">
            <div className="font-sans text-[30px] font-semibold tracking-[-0.04em]">NexJob</div>
            <div className="text-sm text-muted">Your next opportunity is one click away.</div>
          </div>
        </div>
        <LoginForm next={typeof next === "string" ? next : undefined} />
        <p className="text-meta leading-[1.6] text-pretty text-muted">
          Your password is set on the server, as a hash in{" "}
          <code className="font-mono text-label">DOSSIER_PASSWORD</code>. Forgot it? Make a new hash with{" "}
          <code className="font-mono text-label">hash-password</code> and restart.
        </p>
      </div>
      </div>
      <div
        aria-hidden="true"
        className="nexjob-login-art hidden min-[960px]:grid min-[960px]:place-items-center"
      >
        <div className="nexjob-login-emblem"><BrandMark className="size-32 drop-shadow-lg" /><p className="mt-8 text-center text-sm font-medium tracking-wide text-ink">One place for your next move.</p></div>
      </div>
    </main>
  );
}
