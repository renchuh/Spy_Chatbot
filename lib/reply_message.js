
const line = require('@line/bot-sdk');

// enter message by yourself
const replyMessage = async (events, config) => {
    const client = new line.Client(config);
    // const echo = { type: 'text', text: events.message.text };
    // client.replyMessage(events.replyToken, echo);
    // print replytoken & message
    console.log(`userId = ${events.source.userId}`);

    // print reply token
    let replyToken = events.replyToken
    console.log(`replyToken = ${replyToken}`);

    // 接收到的message
    
    let message = events.message.text;
    console.log(`message : ${message}`);

    if(message === "51"){
        const echo = { type: 'text', text: "學科基礎第一個提到的瑞士心理學家是？（打英文姓氏）" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "6"){
        const echo = { type: 'text', text: "請問清大統編是多少？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "43"){
        const echo = { type: 'text', text: "請填上介系詞，順序與答案要同時對。I am a master student (1) the institute (2) Learning Sciences and Technologies (3) National Tsing Hua University." };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "80"){
        const echo = { type: 'text', text: "請問學科所的前身是什麼？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "59"){
        const echo = { type: 'text', text: "請問第一集大話有梗訪談來賓是誰？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "7"){
        const echo = { type: 'text', text: "本學期第一場Learning Hub講座的兩位來賓學長是？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "30"){
        const echo = { type: 'text', text: "請問學科基礎第一個提到的蘇聯心理學家是？（答英文姓氏）" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "129"){
        const echo = { type: 'text', text: "請問407吉祥動物是什麼動物？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "18"){
        const echo = { type: 'text', text: "請問407白板上有幾個裸男？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "24"){
        const echo = { type: 'text', text: "請問學科所的杯麵(bigman）娃娃在哪邊？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "15"){
        const echo = { type: 'text', text: "x=c(1,20,30,55,66) length(x) 輸出結果是什麼?" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "12"){
        const echo = { type: 'text', text: "設計思考第一步驟是什麼?" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "101"){
        const echo = { type: 'text', text: "請回答清華大學校歌的第一句是什麼?" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "521"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/n6sKsde.png",
        previewImageUrl: "https://i.imgur.com/n6sKsde.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "8"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/DBlSfi0.png",
        previewImageUrl: "https://i.imgur.com/DBlSfi0.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "20"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/EKr3pqx.png",
        previewImageUrl: "https://i.imgur.com/EKr3pqx.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "26"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/uwLjeLz.png",
        previewImageUrl: "https://i.imgur.com/uwLjeLz.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "40"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/ZaCMLFE.png",
        previewImageUrl: "https://i.imgur.com/ZaCMLFE.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "23"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/59sFHcE.png",
        previewImageUrl: "https://i.imgur.com/59sFHcE.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "612"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/2YdA88h.png",
        previewImageUrl: "https://i.imgur.com/2YdA88h.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "758"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/DGlgMVh.png",
        previewImageUrl: "https://i.imgur.com/DGlgMVh.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "2023"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/IWm2LxF.png",
        previewImageUrl: "https://i.imgur.com/IWm2LxF.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "27"){
        const echo = { type: "image",
        originalContentUrl: "https://i.imgur.com/ZjJDSMn.png",
        previewImageUrl: "https://i.imgur.com/ZjJDSMn.png" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "111"){
        const echo = { type: 'text', text: "1102 書報講座 UX三刀流講者是誰（寫人名） ？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "2022"){
        const echo = { type: 'text', text: "1111 書報講座 有關學習家的講者是誰（寫人名）？ " };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "3"){
        const echo = { type: 'text', text: "情境式學習提出者是誰？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "112"){
        const echo = { type: 'text', text: "頭戴式VR的形式被形容成哪一種的台灣的民俗儀式？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "57"){
        const echo = { type: 'text', text: "請問學科所有多少專任老師？" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "1955"){
        const echo = { type: 'text', text: "請聽完音樂後，回答被翻唱成哪首歌(中文歌名)？ 機密請點擊: https://whyp.it/tracks/60739/aq1?token=AyBC6" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "25"){
        const echo = { type: 'text', text: "請聽完音樂後，回答被翻唱成哪首歌(中文歌名)？ 機密請點擊: https://whyp.it/tracks/60741/aq2?token=kV9Vo" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "35049"){
        const echo = { type: 'text', text: "請聽完音樂後，回答被翻唱成哪首歌(中文歌名)？ 機密請點擊: https://whyp.it/tracks/60742/aq4?token=8htd7" };
        client.replyMessage(events.replyToken, echo);
    } else if(message === "27"){
        const echo = { type: 'text', text: "請聽完音樂後，這是哪一首歌(歌名)？ 機密請點擊: https://whyp.it/tracks/60743/aq3?token=IjYJH" };
        client.replyMessage(events.replyToken, echo);
    } else{
        const echo = { "type": "sticker",
        "packageId": "8522",
        "stickerId": "16581287" };
        client.replyMessage(events.replyToken, echo);
        console.log('沒有這個情報!');   
    }
    
    // return client.replyMessage(events.replyToken, {
    //     type: 'text',
    //     text: '間諜機密如下:'
    // });
    
};


module.exports = {
    replyMessage: replyMessage,
}