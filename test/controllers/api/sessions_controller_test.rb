require 'test_helper'

class Api::SessionsControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_session_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_session_destroy_url
    assert_response :success
  end

  test "should get show" do
    get api_session_show_url
    assert_response :success
  end

end
