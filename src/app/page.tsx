// src/app/page.tsx
'use client';

import { useSession } from 'next-auth/react';
import HomePagePrihlaseny from "../sections/HomePageNeprihlaseny";
import HomePageNeprihlaseny from "../sections/HomePageNeprihlaseny";

export default function Home() {
  const { data: session } = useSession();

  if (session) {
    return <HomePagePrihlaseny />;
  } else {
    return <HomePageNeprihlaseny />;
  }
}