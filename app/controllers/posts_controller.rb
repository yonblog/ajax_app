class PostsController < ApplicationController
  def index
    @posts = Post.order(id: "DESC")
                  # ↑メモを降順、つまり、投稿の新しい順に表示されるように変更。
  end

  # def new
  # end

  def create
    post = Post.create(content: params[:content])
    # redirect_to action: :index
    render json:{ post: post }
           # ↑「json」は、直後に記述した（今回は「post: post」）データをJSON形式で返却することができる。
           # ※ 上記で定義した変数postの値を、postというキーとセットでJavaScriptに送信している。
  end
end
