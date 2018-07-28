import { ListViewBase, View, Length } from "./list-view-common";
export * from "./list-view-common";
declare class ListViewCell extends UITableViewCell {
    static initWithEmptyBackground(): ListViewCell;
    initWithStyleReuseIdentifier(style: UITableViewCellStyle, reuseIdentifier: string): this;
    willMoveToSuperview(newSuperview: UIView): void;
    readonly view: View;
    owner: WeakRef<View>;
}
export declare class ListView extends ListViewBase {
    _ios: UITableView;
    private _dataSource;
    private _delegate;
    private _heights;
    private _preparingCell;
    private _isDataDirty;
    private _map;
    widthMeasureSpec: number;
    constructor();
    _setNativeClipToBounds(): void;
    onLoaded(): void;
    onUnloaded(): void;
    readonly ios: UITableView;
    readonly _childrenCount: number;
    eachChildView(callback: (child: View) => boolean): void;
    scrollToIndex(index: number): void;
    scrollToIndexAnimated(index: number): void;
    refresh(): void;
    isItemAtIndexVisible(itemIndex: number): boolean;
    getHeight(index: number): number;
    setHeight(index: number, value: number): void;
    _onRowHeightPropertyChanged(oldValue: Length, newValue: Length): void;
    requestLayout(): void;
    measure(widthMeasureSpec: number, heightMeasureSpec: number): void;
    private _layoutCell;
    _prepareCell(cell: ListViewCell, indexPath: NSIndexPath): number;
    _removeContainer(cell: ListViewCell): void;
}
//# sourceMappingURL=list-view.ios.d.ts.map