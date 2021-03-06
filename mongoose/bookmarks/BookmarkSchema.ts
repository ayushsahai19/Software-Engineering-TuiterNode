/**
 * @file Implements mongoose schema to CRUD
 * documents in the bookmark collection
 */
import mongoose, {Schema} from "mongoose";
import Bookmark from "../../models/bookmarks/Bookmark";

const BookmarkSchema = new mongoose.Schema<Bookmark>({
    bookmarkedBy: {type: Schema.Types.ObjectId, ref:"UserModel"},
    tuit: {type: Schema.Types.ObjectId, ref:"TuitModel"}
}, {collection: "bookmarks"});
export default BookmarkSchema;