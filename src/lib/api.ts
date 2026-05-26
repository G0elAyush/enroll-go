// TODO: Replace these with your actual API endpoints


export const API_BASE_URL = "https://www.vyomiraedu.com/api";
//export const API_BASE_URL = "http://localhost:8080/api";

export interface EnrollFormData {
  name: string;
  email: string;
  phone: string;
  college: string;
}
export interface EnrollFormError {
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
  data: VerifyResponse;
  token?: string;
  errorMessage: string;
}
interface VerifyResponse {
  course_amount : number;
  gst_amount : number;
  session_id : string;
  total_amount : number;
}

export interface APIERROR {
  detail: string;
  errorMessage: string;
}

export async function generateOtp(data: EnrollFormData): Promise<OtpGenerateResponse> {
  const response = await fetch(`${API_BASE_URL}/student/enroll`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error  = await response.json().catch(() => "") as APIERROR;
    throw new Error(error.errorMessage || "Failed to generate OTP");
  }

  return response.json();
}

export async function verifyOtp(email: string, otp: string): Promise<OtpVerifyResponse> {
  const response = await fetch(`${API_BASE_URL}/student/verify`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, otp }),
  });

  if (!response.ok) {
    const error  = await response.json().catch(() => "") as APIERROR;
    throw new Error(error.errorMessage || "OTP verification failed");
  }

  return response.json();
}
