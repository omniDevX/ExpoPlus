package com.hypech.case83_roomstepbystep;

import android.app.Application;

import androidx.annotation.NonNull;
import androidx.lifecycle.AndroidViewModel;
import androidx.lifecycle.LiveData;

import com.hypech.case83_roomstepbystep.async.DeleteAllAsyncTask;
import com.hypech.case83_roomstepbystep.async.DeleteAsynTask;
import com.hypech.case83_roomstepbystep.async.InsertAsyncTask;
import com.hypech.case83_roomstepbystep.async.UpdateAsyncTask;

import java.util.List;
/* ViewModel 的职责是管理界面的数据，数据的获取不应该属于ViewModel，
 * 如插入、修改数据等。我们应该创建仓库类，来实现对数据的直接操作。
 */
public class WordViewModel extends AndroidViewModel {
    private WordDao wordDao;
    private LiveData<List<Word>> allWordsLive;
    public WordViewModel(@NonNull Application application){
        super(application);
        WordDatabase wordDatabase = WordDatabase.getDatabase(application);
        wordDao = wordDatabase.getWordDao();
        allWordsLive = wordDao.getAllWordsLive();
    }

    public LiveData<List<Word>> getAllWordsLive(){
        return allWordsLive;
    }

    void insertWords(Word... words){
        new InsertAsyncTask(wordDao).execute(words);
    }

    void updatWords(Word... words){
        new UpdateAsyncTask(wordDao).execute(words);
    }

    void deleteAllWords(Word... words){
        new DeleteAllAsyncTask(wordDao).execute();
    }

    void deleteWords(Word... words){
        new DeleteAsynTask(wordDao).execute(words);
    }

}
