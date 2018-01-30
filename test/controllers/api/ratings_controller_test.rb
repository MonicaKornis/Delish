require 'test_helper'

class Api::RatingsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_ratings_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_ratings_destroy_url
    assert_response :success
  end

  test "should get update" do
    get api_ratings_update_url
    assert_response :success
  end

end
