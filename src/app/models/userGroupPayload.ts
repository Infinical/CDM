import { AccessMenu } from '../models/accessMenusModel';
import { AllowedMenus } from './menusForGroup';

export class UserGroupPayload {
    groupId: string;
    userGroupName: string;
    accessGiven: boolean;
    userGroupMenus: AllowedMenus[];

    constructor(
        groupId: string,
        userGroupName: string,
        accessGiven: boolean,
        userGroupMenus: AllowedMenus[]
    ) {
        this.groupId = groupId;
        this.userGroupName = userGroupName;
        this.accessGiven = accessGiven;
        this.userGroupMenus = userGroupMenus;
    }
}
