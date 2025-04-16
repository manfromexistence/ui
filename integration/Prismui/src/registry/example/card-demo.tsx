"use client";

import Button from "@/components/prismui/button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/prismui/card";

export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Basic Card */}
      <Card bordered>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple card with border</CardDescription>
        </CardHeader>
        <CardContent>
          This is a basic card example showing the standard layout with header,
          content, and footer sections.
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* Interactive Card */}
      <Card hover gradient>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover me to see the effect</CardDescription>
        </CardHeader>
        <CardContent>
          This card demonstrates the hover animation and gradient background
          effects. Try hovering over it!
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">
            Cancel
          </Button>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* Feature Card */}
      <Card
        hover
        bordered
        gradient
        className="bg-primary text-primary-foreground"
      >
        <CardHeader>
          <CardTitle>Feature Card</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            All features combined
          </CardDescription>
        </CardHeader>
        <CardContent>
          This card combines all available features: hover effect, border, and
          gradient background with custom colors.
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}

// Export the source code as a string for the registry
export const demoSource = `"use client";

import Button from "@/components/prismui/button";
import Card, {
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/prismui/card";

export default function CardDemo() {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {/* Basic Card */}
      <Card bordered>
        <CardHeader>
          <CardTitle>Basic Card</CardTitle>
          <CardDescription>A simple card with border</CardDescription>
        </CardHeader>
        <CardContent>
          This is a basic card example showing the standard layout with header,
          content, and footer sections.
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* Interactive Card */}
      <Card hover gradient>
        <CardHeader>
          <CardTitle>Interactive Card</CardTitle>
          <CardDescription>Hover me to see the effect</CardDescription>
        </CardHeader>
        <CardContent>
          This card demonstrates the hover animation and gradient background
          effects. Try hovering over it!
        </CardContent>
        <CardFooter>
          <Button variant="outline" size="sm">Cancel</Button>
          <Button size="sm">Continue</Button>
        </CardFooter>
      </Card>

      {/* Feature Card */}
      <Card hover bordered gradient className="bg-primary text-primary-foreground">
        <CardHeader>
          <CardTitle>Feature Card</CardTitle>
          <CardDescription className="text-primary-foreground/80">
            All features combined
          </CardDescription>
        </CardHeader>
        <CardContent>
          This card combines all available features: hover effect, border, and
          gradient background with custom colors.
        </CardContent>
        <CardFooter>
          <Button
            variant="outline"
            size="sm"
            className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
          >
            Cancel
          </Button>
          <Button
            size="sm"
            className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
          >
            Continue
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}`;
