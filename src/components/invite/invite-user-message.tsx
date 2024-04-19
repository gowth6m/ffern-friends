import React from "react";

interface Props extends React.ComponentPropsWithoutRef<"div"> {
  name: string | undefined;
}

const InviteUserMessage: React.FC<Props> = ({ name }) => {
  return (
    <div>
      <p className="text-md">{name ? `Dear ${name},` : "Hey there,"}</p>

      <p className="mt-4">
        {`We are delighted to invite you to join Ffern Friends, our new community
        of like minded creators and artists.`}
      </p>

      <p className="mt-4">{`Here’s how it works:`}</p>

      <ul className="ml-8 mt-4 flex list-disc flex-col gap-4">
        <li>
          {`You’ll skip the waiting list and be added straight to the Ffern ledger`}
        </li>
        <li>
          {`As a ledger member, you’ll receive a made-to-order bottle of natural eau de parfum each season`}
        </li>
        <li>
          {`You’ll also be given a unique link to our waiting list, if you decide to share Ffern within your community`}
        </li>
      </ul>

      <p className="mt-4">
        {`If this sounds like something you may be interested in, we’d love it if you could fill out your details below, and we’ll send you our latest fragrance.`}
      </p>

      <p className="mt-4">{`Sincerely,`}</p>

      <p>{`Salma & the Ffern team`}</p>
    </div>
  );
};

export default InviteUserMessage;
