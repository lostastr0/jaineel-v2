// src/lib/passwordChecker.ts
export type StrengthLevel =
  | "Very Strong"
  | "Strong"
  | "Medium"
  | "Weak"
  | "Very Weak";

export type PasswordAnalysis = {
  length: number;
  hasLowercase: boolean;
  hasUppercase: boolean;
  hasDigits: boolean;
  hasSpecial: boolean;
  isCommon: boolean;
  repeatedChars: boolean;
  sequentialChars: boolean;
  score: number; // 0-100
  level: StrengthLevel;
  feedback: string[];
};

const COMMON_PASSWORDS = new Set([
  "password",
  "123456",
  "password123",
  "admin",
  "qwerty",
  "letmein",
  "welcome",
  "monkey",
  "dragon",
  "master",
  "shadow",
  "123456789",
  "football",
  "baseball",
  "superman",
  "abc123",
  "iloveyou",
  "trustno1",
  "sunshine",
  "princess",
  "welcome123",
  "login",
  "guest",
  "hello",
  "access",
]);

const SPECIAL_CHARS = new Set("!@#$%^&*()_+-=[]{}|;:,.<>?".split(""));

function checkRepeatedCharacters(pw: string) {
  // three-in-a-row: aaa, 111
  for (let i = 0; i < pw.length - 2; i++) {
    if (pw[i] === pw[i + 1] && pw[i] === pw[i + 2]) return true;
  }
  return false;
}

function checkSequentialCharacters(pw: string) {
  const s = pw.toLowerCase();
  for (let i = 0; i < s.length - 2; i++) {
    const a = s.charCodeAt(i);
    const b = s.charCodeAt(i + 1);
    const c = s.charCodeAt(i + 2);

    // abc
    if (b === a + 1 && c === a + 2) return true;

    // 123
    const chunk = pw.slice(i, i + 3);
    if (/^\d{3}$/.test(chunk)) {
      const d0 = Number(chunk[0]);
      const d1 = Number(chunk[1]);
      const d2 = Number(chunk[2]);
      if (d1 === d0 + 1 && d2 === d0 + 2) return true;
    }
  }
  return false;
}

function strengthLevel(score: number): StrengthLevel {
  if (score >= 80) return "Very Strong";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Medium";
  if (score >= 20) return "Weak";
  return "Very Weak";
}

function calculateScore(a: Omit<PasswordAnalysis, "score" | "level" | "feedback">) {
  let score = 0;

  // Length (0-25)
  if (a.length >= 12) score += 25;
  else if (a.length >= 8) score += 20;
  else if (a.length >= 6) score += 10;
  else if (a.length >= 4) score += 5;

  // Variety (0-40)
  if (a.hasLowercase) score += 10;
  if (a.hasUppercase) score += 10;
  if (a.hasDigits) score += 10;
  if (a.hasSpecial) score += 10;

  // Bonus (0-10)
  if (a.hasLowercase && a.hasUppercase && a.hasDigits && a.hasSpecial) score += 10;

  // Penalties
  if (a.isCommon) score -= 30;
  if (a.repeatedChars) score -= 15;
  if (a.sequentialChars) score -= 10;

  return Math.max(0, Math.min(100, score));
}

function buildFeedback(a: PasswordAnalysis) {
  const feedback: string[] = [];

  // Length
  if (a.length < 8) feedback.push("⚠️ Use at least 8 characters (12+ recommended)");
  else if (a.length < 12) feedback.push("💡 Consider using 12+ characters for better security");
  else feedback.push("✅ Good length");

  // Types
  if (!a.hasLowercase) feedback.push("⚠️ Add lowercase letters (a-z)");
  if (!a.hasUppercase) feedback.push("⚠️ Add uppercase letters (A-Z)");
  if (!a.hasDigits) feedback.push("⚠️ Add numbers (0-9)");
  if (!a.hasSpecial) feedback.push("⚠️ Add special characters (!@#$%^&*)");

  // Issues
  if (a.isCommon) feedback.push("🚨 This is a commonly used password — avoid it!");
  if (a.repeatedChars) feedback.push("⚠️ Avoid repeating characters (aaa, 111)");
  if (a.sequentialChars) feedback.push("⚠️ Avoid sequential patterns (abc, 123)");

  // Positive
  if (a.score >= 80) feedback.push("🎉 Excellent password strength!");
  else if (a.score >= 60) feedback.push("👍 Good password strength");

  return feedback;
}

export function analyzePassword(password: string): PasswordAnalysis | { error: string } {
  if (!password) return { error: "Password cannot be empty" };

  const hasLowercase = /[a-z]/.test(password);
  const hasUppercase = /[A-Z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSpecial = [...password].some((c) => SPECIAL_CHARS.has(c));
  const isCommon = COMMON_PASSWORDS.has(password.toLowerCase());
  const repeatedChars = checkRepeatedCharacters(password);
  const sequentialChars = checkSequentialCharacters(password);

  const base = {
    length: password.length,
    hasLowercase,
    hasUppercase,
    hasDigits,
    hasSpecial,
    isCommon,
    repeatedChars,
    sequentialChars,
  };

  const score = calculateScore(base);
  const level = strengthLevel(score);

  const analysis: PasswordAnalysis = {
    ...base,
    score,
    level,
    feedback: [],
  };

  analysis.feedback = buildFeedback(analysis);
  return analysis;
}
