/**
 * This configuration is used to for the Sanity Studio that’s mounted on the `\src\pages\studio\[[...index]].tsx` route
 */

import { visionTool } from "@sanity/vision";
import { defineConfig } from "sanity";
import { deskTool } from "sanity/desk";

// Go to https://www.sanity.io/docs/api-versioning to learn how API versioning works
import { apiVersion, dataset, projectId } from "./sanity/env";
import { schema } from "./sanity/schema";
import { openaiImageAsset } from "sanity-plugin-asset-source-openai";
import { iconify } from "sanity-plugin-iconify";

export default defineConfig({
  basePath: "/studio",
  projectId,
  dataset,
  // Add and edit the content schema in the './sanity/schema' folder
  schema,
  plugins: [
    // openaiImageAsset({
    //   API_KEY: "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",
    // }),
    deskTool(),
    // Vision is a tool that lets you query your content with GROQ in the studio
    // https://www.sanity.io/docs/the-vision-plugin
    visionTool({ defaultApiVersion: apiVersion }),
    openaiImageAsset({
      API_KEY: process.env.NEXT_PUBLIC_OPENAI_KEY as string,
    }),

    iconify({
      collections: ["fa-brands", "mdi"], // <-- Filter icons by collection for all Icon fields
    }),
  ],
});
