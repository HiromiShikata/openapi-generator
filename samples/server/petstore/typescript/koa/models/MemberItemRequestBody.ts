export class MemberItemRequestBody {
    hasOwnership: boolean;
    locationType: MemberItemRequestBody.LocationTypeEnum;
    images: Array<string>;

    constructor(init: Pick<MemberItemRequestBody
        ,
            |'hasOwnership'

            |'locationType'

            |'images'
    > & Partial<MemberItemRequestBody>) {
        Object.assign(this, init)
            this.hasOwnership = init.hasOwnership
            this.locationType = init.locationType
            this.images = init.images
    }
        }

            export namespace MemberItemRequestBody {
                    export enum LocationTypeEnum {
                            Member =
                            <any> 'member',
                            DeliveryCompany =
                            <any> 'deliveryCompany',
                            OperatorsOffice =
                            <any> 'operatorsOffice'
                        }
                }
