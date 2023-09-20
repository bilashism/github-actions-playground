/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable react/prop-types */
import { GradientFadePrimaryHr } from '../../components/ui/GradientFadePrimaryHr';

import {
  TermsOfServiceList,
  TOSListType,
} from './components/TermsOfServiceList';

export const DEFINITIONS_LIST: TOSListType = {
  start: 1,
  title: 'Definitions',
  titleSize: 'large',
  subtitle:
    'The following definitions apply to both this Agreement and the Privacy Policy:',
  items: [
    {
      content: `The term "User" refers to an individual who utilizes the instruments, applications, and other services provided by the Fullboosts Platform. Users have the right to purchase the desired Seller Services and Goods, use their Fullboosts Profile, manage the funds they transferred onto their Profile (the funds can be returned to the bank requisites from which they originated), and can count on Fullboosts' arbitrary support should any disputes arise.`,
    },
    {
      content: `The Seller (also referred to as 'Currency supplier', 'Booster') is a User who has undergone the additional registration procedure, entered additional sign-up data and was granted the opportunity to post Offers, sell Seller Services and Goods on the Platform as well as count on Fullboosts' arbitrary support should a dispute occur.`,
    },
    {
      content: `The Buyer is a User of the Platform who is entitled to:`,
      items: [
        { content: `Purchase Seller Services and Goods.`, itemType: 'bullet' },
        { content: `Use the Fullboosts Profile.`, itemType: 'bullet' },
        {
          content: `Manage the funds that have been transferred to their Profile (with the opportunity to transfer them back to the bank requisites from which the payment was made).`,
          itemType: 'bullet',
        },
        {
          content: `Apply for the Fullboosts Arbitration in the course of Section 8 of this Agreement.`,
          itemType: 'bullet',
        },
      ],
    },
    {
      content: `A Fullboosts Profile (also referred to as 'Profile') is a personal account registered by the User on the Fullboosts Platform.`,
    },
    {
      content: `A Gaming Account is an account registered by the User on third-party platforms that are specially designed for the purpose of playing online video games.`,
    },
    {
      content: `The Seller Service refers to an act or performance offered by a Seller to a Buyer in order to transfer knowledge and/or skills in the gaming sphere as well as useful properties that improve the Gaming Account.`,
    },
    {
      content: `The Fullboosts Service refers to any intermediate service Fullboosts provides to Users, including hosting and maintaining the Fullboosts Platform, securing the instruments for the Sellers to place and offer their Seller Services and Goods, facilitating the formation of deals between Sellers and Buyers, and assisting Users in resolving disputes which may arise in connection with those deals.`,
    },
    {
      content: `Goods are valuable virtual components of a game that a Buyer can purchase on the Platform.`,
    },
    {
      content: `Fullboosts Wallet (also referred to as 'Wallet') is an electronic account designed on the Platform for settlements between the Seller and the Buyer for buying/selling Seller Services and Goods under this Agreement.`,
    },
    {
      content: `Commission is a payment to Fullboosts for providing trading space, instruments, intermediary services and money transaction security.`,
    },
    {
      content: `Fullboosts Arbitration is an independent and unbiased intermediary party for resolving any disputes between the Users.`,
    },
    {
      content: `Subscription is a set of privileges determined by Fullboosts that are gained by the User in exchange for a write-off of a specific amount of money monthly or weekly.`,
    },
    {
      content: `Status of a verified Seller is a status that allows the Seller to make personal Offers to the Buyers via the Fullboosts Chat and provides Sellers with the privilege of an accelerated withdrawal of funds.`,
    },
    {
      content: `Fullboosts Chat is a part of the Fullboosts Platform created for the purpose of communication between the Sellers, the Buyers and Fullboosts.`,
    },
    {
      content: `Deal is a contract entered into on the Fullboosts Platform between a Seller and a Buyer concerning the sale-purchase of Seller Services and Goods.`,
    },
    {
      content: `Offer is a proposal made by a Seller for the formation of a Deal with a Buyer which includes the description of the product in English (also referred to as 'item description'), information on delivery time and, if necessary, other bonus conditions determined by a Seller.`,
    },
    {
      content: `An "Order" represents the Buyer's intention to purchase the Seller's Services or Goods based on the terms of one of the Offers available on the Platform.`,
    },
    {
      content: `The "Payment Method" refers to a valid credit card issued by a bank that is acceptable to Fullboosts, as well as an Accentpay, GooglePay, or ApplePay account, or any other payment method that Fullboosts may, at its sole discretion, accept from time to time.`,
    },
    {
      content: `"Sanctions" pertain to disciplinary measures imposed on either or both Parties. These measures may include:`,
      items: [
        {
          content: `Decreasing the Buyer's or the Seller's rating.`,
          itemType: 'bullet',
        },
        { content: `Imposing fines.`, itemType: 'bullet' },
        {
          content: `Temporarily or permanently blocking the Profile.`,
          itemType: 'bullet',
        },
      ],
    },
  ],
};
export const PROFILE_AND_USER_PERSONAL_DATA: TOSListType = {
  start: 2,
  title: `FullBoosts Profile and User's Personal Data`,
  items: [
    {
      content: `To have full access to Fullboosts Services, a User must register a Fullboosts Profile. By using the Fullboosts Platform and clicking the 'Sign Up' button when prompted on the Platform, a User agrees to be bound by all agreements which constitute Fullboosts' Terms of Service, viz. this Agreement and the Privacy Policy. If a User does not understand or agree to the Terms of Service, they shall not click to accept this Agreement by signing up and shall not visit Fullboosts Website, use the Platform, or any other Services provided by Fullboosts.`,
    },
    {
      content: `The User's Profile registration is subject to approval by Fullboosts. Fullboosts reserves the right to decline a registration of a Profile for any lawful reason.`,
    },
    {
      content: `Registered users of Fullboosts Platform are referred to as 'Users', and unregistered users are referred to as 'Site Visitors'.`,
    },
    {
      content: `In order to acquire the status of Seller, a User should submit an application via <a href="https://work.fullboosts.com/" class="underline">https://work.fullboosts.com/</a>. A User should provide their nickname, e-mail address, date of birth, and attach a copy of their passport or government-issued ID, indicating information about Seller Services and Goods they want to sell. After the approval from Fullboosts, the User shall be granted the Status of a Seller.`,
    },
    {
      content: `Fullboosts may collect Personal Information, such as User’s date of birth or taxpayer identification number, to validate User’s identity or as may be required by law, such as to complete tax filings. Fullboosts may request documents to verify this information, such as a copy of User’s government-issued ID.`,
    },
  ],
};
export const RELATIONSHIP_BETWEEN_PARTIES: TOSListType = {
  start: 3,
  title: `Relationship between the Parties and FullBoosts. Parties’ Responsibility`,
  items: [
    {
      content: `FullBoosts offers a Platform that enables Users to find one another, enter into deals, and make and receive payments through FullBoosts Wallet.`,
    },
    {
      content: `Via FullBoosts Platform Users can sell, buy or exchange Seller Services and Goods.`,
    },
    {
      content: `FullBoosts does not possess Seller Services and Goods, does not offer or sell them. It only acts as the intermediary party facilitating the Users in the process of their trading with each other by guaranteeing the safety of the funds placed on the FullBoosts Wallet. Should a dispute occur, the FullBoosts Arbitration takes on the obligation of facilitating the quickest resolution complying with the law and the issues of the current Agreement.`,
    },
    {
      content: `By accepting this Agreement, the Users acknowledge and agree that FullBoosts does not supervise, direct, control, or monitor Users in the performance of any obligations they may have under the deals and agree that:`,
      items: [
        {
          content: `(a) FullBoosts is not responsible for ensuring the accuracy or legality of any Seller Services, for which Sellers are solely responsible;`,
          itemType: 'none',
        },
        {
          content: `(b) FullBoosts is not responsible for the offering, performance, or procurement of the deals;`,
          itemType: 'none',
        },
        {
          content: `(c) FullBoosts does not make any representations about or guarantee any particular User’s actions.`,
          itemType: 'none',
        },
      ],
    },
    {
      content: `The Users further acknowledge and agree that Users, and not FullBoosts, are solely responsible for:    `,
      items: [
        {
          content: `(a) evaluating and determining the suitability of any deal, Buyer or Seller;`,
          itemType: 'none',
        },
        {
          content: `(b) assessing whether to enter into a deal with another User and verifying any information about another User;`,
          itemType: 'none',
        },
        {
          content: `(c) deciding whether to enter into a deal on FullBoosts as well as the deal terms;`,
          itemType: 'none',
        },
        {
          content: `(d) negotiating, agreeing to, and executing any terms or conditions of the deals and for performing and monitoring performance under them. All deals between Users are directly between the Users and FullBoosts is not a party to them.`,
          itemType: 'none',
        },
      ],
    },
    {
      content: `FullBoosts neither guarantees nor is responsible for the safety of the Buyer's Gaming Account or any personal data delivered directly to the Seller or to third parties. Neither is FullBoosts liable of: Any viruses, malicious or harmful programs that the User has allowed to install on their devices as a result of the misuse of networks The content that the User decides to host on the FullBoosts Platform or the Seller Services that the Seller intends to carry out through their promotion on the Platform Any action by the User related to the use of the Website, from any damage suffered by the User due to the loss and/or disclosure of the access data, of delays and interruptions in operation, which occur directly or indirectly, for reasons out of the reasonable control of FullBoosts The quality of the operation of the software, web browsers, operating systems and hardware manufactured and supplied by third parties.`,
    },
    {
      content: `Sellers have the privilege to include all necessary and accurate information in the item description. Any information provided on the FullBoosts Platform holds legal significance and is governed by this Agreement. If a Seller violates any provisions outlined in this Agreement or fails to fulfill the agreed-upon conditions discussed in FullBoosts' chat, an arbitrator has the authority to impose the following penalties:`,
      items: [
        { content: `"Reducing the rating."`, itemType: 'bullet' },
        { content: `"Imposing a fine."`, itemType: 'bullet' },
      ],
    },
    {
      content: `By accepting this Agreement, Sellers guarantee that the sale of Seller Services or Goods does not infringe upon the rights of third parties. These provisions apply to the use of any copyrighted materials, including trademarks, brand names, and trade information. Sellers confirm that they have obtained the necessary permissions from the owners of copyrighted materials. Additionally, Sellers confirm that they possess the rights to trade, distribute, and offer Seller Services and Goods that are related to third-party rights. Furthermore, Sellers confirm that such trading, distribution, or offering for sale does not violate third-party rights.`,
    },
    {
      content: `Sellers bear sole responsibility for the accuracy of the information provided in the item description, compliance with delivery times, and fulfillment of any specified bonus conditions in the offer.`,
    },
    {
      content: `Neither FullBoosts nor the Seller are responsible for any potential measures or sanctions taken against a profile by the game administration during or after a transaction.`,
    },
    {
      content: `Subject to the conditions stated herein, FullBoosts reserves the right to unilaterally modify, amend, or make changes to this Agreement and the Privacy Policy as necessary by posting a revised version on the Platform. FullBoosts will provide reasonable advance notice of any changes through the Website by posting the updated Terms of Service on the Platform and providing notice on the Platform or via email. Users are responsible for regularly reviewing the Platform to stay informed about any modifications.`,
    },
    {
      content: `FullBoosts reserves the right to delete or edit any published information on the Website, including material that violates existing laws, infringes upon third-party rights, or is deemed inappropriate from FullBoosts' perspective.`,
    },
    {
      content: `The sharing or selling of Gaming Accounts to third parties is strictly prohibited on FullBoosts.`,
    },
    {
      content: `FullBoosts offers Users the opportunity to receive customer support through the FullBoosts Chat on the Website by clicking the "Chat with us" button. If necessary, Users may also contact FullBoosts at <a href="mailto:support@fullboosts.com" class="underline">support@fullboosts.com</a> to reach the Customer Service team.`,
    },
  ],
};
export const INTERACTION_BETWEEN_PARTIES: TOSListType = {
  start: 4,
  title: `Interaction between the Parties during the process of making deals.`,
  items: [
    {
      content: `The Users are obligated to treat each other and FullBoosts' official representatives with politeness and respect. `,
    },
    {
      content: `The Seller delivers the Seller Services and/or Goods to the Buyer on the Platform, in accordance with the agreed terms and conditions of the Deal. `,
    },
    {
      content: `The interaction between the Buyer and the Seller during the formation and fulfillment of the Deal can be categorized into the following four stages:`,
      items: [
        { content: `"Placed"`, itemType: 'bullet' },
        { content: `"In progress"`, itemType: 'bullet' },
        { content: `"Confirmation"`, itemType: 'bullet' },
        { content: `"Completed"`, itemType: 'bullet' },
      ],
    },
    {
      content: `The purpose of the 'Placed' stage is for the Parties to reach an agreement on the conditions of the Seller Services and/or Goods provided by the Seller to the Buyer within a specific Deal, signifying the formation of the Deal. During the "Placed" stage, the Buyer and the Seller interact on the Platform based on the following provisions:`,
      items: [
        {
          content: `The Buyer places an Order in response to the Seller's available Offer on the Platform.`,
          items: [
            {
              content: `The Buyer's Order includes the selection of preferred execution options provided in the Seller's Offer, which may affect the base Offer price depending on the chosen options. The Platform displays the price and order completion time for the Order based on the selected execution options in the Seller's Offer.`,
            },
            {
              content: `To place the Order, the Buyer is required to make an advance payment from their FullBoosts Wallet in the amount specified by the Platform, calculated based on the selected preferred execution options in the Seller's Offer. By making the advance payment for the Seller Services or Goods indicated in the Order, the Buyer confirms their full and unconditional consent to receive the Seller Services and Goods under the terms of the Order. `,
            },
            {
              content: ` Once the Order is placed, the Seller can review the Order and agree (or reject) to the Order conditions. When the Seller agrees to the Order conditions, the Deal is considered formed under the same conditions, and the "In progress" stage begins.  `,
            },
            {
              content: `The Buyer always has the right to cancel the Order during the 'Placed' stage. In such a case, the amount of the advance payment for the Order placement will be refunded to the Buyer's FullBoosts Wallet. `,
            },
          ],
        },
      ],
    },
    {
      content: `During the "In progress" stage, the Seller delivers the Seller Services and/or Goods in accordance with the agreed terms and conditions of the Deal established during the 'Placed' stage. During the "In progress" stage, the Buyer and the Seller interact on the Platform based on the following provisions: 
      `,
      items: [
        {
          content: `The Seller is obligated to commence work on fulfilling the Deal within the specified timeframe, either predetermined or agreed upon during communication with the Buyer, while adhering to all the conditions of the Deal. In the event of a violation of this Agreement or the terms and conditions of the agreed Deal, the injured Party may request a partial refund through the FullBoosts Arbitration Process outlined in Section 8 of this Agreement. 
        `,
        },
        {
          content: `Users have the right to cancel their Deal. Upon cancellation, the User will receive a full or partial refund to their Wallet. The situations in which a User has the right to cancel their Deal are specified below.`,
        },
      ],
    },
    {
      content: `The Buyer and the Seller interact at the Platform in the course of the "Confirmation" stage under the following provisions: `,
      items: [
        {
          content: `After the Deal is fulfilled and the Seller Service and/or Good is received by the Buyer, provided all Deal conditions are met, the Seller reports the delivery of the Seller Service and/or Good at the Platform by uploading delivery evidence, i.e. screenshots on the "My Sales" page.`,
        },
        {
          content: `After the Seller uploads screenshots, the Buyer accepts the Seller's Services rendered and/or Goods delivered by clicking the "Confirm delivery" button. This indicates the Buyer's final acceptance of the fulfillment of the Seller's obligations under the Deal.Once the Buyer's final acceptance of the fulfillment of the Seller's obligations under the Deal occurred, the Deal is deemed to be 'Completed'.`,
        },
        {
          content: `Alternatively, the Buyer is entitled to reject the Deal Confirmation and appeal to FullBoosts Arbitration for the Deal canceling and/or refund.`,
        },
        {
          content: `Should the Buyer neither accept the Deal fulfillment, nor reject the Deal Confirmation, after 72 hours pass since the screenshots are uploaded by the Seller on the "My Sales" page, the Buyer's final acceptance of the fulfillment of the Seller's obligations under the Deal is deemed to have been made.`,
        },
      ],
    },
    {
      content: `Under the "Completed" stage, the Seller receives their funds for the completed Deal at the Seller’s FullBoosts Wallet.`,
    },
    {
      content: `Throughout all four (4) above mentioned stages of the interaction between the Buyer and the Seller, both the Seller and the Buyer are entitled to the following additional actions:`,
      items: [
        {
          itemType: 'bullet',
          content: `Contact the Buyer via the Chat by clicking the "Go to intercom" button`,
        },
        {
          itemType: 'bullet',
          content: `Address the FullBoosts Arbitration under Section 8 of this Agreement by clicking the "I need help" button should a dispute arise between the Seller and the Buyer.`,
        },
      ],
    },
    {
      content: `The cases in which the Users are entitled to request a refund as well as other provisions on refunds are expressly set forth in FullBoosts Refund Policy.`,
    },
    {
      content: `To learn more about the interface of the interaction between the Seller and the Buyer on the Platform, please visit our Help Centre – Knowledge Base.`,
    },
  ],
};
export const TRANSACTION_BETWEEN_PARTIES: TOSListType = {
  start: 5,
  title: `Transactions between the Parties using the FullBoosts Wallet.`,
  items: [
    {
      content: `Upon the formation of a Deal, when a Seller utilizes the Platform to receive payment from the Buyer for the first time, FullBoosts will create and maintain a FullBoosts Wallet for the Seller. This wallet enables the Seller to receive or withdraw payments, issue refunds to Buyers, and make payments to FullBoosts.`,
    },
    {
      content: `Following the initiation of a deal, when a Buyer makes a payment to a Seller for the first time, FullBoosts establishes and maintains a FullBoosts Wallet for the Buyer. This wallet holds funds for the Buyer, which can be utilized to make payments, receive refunds related to deals, and make payments to FullBoosts.`,
    },
    {
      content: `The FullBoosts Wallet is designed to cater to the needs of Users. By agreeing to these terms, Users authorize FullBoosts to act as their escrow agent. This means that FullBoosts will hold the funds and follow the instructions pertaining to the funds in the Wallet. FullBoosts acts as an escrow agent for payment, fund holding, and receipt in accordance with the Terms of Service.`,
    },
    {
      content: `The Seller transfers ownership of Goods or provides Seller Services to the Buyer in exchange for virtual funds from the virtual balance in the FullBoosts Wallet.`,
    },
    {
      content: `Until the completion of the deal, the Buyer's funds are safeguarded within the FullBoosts Wallet and are ultimately transferred to the Seller once all conditions are confirmed by both Parties.`,
    },
    {
      content: `FullBoosts serves as a guarantor for any deals conducted using the FullBoosts Wallet. This implies that FullBoosts takes responsibility for the security of FullBoosts Wallets and ensures the protection of Profile-related data by storing it on secure servers. FullBoosts' guarantor services are effective from the moment funds are transferred to the User's FullBoosts Wallet until they are further transferred. In the event of technical incidents, including the unauthorized access to a User's FullBoosts Wallet, funds stored in the Wallet will be reimbursed to the User upon sufficient evidence that the incidents are not a result of the User's own actions.`,
    },
    {
      content: `The Seller is permitted to hold funds in their FullBoosts Wallet for a reasonable duration, not exceeding ninety (90) days.`,
    },
    {
      content: `After the 90-day period, the Seller must withdraw available funds using appropriate means available on the FullBoosts Platform, including bank transfers through the payment system utilized by the FullBoosts Platform. The Seller reserves the right to request a one-time withdrawal of funds from their FullBoosts Wallet at any time before the completion of the 90-day period.`,
    },
    {
      content: `The Buyer must have sufficient virtual funds in their FullBoosts Wallet to provide appropriate consideration for the Seller's Services or Goods on the FullBoosts Platform.`,
    },
    {
      content: `Within the FullBoosts Profile, Users can transfer funds to their FullBoosts Wallet. Additionally, Users can utilize funds during the purchase of Seller Services or Goods, in which case the sum will be automatically transferred from their Wallet and charged accordingly.`,
    },
    {
      content: `When transferring funds, Users acknowledge that they are not purchasing a specific Seller Service or Good, but rather transferring funds to the virtual Wallet balance. These funds will be used to pay for the Seller Services or Goods being acquired.`,
    },
  ],
};
export const UTILIZATION_OF_PLATFORM: TOSListType = {
  start: 6,
  title: `The utilization of the Platform incurs taxes and commissions, including the withdrawal of funds from Fullboosts.`,
  items: [
    {
      content: `Upon the completion of a deal, FullBoosts will deduct a Commission from the Seller for utilizing the Platform and promoting their Seller Services. The Commission charged by FullBoosts can range up to 16% of the transferred amount. However, for Seller Services related to the sale, purchase, or exchange of in-game currency, the Commission rate is set at 12%. The specific size of the Commission depends on the Seller's average daily sales and any seasonal sales conducted by FullBoosts on the Platform. Sellers will receive prior notification regarding seasonal sales through the Website.`,
    },
    {
      content: `Sellers are required to pay the Commission when funds are transferred to their FullBoosts Profile.`,
    },
    {
      content: `When a Seller requests to withdraw funds from their Wallet to their personal bank account, FullBoosts will calculate and apply the Commission charged by the payment system. The Commission rate can be up to 5% of the transferred amount and varies based on the selected withdrawal method.`,
      items: [
        {
          content: `VISA, Mastercard (Debit cards) (3%)`,
          itemType: 'bullet',
        },
        { content: `WMZ (0%)`, itemType: 'bullet' },
        {
          content: `Paypal (5%)`,
          itemType: 'bullet',
        },
        {
          content: `USDT, USDC, BTC (5%)`,
          itemType: 'bullet',
        },
        { content: `SEPA Transfer (1.2%)`, itemType: 'bullet' },
        {
          content: `SWIFT (2%)`,
          itemType: 'bullet',
        },
      ],
    },
    {
      content: `FullBoosts does not collect taxes unless it is legally obligated to do so. However, in accordance with applicable laws, FullBoosts may be required to collect certain taxes or levies, such as income tax or VAT. The collection requirements and rates may vary based on changes in the User's jurisdiction.`,
    },
  ],
};
export const NON_CIRCUMVENTION_DATA: TOSListType = {
  start: 7,
  title: `Non-Circumvention`,
  items: [
    {
      content: `Users are prohibited from seeking, providing, or attempting to obtain contact information of other Users outside the Platform, including personal contact data. The only exception applies to gaming data, such as usernames or server information used for in-game communication.`,
    },
    {
      content: `The FullBoosts Platform is the exclusive channel for Users to communicate with one another.`,
    },
    {
      content: `Users agree not to disclose any information that enables others to contact them directly through any means of communication other than the official Website.`,
    },
    {
      content: `Users agree not to bypass the Payment Methods provided on the Platform.`,
    },
    {
      content: `Any attempt to bypass the Payment Methods by making payments for Seller Services and Goods listed on the Website without utilizing the Platform as an intermediary will result in the suspension of both Parties' FullBoosts Profiles.`,
    },
  ],
};
export const DISPUTES_RESOLVING_PROCESS: TOSListType = {
  start: 8,
  title: `The process of resolving disputes through Fullboosts Arbitration`,
  items: [
    {
      content: `FullBoosts Arbitration serves as an impartial intermediary and guarantor in resolving disputes between the Parties (Users). It strives to make fair and unbiased decisions.`,
    },
    {
      content: `If there is a violation of the Agreement rules or the terms discussed during the transaction negotiation between Users (such as purchasing Seller Services or Goods on the Platform), each Party has the right to submit a formal complaint using the online form addressed to FullBoosts Arbitration. In such cases, FullBoosts Arbitration conducts a thorough investigation of the dispute, considering claims from both Parties and making conclusions based on the facts and evidence provided.`,
    },
    {
      content: `FullBoosts has the authority to suspend the Buyer's FullBoosts Profile if the Buyer consistently and repeatedly files claims with FullBoosts Arbitration, alleging minor defects in the purchased Seller Services or Goods, more frequently than after every fourth transaction on the Platform. Such actions by the Buyer will be seen as an attempt to take advantage of FullBoosts Arbitration for personal gain, rather than genuinely protecting the Buyer's consumer rights. This includes seeking material compensation, such as refunds for the cost of Seller Services or Goods, while retaining the results of the purchased Seller Services or Goods.`,
    },
    {
      content: `FullBoosts shall not be held responsible for any consequences resulting from the suspension of the Buyer's FullBoosts Profile or the cancellation of refunds for the cost of Seller Services or Goods, as mentioned in paragraph 8.3 above. In such cases, FullBoosts is also entitled to cancel any refunds for the cost of Seller Services or Goods.`,
    },
    {
      content: `In the event of Agreement rule violations, breach of negotiated conditions, or exceeding guaranteed deadlines, FullBoosts Arbitration has the authority to impose sanctions, as specified in Section 9 of this Agreement, on the Party proven to have violated the aforementioned conditions.`,
    },
  ],
};
export const SANCTIONS_AND_FINES_POLICY: TOSListType = {
  start: 9,
  title: `Policy on Sanctions and Fines.`,
  items: [
    {
      content: `FullBoosts Arbitration serves as an impartial intermediary and guarantor in resolving disputes between the Parties (Users). It strives to make fair and unbiased decisions.`,
      items: [
        {
          content: `User's violation of any terms and conditions of this Agreement or any other provisions of the Terms of Service.`,
          itemType: 'bullet',
        },
        {
          content: `User's direct targeting, abuse, or insults towards other Users of the Platform.`,
          itemType: 'bullet',
        },
        {
          content: `User's provision of false or misleading information to FullBoosts and/or other Users.`,
          itemType: 'bullet',
        },
        {
          content: `User's actions that may result in legal liability for FullBoosts, other Users, or third parties; actions contrary to the interests of the Platform or the User community; involvement in illicit or illegal activities.`,
          itemType: 'bullet',
        },
        {
          content: `FullBoosts being legally obligated to do so by law, legal process, or law enforcement. `,
          itemType: 'bullet',
        },
      ],
    },
    {
      content: `If there is a violation of the Agreement rules or the terms discussed during the transaction negotiation between Users (such as purchasing Seller Services or Goods on the Platform), each Party has the right to submit a formal complaint using the online form addressed to FullBoosts Arbitration. In such cases, FullBoosts Arbitration conducts a thorough investigation of the dispute, considering claims from both Parties and making conclusions based on the facts and evidence provided.`,
      items: [
        {
          content: `Seller's provision of inaccurate information to FullBoosts and/or other Users.`,
          itemType: 'bullet',
        },
        {
          content: `Seller's engagement in fraud, illicit activities, or unlawful use of the Platform.`,
          itemType: 'bullet',
        },
        {
          content: `Occurrence of erroneous or duplicate transactions between the Parties. `,
          itemType: 'bullet',
        },
      ],
    },
    {
      content: `FullBoosts has the authority to suspend the Buyer's FullBoosts Profile if the Buyer consistently and repeatedly files claims with FullBoosts Arbitration, alleging minor defects in the purchased Seller Services or Goods, more frequently than after every fourth transaction on the Platform. Such actions by the Buyer will be seen as an attempt to take advantage of FullBoosts Arbitration for personal gain, rather than genuinely protecting the Buyer's consumer rights. This includes seeking material compensation, such as refunds for the cost of Seller Services or Goods, while retaining the results of the purchased Seller Services or Goods.`,
      items: [
        { content: `Reduction in seller rating.`, itemType: 'bullet' },
        {
          content: `Withdrawal of funds from the Seller's FullBoosts Wallet.`,
          itemType: 'bullet',
        },
        {
          content: `Full or partial refund of funds to the Buyer's FullBoosts Wallet.`,
          itemType: 'bullet',
        },
        {
          content: `Removal of the Seller's current offers from the Platform.`,
          itemType: 'bullet',
        },
        { content: `Removal of the Seller's status. `, itemType: 'bullet' },
      ],
    },
    {
      content: `FullBoosts shall not be held responsible for any consequences resulting from the suspension of the Buyer's FullBoosts Profile or the cancellation of refunds for the cost of Seller Services or Goods, as mentioned in paragraph 8.3 above. In such cases, FullBoosts is also entitled to cancel any refunds for the cost of Seller Services or Goods.`,
    },
    {
      content: `In the event of Agreement rule violations, breach of negotiated conditions, or exceeding guaranteed deadlines, FullBoosts Arbitration has the authority to impose sanctions, as specified in Section 9 of this Agreement, on the Party proven to have violated the aforementioned conditions.`,
    },
  ],
};

export const Main = () => {
  const TERMS_OF_SERVICE_LISTS: TOSListType[] = [
    DEFINITIONS_LIST,
    PROFILE_AND_USER_PERSONAL_DATA,
    RELATIONSHIP_BETWEEN_PARTIES,
    INTERACTION_BETWEEN_PARTIES,
    TRANSACTION_BETWEEN_PARTIES,
    UTILIZATION_OF_PLATFORM,
    NON_CIRCUMVENTION_DATA,
    DISPUTES_RESOLVING_PROCESS,
    SANCTIONS_AND_FINES_POLICY,
  ];

  return (
    <main>
      <div className="fb-container grid gap-10 xl:gap-16">
        <GradientFadePrimaryHr />
        {TERMS_OF_SERVICE_LISTS?.map((list) => (
          <TermsOfServiceList
            key={crypto.randomUUID().toString()}
            payload={list}
          />
        ))}
      </div>
    </main>
  );
};
