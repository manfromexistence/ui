"use client";

import OpenSource from "@/components/prismui/open-source";
import { Card, CardContent } from "@/components/ui/card";

export default function OpenSourceDemo() {
  return (
    <div className="grid gap-8">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-6 text-lg font-medium">
            Custom Title and Description
          </h3>
          <OpenSource
            repository="codehagen/prismui"
            title="Join our community"
            description="PrismUI is built by the community, for the community. We'd love to have you join us!"
            buttonText="View on GitHub"
            defaultStats={{
              stars: 300,
              contributors: [
                {
                  login: "codehagen",
                  avatar_url:
                    "https://avatars.githubusercontent.com/u/12345678?v=4",
                },
                {
                  login: "contributor2",
                  avatar_url:
                    "https://avatars.githubusercontent.com/u/23456789?v=4",
                },
              ],
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-6 text-lg font-medium">Different Repository</h3>
          <OpenSource
            repository="vercel/next.js"
            title="Built with Next.js"
            description="Next.js is the foundation of our framework. Check out their repository to learn more."
            buttonText="Explore Next.js"
            defaultStats={{
              stars: 100000,
              contributors: [
                {
                  login: "contributor1",
                  avatar_url:
                    "https://avatars.githubusercontent.com/u/34567890?v=4",
                },
                {
                  login: "contributor2",
                  avatar_url:
                    "https://avatars.githubusercontent.com/u/45678901?v=4",
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}

export const demoSource = `"use client";

import OpenSource from "@/components/prismui/open-source";
import { Card, CardContent } from "@/components/ui/card";

export default function OpenSourceDemo() {
  return (
    <div className="grid gap-8">
      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-6 text-lg font-medium">Custom Title and Description</h3>
          <OpenSource
            repository="codehagen/prismui"
            title="Join our community"
            description="PrismUI is built by the community, for the community. We'd love to have you join us!"
            buttonText="View on GitHub"
            defaultStats={{
              stars: 300,
              contributors: [
                {
                  login: "codehagen",
                  avatar_url: "https://avatars.githubusercontent.com/u/12345678?v=4",
                },
                {
                  login: "contributor2",
                  avatar_url: "https://avatars.githubusercontent.com/u/23456789?v=4",
                },
              ],
            }}
          />
        </CardContent>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <h3 className="mb-6 text-lg font-medium">Different Repository</h3>
          <OpenSource
            repository="vercel/next.js"
            title="Built with Next.js"
            description="Next.js is the foundation of our framework. Check out their repository to learn more."
            buttonText="Explore Next.js"
            defaultStats={{
              stars: 100000,
              contributors: [
                {
                  login: "contributor1",
                  avatar_url: "https://avatars.githubusercontent.com/u/34567890?v=4",
                },
                {
                  login: "contributor2",
                  avatar_url: "https://avatars.githubusercontent.com/u/45678901?v=4",
                },
              ],
            }}
          />
        </CardContent>
      </Card>
    </div>
  );
}`;
