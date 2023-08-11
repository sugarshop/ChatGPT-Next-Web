import { Analytics } from "@vercel/analytics/react";

import { Home } from "./components/home";

import { getServerSideConfig } from "./config/server";

const serverConfig = getServerSideConfig();

export default async function App() {
  console.error("serverConfig: " + serverConfig);
  console.error(
    "NEXT_PUBLIC_CLERK_SIGN_UP_URL",
    process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY",
    process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL",
    process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL",
    process.env.NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "NEXT_PUBLIC_CLERK_SIGN_IN_URL",
    process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "OPENAI_API_KEY",
    process.env.OPENAI_API_KEY,
    typeof window === "undefined",
    "999",
  );
  console.error(
    "CLERK_SECRET_KEY",
    process.env.CLERK_SECRET_KEY,
    typeof window === "undefined",
    "999",
  );

  return (
    <>
      <Home />
      {serverConfig?.isVercel && <Analytics />}
    </>
  );
}
