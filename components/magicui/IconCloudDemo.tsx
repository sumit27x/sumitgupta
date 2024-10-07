import { IconCloud } from "@/components/magicui/IconCloud";

const slugs: string[] = [
  "typescript",
  "javascript",
  "react",
  "flutter",
  "android",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "amazonaws",
  "postgresql",
  "firebase",
  "vercel",
  "docker",
  "git",
  "jira",
  "github",
  "gitlab",
  "figma",
];

// Define the IconCloudDemo component
export function IconCloudDemo() {
  return (
    <div className="flex items-center justify-center">
      <div className="relative flex size-full w-full h-full max-w-lg items-center justify-center overflow-hidden rounded-lg">
        <IconCloud iconSlugs={slugs} />
      </div>
    </div>
  );
}
