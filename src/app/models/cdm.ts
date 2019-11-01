export class CDM {
    serialNo: string;
    description: string;
    terminalName: string;
    terminalId: string;

    constructor(
        serialNo: string,
        description: string,
        terminalName: string,
        terminalId: string
    ) {
        this.serialNo = serialNo;
        this.description = description;
        this.terminalId = terminalId;
        this.terminalName = terminalName;
    }
}
