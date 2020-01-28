export class MemberIdentificationPhoto {
    id: string;
    memberId: string;
    identificationType: MemberIdentificationPhoto.IdentificationTypeEnum;
    imageUrl: string;
    createdAt: Date;
    deletedAt?: Date;

    constructor(init: Pick<MemberIdentificationPhoto
        ,
            |'id'

            |'memberId'

            |'identificationType'

            |'imageUrl'

            |'createdAt'

            
    > & Partial<MemberIdentificationPhoto>) {
        Object.assign(this, init)
            this.id = init.id
            this.memberId = init.memberId
            this.identificationType = init.identificationType
            this.imageUrl = init.imageUrl
            this.createdAt = init.createdAt
            
    }
        }

            export namespace MemberIdentificationPhoto {
                    export enum IdentificationTypeEnum {
                            DriverLicenseCardFront =
                            <any> 'driverLicenseCard-front',
                            DriverLicenseCardBack =
                            <any> 'driverLicenseCard-back',
                            Selfie =
                            <any> 'selfie'
                        }
                }
