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
                steps: ['Working with a mixer or by hand, beat the butter and sugar together until creamy and light. Beat in the almond flour and the salt. Mix in 1 whole egg, then the white from the second egg.',
                'Mix the yolk with 1 teaspoon cold water; cover, and refrigerate until needed.',
                'Place one circle of dough on a baking sheet lined with parchment paper. Spread the filling evenly over the dough, leaving a 1-inch border bare. Press the charm into the filling.
                Moisten the border with cold water, position the second circle of dough over the filling and press around the border with your fingertips to seal well.',
                'With the point of a paring knife, etch a design into the top of the galette, taking care not to pierce the dough. Cut 6 small slits in the top as steam vents.'],
                ingredients: [Faker::Food.ingredient,Faker::Food.ingredient,Faker::Food.spice])
                file=File.open('./app/assets/images/toast.jpg')
                recipe.image = file
                recipe.save!
end
