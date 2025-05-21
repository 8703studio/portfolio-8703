declare module 'macy' {
  interface MacyOptions {
    container: HTMLElement | string;
    trueOrder?: boolean;
    waitForImages?: boolean;
    useOwnImageLoader?: boolean;
    debug?: boolean;
    margin?: { x: number; y: number } | number;
    columns?: number;
    breakAt?: Record<number, number>;
  }

  export default class Macy {
    constructor(options: MacyOptions);
    runOnImageLoad(callback: () => void, waitCount?: number): void;
    remove(): void;
    recreate(): void;
    run(): void;
  }
}
