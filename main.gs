function doPost(e) {
  var VerificationToken = e.parameter.token;
  // AppのVerification Tokenを入れる。複数ワークスペースに登録する場合は判定条件を増やす。
  if (VerificationToken != '********') {
    throw new Error('Invalid token');
  }

  var response_japanese = { text: '*/remind コマンドの基本フォーマット*\n\
```\n\
/remind [どの部屋で] [誰に] [メッセージ本文（必須）] [いつ（必須）]\n\
```\n\
`※[メッセージ本文]と[いつ]は順番を入れ替えても大丈夫です。`\n\
*[どの部屋で(任意)]*\n\
```\n\
#チャンネル名\n\
```\n\
*[誰に(任意)]*\n\
```\n\
@誰か or me(自分のみに通知したい場合)\n\
```\n\
`※メンショングループは指定できません。`\n\
*[メッセージ本文(必須)]*\n\
```\n\
メッセージ本文を書きます。\n\
```\n\
*[いつ(必須)]*\n\
```\n\
時刻、日付、何分後、曜日指定などを選んだり組み合わせて指定できます。\n\
・時刻指定　　　　  … at hh:mm （例：at 10:00）\n\
・日付指定　　　　　… on month day（例：on January 1）\n\
・時刻・日付指定　   … （例：on January 1 at 10:00）\n\
・ｎ（分〜ヵ月）後指定　… in number [minutes|hours|days|months] （例：in 3 minutes）\n\
・曜日指定　　　　　 … every [weekday|monday|tuesday|wednesday|thursday|friday|saturday|sunday]（例：every monday）\n\
・複数曜日指定　　　 … （例：evry monday, and friday）\n\
```\n\
*設定例*\n\
```\n\
/remind me 明日インフラ神様にランチ代返す\n\
/remind #テスト部屋 週次定例始めます every monday at 11:00\n\
/remind #テスト部屋 @here 月初定例始めます on January 1 at 11:00\n\
```\n\
' };

  return ContentService.createTextOutput(JSON.stringify(response_japanese)).setMimeType(ContentService.MimeType.JSON);
}
