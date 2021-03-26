package com.hypech.case83_roomstepbystep;

import androidx.room.Database;
import androidx.room.RoomDatabase;

//Entry类-->Dao-->EntryRoomDatabase(单例模式)-->Repository(从EntryRoomDatabase获得Dao)-->
// 在Repository中实现异步-->AndroidViewModel通过Repository访问数据库CRUD
@Database(entities={Word.class}, version =1, exportSchema = false)
public abstract class WordDatabase extends RoomDatabase {
    public abstract WordDao getWordDao();
}