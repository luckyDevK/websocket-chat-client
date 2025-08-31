import { Document, model, Schema } from "mongoose";

import { ISignIn } from "../../../packages/types/auth";

type IUserDoc = ISignIn & Document;

const userSchema = new Schema<IUserDoc>({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = model<ISignIn>("User", userSchema);

export default User;
