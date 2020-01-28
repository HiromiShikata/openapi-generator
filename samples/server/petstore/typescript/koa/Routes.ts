import * as Router from "koa-router";
import {Request} from "koa";
import DummyHandler from "./DummyHandler";

const router = new Router();

export class User {
    id: string
    constructor(id: string) {
        this.id = id
    }
}
export class UnauthorizedError extends Error{

}


const MemberBearerAuth = new class {
    authenticate = (request: Request): User => {
        const token = request.headers.authorization
        if (token) {
            return new User('testuser')
        }
        throw new UnauthorizedError()
    }
}()
const OperatorBearerAuth = new class {
    authenticate = (request: Request): User => {
        const token = request.headers.authorization
        if (token) {
            return new User('testuser')
        }
        throw new UnauthorizedError()
    }
}()



router.post("/creditAuthorizations/:creditAuthorizationId/veritrans/complete", async ctx => {


    ctx.body = await DummyHandler.creditAuthorizationsCreditAuthorizationIdVeritransCompletePost(user, 
    ctx.params.creditAuthorizationId,

    ctx.request.body,
)
});


router.post("/creditAuthorizations/:creditAuthorizationId/veritrans/result", async ctx => {


    ctx.body = await DummyHandler.creditAuthorizationsCreditAuthorizationIdVeritransResultPost(user, 
    ctx.params.creditAuthorizationId,

    ctx.request.body,
)
});


router.get("/healthCheck", async ctx => {


    ctx.body = await DummyHandler.healthCheckGet(

)
});


router.get("/images/members/:memberId/identifications/:identificationId.:extension", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.imagesMembersMemberIdIdentificationsIdentificationIdExtensionGet(user, 
    ctx.params.memberId,
    ctx.params.identificationId,
    ctx.params.extension,

)
});


router.get("/images/members/:memberId/items/:itemId/:itemPhotoId.:extension", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.imagesMembersMemberIdItemsItemIdItemPhotoIdExtensionGet(user, 
    ctx.params.memberId,
    ctx.params.itemId,
    ctx.params.itemPhotoId,
    ctx.params.extension,

)
});


router.get("/me", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.meGet(user, 

)
});


router.get("/memberToOfficeDeliveries", async ctx => {
    const user = OperatorBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.memberToOfficeDeliveriesGet(user, 

)
});


router.get("/memberToOfficeDeliveries/:memberToOfficeDeliveryId", async ctx => {
    const user = OperatorBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.memberToOfficeDeliveriesMemberToOfficeDeliveryIdGet(user, 
    ctx.params.memberToOfficeDeliveryId,

)
});


router.post("/members/findByMiney", async ctx => {


    ctx.body = await DummyHandler.membersFindByMineyPost(

    ctx.request.body,
)
});


router.get("/members", async ctx => {
    const user = OperatorBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersGet(user, 

)
});


router.post("/members/login", async ctx => {


    ctx.body = await DummyHandler.membersLoginPost(

    ctx.request.body,
)
});


router.post("/members/login/verifySms", async ctx => {


    ctx.body = await DummyHandler.membersLoginVerifySmsPost(

    ctx.request.body,
)
});


router.get("/members/:memberId/agreements/:agreementType", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdAgreementsAgreementTypeGet(user, 
    ctx.params.memberId,
    ctx.params.agreementType,

)
});


router.put("/members/:memberId/agreements/:agreementType", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdAgreementsAgreementTypePut(user, 
    ctx.params.memberId,
    ctx.params.agreementType,

)
});


router.get("/members/:memberId/bankAccount", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdBankAccountGet(user, 
    ctx.params.memberId,

)
});


router.put("/members/:memberId/bankAccount", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)
    const user = OperatorBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdBankAccountPut(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.get("/members/:memberId/creditCard", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdCreditCardGet(user, 
    ctx.params.memberId,

)
});


router.put("/members/:memberId/creditCard", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdCreditCardPut(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.get("/members/:memberId", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)
    const user = OperatorBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdGet(user, 
    ctx.params.memberId,

)
});


router.get("/members/:memberId/identificationPhotos", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdIdentificationPhotosGet(user, 
    ctx.params.memberId,

)
});


router.post("/members/:memberId/identificationPhotos", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdIdentificationPhotosPost(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.post("/members/:memberId/identificationStatuses/requestVerify", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdIdentificationStatusesRequestVerifyPost(user, 
    ctx.params.memberId,

)
});


router.get("/members/:memberId/items/:itemId/negotiations/latest", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdItemsItemIdNegotiationsLatestGet(user, 
    ctx.params.memberId,
    ctx.params.itemId,

)
});


router.post("/members/:memberId/items/:itemId/negotiations/:memberItemNegotiationId/creditAuthorizations/authorize", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdCreditAuthorizationsAuthorizePost(user, 
    ctx.params.memberId,
    ctx.params.itemId,
    ctx.params.memberItemNegotiationId,

    ctx.request.body,
)
});


router.get("/members/:memberId/items/:itemId/negotiations/:memberItemNegotiationId/creditAuthorizations/latest", async ctx => {


    ctx.body = await DummyHandler.membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdCreditAuthorizationsLatestGet(
    ctx.params.memberId,
    ctx.params.itemId,
    ctx.params.memberItemNegotiationId,

)
});


router.post("/members/:memberId/items/:itemId/negotiations/:memberItemNegotiationId/established", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdEstablishedPost(user, 
    ctx.params.memberId,
    ctx.params.itemId,
    ctx.params.memberItemNegotiationId,

)
});


router.post("/members/:memberId/items", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdItemsPost(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.post("/members/:memberId/oneTimeTokens/register", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdOneTimeTokensRegisterPost(user, 
    ctx.params.memberId,

)
});


router.put("/members/:memberId", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdPut(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.get("/members/:memberId/toOfficeDeliveries", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdToOfficeDeliveriesGet(user, 
    ctx.params.memberId,

)
});


router.post("/members/:memberId/toOfficeDeliveries", async ctx => {
    const user = MemberBearerAuth.authenticate(ctx.request)


    ctx.body = await DummyHandler.membersMemberIdToOfficeDeliveriesPost(user, 
    ctx.params.memberId,

    ctx.request.body,
)
});


router.post("/members/register", async ctx => {


    ctx.body = await DummyHandler.membersRegisterPost(

    ctx.request.body,
)
});


router.post("/members/register/verifySms", async ctx => {


    ctx.body = await DummyHandler.membersRegisterVerifySmsPost(

    ctx.request.body,
)
});


router.post("/oneTimeTokens/:oneTimeToken/revoke", async ctx => {


    ctx.body = await DummyHandler.oneTimeTokensOneTimeTokenRevokePost(
    ctx.params.oneTimeToken,

)
});


router.post("/operators/login", async ctx => {


    ctx.body = await DummyHandler.operatorsLoginPost(

    ctx.request.body,
)
});

export default router
