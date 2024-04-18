"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ApiClient from "@/services/api-client";
import { useQuery } from "react-query";

export default function Home() {
  const testQuery = useQuery({
    queryFn: async () => {
      return await ApiClient.ffernFriends.getFriend({
        ffernFriendId: "siobhan-1234",
      });
    },
  });

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="relative ">
        <Input type="text" label={"First name"} />

        {testQuery.isLoading && <div>Loading...</div>}
        {testQuery.isError && <div>Error: {}</div>}
        {testQuery.isSuccess && (
          <div>
            <pre>{JSON.stringify(testQuery.data, null, 2)}</pre>
          </div>
        )}
      </div>
      <Button
        onClick={() => {
          console.log("Button clicked");
        }}
      >
        Test button
      </Button>
    </main>
  );
}
