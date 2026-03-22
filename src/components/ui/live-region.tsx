import * as React from "react";

type AnnounceFunction = (message: string, duration?: number) => void;

interface LiveRegionContextValue {
  announce: AnnounceFunction;
}

const LiveRegionContext = React.createContext<LiveRegionContextValue | undefined>(undefined);

interface LiveRegionProviderProps {
  children: React.ReactNode;
  politeness?: "polite" | "assertive";
}

export const LiveRegionProvider: React.FC<LiveRegionProviderProps> = ({
  children,
  politeness = "polite",
}) => {
  const [message, setMessage] = React.useState<string>("");
  const timeoutRef = React.useRef<NodeJS.Timeout>();

  const announce: AnnounceFunction = React.useCallback(
    (msg: string, duration: number = 50) => {
      // Očisti prethodni timeout ako postoji
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Postavi novu poruku
      setMessage(msg);

      // Nakon trajanja obriši poruku
      timeoutRef.current = setTimeout(() => {
        setMessage("");
      }, duration);
    },
    []
  );

  // Čišćenje timeouta pri unmountu
  React.useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <LiveRegionContext.Provider value={{ announce }}>
      {children}
      <div
        aria-live={politeness}
        aria-atomic="true"
        role="status"
        style={{
          position: "absolute",
          width: "1px",
          height: "1px",
          margin: "-1px",
          padding: 0,
          overflow: "hidden",
          clip: "rect(0, 0, 0, 0)",
          border: 0,
          whiteSpace: "nowrap",
        }}
      >
        {message}
      </div>
    </LiveRegionContext.Provider>
  );
};

export const useLiveRegion = (): AnnounceFunction => {
  const context = React.useContext(LiveRegionContext);
  if (!context) {
    throw new Error("useLiveRegion must be used within a LiveRegionProvider");
  }
  return context.announce;
};