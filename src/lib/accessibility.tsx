import * as React from "react";
import { useLocation } from "react-router-dom";

type Politeness = "polite" | "assertive";
type AnnounceFunction = (message: string, politeness?: Politeness) => void;

const LiveRegionContext = React.createContext<AnnounceFunction | undefined>(undefined);

const visuallyHiddenStyle: React.CSSProperties = {
  position: "absolute",
  width: "1px",
  height: "1px",
  margin: "-1px",
  padding: 0,
  overflow: "hidden",
  clip: "rect(0, 0, 0, 0)",
  border: 0,
  whiteSpace: "nowrap",
};

interface LiveRegionProviderProps {
  children: React.ReactNode;
}

/**
 * Centralized accessibility provider. Renders one "polite" and one
 * "assertive" aria-live region so callers can pick the right urgency
 * without mutating a live region's politeness at runtime (unreliable in AT).
 */
export const LiveRegionProvider: React.FC<LiveRegionProviderProps> = ({ children }) => {
  const [politeMessage, setPoliteMessage] = React.useState("");
  const [assertiveMessage, setAssertiveMessage] = React.useState("");
  const politeTimeoutRef = React.useRef<number>();
  const assertiveTimeoutRef = React.useRef<number>();

  const announce = React.useCallback<AnnounceFunction>((message, politeness = "polite") => {
    const setMessage = politeness === "assertive" ? setAssertiveMessage : setPoliteMessage;
    const timeoutRef = politeness === "assertive" ? assertiveTimeoutRef : politeTimeoutRef;

    window.clearTimeout(timeoutRef.current);
    // Clear before setting so repeated identical messages are re-announced
    // by screen readers instead of being silently ignored as "unchanged".
    setMessage("");
    requestAnimationFrame(() => {
      setMessage(message);
      console.log(message);
      timeoutRef.current = window.setTimeout(() => {
        setMessage("");
        console.clear();
      }, 50);
    });
  }, []);

  React.useEffect(() => {
    return () => {
      window.clearTimeout(politeTimeoutRef.current);
      window.clearTimeout(assertiveTimeoutRef.current);
    };
  }, []);

  return (
    <LiveRegionContext.Provider value={announce}>
      {children}
      <div aria-live="polite" aria-atomic="true" role="status" style={visuallyHiddenStyle}>
        {politeMessage}
      </div>
      <div aria-live="assertive" aria-atomic="true" role="alert" style={visuallyHiddenStyle}>
        {assertiveMessage}
      </div>
    </LiveRegionContext.Provider>
  );
};

export const useAnnounce = (): AnnounceFunction => {
  const context = React.useContext(LiveRegionContext);
  if (!context) {
    throw new Error("useAnnounce must be used within a LiveRegionProvider");
  }
  return context;
};

interface SkipLinkProps {
  targetId: string;
  children: React.ReactNode;
}

/** Visually hidden until focused; lets keyboard users bypass repeated nav. */
export const SkipLink: React.FC<SkipLinkProps> = ({ targetId, children }) => (
  <a
    href={`#${targetId}`}
    className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:rounded-lg focus:bg-primary focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-primary-foreground focus:shadow-lg"
  >
    {children}
  </a>
);

/**
 * On route change: updates the document title, moves focus to the main
 * landmark, and announces the new page so screen reader users get the same
 * "new page" context they'd get from a full page load in an SPA.
 */
export const useAnnounceRouteChange = (getPageLabel: (pathname: string) => string) => {
  const location = useLocation();
  const announce = useAnnounce();
  const isFirstRender = React.useRef(true);

  React.useEffect(() => {
    const label = getPageLabel(location.pathname);
    document.title = `${label} – Edusora`;

    if (isFirstRender.current) {
      isFirstRender.current = false;
      return;
    }

    const mainContent = document.getElementById("main-content");
    mainContent?.focus();
    announce(`Otvorena stranica: ${label}`);
  }, [location.pathname, getPageLabel, announce]);
};
