//user model
export type UserModel={
    avatar: string | number | readonly string[] | undefined;
    favouriteclub: string | number | readonly string[] | undefined;
    name: string;
    username: string;
    email: string;
    password: string;
}
