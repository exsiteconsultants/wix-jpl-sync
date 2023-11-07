# JPL to WIX Collection Sync

This tools reads a wix collection to gather a list of teams flagged as `ownClub` and then gathers that teams details, it's associated league table and all the fixtures for the team including those that have been played and their scores.

The scripts in this project are designed to run as scheduled jobs in WIX though this project allows the developer to run them locally for development, testing and debugging, before deploying to WIX.

## Keys

The scripts use the WIX data api and
Login to WIX and then goto account settings and API Keys and create a key. Copy the Token it generates and copy that into your .env file in the `API_KEY` field.

Then goto your wix site and from the URL figure out the site id (it's a UUID in the URL). Copy that into the `SITE_ID` field in your .env file.
