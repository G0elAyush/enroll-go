// TODO: Replace these with your actual API endpoints
const API_BASE_URL = "https://your-api-base-url.com";

export interface EnrollFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
}

export interface OtpGenerateResponse {
  success: boolean;
  message: string;
}

export interface OtpVerifyResponse {
  success: boolean;
  message: string;
  token?: string;
}

export async function generateOtp(data: EnrollFormData): Promise<OtpGenerateResponse> {
  const response = await fetch(`${API_BASE_URL}/api/generate-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate OTP");
  }

  return response.json();
}

export async function verifyOtp(email: string, otp: string): Promise<OtpVerifyResponse> {
  const response = await fetch(`${API_BASE_URL}/api/verify-otp`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    throw new Error("OTP verification failed");
  }

  return response.json();
}
