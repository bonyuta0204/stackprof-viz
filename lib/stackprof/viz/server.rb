# frozen_string_literal: true

require 'sinatra'
require 'stackprof'
require 'sinatra/reloader' if development?
require 'sinatra/json'
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

      get '/api/dumps' do
        dumps = Dir.glob('**/*.dump').map do |path|
          {
            path: path
          }
        end

        json dumps
      end

      get '/api/dumps/*' do
        file_path = params[:splat].first
        reporter = StackProf::Report.from_file(file_path)
        json reporter.data
      end
    end
  end
end
