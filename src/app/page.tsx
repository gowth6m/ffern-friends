"use client";

import PageCard from "@/components/page/page-card";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  const handleGoToInvite = () => {
    router.push("/invite/siobhan-1234");
  };

  return (
    <PageCard>
      <main className="flex flex-col items-center justify-between gap-8">
        <div className="text-center text-2xl">Welcome to Ffern friends</div>

        <div className="text-center">
          <p>
            This is a test page to demonstrate the invite flow. Click the button
            below to go to the invite page.
          </p>
        </div>

        <Button onClick={handleGoToInvite}>Test invite</Button>
      </main>
    </PageCard>
  );
}
