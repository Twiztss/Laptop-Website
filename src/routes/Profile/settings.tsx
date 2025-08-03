import { Users } from "../../types/Users";
import { PaymentCard } from "../../components/settings/PaymentCard";
import { SubscriptionSection } from "../../components/settings/SubscriptionSection";
import { PersonInfoCard } from "../../components/settings/PersonInfoCard";
import { OrderInfoCard } from "../../components/settings/OrderInfoCard";
import { AddressCard } from "../../components/settings/AddressCard";
import { ProfileCard } from "../../components/settings/ProfileCard";

export default function Settings( user : Users ) {
    return (
    <article className="flex flex-col gap-6">
        <ProfileCard user={user} />
        <PersonInfoCard user={user} />
        <AddressCard address={user.payment.billingAddress} />
        <PaymentCard user={user} />
        <SubscriptionSection user={user} />
        <OrderInfoCard user={user} />
    </article>
  )
}
