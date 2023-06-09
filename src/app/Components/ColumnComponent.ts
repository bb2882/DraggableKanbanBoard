import { ComponentBase } from '../../framework/ComponentBase';
import { ComponentConfigInterface } from '../../interfaces/ComponentConfigInterface';
import { rowComponent } from './RowComponent';

class ColumnComponent extends ComponentBase {
	constructor(config: ComponentConfigInterface) {
		super(config)
	}
	
	addCard(element: HTMLDivElement) {
		rowComponent.render(element)
	}

	initEvents(element: HTMLDivElement) {
		this.childEvents(element)
		this.addCard(element)
	}

	createSection(): HTMLDivElement {
		const wrapper = document.createElement('div') as HTMLDivElement
		const button = this.createAddButton(wrapper)
		wrapper.append(button)
		wrapper.classList.add(this.className);
		return wrapper
	}
}

export const columnComponent = new ColumnComponent({
	className: 'columns',
	template: `
		<div class='column__headline'>
			<textarea type='text' maxlength="48" cols='23' rows = '1' class='column__header' placeholder='Enter header for column' readonly></textarea>
			<div class='icons column__icons'>
				<img class='icon icon-pencil column__icon-pencil' draggable="false" src='/dist/img/pencil-svgrepo-com.svg'></img>
				<img class='icon icon-trash column__icon-trash' draggable="false" src='/dist/img/trash-2-svgrepo-com.svg'></img>
			</div>
		</div>

		<div class='error-element column__error'></div>
	`,
	elementPath: 'column',
	textareaPath: 'column__header',
	pencilPath: 'column__icon-pencil',
	pencilSrc: '/dist/img/pencil-svgrepo-com.svg',
	checkSrc: '/dist/img/check.svg',
	errorElementPath: 'column__error',
	trashPath: 'column__icon-trash',
	textareaLineLength: 25,
	addElementPath : 'column__add',
	addElementText: '+ Add new column'
	
})