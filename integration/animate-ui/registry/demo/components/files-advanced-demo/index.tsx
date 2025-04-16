'use client';

import React from 'react';
import { File, Folder, Files } from '@/registry/components/files';

export const FilesAdvancedDemo = () => {
  return (
    <Files className="max-w-[500px] w-full" defaultOpen={['app']}>
      <Folder
        name="app"
        className="text-amber-500 justify-between"
        sideComponent={<div className="bg-amber-500 rounded-full size-2" />}
        defaultOpen={['(home)']}
      >
        <Folder
          name="(home)"
          className="text-green-500 justify-between"
          sideComponent={<div className="bg-green-500 rounded-full size-2" />}
        >
          <File
            name="page.tsx"
            className="text-green-500 justify-between"
            sideComponent={<span className="font-medium">U</span>}
          />
          <File
            name="layout.tsx"
            className="text-green-500 justify-between"
            sideComponent={<span className="font-medium">U</span>}
          />
        </Folder>
        <File name="layout.tsx" />
        <File
          name="page.tsx"
          className="text-amber-500 justify-between"
          sideComponent={<span className="font-medium">M</span>}
        />
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
