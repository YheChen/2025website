// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto max-w-7xl w-full flex justify-center items-center px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Yanzhen Chen
        </p>
      </div>
    </footer>
  );
}
