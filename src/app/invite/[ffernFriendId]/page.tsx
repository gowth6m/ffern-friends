"use client";

import {
  GetFfernFriendResponse,
  GetFfernFriendResponseSchema,
} from "@/services/types/get-ffern-friend-response-type";
import InviteUserMessage from "@/components/invite/invite-user-message";
import InviteUserTitleVideo from "@/components/invite/invite-user-title-video";
import InviteUserDetailsCard from "@/components/invite/invite-user-details-card";
import LoadingView from "@/components/page/loading-view";
import ErrorView from "@/components/page/error-view";
import PageCard from "@/components/page/page-card";
import ApiClient from "@/services/api-client";
import { useParams } from "next/navigation";
import { useQuery } from "react-query";
import toast from "react-hot-toast";
import { ZodError } from "zod";

// ------------------------------------------------------------

export default function Home() {
  const { ffernFriendId } = useParams<{ ffernFriendId: string }>();

  const getFriendQuery = useQuery({
    queryKey: ["getFriend", ffernFriendId],
    queryFn: async () => {
      const res = await ApiClient.ffernFriends.getFriend({
        ffernFriendId: ffernFriendId,
      });
      GetFfernFriendResponseSchema.parse(res?.data);
      return res?.data as GetFfernFriendResponse;
    },
    onError: (error) => {
      if (error instanceof ZodError) {
        toast.error("Response data is invalid");
      } else {
        toast.error("An error occurred");
      }
    },
  });

  if (getFriendQuery.isLoading) return <LoadingView />;

  if (getFriendQuery.isError || !getFriendQuery.data) return <ErrorView />;

  return (
    <PageCard>
      <main className="flex flex-col items-center justify-between gap-4">
        <InviteUserTitleVideo />
        <InviteUserMessage name={getFriendQuery?.data.firstName} />
        <InviteUserDetailsCard userData={getFriendQuery?.data} />
        <div className="flex w-full flex-row py-2 pt-10">
          <img src="/logo-dark.svg" alt="Ffern Logo" className="h-18 w-18 " />
        </div>
      </main>
    </PageCard>
  );
}
