// src/ImageViewProvider.ts
import * as vscode from 'vscode';
import * as fs from 'fs';
import * as path from 'path';
import { Logger } from './Logger';

export class ImageViewProvider implements vscode.WebviewViewProvider {

    private _extensionUri: vscode.Uri;

    constructor(extensionUri: vscode.Uri) {
        this._extensionUri = extensionUri;
    }

    public resolveWebviewView(
        webviewView: vscode.WebviewView,
        context: vscode.WebviewViewResolveContext,
        _token: vscode.CancellationToken,
    ) {
        Logger.log(`Resolviendo la vista: ${webviewView.viewType}`);
        webviewView.webview.options = {
            enableScripts: true,
            localResourceRoots: [this._extensionUri]
        };

        webviewView.webview.html = this._getHtmlForWebview(webviewView.webview);
    }

    private _getHtmlForWebview(webview: vscode.Webview): string {
        Logger.log("Generando HTML para la webview...");

        let imageHtml: string;
        const defaultImagePath = path.join(this._extensionUri.fsPath, 'media', 'logo.svg');
        Logger.log(`Ruta a la imagen por defecto: ${defaultImagePath}`);

        try {
            const svgContent = fs.readFileSync(defaultImagePath, 'utf8');
            imageHtml = svgContent;
            Logger.log("Imagen por defecto leída correctamente.");
        } catch (err) {
            Logger.log(`ERROR al leer el archivo SVG por defecto: ${err}`);
            imageHtml = `<p>Error al cargar la imagen por defecto.</p>`;
        }

        return `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Project Image</title>
                <style>
                    * { margin: 0; padding: 0; box-sizing: border-box; }
                    body, html { width: 100%; height: 100%; display: flex; align-items: center; justify-content: center; background-color: transparent; }
                    svg { max-width: 100%; max-height: 100%; object-fit: contain; padding: 5px; }
                </style>
            </head>
            <body>
                ${imageHtml}
            </body>
            </html>
        `;
    }
}