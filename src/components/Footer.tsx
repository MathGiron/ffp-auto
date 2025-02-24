// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="p-4 bg-[#515353] text-center">
      <p className="text-[#f4d676]">
        &copy; {new Date().getFullYear()} Bruno Auto. Tous droits réservés.
      </p>
    </footer>
  );
}
