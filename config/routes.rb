Rails.application.routes.draw do
  root 'pages#home'

  # Маршрут для обслуживания статических ресурсов
  get '/assets/*path', to: 'action_dispatch/static#serve'
end
