"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import {
  ContentFormValues,
  contentFormSchema,
} from "@/src/schemas/users-from.schemas";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Switch } from "@/components/ui/switch";
import { ImageUpload } from "@/components/image-upload";
import { cn } from "@/lib/utils";
import { toast } from "sonner";
import { useContent } from "../../hooks/use-contents";
import Spinner from "@/components/spinner";
import { TextResponse } from "../../types/users.entitiy";

export function ProfileForm() {
  const { content, isUpdating, isLoading, form, onSubmit } = useContent();

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 w-full">
        <FormField
          control={form.control}
          name="image"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Profile Image</FormLabel>
              <FormControl>
                <ImageUpload
                  value={field.value}
                  onChange={field.onChange}
                  disabled={isUpdating}
                />
              </FormControl>
              <FormDescription>
                Upload a profile image (max 2MB)
              </FormDescription>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="surename"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Surename</FormLabel>
              <FormControl>
                <Input placeholder="Enter your surename" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="motto"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Motto</FormLabel>
              <FormControl>
                <Input placeholder="Enter your motto" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="location"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Location</FormLabel>
              <FormControl>
                <Input placeholder="Enter your location" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="content"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Content</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="Enter your content"
                  className="min-h-[120px]"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="isAvailable"
          render={({ field }) => (
            <FormItem className="flex flex-row items-center justify-between rounded-lg border p-4">
              <div className="space-y-0.5">
                <FormLabel className="text-base">Availability</FormLabel>
                <FormDescription>Set your availability status</FormDescription>
              </div>
              <FormControl>
                <Switch
                  checked={field.value}
                  onCheckedChange={field.onChange}
                  className={cn(
                    "bg-gray-600 data-[state=unchecked]:bg-gray-500", // Background colors
                    "focus-visible:ring-2 focus-visible:ring-green-500 ", // Focus ring color
                    "bg-gray-500 peer-focus-visible:ring-gray-500", // Thumb colors (unchecked and focus)
                    "data-[state=checked]:bg-gray-400 peer-data-[state=checked]:bg-gray-500",
                    "peer rounded-full transition-all duration-500"
                  )}
                />
              </FormControl>
            </FormItem>
          )}
        />

        <div className="flex justify-between">
          <Button type="submit">Submit</Button>
        </div>
      </form>
    </Form>
  );
}
