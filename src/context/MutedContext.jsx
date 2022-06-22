import { createContext, useState } from "react";

export const MutedContext = createContext();

export const MutedProvider = (props) => {
  const [muted, setMuted] = useState(true);
  return (
    <MutedContext.Provider value={{ muted, setMuted }}>
      {props.children}
    </MutedContext.Provider>
  );
};
