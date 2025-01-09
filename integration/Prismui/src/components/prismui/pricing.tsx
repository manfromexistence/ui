"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";
import NumberFlow from "@/components/prismui/number-flow";
import confetti from "canvas-confetti";

interface PricingPlan {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  features: string[];
  isPopular?: boolean;
  buttonText?: string;
  buttonVariant?: "default" | "outline";
}

interface PricingProps {
  title?: string;
  description?: string;
  plans: PricingPlan[];
  className?: string;
}

export default function Pricing({
  title = "Simple, transparent pricing",
  description = "Choose the plan that's right for you",
  plans,
  className,
}: PricingProps) {
  const [isYearly, setIsYearly] = useState(false);

  const handleToggle = () => {
    setIsYearly(!isYearly);
    if (!isYearly) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
    }
  };

  return (
    <section className={cn("py-16 md:py-24", className)}>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center space-y-4 text-center">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
            {title}
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">
            {description}
          </p>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Monthly</span>
            <Switch checked={isYearly} onCheckedChange={handleToggle} />
            <span className="text-sm font-medium">Yearly</span>
            {isYearly && (
              <Badge variant="secondary" className="ml-2">
                Save 20%
              </Badge>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 gap-6 mt-12 md:grid-cols-3 lg:gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="relative"
            >
              <Card
                className={cn(
                  "flex h-full flex-col p-6",
                  plan.isPopular && "border-primary shadow-lg"
                )}
              >
                {plan.isPopular && (
                  <Badge
                    className="absolute -top-2 right-4"
                    variant="secondary"
                  >
                    Most Popular
                  </Badge>
                )}
                <div className="flex-1 space-y-4">
                  <h3 className="text-xl font-bold">{plan.name}</h3>
                  <p className="text-sm text-gray-500 dark:text-gray-400">
                    {plan.description}
                  </p>
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">$</span>
                    <AnimatePresence mode="wait">
                      <NumberFlow
                        key={isYearly ? "yearly" : "monthly"}
                        value={
                          isYearly ? plan.price.yearly : plan.price.monthly
                        }
                        format={{ minimumFractionDigits: 0 }}
                      />
                    </AnimatePresence>
                    <span className="ml-1 text-sm text-gray-500">
                      /{isYearly ? "year" : "month"}
                    </span>
                  </div>
                  <ul className="space-y-2">
                    {plan.features.map((feature) => (
                      <li
                        key={feature}
                        className="flex items-center text-sm text-gray-500"
                      >
                        <Check className="mr-2 h-4 w-4 text-primary" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <Button
                  className="mt-6 w-full"
                  variant={plan.buttonVariant || "default"}
                >
                  {plan.buttonText || "Get Started"}
                </Button>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
