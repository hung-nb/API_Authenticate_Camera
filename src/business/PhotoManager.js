import { FileSystem } from 'expo';
import Util from "./Util";
import _db from "../business/SQLiteManager";

export default class PhotoManager {
    
    constructor() {
    }

    static async savePhoto(photo) {

        // Save actual file
        let filePath = FileSystem.documentDirectory 
            + Util.ConstantHelper.photo_save_folder + '/' + Util.TimeHelper.getCurrentTimeStamp() + '.jpg'

        await FileSystem.moveAsync({
            from: photo.uri,
            to: filePath,
        });

        // Write DB
        await _db.insertImageRecord(filePath);

        return filePath;
    }

}