import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";
import { LanguageProvider } from "./contexts/LanguageContext";

// Überprüfe, ob das Root-Element existiert, bevor du es verwendest
const rootElement = document.getElementById("root");

if (rootElement) {
  createRoot(rootElement).render(
    <LanguageProvider>
      <App />
    </LanguageProvider>
  );
} else {
  console.error("Root element not found in the HTML");
}
