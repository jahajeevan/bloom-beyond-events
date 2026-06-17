import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { LogOut, Phone, Mail, Calendar, MapPin, RefreshCw, ShieldAlert } from "lucide-react";
import { supabase } from "@/integrations/supabase/client";
import { SiteHeader } from "@/components/SiteHeader";

type Appointment = {
  id: string;
  name: string;
  phone: string;
  email: string | null;
  event_type: string;
  event_date: string | null;
  preferred_time: string | null;
  location: string | null;
  message: string | null;
  status: string;
  created_at: string;
};

export const Route = createFileRoute("/_authenticated/admin")({
  head: () => ({ meta: [{ title: "Appointments Dashboard — Simbells" }] }),
  component: AdminPage,
});

function AdminPage() {
  const navigate = useNavigate();
  const [rows, setRows] = useState<Appointment[] | null>(null);
  const [forbidden, setForbidden] = useState(false);
  const [loading, setLoading] = useState(true);

  async function load() {
    setLoading(true);
    const { data, error } = await supabase
      .from("appointments")
      .select("*")
      .order("created_at", { ascending: false });
    setLoading(false);
    if (error) {
      setForbidden(true);
      return;
    }
    setRows(data as Appointment[]);
  }

  useEffect(() => { load(); }, []);

  async function signOut() {
    await supabase.auth.signOut();
    navigate({ to: "/auth" });
  }

  async function setStatus(id: string, status: string) {
    const { error } = await supabase.from("appointments").update({ status }).eq("id", id);
    if (error) return toast.error("Couldn't update status");
    toast.success("Updated");
    load();
  }

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="script-heading text-2xl">Owner dashboard</p>
            <h1 className="font-display text-3xl font-semibold text-primary">Appointments</h1>
          </div>
          <div className="flex gap-2">
            <button onClick={load} className="inline-flex items-center gap-1.5 rounded-full border border-input px-4 py-2 text-sm hover:bg-accent/10">
              <RefreshCw size={14} /> Refresh
            </button>
            <button onClick={signOut} className="inline-flex items-center gap-1.5 rounded-full bg-primary px-4 py-2 text-sm text-primary-foreground hover:opacity-90">
              <LogOut size={14} /> Sign out
            </button>
          </div>
        </div>

        {forbidden && (
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-destructive/40 bg-destructive/5 p-5 text-sm">
            <ShieldAlert className="mt-0.5 text-destructive" size={18} />
            <div>
              <p className="font-semibold text-destructive">You don't have admin access yet.</p>
              <p className="mt-1 text-muted-foreground">
                Ask Lovable to grant the <code className="rounded bg-card px-1">admin</code> role to your account, then refresh this page.
              </p>
            </div>
          </div>
        )}

        {loading && !rows && <p className="mt-10 text-center text-muted-foreground">Loading…</p>}

        {rows && rows.length === 0 && (
          <div className="mt-10 rounded-2xl bg-card p-10 text-center shadow-[var(--shadow-soft)]">
            <p className="font-display text-xl text-primary">No appointments yet</p>
            <p className="mt-1 text-sm text-muted-foreground">Submissions from the appointment page will appear here.</p>
          </div>
        )}

        {rows && rows.length > 0 && (
          <div className="mt-8 grid gap-4">
            {rows.map((a) => (
              <article key={a.id} className="rounded-2xl bg-card p-5 shadow-[var(--shadow-soft)]">
                <header className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h2 className="font-display text-xl text-primary">{a.name}</h2>
                    <p className="text-xs text-muted-foreground">
                      {new Date(a.created_at).toLocaleString()} · {a.event_type}
                    </p>
                  </div>
                  <select
                    value={a.status} onChange={(e) => setStatus(a.id, e.target.value)}
                    className="rounded-full border border-input bg-background px-3 py-1 text-xs"
                  >
                    <option value="new">New</option>
                    <option value="contacted">Contacted</option>
                    <option value="confirmed">Confirmed</option>
                    <option value="closed">Closed</option>
                  </select>
                </header>
                <div className="mt-3 grid gap-2 text-sm text-foreground/80 sm:grid-cols-2">
                  <Info icon={Phone}><a href={`tel:${a.phone}`} className="hover:text-primary">{a.phone}</a></Info>
                  {a.email && <Info icon={Mail}><a href={`mailto:${a.email}`} className="hover:text-primary">{a.email}</a></Info>}
                  {a.event_date && <Info icon={Calendar}>{a.event_date}{a.preferred_time ? ` · ${a.preferred_time}` : ""}</Info>}
                  {a.location && <Info icon={MapPin}>{a.location}</Info>}
                </div>
                {a.message && (
                  <p className="mt-3 rounded-lg bg-[var(--gradient-petal)] p-3 text-sm text-foreground/80">{a.message}</p>
                )}
              </article>
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

function Info({ icon: Icon, children }: { icon: React.ComponentType<{ size?: number; className?: string }>; children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Icon size={14} className="text-accent" />
      <span>{children}</span>
    </div>
  );
}
