/**
 * Application Error Logger
 */
export function reportError(error: unknown, context: Record<string, unknown> = {}) {
  if (typeof window === "undefined") return;
  console.error("[GJ SpaCes Error Boundary]", error, context);
}
