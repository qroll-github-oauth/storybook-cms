import NetlifyCmsApp from "netlify-cms-core";

declare global {
  export const CMS: typeof NetlifyCmsApp;
}

declare module "netlify-cms-core" {
  interface EditorComponentOptions {
    collapsed?: boolean;
  }
}
