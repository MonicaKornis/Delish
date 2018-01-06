# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Recipe.destroy_all

User.create!({email: 'MonicaKornis@gmail.com', password: 'password123'})

30.times do
  User.create!(email: (Faker::Name.name).split(' ').join('') + "@gmail.com", password: 'password123', name: Faker::Name.name )
end

30.times do
  recipe = Recipe.new(title: Faker::Food.dish,
                description: "A fragrant dish seasoned with butter, sage, and garlic",
                author_id: User.find_by(email: 'MonicaKornis@gmail.com').id,
                cooking_time: rand(32..59),
                ingredients: [Faker::Food.ingredient,Faker::Food.ingredient,Faker::Food.spice])
                file=File.open('./app/assets/images/#{}')
                recipe.image = file
                recipe.save!
end

(1..30).each do |num|
 "#{}"
end
