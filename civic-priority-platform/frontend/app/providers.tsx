"use client";

import * as React from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

import { FeedbackHubProvider } from "@/components/feedback/FeedbackHub";

interface ProvidersProps {
  children: React.ReactNode;
}

/**
 * Global React Query client.
 *
 * Optimized for:
 * - low latency
 * - reduced backend load
 * - token conservation
 * - burst traffic
 * - fast dashboard rendering
 */
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 30 * 1000,
      gcTime: 5 * 60 * 1000,

      refetchOnWindowFocus: false,
      refetchOnReconnect: true,
      refetchOnMount: false,

      retry: 1,
      retryDelay: (attempt) => Math.min(1000 * 2 ** attempt, 5000),

      networkMode: "online",
    },

    mutations: {
      retry: false,
      networkMode: "online",
    },
  },
});

export default function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <FeedbackHubProvider>{children}</FeedbackHubProvider>

      {process.env.NODE_ENV === "development" && (
        <ReactQueryDevtools
          initialIsOpen={false}
          buttonPosition="bottom-right"
        />
      )}
    </QueryClientProvider>
  );
}
