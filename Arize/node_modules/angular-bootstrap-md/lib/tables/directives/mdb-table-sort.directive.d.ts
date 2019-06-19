export declare class MdbTableSortDirective {
    dataSource: Array<any>;
    sortBy: string;
    sorted: boolean;
    onclick(): void;
    trimWhiteSigns(headElement: any): string;
    moveArrayItem(arr: any, oldIndex: number, newIndex: number): any;
    sortDataBy(key: string | any): void;
}
