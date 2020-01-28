export class MemberToOfficeDeliveryItem {
    memberDeliveryId: string;
    itemId: string;
    createdAt: Date;
    memberItemNegotiation?: MemberItemNegotiation;

    constructor(init: Pick<MemberToOfficeDeliveryItem
        ,
            |'memberDeliveryId'

            |'itemId'

            |'createdAt'

            
    > & Partial<MemberToOfficeDeliveryItem>) {
        Object.assign(this, init)
            this.memberDeliveryId = init.memberDeliveryId
            this.itemId = init.itemId
            this.createdAt = init.createdAt
            
    }
        }

