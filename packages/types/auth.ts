interface IAuth {
  username: string;
  password: string;
  confirmPw: string;
}

export type ISignIn = Omit<IAuth, "confirmPw">;
export type ISignUp = IAuth;
