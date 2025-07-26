export default function PublicFooter() {
  return (
    <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
      © {new Date().getFullYear()} TaskManager. All rights reserved.
    </footer>
  );
}
