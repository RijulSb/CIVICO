import { render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";

import Navigation from "@/components/layout/Navigation";

vi.mock("next/link", () => ({
  default: ({ children, href, ...props }: { children: React.ReactNode; href: string }) => (
    <a href={href} {...props}>{children}</a>
  ),
}));

vi.mock("next/navigation", () => ({
  usePathname: () => "/portfolio",
}));

describe("primary navigation", () => {
  it("exposes Portfolio at /portfolio", () => {
    render(<Navigation />);

    const portfolioLink = screen.getByRole("link", { name: "Portfolio" });
    expect(portfolioLink).toHaveAttribute("href", "/portfolio");
    expect(portfolioLink).toHaveAttribute("aria-current", "page");
  });
});
