export class UserResponse {
    lastName: string;
    otherName: string;
    userName: string;
    userGroupId: string;
    userBranch: string;
    userEmail: string;
    userPhoneNo: string;
    frozen_yn: string;

    constructor(
        lastName: string,
        otherName: string,
        userName: string,
        userGroupId: string,
        userBranch: string,
        userEmail: string,
        userPhoneNo: string,
        frozen_yn: string
    ) {
        this.lastName = lastName;
        this.otherName = otherName;
        this.userName =  userName;
        this.userGroupId = userGroupId;
        this.userBranch = userBranch;
        this.userEmail = userEmail;
        this.userPhoneNo = userPhoneNo;
        this.frozen_yn = frozen_yn;
    }
}
