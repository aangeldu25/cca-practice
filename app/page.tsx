"use client";

import { useState } from "react";
import Home from "./components/Home";
import TestRunner from "./components/TestRunner";
import Results from "./components/Results";
import { assembleTest } from "@/lib/engine";
import type { AssembledTest, Attempt } from "@/lib/types";

type View = "home" | "running" | "results";

export default function Page() {
  const [view, setView] = useState<View>("home");
  const [test, setTest] = useState<AssembledTest | null>(null);
  const [attempt, setAttempt] = useState<Attempt | null>(null);

  function start() {
    setTest(assembleTest());
    setAttempt(null);
    setView("running");
  }

  function finish(result: Attempt) {
    setAttempt(result);
    setView("results");
    if (typeof window !== "undefined") window.scrollTo(0, 0);
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:py-12">
      {view === "home" && <Home onStart={start} />}
      {view === "running" && test && (
        <TestRunner test={test} onFinish={finish} />
      )}
      {view === "results" && attempt && (
        <Results attempt={attempt} onRetake={start} onHome={() => setView("home")} />
      )}
    </main>
  );
}
