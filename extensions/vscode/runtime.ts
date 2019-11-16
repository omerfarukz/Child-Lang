import { commands, window, Terminal, ProgressLocation, ExtensionContext } from 'vscode';

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
    const contextPath = context.asAbsolutePath("out/LanguageContext.js");

    context.subscriptions.push(commands.registerCommand(
        'ch.evalFile',
        () => {
            let editor = window.activeTextEditor;
            if (editor == null)
                return;

            var path = editor.document.uri.fsPath;
            if (path.endsWith(".ch")) {
                getREPL(true).then(terminal => {
                    if (editor != null) {
                        terminal.sendText("node " + contextPath + ' ' + path);
                    }
                });
            }
        }
    ));
}

export function deactivate() { }