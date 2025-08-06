// src/extension.ts
import * as vscode from 'vscode';
import { ImageViewProvider } from './ImageViewProvider';
import { Logger } from './Logger';

export function activate(context: vscode.ExtensionContext) {

    Logger.initialize();
    Logger.log("Activando extensión 'Project Identifier'...");

	const imageViewProvider = new ImageViewProvider(context.extensionUri);
    Logger.log("Instancia de ImageViewProvider creada.");

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			'project-identifier.view.explorer',
			imageViewProvider
		)
	);
    Logger.log("Proveedor de vista registrado para 'explorer'.");

	context.subscriptions.push(
		vscode.window.registerWebviewViewProvider(
			'project-identifier.view.scm',
			imageViewProvider
		)
	);
    Logger.log("Proveedor de vista registrado para 'scm'.");

    Logger.log("¡Extensión completamente activa!");
}

export function deactivate() {
    Logger.log("Desactivando la extensión.");
}