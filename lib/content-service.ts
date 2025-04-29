import type { TextResponse } from "@/src/app/types/users.entitiy";

// Default content data
const defaultContent: TextResponse = {
  surename: "Tajj",
  motto: "Aspiring Fullstack Developer",
  location: "Depok Sawangan, Indonesia",
  content:
    "So glad you stopped by! I'm an enthusiastic aspiring React developer eager to create intuitive and enjoyable web experiences. I'm excited to share my work with you! Explore my projects to see how I'm putting my React skills into practice. Feel free to connect and say hello!",
  isAvailable: true,
  image: "dummy-profile.jpg",
};

// Function to fetch content
export async function fetchContent(): Promise<TextResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));

  try {
    // Try to load from localStorage first
    const savedContent = localStorage.getItem("content");
    if (savedContent) {
      return JSON.parse(savedContent);
    }
  } catch (err) {
    console.error("Error loading from localStorage:", err);
  }

  // Return default content if nothing in localStorage
  return defaultContent;
}

// Function to update content
export async function updateContent(data: TextResponse): Promise<TextResponse> {
  // Simulate API delay
  await new Promise((resolve) => setTimeout(resolve, 500));
  const { image, ...rest } = data;
  const temp = { image: "dummy-profile.jpg", ...rest };
  // Save to localStorage
  console.log("temp data", temp);
  localStorage.setItem("content", JSON.stringify(temp));

  return data;
}
