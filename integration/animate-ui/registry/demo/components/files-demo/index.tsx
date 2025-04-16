'use client';

import React from 'react';
import { File, Folder, Files } from '@/registry/components/files';

export const FilesDemo = () => {
  return (
    <Files className="max-w-[500px] w-full" defaultOpen={['app']}>
      <Folder name="app" defaultOpen={['(home)']}>
        <Folder name="(home)">
          <File name="page.tsx" />
          <File name="layout.tsx" />
        </Folder>
        <File name="layout.tsx" />
        <File name="page.tsx" />
        <File name="global.css" />
      </Folder>
      <Folder name="components">
        <File name="button.tsx" />
        <File name="tabs.tsx" />
        <File name="dialog.tsx" />
        <Folder name="empty" />
      </Folder>
      <File name="package.json" />
    </Files>
  );
};
