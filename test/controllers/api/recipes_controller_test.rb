require 'test_helper'

class Api::RecipesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_recipes_index_url
    assert_response :success
  end

  test "should get create" do
    get api_recipes_create_url
    assert_response :success
  end

  test "should get update" do
    get api_recipes_update_url
    assert_response :success
  end

  test "should get show" do
    get api_recipes_show_url
    assert_response :success
  end

  test "should get save" do
    get api_recipes_save_url
    assert_response :success
  end

end
