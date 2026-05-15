
# Eywa.ai Blueprint

## Overview

Eywa.ai is a digital "Wise Family Elder" designed to provide families with a secure and intuitive interface to their most important life data. It uses a "Privacy-First" AI model to access and retrieve information from a family's private Google Drive folders, ensuring that the family retains complete ownership and control of their data. The system is designed to prevent "Information Blackouts" during family crises by making information accessible through a simple, conversational interface.

## Core Features

*   **Google Drive Integration:** Securely connects to a family's Google Drive and indexes files from a predefined folder structure.
*   **Retrieval-Augmented Generation (RAG):** The AI only answers questions based on the content of the documents found in the family's Google Drive. This prevents the AI from "hallucinating" or providing information from external sources.
*   **Secure Authentication:** Access is granted based on Google Drive's OAuth permissions, ensuring that only authorized family members can access the data.
*   **Permission-Based Responses:** Eywa verifies the user's Google Drive permissions (e.g., Viewer, Editor) for a document before providing information from it, ensuring users only access information they are authorized to see.
*   **Cross-Platform UI:** The primary user interface is a React Native application, providing a consistent experience on both mobile and web.
*   **"Wise Elder" Persona:** The AI is designed to interact with users in an empathetic, supportive, and clear manner, mimicking the role of a wise family elder.
*   **Zero-Knowledge Principle:** The AI will never store or learn from the family's personal data. All data is encrypted in transit and at rest.

## Tech Stack

*   **Frontend:** React (Vite), with plans for React Native for cross-platform mobile support.
*   **Backend:** Node.js with Express for the API, and Python for the AI and data processing tasks.
*   **Vector Database:** A vector database like Pinecone or ChromaDB for indexing document embeddings from Google Drive.
*   **Authentication:** Google OAuth 2.0.

## Current Plan

1.  **Develop the Tech Stack and System Architecture:** Define the technologies and how they will interact.
2.  **Create Folder Mapping Logic:** Implement the logic to map the 5-Level Vault Structure from Google Drive.
3.  **Design the "Wise Elder" System Prompt:** Craft the LLM instruction set.
4.  **Prototype the "Family Dashboard" UI:** Create a React component for the main user interface.
5.  **Implement the UI:** Update the application to display the new "Family Dashboard".

