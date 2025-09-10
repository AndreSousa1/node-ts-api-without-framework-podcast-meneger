import { PodcastTransferModel } from "../models/podcast-Transfer-Model";
import { repositoryPodcast } from "../repositories/repository-Podcast";
import { statusCode } from "../utils/status-Code";

export const ServiceListEpisodes = async () => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const data = await repositoryPodcast();
  responseFormat.statusCode =
    data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT;

  responseFormat.body = data;
  return responseFormat;
};
