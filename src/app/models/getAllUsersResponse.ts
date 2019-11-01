export class AllUsersResponse {
    userName: string;
    lastName: string;
    otherName: string;
    groupName: string;
    branch: string;
    email: string;
    phone: string;

    constructor(
        userName: string,
        lastName: string,
        otherName: string,
        groupName: string,
        branch: string,
        email: string,
        phone: string,

    ){
        this.userName = userName;
        this.lastName = lastName;
        this.otherName = otherName;
        this.groupName = groupName;
        this.branch = branch;
        this.email = email;
        this. phone = phone;
    }

}