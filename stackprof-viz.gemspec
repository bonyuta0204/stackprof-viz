require_relative 'lib/stackprof/viz/version'

Gem::Specification.new do |spec|
  spec.name          = "stackprof-viz"
  spec.version       = Stackprof::Viz::VERSION
  spec.authors       = ["Yuta Nakamura"]
  spec.email         = ["nakamurayuta0204@gmail.com"]

  spec.summary       = "Stackprof Visualizer"
  spec.description   = %q{Stackprof Visualizer}
  spec.homepage      = "https://github.com/bonyuta0204/stackprof-viz"
  spec.license       = "MIT"
  spec.required_ruby_version = Gem::Requirement.new(">= 2.3.0")

  spec.metadata["allowed_push_host"] = "TODO: Set to 'http://mygemserver.com'"

  spec.metadata["homepage_uri"] = spec.homepage
  spec.metadata["source_code_uri"] = "https://github.com/bonyuta0204/stackprof-viz"

  # Specify which files should be added to the gem when it is released.
  # The `git ls-files -z` loads the files in the RubyGem that have been added into git.
  spec.files         = Dir.chdir(File.expand_path('..', __FILE__)) do
    `git ls-files -z`.split("\x0").reject { |f| f.match(%r{^(test|spec|features)/}) }
  end
  spec.bindir        = "exe"
  spec.executables   = spec.files.grep(%r{^exe/}) { |f| File.basename(f) }
  spec.require_paths = ["lib"]

  spec.add_runtime_dependency('sinatra', '~> 2.2')
end
