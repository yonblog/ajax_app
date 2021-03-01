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
  });
}

window.addEventListener('load', post);
// ↑※このwindowは省略可。