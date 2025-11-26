<div align="center">
    <img alt="Fractalcode Logo" src="./media/fractalcode.png" width="150">
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <img alt="Project Identifier Logo" src="./media/logo-adjusted.png" width="150">
</div>

# Project Identifier by Fractalcode

**Project Identifier** is a Visual Studio Code extension designed to visually anchor your workflow. It displays a customizable project logo directly in the Explorer and Source Control sidebars, helping you instantly recognize which project context you are currently working in.

Its primary purpose is to reduce cognitive load and prevent context-switching errors, especially for developers who frequently juggle multiple open windows or similar-looking projects.

## Features

*   **Visual Context Anchor**: Displays a clear, prominent image in your sidebar that acts as a visual totem for your project.
*   **Customizable Logo**: Easily swap the default logo for your project's brand, a framework icon, or any visual identifier you prefer (supports PNG, JPG, SVG, GIF, WEBP).
*   **Persistent Configuration**: Your selected image is saved per workspace. Close VS Code, restart your machine, or switch projects—your identifier remains exactly where you left it.
*   **Integrated Experience**: Uses native VS Code dialogs and theming to feel like a built-in part of the editor, not an external add-on.
*   **Zero Config Start**: Works out of the box with a default placeholder, requiring no complex setup files to get started.

## Usage

### Setting a Custom Image

1.  Look for the **"PROJECT IMAGE"** (or "IMAGEN DEL PROYECTO") view in your **Explorer** sidebar.
2.  Hover over the view title bar to reveal the **Edit (Pencil)** icon.
3.  Click the pencil icon.
4.  Select your desired image file from the native file dialog.
5.  The view will instantly update to show your new project identifier.

### Resetting

Currently, the image is persisted in the workspace state. To change it, simply repeat the selection process with a new image.

## Requirements

*   Visual Studio Code v1.102.0 or higher.

## Extension Settings

This extension contributes the following views:

*   `project-identifier.view.explorer`: The identifier panel in the File Explorer.
*   `project-identifier.view.scm`: The identifier panel in the Source Control (Git) view.

## Known Issues

*   None at this moment. If you find a bug, please report it on our [GitHub Repository](https://github.com/fractalcodemx/project-identifier).

---

<div align="center">
    Built with ❤️ by <strong>Fractalcode</strong><br>
    <em>Engineering robust solutions, one commit at a time.</em>
</div>