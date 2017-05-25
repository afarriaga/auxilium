require 'sinatra'
require 'sinatra/reloader'

get '/hi' do
  "Hello World!"
end

get '/about' do
  erb :about
end
