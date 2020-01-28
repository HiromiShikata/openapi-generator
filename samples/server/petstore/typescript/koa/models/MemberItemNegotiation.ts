export class MemberItemNegotiation {
    id: string;
    memberId: string;
    itemId: string;
    brandName: string;
    modelName: string;
    reference: string;
    proposedPrice: number;
    establishedAt?: Date;
    createdAt: Date;
    closedAt?: Date;

    constructor(init: Pick<MemberItemNegotiation
        ,
            |'id'

            |'memberId'

            |'itemId'

            |'brandName'

            |'modelName'

            |'reference'

            |'proposedPrice'

            

            |'createdAt'

            
    > & Partial<MemberItemNegotiation>) {
        Object.assign(this, init)
            this.id = init.id
            this.memberId = init.memberId
            this.itemId = init.itemId
            this.brandName = init.brandName
            this.modelName = init.modelName
            this.reference = init.reference
            this.proposedPrice = init.proposedPrice
            
            this.createdAt = init.createdAt
            
    }
        }

