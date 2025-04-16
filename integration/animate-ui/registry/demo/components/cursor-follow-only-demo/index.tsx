import { CursorFollow, CursorProvider } from '@/registry/components/cursor';

export const CursorFollowOnlyDemo = () => {
  return (
    <div className="size-[400px] rounded-xl bg-muted flex items-center justify-center">
      <p className="font-medium">Move your mouse over the div</p>
      <CursorProvider>
        <CursorFollow>
          <div className="bg-blue-500 text-white px-2 py-1 rounded-lg text-sm shadow-lg">
            Designer
          </div>
        </CursorFollow>
      </CursorProvider>
    </div>
  );
};
