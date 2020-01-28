declare namespace Components {
    namespace RequestBodies {
        export type MemberBankAccountBody = Schemas.MemberBankAccount;
        export type MemberBody = Schemas.Member;
        export type MemberCreditCardBody = Schemas.MemberCreditCard;
        export interface MemberItemPhoto {
            imageFile?: string; // binary
        }
        export interface MemberLoginBody {
            /**
             * example:
             * 08012345678
             */
            smsPhoneNumber?: string;
        }
        export interface MemberLoginVerifySmsBody {
            /**
             * example:
             * 08012345678
             */
            smsPhoneNumber?: string;
            /**
             * example:
             * 123456
             */
            verificationCode?: string;
        }
        export interface MemberRegisterBody {
            /**
             * example:
             * 08012345678
             */
            smsPhoneNumber?: string;
        }
        export interface MemberRegisterVerifySmsBody {
            /**
             * example:
             * 08012345678
             */
            smsPhoneNumber?: string;
            /**
             * example:
             * 123456
             */
            verificationCode?: string;
        }
        export type MemberToOfficeDeliveryBody = Schemas.MemberToOfficeDelivery;
    }
    namespace Schemas {
        export interface Error {
            /**
             * example:
             * example error occured
             */
            message?: string;
        }
        export interface Member {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            id?: string; // uuid-v4
            /**
             * example:
             * 山田花子
             */
            name?: string;
            /**
             * example:
             * hanako.yamada@example.com
             */
            email?: string;
            /**
             * example:
             * 08012345678
             */
            phoneNumber?: string;
            address?: MemberAddress;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            udpatedAt?: string; // date-time
        }
        export interface MemberAccessToken {
            /**
             * example:
             * KUA2adPgLaDNSucthffQJNEAKdUjZ-A49Z7-Yj2sYBa-AzK32XVaQmTG-7NriJG5MF8K5tLhxmS3mu8VF6Xw9p5LAtgf-tZX
             */
            accessToken?: string;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            expiresAt?: string; // date-time
        }
        /**
         * TODO 住所周りの構造を変更するかもしれません(prefecture.. などに分けるかを外部api 精査後に確定しますmm)
         * 
         */
        export interface MemberAddress {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * 101-0001
             */
            postCode?: string;
            /**
             * example:
             * 東京都千代田区
             */
            addressFirst?: string;
            /**
             * example:
             * 千代田1-1-1
             */
            addressSecond?: string;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            updatedAt?: string; // date-time
        }
        export interface MemberAgreement {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * termsOfService-v20191011
             */
            agreementType?: "termsOfService-v20191011" | "privacyPoricy-v20191011";
            /**
             * example:
             * true
             */
            agreed?: boolean;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            agreedAt?: string; // date-time
        }
        export interface MemberBankAccount {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * みずほ銀行
             */
            bankName?: string;
            /**
             * example:
             * 1
             */
            bankNumber?: string;
            /**
             * example:
             * 本店
             */
            bankBrancheName?: string;
            /**
             * example:
             * 100
             */
            bankBrancheNumber?: string;
            /**
             * example:
             * saving
             */
            bankAccountType?: "saving";
            /**
             * example:
             * 0
             */
            bankAccountNumber?: string;
            /**
             * example:
             * 山田花子
             */
            accountName?: string;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            updatedAt?: string; // date-time
        }
        /**
         * TODO 住所周りの構造を変更するかもしれません(prefecture.. などに分けるかを外部api 精査後に確定しますmm)
         * 
         */
        export interface MemberCreditCard {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            updatedAt?: string; // date-time
        }
        export interface MemberIdentificationPhoto {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            id?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * driverLicenceCard
             */
            identificationType?: "driverLicenceCard";
            /**
             * example:
             * 1
             */
            sequence?: number;
            /**
             * example:
             * https://i.imgur.com/a2mAkYQ.jpg
             */
            imageUrl?: string; // url
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            deletedAt?: string; // date-time
        }
        export interface MemberItem {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            itemId?: string; // uuid-v4
            /**
             * example:
             * true
             */
            hasOwnership?: boolean;
            /**
             * example:
             * member
             */
            locationType?: "member" | "deliveryCompany" | "operatorsOffice";
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            udpatedAt?: string; // date-time
            deletedAt?: string; // date-time
        }
        export interface MemberItemNegotiation {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            id?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            itemId?: string; // uuid-v4
            /**
             * example:
             * ROLEX
             */
            brandName?: string;
            /**
             * example:
             * RX1704
             */
            modelName?: string;
            /**
             * example:
             * 1242000
             */
            proposedPrice?: number;
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            establishedAt?: string; // date-time
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
            closedAt?: string; // date-time
        }
        export interface MemberItemPhoto {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            id?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            itemId?: string; // uuid-v4
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
        }
        export interface MemberToOfficeDelivery {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            id?: string; // uuid-v4
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberId?: string; // uuid-v4
            /**
             * example:
             * 2019-10-18T13:00:00.000Z
             */
            pickUpDateTimeFrom?: string; // date-time
            /**
             * example:
             * 2019-10-18T15:00:00.000Z
             */
            pickUpDateTimeTo?: string; // date-time
            /**
             * example:
             * 0000-1111-2222
             */
            trackingNumber?: string;
            /**
             * ヤマトの仕様に合わせますので確定したらお知らせします mm
             * example:
             * TODO
             */
            deliveryStatus?: "TODO";
            /**
             * example:
             * 山田花子
             */
            memberName?: string;
            /**
             * example:
             * 101-0001
             */
            memberPostCode?: string;
            /**
             * example:
             * 東京都千代田区
             */
            memberAddressFirst?: string;
            /**
             * example:
             * 千代田1-1-1
             */
            memberAddressSecond?: string;
            /**
             * example:
             * 08012345678
             */
            memberAddressPhoneNumber?: string;
            deliveryItems?: MemberToOfficeDeliveryItem[];
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
        }
        export interface MemberToOfficeDeliveryItem {
            /**
             * example:
             * a7b09d24-aec2-48e3-87bb-c1d919978feb
             */
            memberToOfficeDeliveryId?: string; // uuid-v4
            /**
             * example:
             * bb17103f-6a65-41db-af38-edf22b3e0cf5
             */
            itemId?: string; // uuid-v4
            /**
             * example:
             * 2019-10-18T13:53:20.000Z
             */
            createdAt?: string; // date-time
        }
    }
}
declare namespace Paths {
    namespace HealthCheck {
        namespace Get {
            namespace Responses {
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Me {
        namespace Get {
            namespace Responses {
                export type $200 = Components.Schemas.Member;
                export type $401 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberId {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.Member;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export type RequestBody = Components.RequestBodies.MemberBody;
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdAgreementsAgreementType {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * termsOfService-v20191011
                 */
                export type AgreementType = string;
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
                agreementType: Parameters.AgreementType;
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberAgreement;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * example:
                 * termsOfService-v20191011
                 */
                export type AgreementType = string;
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
                agreementType: Parameters.AgreementType;
            }
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdBankAccount {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberBankAccount;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Put {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export type RequestBody = Components.RequestBodies.MemberBankAccountBody;
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdCreditCard {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberCreditCard;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export type RequestBody = Components.RequestBodies.MemberCreditCardBody;
            namespace Responses {
                export type $201 = Components.Schemas.MemberCreditCard;
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdIdentificationPhotos {
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $201 = Components.Schemas.MemberIdentificationPhoto;
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdIdentificationStatusRequestVerify {
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdItems {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * true
                 */
                export type HasOwnership = boolean;
                /**
                 * example:
                 * member
                 */
                export type LocationType = "member" | "deliveryCompanry" | "operatorOffice";
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export interface QueryParameters {
                locationType?: Parameters.LocationType;
                hasOwnership?: Parameters.HasOwnership;
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberItem[];
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export type RequestBody = Components.RequestBodies.MemberItemPhoto;
            namespace Responses {
                export type $201 = Components.Schemas.MemberItem;
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdItemsItemIdNegotiationsCreditCardAuthorize {
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type ItemId = string; // uuid-v4
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberItemNegotiationId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
                itemId: Parameters.ItemId; // uuid-v4
                memberItemNegotiationId: Parameters.MemberItemNegotiationId; // uuid-v4
            }
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdItemsItemIdNegotiationsLatest {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type ItemId = string; // uuid-v4
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
                itemId: Parameters.ItemId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberItemNegotiation;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdItemsItemIdNegotiationsMemberItemNegotiationIdEstablished {
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type ItemId = string; // uuid-v4
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberItemNegotiationId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
                itemId: Parameters.ItemId; // uuid-v4
                memberItemNegotiationId: Parameters.MemberItemNegotiationId; // uuid-v4
            }
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdSugguestAddres {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberAddress;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace Members$MemberIdToOfficeDeliveries {
        namespace Get {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            namespace Responses {
                export type $200 = Components.Schemas.MemberToOfficeDelivery[];
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
        namespace Post {
            namespace Parameters {
                /**
                 * example:
                 * a7b09d24-aec2-48e3-87bb-c1d919978feb
                 */
                export type MemberId = string; // uuid-v4
            }
            export interface PathParameters {
                memberId: Parameters.MemberId; // uuid-v4
            }
            export type RequestBody = Components.RequestBodies.MemberToOfficeDeliveryBody;
            namespace Responses {
                export type $201 = Components.Schemas.MemberToOfficeDelivery;
                export type $400 = Components.Schemas.Error;
                export type $401 = Components.Schemas.Error;
                export type $404 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace MembersLogin {
        namespace Post {
            export type RequestBody = Components.RequestBodies.MemberLoginBody;
            namespace Responses {
                export type $200 = Components.Schemas.MemberAccessToken;
                export type $400 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace MembersLoginVerifySms {
        namespace Post {
            export type RequestBody = Components.RequestBodies.MemberLoginVerifySmsBody;
            namespace Responses {
                export type $200 = Components.Schemas.MemberAccessToken;
                export type $401 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace MembersRegister {
        namespace Post {
            export type RequestBody = Components.RequestBodies.MemberRegisterBody;
            namespace Responses {
                export type $400 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
    namespace MembersRegisterVerifySms {
        namespace Post {
            export type RequestBody = Components.RequestBodies.MemberRegisterVerifySmsBody;
            namespace Responses {
                export type $200 = Components.Schemas.MemberAccessToken;
                export type $400 = Components.Schemas.Error;
                export type $500 = Components.Schemas.Error;
            }
        }
    }
}
