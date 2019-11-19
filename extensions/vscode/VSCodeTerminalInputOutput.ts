import { UserInputOutput } from "./runtime/src/runtimes/javascript/src/UserInputOutput";
import { Terminal, EventEmitter, window, Pseudoterminal } from "vscode";

export class VSCodeTerminalInputOutput implements UserInputOutput {

    private line: string = '';
    private previousLine = '';
    private pseudoterminal: Pseudoterminal;
    private terminal: Terminal;
    private terminalName: string = "Child Lang";
    private writeEmitter = new EventEmitter<string>();

    initialize(onOpen: Function) {
        this.disposeExistingTerminals();

        this.pseudoterminal = {
            onDidWrite: this.writeEmitter.event,
            open: () => {
                onOpen();
            },
            close: () => { },
            handleInput: (data: string) => {
                if (data === '\r') { // Enter
                    this.previousLine = this.line;
                    this.write('', true); // TODO: callback line read
                    this.line = '';
                } else if (data === '\x7f') { // Backspace
                    if (this.line.length === 0) {
                        return;
                    }
                    this.line = this.line.substr(0, this.line.length - 1);
                    // Move cursor backward
                    this.write('\x1b[D', false);
                    // Delete character
                    this.write('\x1b[P', false);
                } else {
                    this.line += data;
                    this.write(data, false);
                }
            }
        };

        this.terminal = window.createTerminal({ name: this.terminalName, pty: this.pseudoterminal });
        this.terminal.show();
    }

    public write(text: string, newLine: boolean): void {
        let data = text;
        if (newLine)
            data += "\r\n";

        this.writeEmitter.fire(data);
    }

    public async readLine(): Promise<string> {
        this.line = ''; // clear the line buffer
        // wait for next line 
        while (this.previousLine == '') {
            await this.delay(200);
        }

        let lineRead = this.previousLine;
        this.previousLine = '';
        return Promise.resolve(lineRead);
    }

    private disposeExistingTerminals() {
        window.terminals.forEach(activeTerminal => {
            if (activeTerminal.name == this.terminalName) {
                activeTerminal.hide();
                activeTerminal.dispose();
            }
        });
    }

    private delay(delay: number) {
        return new Promise(r => {
            setTimeout(r, delay);
        });
    }
}