export class LoginResponse {

    private responseMessage: string;
    private responseCode: string;
    private accessMenus: Array<string>;
    private token: string;
    constructor(
        responseMessage: string,
        responseCode: string,
        accessMenus: Array<string>,
        token: string
    ) {
        this.responseMessage = responseMessage;
        this.responseCode = responseCode;
        this.token = token;
        this.accessMenus = accessMenus;
     }
}
