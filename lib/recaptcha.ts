// lib/recaptcha.ts
interface RecaptchaResponse {
  success: boolean;
  score?: number;
  "error-codes"?: string[];
}

export async function verifyRecaptcha(token: string): Promise<boolean> {
  if (!token) return false;

  try {
    const response = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: `secret=6Lc-HCcrAAAAAIKZN48_8-MiMo-k6QjljsjTgYsL&response=${token}`,
      },
    );

    const data: RecaptchaResponse = await response.json();
    return data.success === true;
  } catch (error) {
    console.error("reCAPTCHA verification error:", error);
    return false;
  }
}

// Add this to make it a proper module
export default verifyRecaptcha;
