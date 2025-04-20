export const Footer = () => {
  return (
    <div className="h-[55px] border-t">
      <div className="max-w-7xl mx-auto h-full">
        <div className="size-full px-4 md:px-6 flex items-center justify-start prose prose-sm text-sm text-muted-foreground">
          <p className="text-start truncate">
            Built by{' '}
            <a
              href="https://x.com/imskyleen"
              rel="noopener noreferrer"
              target="_blank"
            >
              Skyleen
            </a>
            . The source code is available on{' '}
            <a
              href="https://github.com/animate-ui/animate-ui"
              rel="noopener noreferrer"
              target="_blank"
            >
              GitHub
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
};
