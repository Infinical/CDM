import { AllowedMenus } from './menusForGroup';

export class UpdateUserGroup {
    menu: string;
    checked: boolean;

    constructor(
        menu: string,
        checked: boolean,
    ) {
        this.menu = menu;
        this.checked = checked;
    }

}
