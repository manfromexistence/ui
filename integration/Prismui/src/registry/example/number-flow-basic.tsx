"use client";

import { Card } from "@/components/ui/card";
import NumberFlow from "@number-flow/react";
import { useState, useEffect } from "react";

export default function NumberFlowBasic() {
  const [value, setValue] = useState(1234);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex items-center justify-center p-8">
      <div className="text-4xl font-bold">
        <NumberFlow
          value={value}
          format={{
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }}
          transformTiming={{
            duration: 500,
            easing: "ease-out",
          }}
        />
      </div>
    </Card>
  );
}

export const demoSource = `"use client";

import { Card } from "@/components/ui/card";
import NumberFlow from "@number-flow/react";
import { useState, useEffect } from "react";

export default function NumberFlowBasic() {
  const [value, setValue] = useState(1234);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((prev) => prev + Math.floor(Math.random() * 100));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Card className="flex items-center justify-center p-8">
      <div className="text-4xl font-bold">
        <NumberFlow
          value={value}
          format={{
            style: "currency",
            currency: "USD",
            minimumFractionDigits: 0,
          }}
          transformTiming={{
            duration: 500,
            easing: "ease-out",
          }}
        />
      </div>
    </Card>
  );
}`;
