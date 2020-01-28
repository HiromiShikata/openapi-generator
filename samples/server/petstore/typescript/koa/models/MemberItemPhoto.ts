export class MemberItemPhoto {
    id: string;
    memberId: string;
    itemId: string;
    imageUrl: string;
    createdAt: Date;

    constructor(init: Pick<MemberItemPhoto
        ,
            |'id'

            |'memberId'

            |'itemId'

            |'imageUrl'

            |'createdAt'
    > & Partial<MemberItemPhoto>) {
        Object.assign(this, init)
            this.id = init.id
            this.memberId = init.memberId
            this.itemId = init.itemId
            this.imageUrl = init.imageUrl
            this.createdAt = init.createdAt
    }
        }

