# ===========================================================================
# Project:   Todos
# Copyright: ©2011 My Company, Inc.
# ===========================================================================

# Add initial buildfile information here
config :all, :required => :sproutcore
proxy "/tasks.json", :to => "localhost:3000"
proxy "/projects.json", :to => "localhost:3000"