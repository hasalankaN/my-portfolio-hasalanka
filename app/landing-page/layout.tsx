import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hasalanka Nipun | Portfolio",
  description: "Full Stack Developer Portfolio",
};

export default function LandingPageLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <style>{`
        html, body {
          background-color: #0D1117;
          scrollbar-color: #334155 #0D1117;
          scrollbar-width: thin;
        }
        html::-webkit-scrollbar {
          width: 6px;
        }
        html::-webkit-scrollbar-track {
          background: #0D1117;
        }
        html::-webkit-scrollbar-thumb {
          background-color: #334155;
          border-radius: 100vh;
        }
        html::-webkit-scrollbar-thumb:hover {
          background-color: #475569;
        }
      `}</style>
      {children}
    </>
  );
}
