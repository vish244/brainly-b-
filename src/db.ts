import mongoose from "mongoose";

export interface User extends mongoose.Document {
    username: string;
    password: string;
}

export interface Tags extends mongoose.Document{
    title: string;
}

export interface Content extends mongoose.Document{
    link: string;
    type: string;
    title: string;
    tags:  mongoose.Schema.Types.ObjectId;
    userId: mongoose.Schema.Types.ObjectId
}

export interface Link extends mongoose.Document{
    hash: string;
    userId: mongoose.Schema.Types.ObjectId;
}

const userSchema = new mongoose.Schema<User>({
    username: {type: String, required: true, unique: true},
    password: {type: String, required: true}
});

const tagSchema = new mongoose.Schema<Tags>({
    title: {type: String, required: true}
});

const contentSchema = new mongoose.Schema<Content>({
    link: {type: String, required: true},
    type: {type: String, required: true , enum: ['image', 'video' , 'artical']},
    title: {type: String, required: true},
    tags: [{type: mongoose.Schema.Types.ObjectId, ref: 'Tags'}],
    userId: {
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'User', 
        required: true,
        validate: async function(value){
            const user = await UserModel.findById(value)
            if(!user){
                throw new Error('User does not exist')
            }
        }
    }
})

const linkSchema = new mongoose.Schema<Link>({
    hash: {type: String, required: true},
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true}
})

export const UserModel = mongoose.model("User", userSchema);
export const TagsModel = mongoose.model("Tags", tagSchema);
export const ContentModel = mongoose.model("Content", contentSchema);
export const LinkModel = mongoose.model("Link", linkSchema);
