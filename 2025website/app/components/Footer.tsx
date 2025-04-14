// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="container flex justify-center items-center">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          © {new Date().getFullYear()} Yanzhen Chen
        </p>
      </div>
    </footer>
  );
}
