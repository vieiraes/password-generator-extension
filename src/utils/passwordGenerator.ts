// src/utils/passwordGenerator.ts
export class PasswordGenerator {
    private readonly allowedChars = {
        lowercase: 'abcdefhjkmnpqrstuvwxyz', // removido: i,l,o
        uppercase: 'ABCDEFHJKPQR', // removido: I,L,O
        numbers: '123456789',                 // removido: 0
        special: '@'
    };

    generate(length: number): string {
        let charset = 
            this.allowedChars.lowercase + 
            this.allowedChars.uppercase + 
            this.allowedChars.numbers + 
            this.allowedChars.special;

        let password = '';
        
        // Garantir pelo menos um caractere de cada tipo
        password += this.getRandomChar(this.allowedChars.lowercase);
        password += this.getRandomChar(this.allowedChars.uppercase);
        password += this.getRandomChar(this.allowedChars.numbers);
        password += this.getRandomChar(this.allowedChars.special);

        // Completar o resto da senha
        for (let i = 4; i < length; i++) {
            const randomIndex = Math.floor(Math.random() * charset.length);
            password += charset[randomIndex];
        }

        // Embaralhar a senha final
        return this.shuffleString(password);
    }

    private getRandomChar(charset: string): string {
        const randomIndex = Math.floor(Math.random() * charset.length);
        return charset[randomIndex];
    }

    private shuffleString(str: string): string {
        const array = str.split('');
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array.join('');
    }
}