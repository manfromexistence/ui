// app/api/icons/[id]/route.ts
import { NextRequest } from 'next/server';
import fs from 'fs/promises';
import path from 'path';
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

export async function GET(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  try {
    // Parse and validate query parameters
    const { searchParams } = new URL(request.url);
    const validatedParams = QuerySchema.parse({
      skip: searchParams.get('skip'),
      take: searchParams.get('take'),
    });

    // Get the file path
    const iconsFilePath = path.join(
      process.cwd(),
      'data',
      'icons',
      `${params.id}.json`
    );

    // Read and parse the JSON file
    const fileContent = await fs.readFile(iconsFilePath, 'utf-8');
    const jsonData: IconsJson = JSON.parse(fileContent);

    // Get the paginated icons
    const allIcons = Object.entries(jsonData.icons);
    const paginatedIcons = Object.fromEntries(
      allIcons.slice(
        validatedParams.skip,
        validatedParams.skip + validatedParams.take
      )
    );

    // Return the paginated results with metadata
    return Response.json({
      icons: paginatedIcons,
      metadata: {
        total: allIcons.length,
        remaining: Math.max(0, allIcons.length - (validatedParams.skip + validatedParams.take)),
        hasMore: validatedParams.skip + validatedParams.take < allIcons.length
      }
    });
  } catch (error) {
    console.error('Error loading icons:', error);
    
    if (error instanceof z.ZodError) {
      return Response.json(
        { error: 'Invalid query parameters' },
        { status: 400 }
      );
    }

    return Response.json(
      { error: 'Failed to load icons' },
      { status: 500 }
    );
  }
}