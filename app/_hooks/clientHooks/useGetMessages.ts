import { getMessages } from "@/app/_lib/chattingApi";
import { useQuery } from "@tanstack/react-query";

export const useGetMessages = function (roomId: string) {
  const { data, isLoading, error } = useQuery({
    queryKey: ["messages", roomId],
    queryFn: () => getMessages(roomId),
    enabled: !!roomId,
  });

  return { data: data ?? [], isLoading, error };
};
