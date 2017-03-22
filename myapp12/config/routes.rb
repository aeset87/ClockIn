Rails.application.routes.draw do
  namespace :api do
    namespace :v1 do
      resources :employees do
        resources :clockins
      end
    end
  end
end
