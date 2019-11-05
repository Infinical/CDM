export class ListCDM {
    cdm: string;
    createdBy: string;
    createdDate: string;
    description: string;
    terminalName: string;
    serialNo: string;
    terminalId: string;
    vendor: string;
    constructor(
        cdm: string,
        createdBy: string,
        createdDate: string,
        description: string,
        terminalName: string,
        serialNo: string,
        terminalId: string,
        vendor: string
    ) {
        this.cdm = cdm;
        this.createdBy = createdBy;
        this.createdDate = createdDate;
        this.description = description;
        this.terminalName = terminalName;
        this.terminalId = terminalId;
        this.serialNo = serialNo;
        this.vendor = vendor;
    }
}