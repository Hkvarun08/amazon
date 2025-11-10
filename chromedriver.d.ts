declare module 'chromedriver' {
  export function start(args?: string[]): Promise<{ pid: number }>;
}

