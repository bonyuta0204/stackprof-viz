# frozen_string_literal: true

require 'sinatra'
require 'sinatra/reloader' if development?
require_relative 'manifest'

module StackProf
  module Viz
    # Sinatra server
    class Server < Sinatra::Application
      configure :development do
        register Sinatra::Reloader
        set :public_folder, "#{settings.root}/../../../dist"
      end

      configure :production do
        set :show_exceptions, false
        set :public_folder, "#{settings.root}/../../../dist"
      end

      get '/' do
        @manifest = Manifest.new.manifest
        erb :index
      end
    end
  end
end
