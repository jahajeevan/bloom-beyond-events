import { createFileRoute, useNavigate, Link } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Lock } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";
import { SiteFooter } from "@/components/SiteFooter";

export const Route = createFileRoute("/auth")({
  head: () => ({
    meta: [
      { title: "Owner Login — Simbells Wedding & Events" },
      { name: "description", content: "Sign in to manage Simbells appointment requests." },
    ],
  }),
  component: AuthPage,
});

function AuthPage() {
  const navigate = useNavigate();
  const [mode, setMode] = useState<"signin" | "signup">("signin");
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (data.session) navigate({ to: "/admin" });
    });
  }, [navigate]);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const email = String(fd.get("email") || "").trim();
    const password = String(fd.get("password") || "");
    if (!email || password.length < 6) {
      toast.error("Enter email and a password (min 6 chars).");
      return;
    }
    setBusy(true);
    if (mode === "signin") {
      const { error } = await supabase.auth.signInWithPassword({ email, password });
      setBusy(false);
      if (error) return toast.error(error.message);
      navigate({ to: "/admin" });
    } else {
      const { error } = await supabase.auth.signUp({
        email, password,
        options: { emailRedirectTo: `${window.location.origin}/admin` },
      });
      setBusy(false);
      if (error) return toast.error(error.message);
      toast.success("Account created. You can sign in now.");
      setMode("signin");
    }
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-md px-4 py-16 sm:px-6">
        <div className="rounded-3xl bg-card p-8 shadow-[var(--shadow-petal)]">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-[var(--gradient-gold)] text-[oklch(0.25_0.06_25)]">
            <Lock size={18} />
          </div>
          <h1 className="mt-4 text-center font-display text-3xl font-semibold text-primary">
            Owner Access
          </h1>
          <p className="mt-1 text-center text-sm text-muted-foreground">
            {mode === "signin" ? "Sign in to view appointments." : "Create the owner account."}
          </p>
          <form onSubmit={onSubmit} className="mt-6 space-y-4">
            <div>
              <label className="mb-1.5 block text-sm font-medium">Email</label>
              <input
                name="email" type="email" required autoComplete="email"
                className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <div>
              <label className="mb-1.5 block text-sm font-medium">Password</label>
              <input
                name="password" type="password" required minLength={6} autoComplete={mode === "signin" ? "current-password" : "new-password"}
                className="w-full rounded-lg border border-input bg-card px-3 py-2.5 text-sm focus:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
              />
            </div>
            <button type="submit" disabled={busy} className="btn-hero w-full justify-center">
              {busy ? "Please wait…" : mode === "signin" ? "Sign in" : "Create account"}
            </button>
          </form>
          <div className="mt-5 flex justify-between text-xs text-muted-foreground">
            <button onClick={() => setMode(mode === "signin" ? "signup" : "signin")} className="hover:text-primary">
              {mode === "signin" ? "Need to create the owner account?" : "Have an account? Sign in"}
            </button>
            <Link to="/" className="hover:text-primary">Back to site</Link>
          </div>
        </div>
      </section>
      <SiteFooter />
    </div>
  );
}
