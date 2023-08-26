export type User= {
    id: string,
    name: string,
    email: string,
    password?: string,
    role: string,
    created_at: Date,
    updated_at: Date,
    provider ?: string,
    provider_id ?: string,

}

export type TaskDataField={
    title: string,
    content: string,
    authorId: null,
}