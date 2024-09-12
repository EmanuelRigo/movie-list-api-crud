import connectDB from "@/lib/dbConnect";
import { NextResponse } from "next/server";
import { MovieModel } from "@/models/Movie";

export const GET = async () => {
  await connectDB();
  try {
    const result = await MovieModel.find({});
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {}
};

export const POST = async (req, res) => {
  await connectDB();
  try {
    const body = await req.json();
    const newMovie = await MovieModel.create(body);
    return NextResponse.json({ data: newMovie }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
