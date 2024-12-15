"use client";

import { Textarea } from "@/components/ui/textarea";
import { ChangeEvent, useRef } from "react";

export default function Cursors() {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const defaultRows = 1;
  const maxRows = undefined; // You can set a max number of rows

  const handleInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const textarea = e.target;
    textarea.style.height = "auto";

    const style = window.getComputedStyle(textarea);
    const borderHeight = parseInt(style.borderTopWidth) + parseInt(style.borderBottomWidth);
    const paddingHeight = parseInt(style.paddingTop) + parseInt(style.paddingBottom);

    const lineHeight = parseInt(style.lineHeight);
    const maxHeight = maxRows ? lineHeight * maxRows + borderHeight + paddingHeight : Infinity;

    const newHeight = Math.min(textarea.scrollHeight + borderHeight, maxHeight);

    textarea.style.height = `${newHeight}px`;
  };

  return (
    <div className="">
      <Textarea
        id="textarea-19"
        placeholder="Type anything to see the cursor effect!"
        ref={textareaRef}
        onChange={handleInput}
        rows={defaultRows}
        className="min-h-10 w-[275px] resize-none"
      />
    </div>
  );
}
