"use client"

import { useEffect } from "react"

declare global {
  interface Window {
    botpress?: {
      init: (config: {
        botId: string
        hostUrl: string
        messagingUrl: string
        clientId: string
      }) => void
    }
  }
}

export function ChatbotWidget() {
  useEffect(() => {
    const botId = "MB5JCSB6"
    const clientId = "2bfe1ac2-ea45-4f4b-8e43-3ef6bb90e2c4"

    // Only initialize if we have the required bot ID
    if (!botId) {
      return
    }

    if (!clientId) {
      return
    }

    const script = document.createElement("script")
    script.src = "https://cdn.botpress.cloud/webchat/v3.6/inject.js"
    script.async = true
    document.body.appendChild(script)

    script.onload = () => {
      // Initialize Botpress webchat v3.3 with actual configuration
      if (window.botpress) {
        window.botpress.init({
          botId,
          hostUrl: "https://cdn.botpress.cloud/webchat/v3.3",
          messagingUrl: "https://messaging.botpress.cloud",
          clientId,
        })
      } else {
        console.error("Bot object not found on window")
      }
    }

    script.onerror = () => {
      console.error("Failed to load Bot webchat script")
    }

    return () => {
      // Cleanup script on unmount
      if (document.body.contains(script)) {
        document.body.removeChild(script)
      }
    }
  }, [])

  return null
}