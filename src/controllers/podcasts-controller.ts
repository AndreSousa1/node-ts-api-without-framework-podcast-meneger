import { IncomingMessage, ServerResponse } from "http";
import { ServiceListEpisodes } from "../services/Service-List-Episodes";
import { ServiceFilterEpisodes } from "../services/Service-Filter-Episodes";
import { PodcastTransferModel } from "../models/podcast-Transfer-Model";

export const getListEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const conted: PodcastTransferModel = await ServiceListEpisodes();
  res.writeHead(conted.statusCode, { "content-type": "application/json" });
  res.write(JSON.stringify(conted.body));
  res.end();
};

export const getFilterEpisodes = async (
  req: IncomingMessage,
  res: ServerResponse
) => {
  const conted: PodcastTransferModel = await ServiceFilterEpisodes(req.url);
  res.writeHead(conted.statusCode, { "content-type": "application/json" });
  res.write(JSON.stringify(conted.body));
  res.end();
};
