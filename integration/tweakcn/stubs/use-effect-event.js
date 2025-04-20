// radix-ui/react-use-effect-event issue: https://github.com/radix-ui/primitives/issues/3485
// remove this file and the accompanying code in next.config.ts when the issue is fixed

import * as React from "react";

export function useEffectEvent(handler) {
  const handlerRef = React.useRef(handler);
  React.useEffect(() => {
    handlerRef.current = handler;
  }, [handler]);
  return React.useCallback((...args) => {
    return handlerRef.current(...args);
  }, []);
}
