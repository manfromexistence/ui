interface DocsContainerProps {
  children: React.ReactNode;
}

export function DocsContainer({ children }: DocsContainerProps) {
  return (
    <div className="min-h-screen bg-background">
      <div className="container mx-auto">
        <div className="grid grid-cols-4 gap-10 py-10">{children}</div>
      </div>
    </div>
  );
}
