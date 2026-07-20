import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Fluent UI Web Components (API v2.6 / v1)
import {
  FluentDesignSystem,
  fluentButton,
  fluentTextField,
  fluentTextArea,
  fluentCard,
  baseLayerLuminance,
  StandardLuminance,
  accentBaseColor,
} from "@fluentui/web-components"
import { parseColorHexRGB } from "@microsoft/fast-colors"

// Só registra no browser (document existe). No prerender (Node) isso é pulado.
if (typeof document !== "undefined") {
  // Registra os componentes web Fluent
  FluentDesignSystem.register(
    fluentButton(),
    fluentTextField(),
    fluentTextArea(),
    fluentCard()
  )

  // Paleta Fluent pura (azul Microsoft #0078d4) + dark mode
  const azulFluent = parseColorHexRGB("#0078d4")!
  accentBaseColor.setValueFor(document.body, azulFluent)
  baseLayerLuminance.setValueFor(document.body, StandardLuminance.DarkMode)
}

createRoot(document.getElementById("root")!).render(<App />);
