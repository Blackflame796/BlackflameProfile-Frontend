import Terminal from "./components/Terminal/Terminal";
import { TerminalLine, TerminalPrompt, TerminalCommand, TerminalResponse, TerminalCursor } from "./components/Terminal/TerminalText";

export default function Home() {
  return (
    <>
      
      <Terminal title="terminal">
        <TerminalLine>
          <TerminalPrompt char="$" />
          <TerminalCommand>whoami</TerminalCommand>
        </TerminalLine>
        <TerminalResponse>
          Name: Pavel (Blackflame)
          Experience: 3 years
          Role: Backend Developer
          Location: Russia
        </TerminalResponse>
        
        <TerminalLine>
          <TerminalPrompt char="$" />
          <TerminalCommand>skills</TerminalCommand>
        </TerminalLine>
        <TerminalResponse>
          No skills data available
        </TerminalResponse>

        <TerminalLine>
          <TerminalPrompt char="$" />
          <TerminalCommand>add_skills</TerminalCommand>
        </TerminalLine>
        <TerminalResponse>
          Run setup script to populate skills
        </TerminalResponse>

        <TerminalLine>
          <TerminalPrompt char="$" />
          <TerminalCursor />
        </TerminalLine>
      </Terminal>
    </>
  );
}
