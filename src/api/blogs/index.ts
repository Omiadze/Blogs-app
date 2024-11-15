import { httpClient } from "..";
import { Blog } from "@/types/blog";

export const getblogs = async (): Promise<Blog[]> => {
  try {
    const result = await httpClient.get("/blogs");
    console.log(result.data);
    return result.data; // Ensure the API response is correctly typed
  } catch (error) {
    console.log("Error:", error);
    throw new Error("Failed to fetch blogs");
  }
};
