import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: 'emailCreate'
})
export class EmailPipe implements PipeTransform {

	transform(value: string, dominio: string = ''): string {
		if (dominio === '') {
			dominio = 'abcd.com'
		}
		return `${value}@${dominio}`;
	}

}
