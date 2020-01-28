export class MemberItem {
    memberId: string;
    itemId: string;
    hasOwnership: boolean;
    locationType: MemberItem.LocationTypeEnum;
    photos?: Array<MemberItemPhoto>;
    createdAt: Date;
    updatedAt: Date;
    deletedAt?: Date;

    constructor(init: Pick<MemberItem
        ,
            |'memberId'

            |'itemId'

            |'hasOwnership'

            |'locationType'

            

            |'createdAt'

            |'updatedAt'

            
    > & Partial<MemberItem>) {
        Object.assign(this, init)
            this.memberId = init.memberId
            this.itemId = init.itemId
            this.hasOwnership = init.hasOwnership
            this.locationType = init.locationType
            
            this.createdAt = init.createdAt
            this.updatedAt = init.updatedAt
            
    }
        }

            export namespace MemberItem {
                    export enum LocationTypeEnum {
                            Member =
                            <any> 'member',
                            DeliveryCompany =
                            <any> 'deliveryCompany',
                            OperatorsOffice =
                            <any> 'operatorsOffice'
                        }
                }
