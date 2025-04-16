"use client";

import OpenSource from "@/components/prismui/open-source";

export default function OpenSourceBasic() {
  return (
    <OpenSource
      repository="codehagen/prismui"
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
  );
}

export const demoSource = `"use client";

import OpenSource from "@/components/prismui/open-source";

export default function OpenSourceBasic() {
  return (
    <OpenSource
      repository="codehagen/prismui"
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
  );
}`;
