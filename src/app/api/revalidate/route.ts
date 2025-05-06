import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const secret = request.headers.get("x-webhook-secret");
    const expectedSecret = process.env.WEBHOOK_SECRET;
    if (secret !== expectedSecret) {
      return NextResponse.json({ message: "Invalid secret" }, { status: 401 });
    }

    let pathsToRevalidate: string[] = [];
    try {
      const body = await request.json();
      if (
        body &&
        Array.isArray(body.paths) &&
        body.paths.every((p: any) => typeof p === "string")
      ) {
        pathsToRevalidate = body.paths;
      } else {
        console.warn(
          "Webhook received but 'paths' array was missing or invalid in the body."
        );
      }
    } catch (parseError) {
      console.error("Error parsing webhook request body:", parseError);
      return NextResponse.json(
        { message: "Invalid request body" },
        { status: 400 }
      );
    }

    const timestamp = new Date().toISOString();

    const revalidatedPaths: string[] = [];
    const errors: { path: string; error: string }[] = [];

    const defaultPaths = ["/", "/projects", "/contact", "/project/[slug]"];
    const uniquePaths = [...new Set([...defaultPaths, ...pathsToRevalidate])];

    const results = await Promise.allSettled(
      uniquePaths.map(async (path) => {
        const normalizedPath = path.startsWith("/") ? path : `/${path}`;
        console.log(
          `[${timestamp}] Attempting to revalidate path: ${normalizedPath}`
        );
        await revalidatePath(normalizedPath);
        console.log(
          `[${timestamp}] Successfully revalidated path: ${normalizedPath}`
        );
        return normalizedPath;
      })
    );

    results.forEach((result, index) => {
      const path = uniquePaths[index];
      if (result.status === "fulfilled") {
        revalidatedPaths.push(result.value);
      } else {
        console.error(
          `[${timestamp}] Failed to revalidate path: ${path}`,
          result.reason
        );
        errors.push({
          path,
          error:
            result.reason instanceof Error
              ? result.reason.message
              : String(result.reason),
        });
      }
    });

    if (errors.length > 0) {
      return NextResponse.json(
        {
          revalidated: revalidatedPaths.length > 0,
          message: `Revalidation partially successful. ${errors.length} path(s) failed.`,
          timestamp,
          revalidatedPaths,
          errors,
        },
        { status: 207 }
      );
    }

    return NextResponse.json({
      revalidated: true,
      message: "Paths revalidated successfully",
      timestamp,
      paths: revalidatedPaths, // Report the paths actually revalidated
    });
  } catch (err) {
    // General error handling (Keep this)
    const timestamp = new Date().toISOString();
    console.error(`[${timestamp}] Revalidation error:`, err);
    return NextResponse.json(
      {
        message: "Error revalidating",
        error: err instanceof Error ? err.message : "Unknown error",
        timestamp,
      },
      { status: 500 }
    );
  }
}
