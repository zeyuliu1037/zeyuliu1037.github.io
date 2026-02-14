/**
 * This route is responsible for the built-in authoring environment using Sanity Studio.
 * All routes under your studio path is handled by this file using Next.js' catch-all routes:
 * https://nextjs.org/docs/routing/dynamic-routes#catch-all-routes
 *
 * You can learn more about the next-sanity package here:
 * https://github.com/sanity-io/next-sanity
 */

import type { Metadata, Viewport } from "next";
import config from "@/sanity.config";

export const dynamic = "force-static";

/** Required for static export (e.g. GitHub Pages): pre-render the base /studio path. */
export function generateStaticParams() {
  return [{ tool: [] }];
}

/** Use local metadata/viewport so we don't load next-sanity/studio when config is null (e.g. in CI). */
export const metadata: Metadata = {
  title: "Sanity Studio",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
};

export default async function StudioPage() {
  // Show message if Sanity is not configured (e.g. GitHub Actions without Sanity secrets)
  if (!config) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
          fontFamily: "system-ui, sans-serif",
          padding: "2rem",
          textAlign: "center",
        }}
      >
        <h1 style={{ marginBottom: "1rem" }}>Sanity Studio Not Configured</h1>
        <p style={{ color: "#666", maxWidth: "500px" }}>
          To use Sanity Studio, please set the following environment variables:
        </p>
        <code
          style={{
            background: "#f4f4f4",
            padding: "1rem",
            borderRadius: "8px",
            marginTop: "1rem",
          }}
        >
          NEXT_PUBLIC_SANITY_PROJECT_ID
          <br />
          NEXT_PUBLIC_SANITY_DATASET
        </code>
      </div>
    );
  }

  const { NextStudio } = await import("next-sanity/studio");
  return <NextStudio config={config} />;
}
