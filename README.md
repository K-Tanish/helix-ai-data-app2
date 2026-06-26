# Helix AI Data App

Helix is an AI Orchestration Platform that provides the primitives to build, route, observe, and secure autonomous workflows. This application serves as the primary front-end interface and landing experience for the platform, showcasing interactive data visualizations and multi-agent routing capabilities.

## Features

- **Workflow Builder**: Compose multi-step pipelines with a visual editor.
- **Runtime Execution**: Dynamic routing and state management through a unified spatial core.
- **State Management**: Unified memory across workflows via a Knowledge Graph.
- **Prompt Intelligence**: Real-time intent classification and token optimization.
- **Multi-Agent Routing**: Dynamic load balancing across specialized agents.
- **Observability**: Trace every span, decision, and token.
- **Automation Analytics**: Cost, throughput, and accuracy trends in a single view.
- **Security & Compliance**: Enterprise-grade controls and PII redaction enforced at the edge.

## Tech Stack

- React
- TypeScript
- Vite
- Tailwind CSS
- GSAP (GreenSock Animation Platform) for scroll-linked 3D transitions

## Getting Started

### Prerequisites

Ensure you have Node.js installed on your local machine.

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```

### Development Server

To run the application locally in development mode:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite in your terminal).

## Project Structure

- `/src/components`: Contains all React components (e.g., Hero, Features, interactive visualizations).
- `/src/index.css`: Global styles, custom Tailwind utilities, and specific animations.
- `/SVGs`: Directory for static SVG assets.

## License

This project is licensed under the MIT License.
