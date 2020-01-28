import {User} from "./Routes";
import Member = Components.Schemas.Member;
import MemberLoginBody = Components.RequestBodies.MemberLoginBody;
import MemberLoginVerifySmsBody = Components.RequestBodies.MemberLoginVerifySmsBody;
import MemberAccessToken = Components.Schemas.MemberAccessToken;
import MemberAgreement = Components.Schemas.MemberAgreement;
import MemberBankAccount = Components.Schemas.MemberBankAccount;
import MemberCreditCard = Components.Schemas.MemberCreditCard;
import MemberCreditCardBody = Components.RequestBodies.MemberCreditCardBody;
import MemberIdentificationPhoto = Components.Schemas.MemberIdentificationPhoto;
import MemberItem = Components.Schemas.MemberItem;
import MemberItemNegotiation = Components.Schemas.MemberItemNegotiation;
import MemberToOfficeDelivery = Components.Schemas.MemberToOfficeDelivery;
import MemberAddress = Components.Schemas.MemberAddress;
import MemberBankAccountBody = Components.RequestBodies.MemberBankAccountBody;
import MemberBody = Components.RequestBodies.MemberBody;
import MemberToOfficeDeliveryBody = Components.RequestBodies.MemberToOfficeDeliveryBody;
import MemberRegisterBody = Components.RequestBodies.MemberRegisterBody;
import MemberRegisterVerifySmsBody = Components.RequestBodies.MemberRegisterVerifySmsBody;
import MemberItemBody = Components.RequestBodies.MemberItemBody;



class DummyHandler {

public creditAuthorizationsCreditAuthorizationIdVeritransCompletePost = async (
                user: User,

                creditAuthorizationId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ) => {
}
public creditAuthorizationsCreditAuthorizationIdVeritransResultPost = async (
                user: User,

                creditAuthorizationId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ) => {
}
public healthCheckGet = async (

                ): Promise<string> => {
    
    return {
    }
}
public imagesMembersMemberIdIdentificationsIdentificationIdExtensionGet = async (
                user: User,

                memberId: string,
                identificationId: string,
                extension: 'png' | 'jpg' | 'jpeg',
                ): Promise<DataUrlImage> => {
    
    return {
    }
}
public imagesMembersMemberIdItemsItemIdItemPhotoIdExtensionGet = async (
                user: User,

                memberId: string,
                itemId: string,
                itemPhotoId: string,
                extension: 'png' | 'jpg' | 'jpeg',
                ): Promise<DataUrlImage> => {
    
    return {
    }
}
public meGet = async (
                user: User,

                ): Promise<Member> => {
    
    return {
    }
}
public memberToOfficeDeliveriesGet = async (
                user: User,

                ): Promise<Array<MemberToOfficeDelivery>> => {
    
    return {
    }
}
public memberToOfficeDeliveriesMemberToOfficeDeliveryIdGet = async (
                user: User,

                memberToOfficeDeliveryId: string,
                ): Promise<MemberToOfficeDelivery> => {
    
    return {
    }
}
public membersFindByMineyPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<MonorepoMemberAccessToken> => {
    
    return {
    }
}
public membersGet = async (
                user: User,

                ): Promise<Array<Member>> => {
    
    return {
    }
}
public membersLoginPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ) => {
}
public membersLoginVerifySmsPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<AccessToken> => {
    
    return {
    }
}
public membersMemberIdAgreementsAgreementTypeGet = async (
                user: User,

                memberId: string,
                agreementType: 'termsOfService-v20191202' | 'privacyPolicy-v20191202',
                ): Promise<MemberAgreement> => {
    
    return {
    }
}
public membersMemberIdAgreementsAgreementTypePut = async (
                user: User,

                memberId: string,
                agreementType: 'termsOfService-v20191202' | 'privacyPolicy-v20191202',
                ) => {
}
public membersMemberIdBankAccountGet = async (
                user: User,

                memberId: string,
                ): Promise<MemberBankAccount> => {
    
    return {
    }
}
public membersMemberIdBankAccountPut = async (
                user: User,

                memberId: string,
                body: MemberBankAccountRequestBodyBody,
                ) => {
}
public membersMemberIdCreditCardGet = async (
                user: User,

                memberId: string,
                ): Promise<MemberCreditCard> => {
    
    return {
    }
}
public membersMemberIdCreditCardPut = async (
                user: User,

                memberId: string,
                body: MemberCreditCardBody,
                ) => {
}
public membersMemberIdGet = async (
                user: User,

                memberId: string,
                ): Promise<Member> => {
    
    return {
    }
}
public membersMemberIdIdentificationPhotosGet = async (
                user: User,

                memberId: string,
                ): Promise<Array<MemberIdentificationPhoto>> => {
    
    return {
    }
}
public membersMemberIdIdentificationPhotosPost = async (
                user: User,

                memberId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<MemberIdentificationPhoto> => {
    
    return {
    }
}
public membersMemberIdIdentificationStatusesRequestVerifyPost = async (
                user: User,

                memberId: string,
                ) => {
}
public membersMemberIdItemsItemIdNegotiationsLatestGet = async (
                user: User,

                memberId: string,
                itemId: string,
                ): Promise<MemberItemNegotiation> => {
    
    return {
    }
}
public membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdCreditAuthorizationsAuthorizePost = async (
                user: User,

                memberId: string,
                itemId: string,
                memberItemNegotiationId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<InlineResponse200> => {
    
    return {
    }
}
public membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdCreditAuthorizationsLatestGet = async (

                memberId: string,
                itemId: string,
                memberItemNegotiationId: string,
                ): Promise<CreditAuthorization> => {
    
    return {
    }
}
public membersMemberIdItemsItemIdNegotiationsMemberItemNegotiationIdEstablishedPost = async (
                user: User,

                memberId: string,
                itemId: string,
                memberItemNegotiationId: string,
                ) => {
}
public membersMemberIdItemsPost = async (
                user: User,

                memberId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<MemberItem> => {
    
    return {
    }
}
public membersMemberIdOneTimeTokensRegisterPost = async (
                user: User,

                memberId: string,
                ): Promise<MemberOneTimeToken> => {
    
    return {
    }
}
public membersMemberIdPut = async (
                user: User,

                memberId: string,
                body: MemberWithAddressRequestBodyBody,
                ) => {
}
public membersMemberIdToOfficeDeliveriesGet = async (
                user: User,

                memberId: string,
                ): Promise<Array<MemberToOfficeDelivery>> => {
    
    return {
    }
}
public membersMemberIdToOfficeDeliveriesPost = async (
                user: User,

                memberId: string,
                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<MemberToOfficeDelivery> => {
    
    return {
    }
}
public membersRegisterPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ) => {
}
public membersRegisterVerifySmsPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<AccessToken> => {
    
    return {
    }
}
public oneTimeTokensOneTimeTokenRevokePost = async (

                oneTimeToken: string,
                ): Promise<AccessToken> => {
    
    return {
    }
}
public operatorsLoginPost = async (

                body: UNKNOWN_BASE_TYPEBody,
                ): Promise<AccessToken> => {
    
    return {
    }
}

}
export default new DummyHandler()

