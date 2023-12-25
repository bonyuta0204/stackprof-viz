# frozen_string_literal: true

module StackProf
  module Viz
    # Read and load the vite manifest file
    class Manifest
      # manifest file is located at ./dist/.vite/manifest.json
      MANIFEST_PATH = File.join(Dir.pwd, 'dist', '.vite', 'manifest.json')

      def initialize; end

      def manifest
        @manifest ||= load_manifest
      end

      private

      def load_manifest
        JSON.parse(File.read(MANIFEST_PATH))
      end
    end
  end
end
