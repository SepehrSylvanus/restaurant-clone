import prisma from "@/app/utils/connect";
import { NextResponse } from "next/server";

// Define a custom CORS middleware
const corsMiddleware = (handler) => async (req, res) => {
  // Set CORS headers
  res.setHeader("Access-Control-Allow-Origin", "*"); // You might want to replace '*' with your Vercel app's domain in production
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  // Check for preflight request (OPTIONS) and handle it
  if (req.method === "OPTIONS") {
    res.status(200).end();
    return;
  }

  // Call the original handler function
  return await handler(req, res);
};

export const GET = async (req, res) => {
  try {
    const states = await prisma.state.findMany();
    return new NextResponse(JSON.stringify(states, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ mssg: "An error occurred" }, { status: 500 })
    );
  }
};

export const POST = async (req, res) => {
  try {
    const body = await req.json();

    const newStates = await prisma.state.createMany({
      data: body.map((state) => {
        return { name: state.name }; // Assuming your state object has a 'name' property
      }),
    });

    return new NextResponse(JSON.stringify(newStates, { status: 200 }));
  } catch (error) {
    return new NextResponse(
      JSON.stringify({ mssg: "An error occurred" }, { status: 500 })
    );
  }
};

// Apply CORS middleware to the GET and POST handlers
export default corsMiddleware((req, res) => {
  if (req.method === "GET") {
    return GET(req, res);
  } else if (req.method === "POST") {
    return POST(req, res);
  } else {
    return new NextResponse(null, { status: 405 }); // Method Not Allowed
  }
});
