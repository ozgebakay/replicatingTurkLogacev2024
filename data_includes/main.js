//to do: 

PennController.ResetPrefix()
DebugOff();
SetCounter("increase")

Sequence( "setcounter", "Setup", "Instruction", "demografik", "Instruction2",  "Practice", "break", shuffle("critical", "filler"), "end", SendResults(), "end2" );
//"setcounter",

var progressBarText = "Ne kadar kaldı?";

SetCounter("counter", "inc", 1)

Header(
    defaultText
        .css({"font-family": "Helvetica, sans-serif", "font-size": "20px"})
        .center()
        )


newTrial("Setup",
    newFunction("generatePartID", function () {
		let alphanum = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz";
		let code = "";
		let randChar
		for (i = 0; i < 15; i++) {
			randChar = alphanum.charAt(Math.floor(Math.random()*alphanum.length));
			code += randChar;
		}
		return code;
	})	
	,
	// Basically create a 10 digit code that gives 1 as remainder when divided by 11.
	newFunction("generateCode2", function () {
		let alphanum = "0123456789";
		let code2 = "";
		let randChar
        while (true) {
            for (i = 0; i < 10; i++) {
	    	    randChar = alphanum.charAt(Math.floor(Math.random()*alphanum.length));
		        code2 += randChar;
    	    }
        if (code2.length > 10) {code2 = "";}
       
        if (code2% 11 ===1) break;}
        
    	return code2;   
 
	})
	,
	newVar("Part_ID")
	    .global()
		.set(getFunction("generatePartID"))
    	.log()
    ,    
    newVar("PasswordID1")
        .global()
        .set(getFunction("generateCode2"))
        .log()
    ,
    newVar("Order")
        .global()
        .set(0)
    ,
    newVar("miss_count")
        .global()
        .set(0)
)

newTrial("Instruction",

    newText(`<p>Merhaba! Size internet ortamında yürütülen bir psikodilbilim deneyi için ulaşıyoruz. Bu deney XXX tarafından yürütülüyor. </p>
            <p>Bu deneyde Türkçe konuşanların karmaşık Türkçe cümleleri nasıl anlamlandırdığı hakkında fikir edinmeyi amaçlıyoruz. </p>
            <p>Deneyde cümleler ekrana kelime kelime yansıyacak ve cümle bittikten sonra 3 saniye içinde cümlenin sizin için 'kabul edilebilir' bir cümle olup olmadığına karar vermeniz. Eğer gördüğünüz cümle sizin günlük hayatta kullanabileceğiniz ya da etrafınızdakilerden duyabileceğiniz bir cümle ise 'kabul edilebilir' olarak işaretleyebilirsiniz. </p>
            <p>Bu kararı vermek için klavyenizdeki 'F' ve 'J' tuşlarını kullanıyor olacaksınız. Eğer okuduğunuz sizce kabul edilebilir bir Türkçe cümleyse klavyenizdeki 'F' tuşuna, değilse 'J' tuşuna basın. </p>
            <p>Lütfen cümlelere <strong>mümkün olduğu kadar hızlı ve ilk düşündüğünüz şekliyle</strong> cevap verin. 3 saniye içinde cevap vermemeniz durumunda ekrandaki soru kaybolacak ve sıradaki cümle ekranda belirmeye başlayacaktır. <p>
            <p>Deney sırasında sadece bu tuşlara basmanız gerekeceği için deney başladıktan sonra sol işaret parmağınızı 'F', sağ işaret parmağınızı 'J' tuşunun üzerinde tutmanız işinizi çok kolaylaştıracaktır.</p>
            <p>Deneyi BİLGİSAYARDAN, ARA VERMEDEN ve SESSİZ bir ortamda tamamlayın. </p>
            <p>Deneye katılmayı kabul ediyorsanız boşluk tuşuna basın.</p>`)
        //.left()
        .print()
    ,

    newKey(" ").wait()
    ,
    clear()
    ,
    newTimer(500)
        .start()
        .wait()
)

newTrial("demografik",
    fullscreen(),
    newTextInput("Age", "")
        .before(newText("Yaşınız:").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("Age").global().set(getTextInput("Age"))
    ,
    newText("Space","</p> </p>")
        .print()
    ,
    newTextInput("Gender", "")
        .before(newText("Cinsiyetiniz:").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("Gender").global().set(getTextInput("Gender"))
    ,
    newText("Space","</p> </p>")
        .print()
    ,
    newTextInput("NativeLanguage", "")
        .before(newText("Anadiliniz ya da anadilleriniz:").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("NativeLanguage").global().set(getTextInput("NativeLanguage"))
    ,
    newText("Space","</p> </p>")
        .print()
    ,
    newTextInput("DominantLanguage", "")
        .before(newText("Birden fazla anadiliniz varsa kendinizi daha rahat ifade ettiğiniz dil:").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("DominantLanguage").global().set(getTextInput("DominantLanguage"))
    ,
    newText("Space","</p> </p>")
            .print()
    ,
    newTextInput("ForeignLanguage", "")
        .before(newText("Konuştuğunuz diğer diller:").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("ForeignLanguage").global().set(getTextInput("ForeignLanguage"))
    ,
    newText("Space","</p> </p>")
            .print()
    ,
    newTextInput("School", "")
        .before(newText("En son mezun olduğunuz eğitim kurumu (lise , üniversite, üniversite):").css("font-size","16px").css("font-family", "Helvetica, sans-serif"))
        .css("font-size","16px")
        .log()
        .lines(1)
        .print()
    ,
    newVar("School").global().set(getTextInput("School"))
    ,
    newText("Space","</p> </p>")
        .print()
    ,
    newText("Bilgiler için teşekkürler! Deneye başlamadan önce birkaç alıştırma cümlesi göreceksiniz. Alıştırma cümlelerine geçmek için aşağıdaki butona tıklayın.")
        .css("font-size","16px")
        .css("font-family", "Helvetica, sans-serif")
        .print()
    ,
    newText("Space","</p> </p>")
        .print()
    ,
    newButton("Devam")
        .css("font-size","16px")
        .css("font-family", "Helvetica, sans-serif")
        .print()
        .wait()
)

.log("Age", getVar("Age"))
.log("Gender", getVar("Age"))
.log("NativeLanguage", getVar("NativeLanguage"))
.log("DominantLanguage", getVar("DominantLanguage"))
.log("ForeignLanguage", getVar("ForeignLanguage"))
.log("School", getVar("School"))


newTrial("Instruction2",
    newText("<p> Çalışmaya alışmanız amacıyla ilk olarak 3 adet alıştırma cümlesi göreceksiniz. Bu alıştırma cümlelerine verdiğiniz cevapların arkasından sizden beklenen cevaplar ekranda belirecektir. <p>")
        .left()
        .print()
    ,
    newText("<p> Hazırsanız alıştırmaya başlamak için “devam et” butonuna tıklayınız. <p>")
        //.center()
        .left()
        .print()
    ,
    newButton("Devam et")
        .center()
        .settings.size(168, 24)
        .print()
        .wait()
    ,
    clear()
    ,
    newTimer(500)
        .start()
        .wait()
    )

Template("practice.csv", row =>
    newTrial("Practice",
        newVar("Correct_Resp")
            .global()
            .set(row.Correct_Resp)
        ,
        newText("Correct_Feedback", row.Correct_Feedback)
            // .css("font-size","25px")
            // .css("font-family", "Helvetica, sans-serif")
        ,
        newText("Incorrect_Feedback", row.Incorrect_Feedback)
            // .css("font-size","25px")
            // .css("font-family", "Helvetica, sans-serif")
        ,
        newVar("Response")
            .global()
            .set("No_Response")
        ,
        newText("fixation", "+")
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
        ,
        newTimer("wait", 500)
            .start()
            .wait()
        ,
        // getText("fixation")
        //     .remove()
        clear()
        ,
        newController("DashedSentence", {
            s: row.Sentence,
            mode: "speeded acceptability",
            display: "in place",
            wordTime: 500})
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
            .wait()
            .remove()
        ,
        newVar("RT").global().set( v => Date.now() ) //Get the current time (needed for computing RT)
        ,
        clear() // to clear what was on the screen before
        ,
        newTimer("wait2", 500)
            .start()
            .wait()
        ,
        newText("Cümle dilbilgisel olarak doğruysa 'F', yanlışsa 'J' tuşuna basın.")
            // .css("font-size","24px")
            // .css("font-family", "Helvetica, sans-serif")
            .print()
            .center()
        // ,
        // newTimer("time limit", 3000)
        //     .log()
        //     .start()
        ,
        newKey("response", "FJ")
            .log("first") //Don't forget to log responses
            // .callback( getTimer("time limit").stop())
            .wait()
        // ,
        // getTimer("time limit")
        //     .wait()
        ,
        getVar("RT").set( v => Date.now() - v ) //Get the current time again after the botton press (needed for computing RT)
        ,
        getKey("response").test.pressed("F")
    		.success(
    		getVar("Response")
    		    .set("Yes")
                    )
    	,
        getKey("response").test.pressed("J")
    		.success(
    		getVar("Response")
    		    .set("No")
                    )
        ,
        getVar("Correct_Resp").test.is("No")
    		.success(
    		getKey("response").test.pressed("J")
    		    .success(   newText(" <br><br><br> ").print()
    		                ,
    		                getText("Correct_Feedback").print()
    		                ,
    		                newKey("continue", " ").log().wait()
    		    )
    		    .failure(   newText(" <br><br><br> ").print()
    		                ,
    		                getText("Incorrect_Feedback").print()
    		                ,
    		                newKey("continue", " ").log().wait()
    		    ))
    		.failure(   getKey("response").test.pressed("F")
    		    .success(   newText(" <br><br><br> ").print()
    		                ,
    		                getText("Correct_Feedback").print()
    		                ,
    		                newKey("continue", " ").log().wait()
    		    )
    		    .failure(   newText(" <br><br><br> ").print()
    		                ,
    		                getText("Incorrect_Feedback").print()
    		                ,
    		                newKey("continue", " ").log().wait()
    		            )
    		  )
        )
        .log( "Part_ID", getVar("Part_ID"))
        .log( "Item_Set", row.Item_Set)
        .log( "Order", row.Item_Set)
        .log( "Item_Type", row.Item_Type)
        .log( "Correct_Resp", row.Correct_Resp)
        .log( "Response", getVar("Response"))
        .log( "ReactionTime" , getVar("RT") )
        .log( "Sentence", row.Sentence) // make sure to log information you need to analyze your data

)
        
newTrial("break",
    newText("<p> Alıştırma cümleleri bitti. <p>")
        .left()
        .print()
    ,
    newText(`<p> Hatırlatma: Okuduğunuz cümle dilbilgilsel açıdan doğruysa 'F' yanlışsa 'J' tuşuna basınız. <br> <br>
            Lütfen parmaklarınızı çalışma boyunca 'F' ve 'J' tuşlarından ayırmayınız. Çalışmaya başlamak için 'Devam' butonuna tıklayın.<p>`)
        //.center()
        .left()
        .print()
    ,
    newButton("Devam")
        .center()
        .settings.size(168, 24)
        .print()
        .wait()
)

Template("filler.csv", row =>
    newTrial("filler",
        getVar("Order")
            .global()
            .set(v => v + 1)
        ,
        getVar("tooLate")
            .global()
            .set(true)
        ,
        newVar("Response")
            .global()
            .set("No_Response")
        ,
        newText("fixation", "+")
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
        ,
        newTimer("wait", 500)
            .start()
            .wait()
        ,
        // getText("fixation")
        //     .remove()
       clear()
        ,
        newController("DashedSentence", {
            s: row.Sentence,
            mode: "speeded acceptability",
            display: "in place",
            wordTime: 500})
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
            .wait()
            .remove()
        ,
        newVar("RT").global().set( v => Date.now() ) //Get the current time (needed for computing RT)
        ,
        clear() // to clear what was on the screen before
        ,
        newTimer("wait2", 500)
            .start()
            .wait()
        ,
        newText("Cümle dilbilgisel olarak doğruysa 'F', yanlışsa 'J' tuşuna basın.")
            // .css("font-size","22px")
            // .css("font-family", "Helvetica, sans-serif")
            .print()
            .center()
        ,
        newTimer("time limit", 3000)
            .log()
            .start()
        ,
        newKey("response", "FJ")
            .log("first") //Don't forget to log responses
            .callback( getTimer("time limit").stop())
        ,
        getTimer("time limit")
            .wait()
        ,
        getVar("RT").set( v => Date.now() - v ) //Get the current time again after the botton press (needed for computing RT)
        ,
        getKey("response").test.pressed()
            .success()
            .failure( getVar("miss_count").set(v=> v+1 ))
        ,
        getKey("response").test.pressed("F")
    		.success(
    		getVar("Response")
    		    .set("Yes")
                    )
    	,
        getKey("response").test.pressed("J")
    		.success(
    		getVar("Response")
    		    .set("No")
                    )
    	,
        getVar("miss_count").test.is(v=> v>0) // adjust this to how many 'misses' you allow before warning appears
            .success(   clear(),
                        newText("Lütfen daha hızlı yanıt vermeye çalışınız. Devam etmek için 'boşluk' tuşuna basınız.")
                            .center()
                            // .css({"font-size": "25px"})
                            .print()
                        ,
                        newKey("", " ").wait()
                        ,
                        getVar("miss_count").set(0))
            .failure()
        )
        .log( "Part_ID", getVar("Part_ID"))
        .log( "Item_Set", row.Item_set)
        .log( "Order", getVar("Order"))
        .log( "NP1_number", row.NP1_number)
        .log( "Verb_number", row.Verb_number)
        .log( "Correct_Resp", row.Correct_Resp)
        .log( "Response", getVar("Response"))
        .log( "ReactionTime" , getVar("RT") )
        .log( "Group", row.Group)
        .log( "Sentence", row.Sentence) // make sure to log information you need to analyze your data
)


Template("stimuli.csv", row =>
    newTrial("critical",
        getVar("Order")
            .global()
            .set(v => v + 1)
        ,
        getVar("tooLate")
            .global()
            .set(true)
        ,
        newVar("Response")
            .global()
            .set("No_Response")
        ,
        newText("fixation", "+")
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
        ,
        newTimer("wait", 500)
            .start()
            .wait()
        ,
        // getText("fixation")
        //     .remove()
       clear()
        ,
        newController("DashedSentence", {
            s: row.Sentence,
            mode: "speeded acceptability",
            display: "in place",
            wordTime: 500})
            .css("font-size","25px")
            .css("font-family", "Helvetica, sans-serif")
            .center()
            .print("center at 50%", "center at 25%")
            .wait()
            .remove()
        ,
        newVar("RT").global().set( v => Date.now() ) //Get the current time (needed for computing RT)
        ,
        clear() // to clear what was on the screen before
        ,
        newTimer("wait2", 500)
            .start()
            .wait()
        ,
        newText("Cümle dilbilgisel olarak doğruysa 'F', yanlışsa 'J' tuşuna basın.")
            // .css("font-size","22px")
            // .css("font-family", "Helvetica, sans-serif")
            .print()
            .center()
        ,
        newTimer("time limit", 3000)
            .log()
            .start()
        ,
        newKey("response", "FJ")
            .log("first") //Don't forget to log responses
            .callback( getTimer("time limit").stop())
        ,
        getTimer("time limit")
            .wait()
        ,
        getVar("RT").set( v => Date.now() - v ) //Get the current time again after the botton press (needed for computing RT)
        ,
        getKey("response").test.pressed()
            .success()
            .failure( getVar("miss_count").set(v=> v+1 ))
        ,
        getKey("response").test.pressed("F")
    		.success(
    		getVar("Response")
    		    .set("Yes")
                    )
    	,
        getKey("response").test.pressed("J")
    		.success(
    		getVar("Response")
    		    .set("No")
                    )
    	,
        getVar("miss_count").test.is(v=> v>0) // adjust this to how many 'misses' you allow before warning appears
            .success(   clear(),
                        newText("Lütfen daha hızlı yanıt vermeye çalışınız. Devam etmek için 'boşluk' tuşuna basınız.")
                            .center()
                            // .css({"font-size": "25px"})
                            .print()
                        ,
                        newKey("", " ").wait()
                        ,
                        getVar("miss_count").set(0))
            .failure()
        )
        .log( "Part_ID", getVar("Part_ID"))
        .log( "Item_Set", row.Item_Set)
        .log( "Order", getVar("Order"))
        .log( "NP1_number", row.NP1_number)
        .log( "Verb_number", row.Verb_number)
        .log( "Correct_Resp", row.Correct_Resp)
        .log( "Response", getVar("Response"))
        .log( "ReactionTime" , getVar("RT") )
        .log( "Group", row.Group)
        .log( "Sentence", row.Sentence) // make sure to log information you need to analyze your data

)


newTrial("end",

    newText(`<br> Çalışma neredeyse tamamlandı! Çalışmamız ile ilgili herhangi bir sorunuz ya da yorumunuz var mı?
    Sizce çalışmanın amacı ne olabilir? Yanıtınızı aşağıdaki metin kutusuna giriniz (isteğe bağlı).
    <br><br>`)
	    .left()
	    .print()
	,
	newTextInput("comments")
	    .log()
	    .lines(0)
	    .size(400, 100)
	    .center()
        .print()
//	    .print("middle at 46vw", "middle at 70vh")
	,
    newButton("Devam et")
        .print()
        .wait()
    
)

newTrial("end2",
    newText("xx", "<strong>Çalışmaya katılım onay kodunuz: <strong>\t")
   ,
    newText("<p> Çalışma tamamlandı. Katılımınız için teşekkür ederiz! Çalışma katılım onay kodunuzu aşağıda görebilirsiniz.<p>")
        .print()
    ,
    newText("<p> Lütfen aşağıdaki çalışma katılım onay kodunuzu not ediniz. Katılımınızın karşılığı olarak hediye çeki alabilmeniz için bu kodu tarafımıza bildirmeniz gerekmektedir. </p>")
        .print()
    ,
    newText("")
        .before(getText("xx"))
        .text(getVar("PasswordID1"))
        .left()
        .print()
    ,
    
    newText("<p>Bizimle iletişime geçmek için aşağıdaki e-posta adresine e-posta gönderebilirsiniz.<p>")
        .print()
    ,
    newText("<p>Özge Bakay (obakay@umass.edu)<p>")
        .left()
        .print()
    ,
    newText("<p>Artık bu pencereyi kapatabilirsiniz. (Çalışma katılım kodunuzu kaydetmeyi unutmayınız!) <p>")
        .left()
        .print()
    
    ,
    // Stay on this page forever
    newButton().wait()
)
