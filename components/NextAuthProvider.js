"use client";

import { SessionProvider } from "next-auth/react";
import { Toaster } from "react-hot-toast";

export function NextAuthProvider({ children }) {
  return (
    <SessionProvider>
      <Toaster
        toastOptions={{
          duration: 3000,
        }}
      />
      {children}
    </SessionProvider>
  );
}
