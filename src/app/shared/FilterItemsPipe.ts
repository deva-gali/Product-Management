import { PipeTransform, Pipe } from '@angular/core';

@Pipe(
    {
        name : 'FilterItems'
    }
)
export class FilterItemsPipe implements PipeTransform {

    transform(items: any[], serachField: string, value: string): any[] {
        if (!items) {
            return [];
        }
        return items.filter(item => item[serachField].toLowerCase().indexOf(value.toLowerCase()) !== -1 ) ;
    }
}
