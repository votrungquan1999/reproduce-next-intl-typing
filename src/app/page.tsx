import { getTranslations } from "next-intl/server";
import Seconds from "./Seconds";
import { connection } from "next/server";


export default async function Home() {
  const t = await getTranslations();

  await connection();

  const now = Date.now();

  return (
   <div className="flex flex-col gap-4">
     {t.rich("message_with_variable", { seconds: <Seconds serverRenderTime={now}/> })}

     {t.rich("message_with_tag", { seconds: () => <Seconds serverRenderTime={now}/> })}

   </div>
  );
}
