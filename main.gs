function doPost(e) {
  var VerificationToken = e.parameter.token;
  // AppのVerification Tokenを入れる。複数ワークスペースに登録する場合は判定条件を増やす。
  if (VerificationToken != 'XXXXXXXXXXXXXXXXXXXX') {
    throw new Error('Invalid token');
  }

  var response_english = { text: '*Basic format*\n\
```\n\
/remind [who] [message] [when]\n\
```\n\
*[who]*\n\
```\n\
@someone or #channnel or me\n\
* A mention group cannot be specified.\n\
```\n\
*[message]*\n\
```\n\
message text.\n\
Line breaks, code blocks, and other formats can be used.\n\
```\n\
*[when]*\n\
```\n\
at hh:mm | on month day | in number [minutes|hours|days|months] | every [weekday|monday|tuesday|wednesday|thursday|friday|saturday|sunday]\n\
```\n\
*examples*\n\
```\n\
* Notify every weekday at 10:15.\n\
=> /remind @here It is morning meeting time. every weekday at 10:15\n\
* Notify on December 18th.\n\
=> /remind me Today is the closing date for attendance. on December 1\n\
* Notify after 3 minutes.\n\
=> /remind me Cup ramen is ready. in 3 minutes\n\
* Regular execution. You can choose weekdays and days of the week.\n\
=> /remind me Today is a regular leaving day. every Monday, Wednesday, and Friday\n\
* Specify the date and time.\n\
=> /remind me  on December 18 at 00:00\n\
```\n\
' };

  var response_japanese = { text: '*/remind コマンドの基本フォーマット*\n\
```\n\
/remind [誰に] [メッセージ本文] [いつ]\n\
```\n\
`※[メッセージ本文]と[いつ]は順番を入れ替えても大丈夫です。`\n\
*[誰に]*\n\
```\n\
@誰か or #チャンネル名 or me(自分のみ)\n\
```\n\
`※メンショングループは指定できません。`\n\
*[メッセージ本文]*\n\
```\n\
メッセージ本文を書きます。\n\
```\n\
`※改行やコードブロックなど、様々なフォーマットが使用できます。`\n\
*[いつ]*\n\
```\n\
以下の通り、通知するタイミングで設定の仕方が変わります。\n\
at hh:mm | on month day | in number [minutes|hours|days|months] | every [weekday|monday|tuesday|wednesday|thursday|friday|saturday|sunday]\n\
```\n\
*設定例*\n\
```\n\
* 平日の10:15にリマインドを通知する\n\
=> /remind @here 朝会の時間です! every weekday at 10:15\n\
* 12月1日にリマインドを通知する\n\
=> /remind me 今日は勤怠の締日です。勤怠を締めましょう。 on December 1\n\
* 3分後にリマインドを通知する\n\
=> /remind me カップラーメンができました。 in 3 minutes\n\
* 複数の曜日でリマインドを定期的に通知する。\n\
=> /remind me 今日は定時退社日です。早く帰れるよう頑張りましょう。 every Monday, Wednesday, and Friday\n\
* 日付と時刻を指定してリマインドを通知する。\n\
=> /remind me あけおめ on January 1 at 00:00\n\
```\n\
' };  

  return ContentService.createTextOutput(JSON.stringify(response_japanese)).setMimeType(ContentService.MimeType.JSON);
}