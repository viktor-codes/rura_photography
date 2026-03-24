import { NextResponse } from "next/server";
import { Resend } from "resend";
import {
  isAllowedPackageType,
  isAllowedPropertyType,
} from "@/lib/contactEnquiry";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL;
const contactFromEmail = process.env.CONTACT_FROM_EMAIL ?? "no-reply@rura-photography.com";

const resend = resendApiKey ? new Resend(resendApiKey) : null;

export async function POST(request: Request) {
  if (!resend || !contactToEmail) {
    return NextResponse.json(
      { success: false, error: "Email service is not configured." },
      { status: 500 },
    );
  }

  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return NextResponse.json(
      { success: false, error: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  if (
    typeof body !== "object" ||
    body === null ||
    !("name" in body) ||
    !("email" in body) ||
    !("propertyType" in body) ||
    !("packageType" in body) ||
    !("message" in body)
  ) {
    return NextResponse.json(
      { success: false, error: "Missing required fields." },
      { status: 400 },
    );
  }

  const { name, email, propertyType, packageType, message } = body as {
    name: string;
    email: string;
    propertyType: string;
    packageType: string;
    message: string;
  };

  if (
    typeof name !== "string" ||
    typeof email !== "string" ||
    typeof propertyType !== "string" ||
    typeof packageType !== "string" ||
    typeof message !== "string"
  ) {
    return NextResponse.json(
      { success: false, error: "Invalid field types." },
      { status: 400 },
    );
  }

  if (!isAllowedPropertyType(propertyType)) {
    return NextResponse.json(
      { success: false, error: "Invalid property type." },
      { status: 400 },
    );
  }

  if (!isAllowedPackageType(packageType)) {
    return NextResponse.json(
      { success: false, error: "Invalid package selection." },
      { status: 400 },
    );
  }

  const textLines = [
    `New property photography enquiry`,
    ``,
    `Name: ${name}`,
    `Email: ${email}`,
    `Property type: ${propertyType}`,
    `Package interest: ${packageType}`,
    ``,
    `Message:`,
    message,
  ];

  try {
    await resend.emails.send({
      from: contactFromEmail,
      to: contactToEmail,
      replyTo: email,
      subject: "New enquiry from rura-photography website",
      text: textLines.join("\n"),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending contact email", error);

    return NextResponse.json(
      { success: false, error: "Failed to send message. Please try again later." },
      { status: 500 },
    );
  }
}

