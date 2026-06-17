import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Toaster } from "sonner";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <p className="script-heading text-3xl">Oh dear…</p>
        <h1 className="mt-2 font-display text-6xl font-semibold text-primary">404</h1>
        <p className="mt-3 text-sm text-muted-foreground">
          This petal seems to have drifted away.
        </p>
        <Link to="/" className="btn-hero mt-6 inline-flex">Back to Home</Link>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: Error; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="font-display text-2xl font-semibold text-primary">Something went wrong</h1>
        <p className="mt-2 text-sm text-muted-foreground">Please try again.</p>
        <div className="mt-5 flex justify-center gap-2">
          <button onClick={() => { router.invalidate(); reset(); }} className="btn-hero">
            Try again
          </button>
          <a href="/" className="rounded-full border border-input px-5 py-2.5 text-sm">Home</a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Simbells Wedding & Events — Weddings, Decoration & Photography in Trichy" },
      { name: "description", content: "Simbells Wedding & Events plans A-to-Z weddings, decoration, photography, entertainment & live experiences in Trichy. You Dream It, We Make It." },
      { name: "author", content: "Simbells Wedding & Events" },
      { property: "og:title", content: "Simbells Wedding & Events — Weddings, Decoration & Photography in Trichy" },
      { property: "og:description", content: "Simbells Wedding & Events plans A-to-Z weddings, decoration, photography, entertainment & live experiences in Trichy. You Dream It, We Make It." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Simbells Wedding & Events — Weddings, Decoration & Photography in Trichy" },
      { name: "twitter:description", content: "Simbells Wedding & Events plans A-to-Z weddings, decoration, photography, entertainment & live experiences in Trichy. You Dream It, We Make It." },
      { property: "og:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/40944124-11e6-45d3-bc67-9b53d9703287" },
      { name: "twitter:image", content: "https://storage.googleapis.com/gpt-engineer-file-uploads/attachments/og-images/40944124-11e6-45d3-bc67-9b53d9703287" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600;700&family=Lato:wght@300;400;600;700&family=Allura&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <Outlet />
      <Toaster position="top-center" richColors closeButton />
    </QueryClientProvider>
  );
}
