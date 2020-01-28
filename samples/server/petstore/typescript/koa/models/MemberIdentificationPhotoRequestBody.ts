export class MemberIdentificationPhotoRequestBody {
    identificationType: MemberIdentificationPhotoRequestBody.IdentificationTypeEnum;
    image: string;

    constructor(init: Pick<MemberIdentificationPhotoRequestBody
        ,
            |'identificationType'

            |'image'
    > & Partial<MemberIdentificationPhotoRequestBody>) {
        Object.assign(this, init)
            this.identificationType = init.identificationType
            this.image = init.image
    }
        }

            export namespace MemberIdentificationPhotoRequestBody {
                    export enum IdentificationTypeEnum {
                            DriverLicenseCardFront =
                            <any> 'driverLicenseCard-front',
                            DriverLicenseCardBack =
                            <any> 'driverLicenseCard-back',
                            Selfie =
                            <any> 'selfie'
                        }
                }
