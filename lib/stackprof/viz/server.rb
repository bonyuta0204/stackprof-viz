require 'sinatra'
require 'sinatra/reloader' if development?

module StackProf
  module Viz
    class Server < Sinatra::Application

      configure :development do
        register Sinatra::Reloader
      end

      configure :production do
        set :show_exceptions, false
      end


        get '/' do
          "Hello World"

        end
    end
  end
end
