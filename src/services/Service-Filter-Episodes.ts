import { repositoryPodcast } from "../repositories/repository-Podcast";
import { PodcastTransferModel } from "../models/podcast-Transfer-Model";
import { statusCode } from "../utils/status-Code";

export const ServiceFilterEpisodes = async (
  podcastName: string | undefined
): Promise<PodcastTransferModel> => {
  let responseFormat: PodcastTransferModel = {
    statusCode: 0,
    body: [],
  };
  const queryString = podcastName?.split("?p=")[1] ?? "";
  const data = await repositoryPodcast(queryString);

  responseFormat.statusCode =
    data.length !== 0 ? statusCode.OK : statusCode.NO_CONTENT;

  responseFormat.body = data;
  return responseFormat;
};
