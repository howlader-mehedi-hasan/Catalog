import { NextResponse } from "next/server";
import { saveContactSubmission } from "@/lib/contact-service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, businessName, service, package: selectedPackage, message } = body;

    // Validation
    if (!name || typeof name !== "string" || name.trim().length === 0) {
      return NextResponse.json(
        { success: false, error: "Please provide your name." },
        { status: 400 }
      );
    }

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { success: false, error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const result = await saveContactSubmission({
      name: name.trim(),
      email: email.trim(),
      phone: phone ? String(phone).trim() : "",
      businessName: businessName ? String(businessName).trim() : "",
      service: service || "General Inquiry",
      package: selectedPackage || "Custom",
      message: message ? String(message).trim() : "",
    });

    return NextResponse.json({
      success: true,
      message: "Your inquiry has been received! A digital specialist will reach out within 24 hours.",
      id: result.id,
    });
  } catch (error) {
    console.error("[API Contact Error]:", error);
    return NextResponse.json(
      { success: false, error: "An unexpected error occurred while saving your inquiry." },
      { status: 500 }
    );
  }
}
