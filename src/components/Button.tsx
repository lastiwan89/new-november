import Link from "next/link";

type Button = {
  type: string;
};
export default function Button({ type }: Button) {
  return (
    <Link
      className={`${type} px-6 py-2 rounded-full semi-bold-18`}
      href={`/contact`}
    >
      contact us
    </Link>
  );
}
