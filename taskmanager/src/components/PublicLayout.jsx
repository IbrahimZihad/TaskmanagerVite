import PublicNavbar from "./public/PublicNavbar";
import PublicFooter from "./public/PublicFooter";

export default function PublicLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PublicNavbar />
      <main className="flex-grow">{children}</main>
      <PublicFooter />
    </div>
  );
}
