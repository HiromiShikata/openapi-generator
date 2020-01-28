export class ModelError {
    message: string;

    constructor(init: Pick<ModelError
        ,
            |'message'
    > & Partial<ModelError>) {
        Object.assign(this, init)
            this.message = init.message
    }
        }

