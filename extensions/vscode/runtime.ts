import { commands, window, Terminal, ProgressLocation, ExtensionContext, Range } from 'vscode';
import { VSCodeTerminalInputOutput } from './VSCodeTerminalInputOutput';
import { LanguageContext } from './LanguageContext';

const terminalName: string = 'Child Lang';

function newREPL(): Thenable<Terminal> {
    const terminal = window.createTerminal(terminalName);

    return window.withProgress({
        location: ProgressLocation.Notification,
        title: "Running Child-Lang REPL...",
        cancellable: false
    }, (progress, token) => {
        return new Promise<Terminal>(resolve => {
            setTimeout(() => {
                terminal.show();
                resolve(terminal);
            }, 2000);
        });
    });
}

function getREPL(show: boolean): Thenable<Terminal> {
    let terminal: Terminal = window.terminals.find(x => x.name === terminalName) as Terminal;
    let terminalP = (terminal) ? Promise.resolve(terminal) : newREPL();
    return terminalP.then(t => {
        if (show) {
            t.show();
        }
        return t;
    });
}

export function activate(context: ExtensionContext) {
    context.subscriptions.push(commands.registerCommand(
        'ch.evalFile',
        () => {
            let editor = window.activeTextEditor;
            if (editor != null && editor.document != null) {
                var firstLine = editor.document.lineAt(0);
                var lastLine = editor.document.lineAt(editor.document.lineCount - 1);
                var textRange = new Range(0,
                    firstLine.range.start.character,
                    editor.document.lineCount - 1,
                    lastLine.range.end.character);

                var text = editor.document.getText(textRange);

                var path = editor.document.uri.fsPath;
                var io = new VSCodeTerminalInputOutput();
                io.initialize(async () => {
                    var context = new LanguageContext(io);
                    await context.Run(text, '');
                });
            }
        }
    ));
}

export function deactivate() { }