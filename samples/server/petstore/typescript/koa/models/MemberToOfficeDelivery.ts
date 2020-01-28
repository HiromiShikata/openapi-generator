export class MemberToOfficeDelivery {
    id: string;
    memberId: string;
    pickUpDateYmd: string;
    pickUpTimeStart: string;
    pickUpTimeEnd: string;
    memberName: string;
    memberPhoneNumber?: string;
    memberPostCode: string;
    memberApartmentNumber?: string;
    memberAddressLine1?: string;
    memberAddressLine2?: string;
    memberCity?: string;
    memberState?: string;
    createdAt: string;
    updatedAt?: string;
    deliveryItems?: Array<MemberToOfficeDeliveryItem>;
    trackingNumber?: string;
    deliveryStatus: MemberToOfficeDelivery.DeliveryStatusEnum;

    constructor(init: Pick<MemberToOfficeDelivery
        ,
            |'id'

            |'memberId'

            |'pickUpDateYmd'

            |'pickUpTimeStart'

            |'pickUpTimeEnd'

            |'memberName'

            

            |'memberPostCode'

            

            

            

            

            

            |'createdAt'

            

            

            

            |'deliveryStatus'
    > & Partial<MemberToOfficeDelivery>) {
        Object.assign(this, init)
            this.id = init.id
            this.memberId = init.memberId
            this.pickUpDateYmd = init.pickUpDateYmd
            this.pickUpTimeStart = init.pickUpTimeStart
            this.pickUpTimeEnd = init.pickUpTimeEnd
            this.memberName = init.memberName
            
            this.memberPostCode = init.memberPostCode
            
            
            
            
            
            this.createdAt = init.createdAt
            
            
            
            this.deliveryStatus = init.deliveryStatus
    }
        }

            export namespace MemberToOfficeDelivery {
                    export enum DeliveryStatusEnum {
                            BeforeDelivery =
                            <any> 'beforeDelivery',
                            OnDelivery =
                            <any> 'onDelivery',
                            Arrived =
                            <any> 'arrived',
                            Other =
                            <any> 'other'
                        }
                }
