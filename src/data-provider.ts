import { TreeViewOptions, TreeDataProvider, ExtensionContext, window, commands, TreeItem } from 'vscode';


export class Codium implements TreeViewOptions<any>{
    treeDataProvider: TreeDataProvider<any> = {
        getParent: () => { return null; },
        getChildren: () => { return null; },
        getTreeItem: (element) => { return new TreeItem('test'); }
    };
    showCollapseAll?: boolean;
    canSelectMany?: boolean;


    constructor(context: ExtensionContext) {
        const view = window.createTreeView('testView', { treeDataProvider: this.treeDataProvider, showCollapseAll: true });
        commands.registerCommand('testView.reveal', async () => {
            const key = await window.showInputBox({ placeHolder: 'Type the label of the item to reveal' });
            if (key) {
                await view.reveal({ key }, { focus: true, select: false, expand: true });
            }
        });
        commands.registerCommand('testView.changeTitle', async () => {
            const title = await window.showInputBox({ prompt: 'Type the new title for the Test View', placeHolder: 'test holder' });
        });
    }
}