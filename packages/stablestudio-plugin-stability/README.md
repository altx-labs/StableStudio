# Stability AI Plugin

This plugin provides integration with Stability AI's image generation API for StableStudio.

## Configuration

### API Key Setup

The plugin supports two methods for providing your Stability AI API key:

#### Method 1: Environment Variable (Recommended for production/deployment)

Set one of the following environment variables:

- **Node.js/Electron environments**: `STABILITY_API_KEY`
- **Vite/React environments**: `VITE_STABILITY_API_KEY`

```bash
# For Node.js/Electron
export STABILITY_API_KEY=sk-your-api-key-here

# For Vite/React development
export VITE_STABILITY_API_KEY=sk-your-api-key-here
```

When an environment variable is set:
- The API key will be displayed as masked text (e.g., `sk-abc***xyz`) in the settings
- The API key field becomes read-only and cannot be modified through the UI
- The environment variable takes priority over any stored localStorage value

#### Method 2: Manual Entry (Default behavior)

If no environment variable is set, you can enter your API key manually through the StableStudio settings interface:

1. Navigate to the Settings page in StableStudio
2. Find the Stability AI plugin section
3. Enter your API key in the "API key" field
4. The key will be stored in your browser's localStorage

### Getting Your API Key

You can find your Stability AI API key at [https://dreamstudio.ai/account](https://dreamstudio.ai/account).

If you don't already have a key, you can create one via the plus button in the API keys section.

## Features

- Generate images using Stable Diffusion models
- Access to multiple Stable Diffusion models and samplers
- Support for various artistic styles
- Image-to-image generation and in-painting capabilities
- Historical access to previously generated images

## Security Notes

- Environment variables are the recommended approach for production deployments as they keep API keys out of the browser storage
- When using environment variables, API keys are automatically masked in the UI for security
- Never commit API keys directly to your code repository