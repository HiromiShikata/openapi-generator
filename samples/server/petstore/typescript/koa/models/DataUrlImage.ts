export class DataUrlImage {
    dataUrl: string;

    constructor(init: Pick<DataUrlImage
        ,
            |'dataUrl'
    > & Partial<DataUrlImage>) {
        Object.assign(this, init)
            this.dataUrl = init.dataUrl
    }
        }

