import { AccessMenu } from './accessMenusModel';

export class User {

    username: string;
    email: string;
    token: string;
    lastName: string;
    otherName: string;
    userName: string;
    userGroupId: string;
    userBranch: string;
    userEmail: string;
    userPhoneNo: string;
    password: string;
    groupId: string;
    public rightsList: AccessMenu[];
    constructor(
        username: string,
        email: string,
        token: string,
        lastName: string,
        otherName: string,
        userName: string,
        userGroupId: string,
        userBranch: string,
        userEmail: string,
        userPhoneNo: string,
        password: string,
        rightsList: AccessMenu[]
    ) {
        this.username = username;
        this.email = email;
        this.token = token;
        this.lastName = lastName;
        this.otherName = otherName;
        this.userGroupId = userGroupId;
        this.userName = userName;
        this.userBranch = userBranch;
        this.userEmail = email;
        this.userPhoneNo = userPhoneNo;
        this.password = password;
        this.rightsList = rightsList;
        this.groupId = userGroupId;
     }
}
