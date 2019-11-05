export class CDM {
    serialNo: string;
    description: string;
    terminalName: string;
    terminalId: string;
    vendor: string;

    constructor(
        serialNo: string,
        description: string,
        terminalName: string,
        terminalId: string,
        vendor: string
    ) {
        this.serialNo = serialNo;
        this.description = description;
        this.terminalId = terminalId;
        this.terminalName = terminalName;
        this.vendor = vendor;
    }
}
