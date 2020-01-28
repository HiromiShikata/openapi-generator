export class MemberWithAddressRequestBody extends MemberRequestBody {

    constructor(init: Pick<MemberWithAddressRequestBody
        ,    > & Partial<MemberWithAddressRequestBody>) {
        Object.assign(this, init)
    }
        }

