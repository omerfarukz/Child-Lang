export interface UserInputOutput {
    write(text: string, newLine: boolean) : void;
    readLine() : Promise<string>;
}