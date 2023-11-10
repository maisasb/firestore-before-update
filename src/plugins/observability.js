import { datadogRum } from "@datadog/browser-rum";

const options = {
  service: process.env.VUE_APP_DATADOG_SERVICE,
  applicationId: process.env.VUE_APP_DATADOG_APPLICATION_ID,
  clientToken: process.env.VUE_APP_DATADOG_CLIENT_TOKEN,
};

datadogRum.init(options);
