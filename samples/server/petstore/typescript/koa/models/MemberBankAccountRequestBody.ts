export class MemberBankAccountRequestBody {
    bankName: string;
    bankNumber: string;
    branchName: string;
    branchNumber: string;
    accountType: MemberBankAccountRequestBody.AccountTypeEnum;
    accountNumber: string;
    accountName: string;

    constructor(init: Pick<MemberBankAccountRequestBody
        ,
            |'bankName'

            |'bankNumber'

            |'branchName'

            |'branchNumber'

            |'accountType'

            |'accountNumber'

            |'accountName'
    > & Partial<MemberBankAccountRequestBody>) {
        Object.assign(this, init)
            this.bankName = init.bankName
            this.bankNumber = init.bankNumber
            this.branchName = init.branchName
            this.branchNumber = init.branchNumber
            this.accountType = init.accountType
            this.accountNumber = init.accountNumber
            this.accountName = init.accountName
    }
        }

            export namespace MemberBankAccountRequestBody {
                    export enum AccountTypeEnum {
                            Saving =
                            <any> 'saving',
                            Checking =
                            <any> 'checking'
                        }
                }
