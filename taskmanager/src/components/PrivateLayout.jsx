import PrivateNavbar from "./private/PrivateNavbar";
import PrivateFooter from "./private/PrivateFooter";

export default function PrivateLayout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      <PrivateNavbar />
      <main className="flex-grow">{children}</main>
      <PrivateFooter />
    </div>
  );
}
