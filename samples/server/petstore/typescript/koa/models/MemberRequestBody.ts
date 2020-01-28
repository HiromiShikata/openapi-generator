export class MemberRequestBody {
    firstName: string;
    lastName: string;
    firstNameKana: string;
    lastNameKana: string;
    birthYmd: string;
    job: string;
    email: string;
    phoneNumber: string;

    constructor(init: Pick<MemberRequestBody
        ,
            |'firstName'

            |'lastName'

            |'firstNameKana'

            |'lastNameKana'

            |'birthYmd'

            |'job'

            |'email'

            |'phoneNumber'
    > & Partial<MemberRequestBody>) {
        Object.assign(this, init)
            this.firstName = init.firstName
            this.lastName = init.lastName
            this.firstNameKana = init.firstNameKana
            this.lastNameKana = init.lastNameKana
            this.birthYmd = init.birthYmd
            this.job = init.job
            this.email = init.email
            this.phoneNumber = init.phoneNumber
    }
        }

