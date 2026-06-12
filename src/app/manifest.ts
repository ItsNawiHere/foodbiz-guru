import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "FoodBiz Guru",
    short_name: "FoodBiz Guru",
    description:
      "Helping food entrepreneurs build, launch, and scale successful food businesses in India.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#16A34A",
    icons: [
      {
        src: "/favicon.ico",
        sizes: "any",
        type: "image/x-icon",
      },
    ],
  };
}
