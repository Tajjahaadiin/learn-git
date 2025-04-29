"use client";

import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetchContent, updateContent } from "@/lib/content-service";
import { useForm } from "react-hook-form";
import {
  contentFormSchema,
  ContentFormValues,
} from "@/src/schemas/users-from.schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { TextResponse } from "../types/users.entitiy";
import { toast } from "sonner";

// Query keys
export const contentKeys = {
  all: ["content"] as const,
  detail: () => [...contentKeys.all, "detail"] as const,
};

export function useContent() {
  const queryClient = useQueryClient();

  // Query for fetching content
  const {
    isError,
    isLoading,
    data: content,
    error,
  } = useQuery({
    queryKey: contentKeys.detail(),
    queryFn: fetchContent,
  });
  const form = useForm<ContentFormValues>({
    resolver: zodResolver(contentFormSchema),
    defaultValues: content,
  });
  // Mutation for updating content
  const updateMutation = useMutation<TextResponse, Error, ContentFormValues>({
    mutationFn: updateContent,
    onSuccess: (data) => {
      toast("content updated", {
        description: "Your content has been successfully updated.",
      });
      queryClient.setQueryData(contentKeys.detail(), data);
    },
  });

  // 2. Define a submit handler.
  function onSubmit(values: ContentFormValues) {
    updateMutation.mutateAsync(values);

    console.log(values);
  }

  return {
    content,
    isLoading,
    isError,
    error,
    isUpdating: updateMutation.isPending,
    form,
    onSubmit,
  };
}
