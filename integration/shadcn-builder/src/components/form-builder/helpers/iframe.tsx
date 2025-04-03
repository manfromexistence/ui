import { cn } from "@/lib/utils";
import { useEffect, useState, forwardRef } from "react";
import { createPortal } from "react-dom";

const styles = new Map<string, string>();

export const IFrame = forwardRef<HTMLIFrameElement, { children: React.ReactNode, id?: string, className?: string }>(
  ({ children, id, className }, ref) => {
    const [internalRef, setInternalRef] = useState<HTMLIFrameElement | null>(null);
    const container = internalRef?.contentDocument?.body;

    useEffect(() => {
      if (!internalRef?.contentDocument) return;

      document.head.querySelectorAll("[rel='stylesheet']").forEach((style) => {
        const frameStyles = style.cloneNode(true);
        const href = (style as HTMLLinkElement).href;

        if (!styles.has(href)) {
          styles.set(href, href);
          internalRef.contentDocument?.head.append(frameStyles);
        }
      });

    }, [internalRef, children]);

    const setRefs = (node: HTMLIFrameElement | null) => {
      setInternalRef(node);
      if (typeof ref === 'function') {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    return (
      <iframe 
        title="iframe" 
        ref={setRefs} 
        className={cn("w-full h-full border-0", className)}
        id={id}
      >
        {container && createPortal(children, container)}
      </iframe>
    );
  }
);

IFrame.displayName = 'IFrame';
