Rails.application.routes.draw do
  root to:'posts#index'
  # get 'posts/new', to: 'posts#new'
  # ↑非同期通信のAjaxを使うため、new.html.erbへは行かないので削除する。
  post 'posts', to: 'posts#create'

end
