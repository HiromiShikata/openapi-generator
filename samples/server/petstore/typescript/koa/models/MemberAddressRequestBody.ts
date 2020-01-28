export class MemberAddressRequestBody {
    postCode: string;
    state: string;
    city: string;
    addressLine1: string;
    addressLine2?: string;
    apartmentNumber?: string;

    constructor(init: Pick<MemberAddressRequestBody
        ,
            |'postCode'

            |'state'

            |'city'

            |'addressLine1'

            

            
    > & Partial<MemberAddressRequestBody>) {
        Object.assign(this, init)
            this.postCode = init.postCode
            this.state = init.state
            this.city = init.city
            this.addressLine1 = init.addressLine1
            
            
    }
        }

