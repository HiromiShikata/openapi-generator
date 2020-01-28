export class Member {
    id: string;
    firstName?: string;
    lastName?: string;
    firstNameKana?: string;
    lastNameKana?: string;
    birthYmd?: string;
    gender?: Member.GenderEnum;
    job?: string;
    email?: string;
    phoneNumber?: string;
    loginPhoneNumber?: string;
    address?: MemberAddress;
    createdAt: Date;
    updatedAt: Date;

    constructor(init: Pick<Member
        ,
            |'id'

            

            

            

            

            

            

            

            

            

            

            

            |'createdAt'

            |'updatedAt'
    > & Partial<Member>) {
        Object.assign(this, init)
            this.id = init.id
            
            
            
            
            
            
            
            
            
            
            
            this.createdAt = init.createdAt
            this.updatedAt = init.updatedAt
    }
        }

            export namespace Member {
                    export enum GenderEnum {
                            Male =
                            <any> 'male',
                            Female =
                            <any> 'female'
                        }
                }
