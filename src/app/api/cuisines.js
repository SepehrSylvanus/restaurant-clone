import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// Define a custom CORS middleware
const corsMiddleware = (handler) => async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // You might want to replace '*' with your Vercel app's domain in production
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Call the original handler function
  return await handler(req, res);
};

export const GET = async (req, res) => {
  try {
    const categories = await prisma.cuisine.findMany();

    return new NextResponse(JSON.stringify(categories, { status: 200 }));
  } catch (error) {
    console.error(error);
    return new NextResponse(
      JSON.stringify({ message: "Something went wrong" }, { status: 500 })
    );
  }
};

// Apply CORS middleware to the GET handler
export default corsMiddleware(GET);
