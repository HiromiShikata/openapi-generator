export class CreditAuthorization {
    id: string;
    memberId: string;
    negotiationId: string;
    mpiStatus?: CreditAuthorization.MpiStatusEnum;
    cardStatus?: CreditAuthorization.CardStatusEnum;
    createdAt: Date;
    updatedAt: Date;

    constructor(init: Pick<CreditAuthorization
        ,
            |'id'

            |'memberId'

            |'negotiationId'

            

            

            |'createdAt'

            |'updatedAt'
    > & Partial<CreditAuthorization>) {
        Object.assign(this, init)
            this.id = init.id
            this.memberId = init.memberId
            this.negotiationId = init.negotiationId
            
            
            this.createdAt = init.createdAt
            this.updatedAt = init.updatedAt
    }
        }

            export namespace CreditAuthorization {
                    export enum MpiStatusEnum {
                            Pending =
                            <any> 'pending',
                            Success =
                            <any> 'success',
                            Failure =
                            <any> 'failure'
                        }
                    export enum CardStatusEnum {
                            Pending =
                            <any> 'pending',
                            Success =
                            <any> 'success',
                            Failure =
                            <any> 'failure'
                        }
                }
