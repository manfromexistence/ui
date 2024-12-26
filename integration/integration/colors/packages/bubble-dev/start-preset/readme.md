# bubble-dev/start-preset

## Errors

>Slack config is invalid

`start.auto.shouldSendSlackMessage` in `package.json` is `true` but at least one of the following environment variables is missing in Git-ignored project-root `.env` file:

* `AUTO_SLACK_TOKEN`
* `AUTO_SLACK_CHANNEL`
* `AUTO_SLACK_USERNAME`
* `AUTO_SLACK_ICON_EMOJI`
* `AUTO_SLACK_COLOR_INITIAL`
* `AUTO_SLACK_COLOR_MAJOR`
* `AUTO_SLACK_COLOR_MINOR`
* `AUTO_SLACK_COLOR_PATCH`

>GitHub config is invalid

`start.auto.shouldMakeGitHubReleases` in `package.json` is `true` but at least one of the following environment variables is missing in Git-ignored project-root `.env` file:

* `AUTO_GITHUB_TOKEN`
* `AUTO_GITHUB_USERNAME`
* `AUTO_GITHUB_REPO`

>Telegram config is invalid

`start.auto.shouldSendTelegramMessage` in `package.json` is `true` but at least one of the following environment variables is missing in Git-ignored project-root `.env` file:

* `AUTO_TELEGRAM_TOKEN`
* `AUTO_TELEGRAM_CHAT_ID`
