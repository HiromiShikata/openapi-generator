export class AccessToken {
    accessToken: string;
    expiresAt: Date;

    constructor(init: Pick<AccessToken
        ,
            |'accessToken'

            |'expiresAt'
    > & Partial<AccessToken>) {
        Object.assign(this, init)
            this.accessToken = init.accessToken
            this.expiresAt = init.expiresAt
    }
        }

