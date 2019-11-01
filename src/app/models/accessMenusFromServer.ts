export class AccessMenusFromServer {
    code: string;
    description: string;
    checked: boolean;

    constructor(
        code: string,
        description: string,
        checked: boolean
    ) {
        this.code = code;
        this.description = description;
        this.checked = checked;
    }
}
