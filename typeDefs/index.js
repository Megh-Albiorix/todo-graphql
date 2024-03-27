import { mergeTypeDefs } from "@graphql-tools/merge";
import { loadTypeDefs } from "../utils/loadTypeDefs.js";
import { dirname } from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const typeDefs = loadTypeDefs(`${__dirname}/../typeDefs`);

const mergedTypeDefs = mergeTypeDefs(typeDefs);

export default mergedTypeDefs;
