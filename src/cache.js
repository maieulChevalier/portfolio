import { InMemoryCache, makeVar } from "@apollo/client";

// export const cache = new InMemoryCache({
//   typePolicies: {
//     Query: {
//       fields: {},
//     },
//   },
// });

export const isDarkModeVar = makeVar(false);
