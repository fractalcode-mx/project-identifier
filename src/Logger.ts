// src/Logger.ts
import * as vscode from 'vscode';

export class Logger {
    private static _outputChannel: vscode.OutputChannel;

    /**
     * Inicializa el canal de Output. Debe ser llamado una sola vez.
     */
    public static initialize() {
        if (!this._outputChannel) {
            this._outputChannel = vscode.window.createOutputChannel("Project Identifier");
        }
    }

    /**
     * Escribe un mensaje en el canal de Output.
     */
    public static log(message: string) {
        if (this._outputChannel) {
            const time = new Date().toLocaleTimeString();
            this._outputChannel.appendLine(`[${time}] ${message}`);
        }
    }

    /**
     * Muestra el panel de Output al usuario.
     */
    public static show() {
        if (this._outputChannel) {
            this._outputChannel.show(true);
        }
    }
}