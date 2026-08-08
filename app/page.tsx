import { redirect } from "next/navigation";

import { getSession } from "@/lib/authentication";

export default async function Page() {
  const session = await getSession();

  if (!session) {
    return redirect("/landing-page");
  } else {
    return redirect("/landing-page");
  }
}
