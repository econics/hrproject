// components/Analytics.tsx
"use client";

import { useEffect } from "react";
import { useRouter } from "next/router";
import * as gtag from "@/lib/gtag";

const Analytics = () => {
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = (url: string) => {
      gtag.pageview(url);
    };
    router.events.on("routeChangeComplete", handleRouteChange);
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange);
    };
  }, [router.events]);

  return null;
};

export default Analytics;
