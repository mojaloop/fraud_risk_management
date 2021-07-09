export interface SwaggerApiResponse {
    code: string
    errors: Error[]
}

export interface Error {
    expected: Expected
    where: string
}

export interface Expected { }
