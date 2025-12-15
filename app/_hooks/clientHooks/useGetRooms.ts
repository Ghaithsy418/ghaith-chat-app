"use client";

import { getRooms } from "@/app/_lib/chattingApi";
import { useQuery } from "@tanstack/react-query";

export const useGetRooms = function () {
  const { data, isLoading, error } = useQuery({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });

  return { data: data ?? [], isLoading, error };
};
