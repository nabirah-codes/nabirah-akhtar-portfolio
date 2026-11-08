import { describe, expect, it } from "vitest";
import { buildMailto, contactSchema } from "@/lib/contact";

describe("contact form", () => {
  it("rejects an invalid email address", () => {
    const r = contactSchema.safeParse({ name: "A", email: "nope", subject: "Hi", message: "Hello there!" });
    expect(r.success).toBe(false);
  });

  it("sends messages to Nabirah's inbox with encoded subject", () => {
    const url = buildMailto("nabirahakhtar@gmail.com", {
      name: "Sam",
      email: "sam@example.com",
      subject: "Project & ideas",
      message: "Let's build something.",
    });
    expect(url.startsWith("mailto:nabirahakhtar@gmail.com?subject=Project%20%26%20ideas")).toBe(true);
  });
});
