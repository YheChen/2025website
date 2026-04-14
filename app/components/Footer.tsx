// components/Footer.tsx
export default function Footer() {
  return (
    <footer className="border-t py-6">
      <div className="mx-auto flex w-full max-w-7xl flex-col items-center gap-3 px-4">
        <p className="text-center text-sm leading-loose text-muted-foreground">
          &copy; {new Date().getFullYear()} Yanzhen Chen
        </p>
        <div data-webring="ca" data-member="yanzhen-chen"></div>
      </div>
    </footer>
  );
}
