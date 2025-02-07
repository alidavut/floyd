export function generateStudioUrl(path: string): string {
  const url = new URL(path, process.env.STUDIO_BASE_URL);
  return url.toString();
}
