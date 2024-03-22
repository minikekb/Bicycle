Rails.application.routes.draw do
  root 'pages#home'

  if Rails.env.production?
    get '/assets/*path', to: 'action_dispatch/static#serve'
  end
end
