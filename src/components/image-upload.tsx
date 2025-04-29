"use client";

import type React from "react";

import { useState, useRef } from "react";
import { Upload, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";

interface ImageUploadProps {
  value?: string;
  onChange: (value: string | undefined) => void;
  disabled?: boolean;
}

export function ImageUpload({ value, onChange, disabled }: ImageUploadProps) {
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    // Check file size (limit to 2MB)
    if (file.size > 2 * 1024 * 1024) {
      alert("File size should be less than 2MB");
      return;
    }

    setIsUploading(true);

    const reader = new FileReader();
    reader.onload = (event) => {
      const result = event.target?.result as string;
      onChange(result);
      setIsUploading(false);
    };
    reader.onerror = () => {
      setIsUploading(false);
      alert("Error reading file");
    };
    reader.readAsDataURL(file);
  };

  const handleRemove = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    onChange(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="space-y-4 w-full">
      <Input
        ref={fileInputRef}
        type="file"
        accept="image/*"
        onChange={handleChange}
        disabled={disabled || isUploading}
        className="hidden"
      />

      {value ? (
        <div className="relative aspect-square w-full max-w-[200px] overflow-hidden rounded-md">
          <div className="absolute top-2 right-2 z-30">
            <Button
              type="button"
              variant="destructive"
              size="icon"
              className="h-6 w-6 rounded-full"
              onClick={handleRemove}
              disabled={disabled}
            >
              <X className="h-4 w-4" />
            </Button>
          </div>
          <Image
            src={value || "/placeholder.svg"}
            alt="Uploaded image"
            fill
            className="object-cover"
          />
        </div>
      ) : (
        <Button
          type="button"
          variant="outline"
          className="w-full max-w-[200px] h-[200px] border-dashed flex flex-col gap-2"
          onClick={handleClick}
          disabled={disabled || isUploading}
        >
          <Upload className="h-6 w-6" />
          <span className="text-sm">
            {isUploading ? "Uploading..." : "Upload Image"}
          </span>
        </Button>
      )}
    </div>
  );
}
