import DashboardNavLinks from "../components/DashboardNavLinks";

export default function DashboardLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container">
      <div className="layout">
        <div className="sidebar">
        <DashboardNavLinks />
        </div>
        <div className="content">{children}</div>
      </div>
    </div>
  );
}
