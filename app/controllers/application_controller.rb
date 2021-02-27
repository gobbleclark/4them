class ApplicationController < ActionController::API
        include DeviseTokenAuth::Concerns::SetUserByToken

        def index
                render file: Rails.root.join('public', 'index.html')
              end
end
