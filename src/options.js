const defaultOptions = {
  ignoreHeaders: [],
  ignoreQueryParams: [],
  ignoreBody: false,
  bodyMatcher: null,
  path: "./tapes/",
  port: 8080,
  record: true,
  fallbackMode: "404",
  silent: false,
  summary: true,
  debug: false,
  nameFunction: undefined,
}

export default class Options {
  static prepare(usrOpts) {
    const opts = {
      ...defaultOptions,
      ...usrOpts
    }

    if (opts.bodyMatcher) {
      opts.ignoreHeaders.push("content-length")
    }

    return opts;
  }
}