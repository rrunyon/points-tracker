Rails.application.routes.draw do
  root 'games#new'

  get 'pitch', to: 'games#pitch'
  get 'fortyfives', to: 'games#fortyfives'
end
