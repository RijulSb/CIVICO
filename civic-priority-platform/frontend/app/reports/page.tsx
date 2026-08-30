"use client";

import Header from "@/components/layout/Header";
import LockedOverlay from "@/components/auth/LockedOverlay";
import ReportCenter from "@/components/reports/ReportCenter";

export default function ReportsPage() {
  return (
    <div className="min-h-screen bg-[#f6f5f2] text-[#171817]">
      <Header />
      <LockedOverlay
        pageTitle="Report Center"
        pageDescription="Export policy briefs, constituency memos, and parliamentary dossiers with full provenance."
      >
        <ReportCenter />
      </LockedOverlay>
    </div>
  );
}
