import { SQLite } from 'expo';

import Util from "./Util";

export default class SQLiteManager {
    
    constructor() {
        this._db = SQLite.openDatabase(Util.ConstantHelper.db_name);
        this.createTable('images');
    }


    createTable(tableName) {
        this._db.transaction(tx => {
            tx.executeSql(
                'create table if not exists ' + tableName 
                + ' (id integer primary key not null, ' 
                + 'filePath);' 
                );
            });
    }

    static exportDbFile() {
        let filePath = Expo.FileSystem.documentDirectory + '/SQLite/' + Util.ConstantHelper.db_name;
        console.log(filePath);
    }

    static insertImageRecord(filePath) {
        
        let insertSuccess = false;

        let db = SQLite.openDatabase(Util.ConstantHelper.db_name);
        db.transaction(
            tx => {
                tx.executeSql('insert into images (filePath) ' + 'values (?)' , [filePath]);
                //tx.executeSql('insert into images (filePath) ' + 'values (?)' , [filePath]);
            },
            null,                      // error
            () => {
                insertSuccess = true
            }
        );

        return insertSuccess;
    }

}