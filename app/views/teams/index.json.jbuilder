json.array!(@teams) do |team|
  json.extract! team, :id, :name, :user
  json.url team_url(team, format: :json)
end
