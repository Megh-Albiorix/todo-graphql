import { mergeResolvers } from "@graphql-tools/merge";
import taskResolver from "./task.resolver.js";

const mergedResolvers = mergeResolvers([taskResolver]);

export default mergedResolvers;
