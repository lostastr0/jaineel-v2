// src/lib/passwordChecker.ts

export type PasswordStrengthLevel =
  | "Very Strong"
  | "Strong"
  | "Medium"
  | "Weak"
  | "Very Weak";

export type PasswordAnalysis = {
  password: string;
  length: number;
  has_lowercase: boolean;
  has_uppercase: boolean;
  has_digits: boolean;
  has_special: boolean;
  is_common: boolean;
  repeated_chars: boolean;
  sequential_chars: boolean;
  strength_score: number;
  strength_level: PasswordStrengthLevel;
  feedback: string[];
  timestamp: string;
};

const COMMON_PASSWORDS = new Set<string>([
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

const SPECIAL = new Set("!@#$%^&*()_+-=[]{}|;:,.<>?".split(""));

function hasLowercase(pwd: string) {
  return /[a-z]/.test(pwd);
}
function hasUppercase(pwd: string) {
  return /[A-Z]/.test(pwd);
}
function hasDigits(pwd: string) {
  return /[0-9]/.test(pwd);
}
function hasSpecial(pwd: string) {
  for (const ch of pwd) if (SPECIAL.has(ch)) return true;
  return false;
}

function checkRepeatedCharacters(pwd: string) {
  for (let i = 0; i < pwd.length - 2; i++) {
    if (pwd[i] === pwd[i + 1] && pwd[i] === pwd[i + 2]) return true;
  }
  return false;
}

function checkSequentialCharacters(pwd: string) {
  const lower = pwd.toLowerCase();

  for (let i = 0; i < lower.length - 2; i++) {
    const a = lower.charCodeAt(i);
    const b = lower.charCodeAt(i + 1);
    const c = lower.charCodeAt(i + 2);

    // abc style
    if (b === a + 1 && c === a + 2) return true;

    // 123 style
    const s = pwd.slice(i, i + 3);
    if (/^\d{3}$/.test(s)) {
      const x = Number(s[0]);
      const y = Number(s[1]);
      const z = Number(s[2]);
      if (y === x + 1 && z === x + 2) return true;
    }
  }

  return false;
}

function calculateStrengthScore(a: Omit<PasswordAnalysis, "strength_score" | "strength_level" | "feedback">) {
  let score = 0;

  // Length (0-25)
  if (a.length >= 12) score += 25;
  else if (a.length >= 8) score += 20;
  else if (a.length >= 6) score += 10;
  else if (a.length >= 4) score += 5;

  // Variety (0-40)
  if (a.has_lowercase) score += 10;
  if (a.has_uppercase) score += 10;
  if (a.has_digits) score += 10;
  if (a.has_special) score += 10;

  // Bonus (0-10)
  if (a.has_lowercase && a.has_uppercase && a.has_digits && a.has_special) score += 10;

  // Penalties
  if (a.is_common) score -= 30;
  if (a.repeated_chars) score -= 15;
  if (a.sequential_chars) score -= 10;

  return Math.max(0, Math.min(100, score));
}

function getStrengthLevel(score: number): PasswordStrengthLevel {
  if (score >= 80) return "Very Strong";
  if (score >= 60) return "Strong";
  if (score >= 40) return "Medium";
  if (score >= 20) return "Weak";
  return "Very Weak";
}

function generateFeedback(a: PasswordAnalysis): string[] {
  const feedback: string[] = [];

  // Length
  if (a.length < 8) feedback.push("⚠️ Use at least 8 characters (12+ recommended)");
  else if (a.length < 12) feedback.push("💡 Consider using 12+ characters for better security");
  else feedback.push("✅ Good length");

  // Character types
  if (!a.has_lowercase) feedback.push("⚠️ Add lowercase letters (a-z)");
  if (!a.has_uppercase) feedback.push("⚠️ Add uppercase letters (A-Z)");
  if (!a.has_digits) feedback.push("⚠️ Add numbers (0-9)");
  if (!a.has_special) feedback.push("⚠️ Add special characters (!@#$%^&*)");

  // Issues
  if (a.is_common) feedback.push("🚨 This is a commonly used password - avoid it!");
  if (a.repeated_chars) feedback.push("⚠️ Avoid repeating characters (aaa, 111)");
  if (a.sequential_chars) feedback.push("⚠️ Avoid sequential characters (abc, 123)");

  // Positive
  if (a.strength_score >= 80) feedback.push("🎉 Excellent password strength!");
  else if (a.strength_score >= 60) feedback.push("👍 Good password strength");

  return feedback;
}

export function analyzePassword(password: string): PasswordAnalysis | { error: string } {
  if (!password) return { error: "Password cannot be empty" };

  const base = {
    password,
    length: password.length,
    has_lowercase: hasLowercase(password),
    has_uppercase: hasUppercase(password),
    has_digits: hasDigits(password),
    has_special: hasSpecial(password),
    is_common: COMMON_PASSWORDS.has(password.toLowerCase()),
    repeated_chars: checkRepeatedCharacters(password),
    sequential_chars: checkSequentialCharacters(password),
    timestamp: new Date().toISOString(),
  };

  const strength_score = calculateStrengthScore(base);
  const strength_level = getStrengthLevel(strength_score);

  const analysis: PasswordAnalysis = {
    ...base,
    strength_score,
    strength_level,
    feedback: [],
  };

  analysis.feedback = generateFeedback(analysis);
  return analysis;
}
