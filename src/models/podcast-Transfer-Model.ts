import { PodcastModel } from "./podcast-Model";

export interface PodcastTransferModel {
  statusCode: number;
  body: PodcastModel[];
}
