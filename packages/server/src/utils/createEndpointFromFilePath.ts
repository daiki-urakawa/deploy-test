export const createEndpointFromFilePath = (filePath: string) =>
  filePath
    .split('endpoints')[1]
    .replace(/index\.(ts|js)/, '')
    .replace(/_/g, ':')
