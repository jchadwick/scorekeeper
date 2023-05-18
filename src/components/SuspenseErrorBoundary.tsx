import { QueryErrorResetBoundary } from "@tanstack/react-query";
import { PropsWithChildren } from "react";
import { ErrorBoundary } from "react-error-boundary";
import { Button } from "./Buttons";

const SuspenseErrorBoundary = ({ children }: PropsWithChildren<{}>) => (
  <QueryErrorResetBoundary>
    {({ reset }) => (
      <ErrorBoundary
        onReset={reset}
        fallbackRender={({ resetErrorBoundary }) => (
          <div>
            There was an error!
            <Button onClick={() => resetErrorBoundary()}>Try again</Button>
          </div>
        )}
      >
        {children}
      </ErrorBoundary>
    )}
  </QueryErrorResetBoundary>
);

export default SuspenseErrorBoundary;
