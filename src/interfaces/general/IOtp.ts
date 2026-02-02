export interface IOtp {
  generate: () => Promise<string>;
}
