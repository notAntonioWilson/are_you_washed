import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: site.name,
    short_name: site.shortName,
    description:
      "Family-owned pressure washing in Macomb Township and Metro Detroit. House washing, soft washing, window and gutter cleaning, concrete and more.",
    start_url: "/",
    display: "standalone",
    background_color: "#faf6ec",
    theme_color: "#133a5e",
    icons: [
      { src: "/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      { src: "/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { src: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { src: "/logo-web.png", sizes: "600x600", type: "image/png" },
    ],
  };
}
