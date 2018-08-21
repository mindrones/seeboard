import path from "path";

import _ from "lamb";

// TODO use generic and partial
export const makeResolveAliases = rootDir =>
    _.mapValuesWith(relPath => path.join(rootDir, relPath));
