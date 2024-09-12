import connectDB from "@/lib/dbConnect";
import { MovieModel } from "@/models/Movie";
import { NextResponse } from "next/server";

export const GET = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await MovieModel.findById(id);
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const DELETE = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  try {
    const result = await MovieModel.findByIdAndDelete(id);
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID: ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};

export const PUT = async (request, { params }) => {
  await connectDB();
  const id = params.id;
  const body = await request.json();
  try {
    const result = await MovieModel.findByIdAndUpdate(
      id,
      { $set: { ...body } },
      { new: true }
    );
    if (!result) {
      return NextResponse.json(
        { message: `Document with ID: ${id} not found.` },
        { status: 404 }
      );
    }
    return NextResponse.json({ data: result }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ data: null }, { status: 500 });
  }
};
