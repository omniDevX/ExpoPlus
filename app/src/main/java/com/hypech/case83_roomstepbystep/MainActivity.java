package com.hypech.case83_roomstepbystep;

import androidx.appcompat.app.AppCompatActivity;
import androidx.lifecycle.LiveData;
import androidx.lifecycle.Observer;
import androidx.room.Room;

import android.os.Bundle;
import android.util.Log;
import android.view.View;
import android.widget.Button;
import android.widget.TextView;

import java.util.List;

public class MainActivity extends AppCompatActivity {

    WordDatabase wordDatabase;
    WordDao wordDao;
    LiveData<List<Word>> allWordsLive;

    Button buttonInsert, buttonUpdate;
    TextView textView;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        setContentView(R.layout.activity_main);

        wordDatabase = Room.databaseBuilder(this, WordDatabase.class, "word_database")
                .allowMainThreadQueries()       //in first step, we allow Main Thread update
                .build();
        wordDao = wordDatabase.getWordDao();
        allWordsLive = wordDao.getAllWordsLive();

        buttonInsert = findViewById(R.id.buttonInsert);
        buttonUpdate = findViewById(R.id.buttonUpdate);
        textView = findViewById(R.id.textViewHW);
        allWordsLive.observe(this, new Observer<List<Word>>() {
            @Override
            public void onChanged(List<Word> words) {
                StringBuilder text = new StringBuilder();
                for (int i = 0; i < words.size(); i++){
                    Word word = words.get(i);
                    text.append(word.getId()).append("! ").append(word.getWord()).append("= ").append(word.getChinesemeaning());
                }
                textView.setText(text.toString());
            }
        });

        buttonInsert.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Word word1 = new Word("Hello","你好");
                Word word2 = new Word("World","世界");
                wordDao.insertWords(word1, word2);
//                updateView();
            }
        });

        buttonUpdate.setOnClickListener(new View.OnClickListener(){
            @Override
            public void onClick(View v){
                Word word = new Word("Hi","你好啊");
                word.setId(2);
                wordDao.updateWords(word);
//                updateView();
            }
        });
    }
/*
    void updateView(){
        List<Word> list = wordDao.getAllWords();
        Log.e("text:  ", String.valueOf(list.size()));
        String text = "";
        for(int i = 0; i < list.size(); i++){
            Word word = list.get(i);
            text += word.getId() +":"+word.getWord()+"="+word.getChinesemeaning()+"\n";
            Log.e("text:  ", text);
        }
        Log.e("text2:  ", text);
        textView.setText(text);
    }*/
}