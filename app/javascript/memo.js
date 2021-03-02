const buildHTML = (XHR) => {
  const item = XHR.response.post;
  // ↑この「post」は、postsコントローラーのcreateアクションで定義したpost変数と紐付いている。
  
  const html = `
    <div class="post">
      <div class="post-date">
        投稿日時：${item.created_at}
      </div>
      <div class="post-content">
        ${item.content}
      </div>
    </div>`;
  return html
  
}



function post() {
  const submit = document.getElementById("submit");
  submit.addEventListener("click", (e) => {
  // ↑「投稿するボタンがクリックされたらイベント発動」という意味。
                                 // ↑「e」は、イベントオブジェクトといい、イベント発生時の情報を持ったオブジェクト。今回だと、「投稿ボタンをクリックした」という情報を持ったオブジェクトとなる。
                                //  ※ eはどんな文字列を指定してもOK。慣例的にeventの頭文字eが多く用いられる。
    e.preventDefault();
      // ↑「preventDefault」は、既定のイベントを無効化するためのメソッド。既定のイベントとは、「投稿ボタンをクリックする」のようなものを指す。
    
    const form = document.getElementById("form");
        // ↑getElementByIdメソッドで取得したフォームの要素を変数formに格納している。

    const formData = new FormData(form);
                        // ↑「FormData」は、フォームに入力された値を取得できるオブジェクトのこと。
                        // new FormData(フォームの要素);のように記述することでオブジェクトを生成し、引数にフォームの要素を渡すことで、そのフォームに入力された値を取得できる。

    const XHR = new XMLHttpRequest();
                        // ↑「XMLHttpRequest」は、avaScriptを用いてサーバーとHTTP通信を行うときに利用するオブジェクト。
                        // 非同期通信を行うためにXMLHttpRequestオブジェクトを生成している。

    XHR.open("POST", "/posts", true);
      // ↑「open」は、リクエストを初期化するメソッド。※リクエストの内容を指定するためのメソッドとも理解しておいていい。
      // <第一引数> HTTPメソッドの指定・・・POST <第二引数> パスの指定・・・/posts <第三引数> 非同期通信のON/OFF・・・true

    XHR.responseType = "json";
       // ↑「responseType」は、レスポンスのデータフォーマット（＝どのような形式のデータにするか）を指定するプロパティ。
      //  ※「JSON（JavaScript Object Notation）」は、JavaScriptをもとにして構成されたデータフォーマットのこと。

    XHR.send(formData);
      // ↑「send」は、リクエストを送信するメソッド。XMLHttpRequestオブジェクトのメソッドの一種。

    XHR.onload = () => {
      // ↑「onload」は、リクエストの送信が成功したときに呼び出されるプロパティのこと。XMLHttpRequestオブジェクトのプロパティの一種。
      // console.log(XHR.response)
                        // ↑「response」は、サーバーからのレスポンスに関する情報が格納されたプロパティのこと。
                        // ※ サーバーからのレスポンスの中身を確認するために、一時的に記述。

      if (XHR.status != 200) {
        alert(`Error ${XHR.status}: ${XHR.statusText}`);
        return null
        // ↑「return null」で、JavaScriptの処理から抜け出せる。※エラーが出た時に、この下以降の処理を行わないようにするため。
      }

      const list = document.getElementById("list");
          // ↑新しいメモを挿入するための要素を取得してlist変数に格納している。
      
      const formText = document.getElementById("content")
            // ↑投稿履歴を消すために、getElementByIdでform.text_fieldの値をformTextに格納している。

        list.insertAdjacentHTML("afterend", buildHTML(XHR));
              // ↑「insertAdjacentHTML」は、HTMLをある要素の指定した箇所に挿入するメソッド。
              // HTMLを挿入したい要素に対して使うメソッドで、第一引数にHTMLを挿入したい位置、第二引数に挿入したいHTMLを記述する。

        formText.value = "";
        // ↑formTextのvalue属性にブランクを格納して、投稿履歴を消している。
    };
  });
}

window.addEventListener('load', post);
// ↑※このwindowは省略可。




