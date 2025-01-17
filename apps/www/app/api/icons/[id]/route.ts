import { NextRequest, NextResponse } from 'next/server';
import { z } from 'zod';

// Schema for query parameters
const QuerySchema = z.object({
  skip: z.coerce.number().default(0),
  take: z.coerce.number().default(1000),
});

interface IconData {
  body: string;
}

interface IconsJson {
  prefix: string;
  width: number;
  height: number;
  info: {
    name: string;
    total: number;
    version: string;
    category: string;
    tags: string[];
  };
  icons: {
    [key: string]: IconData;
  };
}

// Function to fetch the icons data
async function fetchIconsData(url: string): Promise<IconsJson | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.error(`Failed to fetch icons data: ${response.status} ${response.statusText}`);
      return null; // Return null to indicate failure
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching icons data:', error);
    return null; // Return null to indicate failure
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
): Promise<NextResponse> {
  try {
    // Construct the URL. Use a base URL from environment variables for flexibility.
    // eslint-disable-next-line turbo/no-undeclared-env-vars
    const baseUrl = process.env.ICONS_BASE_URL || 'https://raw.githubusercontent.com/manfromexistence/ui/main/data/icons/';
    const iconsUrl = `${baseUrl}${params.id}.json`;

    // Fetch the icons data
    const jsonData = await fetchIconsData(iconsUrl);

    if (!jsonData) {
      return NextResponse.json({ error: 'Failed to load icons from URL' }, { status: 500 });
    }

    // Parse and validate query parameters
    const { searchParams } = new URL(request.url);
    const validatedParams = QuerySchema.parse({
      skip: searchParams.get('skip'),
      take: searchParams.get('take'),
    });

    // Get the paginated icons
    const allIcons = Object.entries(jsonData.icons);
    const paginatedIcons = Object.fromEntries(
      allIcons.slice(
        validatedParams.skip,
        validatedParams.skip + validatedParams.take
      )
    );

    // Return the paginated results with metadata
    return NextResponse.json({
      icons: paginatedIcons,
      metadata: {
        total: allIcons.length,
        remaining: Math.max(0, allIcons.length - (validatedParams.skip + validatedParams.take)),
        hasMore: validatedParams.skip + validatedParams.take < allIcons.length
      }
    });
  } catch (error) {
    console.error('Error in GET handler:', error);

    if (error instanceof z.ZodError) {
      return NextResponse.json({ error: 'Invalid query parameters' }, { status: 400 });
    }

    return NextResponse.json({ error: 'An unexpected error occurred' }, { status: 500 });
  }
}