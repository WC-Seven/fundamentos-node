// /users/:id
export function buildRoutePath(path) {
    const routeParametersRegex = /:([a-zA-Z]+)/g,

        pathWithParams = path.replaceAll(routeParametersRegex, '(?<$1>[a-z0-9\-_]+)'),

        pathRegex = new RegExp(`^${pathWithParams}`)

    return pathRegex
}