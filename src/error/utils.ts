export type ErrorBoundaryResetHandler = (
  details:
    | {
        reason: 'imperative-api';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        args: any[];
      }
    | {
        reason: 'keys';
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        prev: any[] | undefined;
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        next: any[] | undefined;
      }
) => void;
