import { NextResponse } from "next/server";

export function successResponse(data: any, status = 200) {
  return NextResponse.json(data, { status });
}

export function errorResponse(message: string, status = 500) {
  return NextResponse.json({ error: message }, { status });
}

export function unauthorizedResponse(message = "Unauthorized") {
  return errorResponse(message, 401);
}

export function badRequestResponse(message = "Bad Request") {
  return errorResponse(message, 400);
}

export function notFoundResponse(message = "Not Found") {
  return errorResponse(message, 404);
}
