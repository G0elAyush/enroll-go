// TODO: Replace these with your actual API endpoints
const API_BASE_URL = "https://www.vyomiraedu.com/api2";

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
  const response = await fetch(`${API_BASE_URL}/auth/send-otp-email`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Failed to generate OTP");
  }

  return response.json();
}

export async function verifyOtp(data: EnrollFormData, otp: string): Promise<OtpVerifyResponse> {
  data["otp"]=otp;
  data["firstName"]=data.name;
  data["lastName"]=data.name;
  const response = await fetch(`${API_BASE_URL}/auth/verify-otp-create`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data ),
  });

  if (!response.ok) {
    throw new Error("OTP verification failed");
  }

  return response.json();
}
