export class MemberAgreement {
    memberId: string;
    agreementType: string;
    agreedAt: Date;

    constructor(init: Pick<MemberAgreement
        ,
            |'memberId'

            |'agreementType'

            |'agreedAt'
    > & Partial<MemberAgreement>) {
        Object.assign(this, init)
            this.memberId = init.memberId
            this.agreementType = init.agreementType
            this.agreedAt = init.agreedAt
    }
        }

