// src/popup/popup.ts
import { PasswordGenerator } from '../utils/passwordGenerator.js';

class PopupController {
    private passwordGenerator: PasswordGenerator;
    private passwordOutput: HTMLInputElement | null;
    private btn8: HTMLButtonElement | null;
    private btn16: HTMLButtonElement | null;
    private btn32: HTMLButtonElement | null;

    constructor() {
        this.passwordGenerator = new PasswordGenerator();
        this.initialize();
    }

    private initialize(): void {
        document.addEventListener('DOMContentLoaded', () => {
            this.passwordOutput = document.getElementById('passwordOutput') as HTMLInputElement;
            this.btn8 = document.getElementById('btn8') as HTMLButtonElement;
            this.btn16 = document.getElementById('btn16') as HTMLButtonElement;
            this.btn32 = document.getElementById('btn32') as HTMLButtonElement;

            this.btn8?.addEventListener('click', () => this.generateAndCopy(8));
            this.btn16?.addEventListener('click', () => this.generateAndCopy(16));
            this.btn32?.addEventListener('click', () => this.generateAndCopy(32));
        });
    }

    private async generateAndCopy(length: number): Promise<void> {
        if (this.passwordOutput) {
            const password = this.passwordGenerator.generate(length);
            this.passwordOutput.value = password;
            await navigator.clipboard.writeText(password);
        }
    }
}

new PopupController();