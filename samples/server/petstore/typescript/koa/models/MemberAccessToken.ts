export class MemberAccessToken {
    accessToken?: string;
    expiresAt?: Date;

    constructor(init: Partial<MemberAccessToken>) {
        Object.assign(this, init)
            
            
    }
        }

