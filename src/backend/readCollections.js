import "dotenv/config";
import { createClient, ApiKeyStrategy } from "@wix/sdk";
import { items } from "@wix/data";

const wixClient = createClient({
  modules: { items },
  auth: ApiKeyStrategy({
    siteId: process.env.SITE_ID,
    apiKey: process.env.API_KEY,
  }),
});

async function getTeamData() {
  const { items } = await wixClient.items
    .queryDataItems({
      dataCollectionId: "Team",
    })
    .find();
  return items;
}

async function run() {
  const items = await getTeamData();

  items.map((item) => {
    console.log(item.data.title);
  });
}

run();
