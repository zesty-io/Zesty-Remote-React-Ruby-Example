Rails.application.routes.draw do

  root to: 'home#index'
  get "/menu" => "home#menu"
end
