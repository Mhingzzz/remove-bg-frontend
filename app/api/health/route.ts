import { NextResponse } from "next/server";

export async function GET() {
	return NextResponse.json({
		status: "ok",
		timestamp: new Date().toISOString(),
		service: "RemoveBG AI Frontend",
		version: "1.0.0",
	});
}
